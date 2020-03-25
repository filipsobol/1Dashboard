<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            ref="input"
            :type="inputType"
            :name="props.id"
            :value="value"
            :placeholder="props.placeholder"
            :required="required"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />

        <button
            v-if="props.displayRevealButton"
            type="button"
            class="visibility-button"
            tabindex="-1"
            aria-label="Toggle password visibility"
            @click="togglePasswordVisibility()">
            <i :class="'icon-' + iconType" />
        </button>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, computed, ref } from "@vue/composition-api";

    export default defineComponent({
        name: "PasswordInput",

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
            // Template refs
            const input = ref<HTMLElement>(null);

            // State
            const visible = ref<boolean>(false);

            // Computed
            const required = computed<boolean>(() => _.props.required ?? true);
            const inputType = computed<string>(() => visible.value ? "text" : "password");
            const iconType = computed<string>(() => visible.value ? "eye-off" : "eye");

            // Methods
            function togglePasswordVisibility() {
                visible.value = !visible.value;
                input.value?.focus();
            }

            return {
                // Template refs
                input,

                // State
                _,
                visible,

                // Computed
                required,
                inputType,
                iconType,

                // Methods
                togglePasswordVisibility
            };
        },

    });
</script>

<style lang="scss" scoped>
    input {
        @apply pr-0 #{!important};
    }

    .visibility-button {
        @apply px-2;
    }
</style>
