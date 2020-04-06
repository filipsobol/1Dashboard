<template>
    <form
        ref="formElement"
        @submit.stop.prevent="onFormSubmit"
        class="w-full">
        <div
            v-for="component in props.components"
            :key="component.props.id"
            class="mb-6">
            <component
                :is="getComponentName(component.type)"
                v-bind="{ ...getComponentData(component) }"
                v-model="values[component.props.id]"
                :errors="errors[component.props.id]" />
        </div>

        <div
            v-if="showButtonsSection"
            :class="'form-buttons-' + buttonsPosition"
            class="form-buttons">
            <db-button
                v-if="showSubmitButton"
                :props="submitButtonProps"
                :loading="submitting"
                :aria-label="$t('Submit the form')" />

            <db-button
                v-if="showResetButton"
                :props="resetButtonProps"
                :loading="submitting"
                :aria-label="$t('Reset the form')" />
        </div>
    </form>
</template>

<script lang="ts">
    import { computed, defineComponent, reactive, ref, watch } from "@vue/composition-api";
    import { getComponentData, getComponentName } from "@framework/utils/nestedComponents";
    import { validate } from "@framework/core/Validation/Validation";
    import { ObjectWithAnyKeys } from '@framework/interfaces/core/Helpers';
    import { ButtonProps, ButtonType } from "@framework/interfaces/components/Button";
    import {
        Form,
        FormButtonPosition,
        FormEvent,
        FormSubmitEventContext,
        FormSubmitEvent
    } from "@framework/interfaces/components/Form";

    export default defineComponent({
        name: "Form",

        props: {
            props: {
                type: [Object, Function],
                required: true,
            },

            events: {
                type: Array,
                required: false,
            },
        },

        setup(_: Form, { emit }) {
            // Static
            const submitButtonProps: ButtonProps = {
                type: ButtonType.Submit,
                text: "Submit",
            };
            const resetButtonProps: ButtonProps = {
                type: ButtonType.Reset,
                text: "Reset",
            };

            // State
            const formElement = ref<HTMLElement>(null);
            const errors = ref<object>({});
            const values = reactive<object>({});
            const submitting = ref<boolean>(false);

            // Computed
            const hasErrors = computed<boolean>(() => Object.values(errors.value).flat().length > 0);
            const showSubmitButton = computed<boolean>(() => _.props?.buttons?.submit ?? true);
            const showResetButton = computed<boolean>(() => _.props?.buttons?.reset ?? true);
            const showButtonsSection = computed<boolean>(() => showSubmitButton.value || showResetButton.value);
            const buttonsPosition = computed<FormButtonPosition>(() => _.props?.buttons?.position ?? FormButtonPosition.Start);

            // Watchers
            watch(hasErrors, (value) => {
                if (!value) {
                    return;
                }

                formElement.value?.querySelector(".errors-list")?.scrollIntoView({
                    block: "center",
                })
            });

            // Methods
            function onFormSubmit(event: Event): void {
                const formData = new FormData(event.target as HTMLFormElement);

                const payload: FormSubmitEventContext = {
                    formData,
                    jsonData: formDataToJson(formData),
                };

                errors.value = getFormErrors(payload);

                if (hasErrors.value) {
                    return;
                }

                submitting.value = true;

                emit("submit", payload);

                const events: Array<Promise<void>> | undefined = _.events
                    ?.filter(({ on }: FormEvent) => on === "submit")
                    .map(({ callback }: FormSubmitEvent) => callback(payload));

                Promise
                    .all(events || [])
                    .then(() => submitting.value = false);
            }

            function formDataToJson(formData: FormData): ObjectWithAnyKeys {
                return Array
                    .from(formData.entries())
                    .reduce((
                        carry: ObjectWithAnyKeys,
                        [key, value]: [string, FormDataEntryValue]
                    ): ObjectWithAnyKeys => {
                        if(!Reflect.has(carry, key)){
                            carry[key] = value;
                            return carry;
                        }

                        if(!Array.isArray(carry[key])){
                            carry[key] = [carry[key]];
                        }

                        carry[key].push(value);

                        return carry;
                    }, {});
            }

            function getFormErrors({ jsonData }: FormSubmitEventContext): ObjectWithAnyKeys {
                const rulesEntries = _.props.components
                    .map(({ props }) => [
                        props.id,
                        validate(jsonData[props.id], props.rules || {})
                    ]);

                return Object.fromEntries(rulesEntries);
            }

            return {
                // Static
                submitButtonProps,
                resetButtonProps,

                // State
                _,
                formElement,
                errors,
                values,
                submitting,

                // Computed
                hasErrors,
                showSubmitButton,
                showResetButton,
                showButtonsSection,
                buttonsPosition,

                // Methods
                onFormSubmit,
                getComponentName,
                getComponentData,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .form-buttons {
        @apply flex;
        @apply flex-row;
        @apply mt-12;

        &-start {
            @apply justify-start;
        }

        &-center {
            @apply justify-center;
        }

        &-end {
            @apply justify-end;
        }
    }
</style>
