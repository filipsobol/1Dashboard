<template>
    <form
        ref="form"
        @submit.stop.prevent="onFormSubmit"
        class="w-full">
        <div
            v-for="(component, index) in props.components"
            :key="index"
            class="mb-6">
            <component
                :is="getComponentName(component.type)"
                v-bind="{ ...getComponentData(component) }"
                v-model="values[component.props.id]" />
        </div>

        <div
            v-if="showButtonsSection"
            :class="'form-buttons-' + buttonsPosition"
            class="form-buttons">
            <db-button
                v-if="showSubmitButton"
                :props="submitButtonProps"
                :loading="submitting"
                aria-label="Submit form" />

            <db-button
                v-if="showResetButton"
                :props="resetButtonProps"
                :loading="submitting"
                aria-label="Reset form" />
        </div>
    </form>
</template>

<script lang="ts">
    import { computed, defineComponent, reactive, ref } from "@vue/composition-api";
    import { getComponentData, getComponentName } from "@/utils/nestedComponents";
    import { ObjectWithAnyKeys } from '@/interfaces/core/Helpers';
    import { ButtonProps, ButtonType } from "@/interfaces/components/Button";
    import {
        Form,
        FormButtonPosition,
        FormEvent,
        FormSubmitEventContext,
        FormSubmitEvent
    } from "@/interfaces/components/Form";

    export default defineComponent({
        name: "Form",

        props: {
            props: {
                type: [Object, Function],
                required: true,
            },
            events: {
                type: Array,
                required: false
            }
        },

        setup(_: Partial<Form>, { emit }) {
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
            const values = reactive<object>({});
            const submitting = ref<boolean>(false);

            // Computed
            const showSubmitButton = computed<boolean>(() => _.props?.buttons?.submit ?? true);
            const showResetButton = computed<boolean>(() => _.props?.buttons?.reset ?? true);
            const showButtonsSection = computed<boolean>(() => showSubmitButton.value || showResetButton.value);
            const buttonsPosition = computed<FormButtonPosition>(() => _.props?.buttons?.position ?? FormButtonPosition.Start);

            // Methods
            function onFormSubmit(event: Event): void {
                submitting.value = true;

                const formData = new FormData(event.target as HTMLFormElement);

                const payload: FormSubmitEventContext = {
                    formData,
                    jsonData: formDataToJson(formData),
                };

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

            return {
                // Static
                submitButtonProps,
                resetButtonProps,

                // State
                _,
                values,
                submitting,

                // Computed
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
