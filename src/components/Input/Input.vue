<template>
    <label class="wrapper">
        <div class="label">{{ name }}</div>

        <div class="input">
            <div
                v-if="hasLeadingLabel"
                class="addon">
                <DbIcon
                    v-if="prependIcon"
                    :type="prependIcon"
                    size="20" />

                <span v-if="prependText">{{ prependText }}</span>
            </div>

            <input
                :type="type"
                :value="value"
                :step="step"
                :min="min"
                :max="max"
                :placeholder="placeholder" />

            <div
                v-if="hasTrailingLabel"
                class="addon">
                <span v-if="appendText">{{ appendText }}</span>

                <DbIcon
                    v-if="appendIcon"
                    :type="appendIcon"
                    size="20" />
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
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            value: {
                type: [ String, Number ],
                required: false,
            },
            step: {
                type: Number,
                required: false,
            },
            min: {
                type: Number,
                required: false,
            },
            max: {
                type: Number,
                required: false,
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
        @apply cursor-text;
    }

    .label {
        @apply font-medium;
        @apply text-gray-700;
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

    input {
        @apply flex-grow;
        @apply block;
        @apply p-3;
        @apply z-10;

        &:focus {
            outline: none;
        }
    }

    input[type=number] {
        appearance: text;
        -webkit-appearance: text;
        -moz-appearance: text;
    }
</style>
