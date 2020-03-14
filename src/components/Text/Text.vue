<template>
    <div>{{ props.text }}</div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { TextProps } from "@/interfaces/components/Text";

    export default Vue.extend({
        name: "Text",

        props: {
            props: {
                type: Object as PropType<TextProps>,
                required: true,
            },
        },
    });
</script>
