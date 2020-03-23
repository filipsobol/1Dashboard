<template>
    <form @submit.stop.prevent="onFormSubmit">
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
    import { computed, defineComponent, reactive, ref, toRefs, } from "@vue/composition-api";
    import { useConfigProps } from "@/core/composable/useConfigProps";
    import { getComponentData, getComponentName } from "@/utils/nestedComponents";
    import { ButtonProps, ButtonType } from "@/interfaces/components/Button";
    import { FormButtonPosition, FormProps } from "@/interfaces/components/Form";

    export default defineComponent({
        name: "Form",

        props: {
            props: {
                type: [Object, Function],
                required: true,
            }
        },

        setup(_, { emit }) {
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
            const props = useConfigProps<FormProps>(_.props);
            const values = reactive<object>({});
            const submitting = ref<boolean>(false);

            // Computed
            const showSubmitButton = computed<boolean>(() => props.data?.buttons?.submit ?? true);
            const showResetButton = computed<boolean>(() => props.data?.buttons?.reset ?? true);
            const showButtonsSection = computed<boolean>(() => showSubmitButton.value || showResetButton.value);
            const buttonsPosition = computed<FormButtonPosition>(() => props.data?.buttons?.position ?? FormButtonPosition.Start);

            // Methods
            function onFormSubmit(): void {
                submitting.value = true;
                emit("submit"); // TODO: Pass form data

                // TODO: Support event from template
                // submitting.value = false;
            }

            return {
                // Static
                submitButtonProps,
                resetButtonProps,

                // State
                values,
                submitting,
                ...toRefs(props),

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
