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
                v-bind="{ ...componentData }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";
    import { getComponentName, getComponentData } from "@/utils/nestedComponents";
    import { GridTileStyle } from '@/interfaces/core/Config';
    import { Shadow, Radius } from "@/interfaces/core/Styles";

    export default Vue.extend({
        name: "GridTile",

        props: {
            component: {
                type: Object,
                required: true,
            },
        },

        computed: {
            ...mapState([
                "styles",
            ]),

            normalizedStyles(): GridTileStyle {
                const defaultStyles: GridTileStyle = {
                    background: "transparent",
                    padding: 0,
                    shadow: Shadow.NONE,
                    radius: Radius.NONE,
                };

                const tileStyles = this.component?.tile?.style || defaultStyles;

                if (typeof tileStyles === "object") {
                    return tileStyles;
                }

                return this.styles.tile.predefinedStyles[tileStyles];
            },

            tileStyles(): Array<string> {
                const tile = this.component?.tile;

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
                    `bg-${ this.normalizedStyles.background || "transparent" }`,
                    this.normalizedStyles.shadow || Shadow.NONE,
                    this.normalizedStyles.radius || Radius.NONE
                ];
            },

            contentStyles(): Array<string> {
                return [
                    `p-${this.normalizedStyles.padding ?? 0}`
                ];
            },

            componentName(): string {
                return getComponentName(this.component.type);
            },

            componentData(): any {
                return getComponentData(this.component);
            },
        }
    });
</script>
