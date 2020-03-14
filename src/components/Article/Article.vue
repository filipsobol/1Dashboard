<template>
    <div>
        <p v-if="props.title">{{ props.title }}</p>
        <p>{{ props.body }}</p>
        <p v-if="props.author">{{ props.author }}</p>
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
                type: Object as () => PropType<ArticleProps>,
                required: true,
            }
        }
    });
</script>
