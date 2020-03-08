<template>
    <DbInput
        :name="name"
        :prepend-text="prependText"
        :append-text="appendText"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon">
        <input
            :type="inputType"
            :value="value"
            :placeholder="placeholder" />

        <button
            v-if="displayRevealButton"
            class="visibility-button"
            @click="togglePasswordVisibility()">
            <i :class="'icon-' + iconType" />
        </button>
    </DbInput>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "PasswordInput",

        components: {
            DbInput: Vue.component("db-input"),
        },

        props: {
            name: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: false,
                default: "",
            },
            displayRevealButton: {
                type: Boolean,
                required: false,
                default: true,
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

        data: () => ({
            visible: false,
        }),

        computed: {
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
    .visibility-button {
        @apply px-3;
    }
</style>
