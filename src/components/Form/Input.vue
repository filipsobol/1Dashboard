<template>
    <label class="wrapper">
        <div class="label">{{ name }}</div>

        <div class="input">
            <div
                v-if="hasLeadingLabel"
                class="addon">
                <DbIcon
                    v-if="prependIcon"
                    :type="prependIcon" />

                <span v-if="prependText">{{ prependText }}</span>
            </div>

            <slot />

            <div
                v-if="hasTrailingLabel"
                class="addon">
                <span v-if="appendText">{{ appendText }}</span>

                <DbIcon
                    v-if="appendIcon"
                    :type="appendIcon" />
            </div>
        </div>
    </label>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Input",

        components: {
            DbIcon: Vue.component("db-icon"),
        },

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
        @apply block;
        @apply relative;
        @apply font-medium;
        @apply text-gray-700;
        @apply cursor-text;
        @apply select-none;
    }

    .input {
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

    .addon {
        @apply px-4;
        @apply flex;
        @apply items-center;
        @apply bg-gray-200;
        @apply border-r;
        @apply text-gray-600;
        @apply font-medium;
        @apply select-none;

        border-color: $borderColor;

        * + * {
            @apply ml-3;
        }
    }

    input,
    select {
        @apply flex-grow;
        @apply block;
        @apply p-3;
        @apply z-10;

        &:focus {
            outline: none;
        }
    }

    svg {
        width: 20px;
        height: 20px;

        @apply text-gray-600;

        button:hover > & {
            @apply text-gray-800;
        }
    }

    button:focus {
        outline: none;
    }

    input {
        appearance: textfield;
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
    }
</style>
