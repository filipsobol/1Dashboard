<template>
    <form
        @submit.stop.prevent="onFormSubmit"
        class="-mb-6">
        <div
            v-for="(component, index) in props.components"
            :key="index"
            class="mb-6">
            <component
                :is="getComponentName(component.type)"
                v-bind="{ ...getComponentData(component) }" />
        </div>
    </form>
</template>

<script lang="ts">
    import Vue from "vue";
    import { getComponentName, getComponentData } from "@/utils/nestedComponents";

    export default Vue.extend({
        name: "Form",

        props: {
            props: {
                type: Object,
                required: true,
            }
        },

        methods: {
            onFormSubmit(): void {
                // TODO
            },

            getComponentName,
            getComponentData,
        },
    });
</script>
