<template>
    <div :class="tileStyles">
        <!-- Tile header -->
        <div
            v-if="component.tile && component.tile.title"
            class="border-b border-gray-200"
            :class="contentStyles">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ component.tile.title }}
            </h3>
            <p
                v-if="component.tile.description"
                class="text-sm leading-5 text-gray-500">
                {{ component.tile.description }}
            </p>
        </div>

        <!-- Tile content -->
        <div :class="contentStyles">
            <component
                :is="componentName"
                v-bind="{ ...component.props }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { getComponentName } from "@/utils/getComponentName";

    export default Vue.extend({
        name: "GridTile",

        props: {
            component: {
                type: Object,
                required: true,
            },
        },

        computed: {
            tileStyles(): Array<string> {
                const tile = this.component?.tile;
                const style = tile?.style;

                const classes = Object
                    .entries(tile?.layout || {})
                    .map(([ resolution, { width, height, offsetStart, offsetEnd } ]: any) => [
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

            contentStyles(): Array<string> {
                const style = this.component?.tile?.style;

                return [
                    `p-${style?.padding || 4}`
                ];
            },

            componentName(): string {
                return getComponentName(this.component.type);
            },
        }
    });
</script>
