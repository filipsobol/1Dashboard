<template>
    <button
        @click="onClick"
        :type="type"
        :disabled="disabled">
        <i
            v-if="props.icon"
            :class="'icon-' + props.icon" />

        <span>{{ props.text }}</span>
    </button>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { ButtonProps } from "@/interfaces/components/Button";

    export default Vue.extend({
        name: "Button",

        props: {
            props: {
                type: Object as PropType<ButtonProps>,
                required: true,
            }
        },

        computed: {
            type(): string {
                return this.props.type ?? "button";
            },

            disabled(): boolean {
                return this.props.disabled ?? false;
            }
        },

        methods: {
            onClick(): void {
                this.$emit('click');

                // TODO: Support event from template
            }
        }
    });
</script>

<style lang="scss" scoped>
    button {
        @apply flex;
        @apply flex-row;
        @apply py-2;
        @apply px-4;
        @apply items-center;
        @apply rounded;
        @apply font-bold;
        @apply bg-gray-300;
        @apply text-gray-800;
        @apply shadow-sm;

        min-height: theme('spacing.8');

        &[disabled] {
            @apply opacity-50;
            @apply cursor-not-allowed;
        }

        i {
            @apply mr-2;
            @apply text-gray-600;
        }

        & + & {
            @apply ml-3;
        }
    }

    button:not([disabled]):hover {
        @apply bg-gray-400;
    }
</style>
