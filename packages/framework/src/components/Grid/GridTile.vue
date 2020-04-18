<template>
    <div :class="tileStyles">
        <!-- Tile header -->
        <div
            v-if="component.tile && component.tile.title"
            class="border-b border-gray-200"
            :class="headerStyles">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ $t(component.tile.title) }}
            </h3>
            <p
                v-if="component.tile.description"
                class="text-sm leading-5 text-gray-600">
                {{ $t(component.tile.description) }}
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
    import { defineComponent, inject, computed } from "@vue/composition-api";
    import { getComponentData, getComponentName } from "@framework/utils/nestedComponents";
    import { GridTileStyle } from "@framework/interfaces/core/Config";
    import { Direction, Justify, Radius, Shadow } from "@framework/interfaces/core/Styles";

    export default defineComponent({
        name: "GridTile",

        props: {
            component: {
                type: Object,
                required: true,
            },
        },

        setup(_: any) {
            const styles = inject<any>(Symbol.for("context")).configuration.styles;

            const normalizedStyles = computed<GridTileStyle>(() => {
                const defaultStyles: GridTileStyle = {
                    direction: Direction.ROW,
                    justify: Justify.START,
                    background: "transparent",
                    padding: 0,
                    shadow: Shadow.NONE,
                    radius: Radius.NONE,
                };

                const tileStyles = _.component?.tile?.style || defaultStyles;

                if (typeof tileStyles === "object") {
                    return tileStyles;
                }

                return styles.tile.predefinedStyles[tileStyles];
            });

            const tileStyles = computed<Array<string>>(() => {
                const tile = _.component?.tile;

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
                    `bg-${ normalizedStyles.value.background || "transparent" }`,
                    normalizedStyles.value.shadow || Shadow.NONE,
                    normalizedStyles.value.radius || Radius.NONE
                ];
            });

            const headerStyles = computed<Array<string>>(() => [
                "flex",
                "flex-col",
                `p-${normalizedStyles.value.padding ?? 0}`
            ]);

            const contentStyles = computed<Array<string>>(() => [
                "flex",
                normalizedStyles.value.direction || "",
                normalizedStyles.value.justify || "",
                `p-${normalizedStyles.value.padding ?? 0}`
            ]);

            const componentName = computed<string>(() => getComponentName(_.component.type));
            const componentData = computed<any>(() => getComponentData(_.component));

            return {
                // State
                _,

                // Computed
                normalizedStyles,
                tileStyles,
                headerStyles,
                contentStyles,
                componentName,
                componentData,
            }
        },
    });
</script>
