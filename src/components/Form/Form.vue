<template>
    <form @submit.stop.prevent="onFormSubmit">
        <div
            v-for="(component, index) in props.components"
            :key="index"
            class="mb-6">
            <component
                :is="getComponentName(component.type)"
                v-bind="{ ...getComponentData(component) }" />
        </div>

        <div
            v-if="showButtonsSection"
            :class="'form-buttons-' + buttonsPosition"
            class="form-buttons">
            <db-button
                v-if="showSubmitButton"
                :props="submitButtonProps" />

            <db-button
                v-if="showResetButton"
                :props="resetButtonProps" />
        </div>
    </form>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { getComponentData, getComponentName } from "@/utils/nestedComponents";
    import { FormProps, FormButtonPosition } from "@/interfaces/components/Form";
    import { ButtonProps, ButtonType } from "@/interfaces/components/Button";

    export default Vue.extend({
        name: "Form",

        props: {
            props: {
                type: Object as PropType<FormProps>,
                required: true,
            }
        },

        computed: {
            showSubmitButton(): boolean {
                return this.props?.buttons?.submit ?? true;
            },

            showResetButton(): boolean {
                return this.props?.buttons?.reset ?? true;
            },

            showButtonsSection(): boolean {
                return this.showSubmitButton || this.showResetButton;
            },

            buttonsPosition(): FormButtonPosition {
                return this.props?.buttons?.position ?? FormButtonPosition.Start;
            },

            submitButtonProps(): ButtonProps {
                return {
                    type: ButtonType.Submit,
                    text: "Submit",
                };
            },

            resetButtonProps(): ButtonProps {
                return {
                    type: ButtonType.Reset,
                    text: "Reset",
                };
            },
        },

        methods: {
            onFormSubmit(): void {
                this.$emit('submit'); // TODO: Pass form data

                // TODO: Support event from template
            },

            getComponentName,

            getComponentData,
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
