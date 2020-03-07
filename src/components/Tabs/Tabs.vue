<template>
    <div>
        <ul class="nav nav-tabs">
            <li
                v-for="tab in tabs"
                :key="tab.id"
                class="nav-item">
                <a
                    :href="'#' + tab.id"
                    :class="{ active: tab.id === activeId }"
                    class="nav-link"
                    @click="activeId = tab.id">
                    {{ tab.title }}
                </a>
            </li>
        </ul>

        <div class="tab-content">
            <div
                v-for="tab in tabs"
                :key="tab.id"
                :class="{ active: tab.id === activeId }"
                class="tab-pane">

                <component
                    :is="getComponentName(tab.component.type)"
                    v-bind="{ ...tab.component.props }" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { getComponentName } from "@/utils/getComponentName";

    export default Vue.extend({
        name: "Tabs",

        props: {
            tabs: {
                type: Array,
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
            getComponentName
        }
    });
</script>
