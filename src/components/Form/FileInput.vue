<template>
    <db-input :name="props.name">
        <div
            :class="{ active }"
            class="drag-area"
            @dragenter="active = true"
            @dragover="active = true"
            @dragleave="active = false"
            @drop="active = false">

            <input
                type="file"
                :name="props.id"
                :value="value"
                :placeholder="props.placeholder"
                :required="required"
                :readonly="props.readonly"
                @input.prevent="onInput"/>

            <div
                v-if="!active"
                class="placeholder">
                <i class="icon-upload" />
                <span>{{ props.placeholder }}</span>
            </div>

            <span
                v-else
                class="drop-to-add">
                Drop to add this file
            </span>
        </div>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, toRefs } from "@vue/composition-api";
    import { FileInputProps } from "@/interfaces/components/Form/FileInput";
    import { useConfigProps } from "@/core/composable/useConfigProps";

    export default defineComponent({
        name: "FileInput",

        props: {
            props: {
                type: [ Object, Function ],
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
        },

        setup(_) {
            const active = ref<boolean>(false);
            const props = useConfigProps<FileInputProps>(_.props);

            // Computed
            const required = computed(() => props.data.required ?? true);

            // Methods
            function onInput(): void {
                // TODO
            }

            function onDrag(): void {
                // TODO
            }

            return {
                // State
                active,
                ...toRefs(props),

                // Computed
                required,

                // Methods
                onInput,
                onDrag,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .drag-area {
        @apply w-full;
        @apply h-40;
        @apply flex;
        @apply justify-center;
        @apply items-center;
        @apply bg-white;
        @apply cursor-pointer;

        // Transition background color
        @apply transition-colors;
        @apply duration-200;
        @apply ease-in-out;

        .placeholder {
            @apply flex;
            @apply flex-col;
            @apply items-center;
            @apply text-gray-600;

            span {
                @apply mt-3;
            }
            i::before {
                @apply text-gray-600;
            }
        }

        .drop-to-add {
            @apply text-2xl;
            @apply font-bold;
            @apply text-gray-500;
        }

        &.active {
            @apply bg-gray-300;
        }
    }

    i::before {
        @apply text-gray-400;
        @apply text-5xl;
    }

    input[type="file"] {
        // Visually hide input. Using "hidden" breaks keyboard accessibility
        @apply absolute;
        @apply top-0;
        @apply left-0;
        @apply w-full;
        @apply h-full;
        @apply opacity-0;
        @apply cursor-pointer;
    }
</style>
