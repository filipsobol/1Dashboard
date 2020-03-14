<template>
    <div class="wrapper">
        <div class="name">{{ name }}</div>

        <label class="input">
            <div
                v-if="hasLeadingLabel"
                class="addon addon-left">

                <i
                    v-if="prependIcon"
                    :class="'icon-' + prependIcon" />

                <span
                    v-if="prependText"
                    :title="prependText"
                    class="addon-text">
                    {{ prependText }}
                </span>
            </div>

            <div class="slot">
                <slot />
            </div>

            <div
                v-if="hasTrailingLabel"
                class="addon addon-right">
                <span
                    v-if="appendText"
                    :title="appendText"
                    class="addon-text">
                    {{ appendText }}
                </span>

                <i
                    v-if="appendIcon"
                    :class="'icon-' + appendIcon" />
            </div>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Input",

        props: {
            name: {
                type: String,
                required: true,
            },
            prependText: {
                type: String,
                required: false,
            },
            appendText: {
                type: String,
                required: false,
            },
            prependIcon: {
                type: String,
                required: false,
            },
            appendIcon: {
                type: String,
                required: false,
            }
        },

        computed: {
            hasLeadingLabel() {
                return this.prependText || this.prependIcon;
            },

            hasTrailingLabel() {
                return this.appendText || this.appendIcon;
            }
        }
    });
</script>

<style lang="scss" scoped>
    $borderColor: theme('colors.gray.300');

    .wrapper {
        @apply flex;
        @apply flex-col;
    }

    .name {
        @apply mb-2;
        @apply font-medium;
        @apply text-gray-700;
    }

    .input {
        @apply relative;
        @apply flex;
        @apply mt-1;
        @apply border;
        @apply rounded;
        @apply shadow-sm;

        border-color: $borderColor;

        &:focus-within {
            @apply border-blue-100;
            @apply shadow-outline;
        }
    }

    .slot {
        @apply flex;
        @apply flex-row;
        @apply flex-grow;
        @apply relative;
        @apply z-10;

        input,
        textarea,
        select, {
            @apply block;
            @apply w-full;
            @apply h-full;
            @apply p-2;

            &:focus {
                outline: none;
            }
        }

        input[readonly],
        textarea[readonly],
        select[disabled] {
            @apply bg-gray-300;
            @apply text-gray-600;

            &::placeholder {
                @apply text-gray-600;
            }
        }

        button:focus {
            outline: none;
        }

        input {
            min-width: 0;
            appearance: textfield;
            -moz-appearance: textfield;
            -webkit-appearance: textfield;
        }
    }

    .addon {
        @apply px-3;
        @apply flex;
        @apply items-center;
        @apply bg-gray-200;
        @apply text-gray-600;
        @apply font-medium;
        @apply select-none;

        min-height: theme('spacing.12');
        overflow: hidden;
        border-color: $borderColor;

        &-left {
            @apply border-r;
        }

        &-right {
            @apply border-l;
        }

        span {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        * + * {
            @apply ml-2;
        }
    }

    i {
        @apply text-2xl;
        @apply text-gray-500;

        button:hover > & {
            @apply text-gray-700;
        }
    }
</style>
