import Vue from "vue";

export default Vue.extend({
    methods: {
        componentExists(name: string): boolean {
            return Boolean(this.$options.components && this.$options.components[name]);
        },
    },
});
