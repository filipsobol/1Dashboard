<template>
    <div :class="tileStyles">
        <!-- Tile header -->
        <div
            v-if="component.tile.title"
            class="border-b border-gray-200"
            :class="contentStyles">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ component.tile.title }}
            </h3>
            <p
                v-if="component.tile.description"
                class="max-w-2xl text-sm leading-5 text-gray-500">
                {{ component.tile.description }}
            </p>
        </div>

        <!-- Tile content -->
        <div :class="contentStyles">
            <component
                :is="'db-' + component.type"
                v-bind="{ ...componentProperties }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

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

            contentStyles(): Array<string> {
                const style = this.component?.tile?.style;

                return [
                    `p-${style?.padding || 4}`
                ];
            },

            componentProperties(): object {
                return {
                    ...this.component.props,
                    components: this.component.components,
                };
            },
        }
    });
</script>
