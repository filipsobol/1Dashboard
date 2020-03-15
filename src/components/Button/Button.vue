<template>
    <button
        @click="onClick"
        :type="type"
        :disabled="disabled">
        <i
            v-if="props.icon"
            :class="'icon-' + props.icon" />

        <span v-if="props.text">{{ props.text }}</span>
    </button>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { ButtonProps, ButtonType } from "@/interfaces/components/Button";

    export default Vue.extend({
        name: "Button",

        props: {
            props: {
                type: Object as PropType<ButtonProps>,
                required: true,
            }
        },

        computed: {
            type(): ButtonType {
                return this.props.type ?? ButtonType.Button;
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
        @apply py-3;
        @apply px-6;
        @apply items-center;
        @apply rounded;
        @apply font-bold;
        @apply bg-gray-300;
        @apply text-gray-800;
        @apply shadow-sm;

        min-height: theme('spacing.12');

        &[disabled] {
            @apply opacity-50;
            @apply cursor-not-allowed;
        }

        i {
            @apply text-gray-600;
        }

        i + span {
            @apply ml-3;
        }

        & + & {
            @apply ml-3;
        }
    }

    button:not([disabled]):hover {
        @apply bg-gray-400;
    }
</style>
