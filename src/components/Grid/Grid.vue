<template>
    <div class="row">
        <div
            v-for="(component, index) in components"
            :key="index"
            :class="getComponentWidths(component)">
            <div class="card">
                <div class="card-body">
                    <db-component :component="component" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Grid",

    props: {
        components: {
            type: Array,
            required: true,
        },
    },

    methods: {
        getComponentWidths(component) {
            return Object
                .entries(component.styles.width)
                .map(([ resolution, size ]) => `col-${resolution}-${size}`);
        },
    },
};
</script>
