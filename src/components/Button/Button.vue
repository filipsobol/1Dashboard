<template>
    <button
        @click="onClick"
        :type="type">
        {{ props.text }}
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
