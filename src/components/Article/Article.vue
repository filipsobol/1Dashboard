<template>
    <div>
        <p v-if="props.title">{{ $t(props.title) }}</p>
        <p>{{ $t(props.body) }}</p>
        <p v-if="props.author">{{ $t(props.author) }}</p>
        <p v-if="props.createdAt">{{ props.createdAt }}</p>
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { ArticleProps } from "@/interfaces/components/Article";

    export default Vue.extend({
        name: "Article",

        props: {
            props: {
                type: [ Object, Function ] as PropType<ArticleProps>,
                required: true,
            }
        }
    });
</script>
