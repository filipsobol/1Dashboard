<template>
    <button>{{ props.text }}</button>
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
    });
</script>
