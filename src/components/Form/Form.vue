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
            :class="[`form-buttons-${buttonsPosition}`]"
            class="form-buttons">
            <db-button
                v-if="showSubmitButton"
                :props="{ type: 'submit', text: 'Submit' }" />

            <db-button
                v-if="showResetButton"
                :props="{ type: 'reset', text: 'Reset' }" />
        </div>
    </form>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { getComponentName, getComponentData } from "@/utils/nestedComponents";
    import { FormProps } from "@/interfaces/components/Form";

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

            buttonsPosition(): string {
                return this.props?.buttons?.position ?? "left";
            }
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
