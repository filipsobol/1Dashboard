<template>
    <div>{{ $t(props.text) }}</div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { TextProps } from "@/components/src/interfaces/Text";

    export default Vue.extend({
        name: "Text",

        props: {
            props: {
                type: [ Object, Function ] as PropType<TextProps>,
                required: true,
            },
        },
    });
</script>
