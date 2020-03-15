<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            :type="inputType"
            :name="props.id"
            :value="value"
            :placeholder="props.placeholder"
            :required="required"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />

        <button
            v-if="props.displayRevealButton"
            class="visibility-button"
            @click="togglePasswordVisibility()">
            <i :class="'icon-' + iconType" />
        </button>
    </db-input>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { PasswordInputProps } from "@/interfaces/components/Form/PasswordInput";

    export default Vue.extend({
        name: "PasswordInput",

        props: {
            props: {
                type: Object as PropType<PasswordInputProps>,
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
        },

        data: () => ({
            visible: false,
        }),

        computed: {
            required(): boolean {
                return this.props.required ?? true;
            },

            inputType(): string {
                return this.visible ? "text" : "password";
            },

            iconType(): string {
                return this.visible ? "eye-off" : "eye";
            },
        },

        methods: {
            togglePasswordVisibility() {
                this.visible = !this.visible;
            },
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
