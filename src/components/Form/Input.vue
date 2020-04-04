<template>
    <div class="wrapper">
        <div class="name">
            {{ $t(name) }}

            <span
                v-if="isRequired"
                class="required-indicator" />
        </div>

        <label
            v-if="customizable"
            :class="{ 'input-errors': hasErrors }"
            class="input">
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
                    {{ $t(prependText) }}
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
                    {{ $t(appendText) }}
                </span>

                <i
                    v-if="appendIcon"
                    :class="'icon-' + appendIcon" />
            </div>
        </label>

        <template v-else>
            <slot />
        </template>

        <div
            v-if="hasErrors"
            class="errors-list">
            <p
                v-for="[ name, value ] in errors"
                :key="name"
                class="error">
                {{ $t(`validation.${name}`, Array.isArray(value) ? value : [ value ]) }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed } from "@vue/composition-api";

    export default defineComponent({
        name: "Input",

        props: {
            name: {
                type: String,
                required: true,
            },

            customizable: {
                type: Boolean,
                required: false,
                default: true,
            },

            rules: {
                type: Object,
                required: false,
            },

            errors: {
                type: Array,
                required: false,
                default: () => [],
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

        setup(_) {
            // Computed
            const isRequired = computed<boolean>(() => Boolean(_.rules?.required));
            const hasErrors = computed<boolean>(() => Object.values(_.errors).flat().length > 0);
            const hasLeadingLabel = computed<boolean>(() => Boolean(_.prependText || _.prependIcon));
            const hasTrailingLabel = computed<boolean>(() => Boolean(_.appendText || _.appendIcon));

            return {
                // State
                _,

                // Computed
                isRequired,
                hasErrors,
                hasLeadingLabel,
                hasTrailingLabel,
            }
        },
    });
</script>

<style lang="scss" scoped>
    $borderColor: theme('colors.gray.400');

    .wrapper {
        @apply flex;
        @apply flex-col;
    }

    .name {
        @apply mb-2;
        @apply font-medium;
        @apply text-gray-700;

        .required-indicator::after {
            @apply font-bold;
            @apply text-red-500;

            content: "*";
        }
    }

    .input {
        @apply relative;
        @apply flex;
        @apply mt-1;
        @apply border;
        @apply rounded;
        @apply overflow-hidden;

        border-color: $borderColor;

        &:focus-within {
            @apply border-blue-300;
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

            &::placeholder {
                @apply text-gray-600;
            }

            &:focus {
                outline: none;
            }
        }

        input[readonly],
        textarea[readonly],
        select[disabled] {
            @apply bg-gray-200;
            @apply text-gray-600;
            @apply cursor-not-allowed;

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
        @apply bg-gray-100;
        @apply text-gray-600;
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

    .errors-list {
        @apply mt-2;
        @apply border;
        @apply rounded;
        @apply px-3;
        @apply py-2;
        @apply border-red-300;
        @apply bg-red-100;

        .error {
            @apply font-medium;
            @apply text-red-500;
        }
    }
</style>
