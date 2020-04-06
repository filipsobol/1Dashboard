<template>
    <div>
        <ul class="nav nav-tabs">
            <li
                v-for="tab in props.tabs"
                :key="tab.id"
                class="nav-item">
                <a
                    :href="'#' + tab.id"
                    :class="{ active: tab.id === activeId }"
                    class="nav-link"
                    @click="activeId = tab.id">
                    {{ $t(tab.title) }}
                </a>
            </li>
        </ul>

        <div class="tab-content">
            <div
                v-for="tab in props.tabs"
                :key="tab.id"
                :class="{ active: tab.id === activeId }"
                class="tab-pane">

                <component
                    :is="getComponentName(tab.component.type)"
                    v-bind="{ ...getComponentData(tab.component) }" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { getComponentName, getComponentData } from "@framework/utils/nestedComponents";
    import { TabsProps } from "@framework/interfaces/components/Tabs";

    export default Vue.extend({
        name: "Tabs",

        props: {
            props: {
                type: [ Object, Function ] as PropType<TabsProps>,
                required: true,
            },
        },

        data: () => ({
            activeId: "",
        }),

        watch: {
            tabs: {
                handler(tabs) {
                    this.activeId = tabs[0].id;
                },
                immediate: true,
            },
        },

        methods: {
            getComponentName,
            getComponentData,
        },
    });
</script>
