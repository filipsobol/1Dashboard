<template>
    <div class="grid grid-cols-12 gap-6 row-gap-6">
        <div
            v-for="(component, index) in components"
            :key="index"
            :class="tileStyles(component)">

            <div v-if="component.tile.title"
                class="border-b border-gray-200"
                :class="contentStyles(component)">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ component.tile.title }}
                </h3>
                <p
                    v-if="component.tile.description"
                    class="max-w-2xl text-sm leading-5 text-gray-500">
                    {{ component.tile.description }}
                </p>
            </div>

            <div :class="contentStyles(component)">
                <component
                    :is="'db-' + component.type"
                    v-bind="{ ...componentProperties(component) }" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component } from '@/interfaces/core/Config';

    export default Vue.extend({
        name: "Grid",

        props: {
            components: {
                type: Array,
                required: true,
            },
        },

        methods: {
            tileStyles(component: Component): Array<string> {
                const tile = component?.tile;
                const style = tile?.style;

                const classes = Object
                    .entries(tile?.layout || {})
                    .map(([ resolution, { width, height, offsetStart, offsetEnd } ]: Array<any>) => [
                        `${resolution}:col-span-${width || 12}`,
                        `${resolution}:rows-span-${height || 1}`,
                        offsetStart && `${resolution}:col-start-${offsetStart}`,
                        offsetEnd && `${resolution}:col-end-${offsetEnd}`,
                    ])
                    .flat();

                return [
                    ...classes,
                    "col-span-12",
                    `bg-${tile?.style?.background || "white"}`,
                    `shadow${style?.shadow ? `-${style.shadow}` : ""}`,
                    `rounded${style?.rounded ? `-${style.rounded}` : ""}`
                ];
            },

            contentStyles(component: Component): Array<string> {
                const style = component?.tile?.style;

                return [
                    `p-${style?.padding || 4}`
                ];
            },

            componentProperties(component: Component): object {
                return {
                    ...component.props,
                    components: component.components,
                };
            },
        }
    });
</script>
