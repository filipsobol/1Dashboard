import Vue from "vue";

export default Vue.extend({
    data: () => ({
        $loaded: {
            completed: false,
            children: 0,
        },
    }),

    watch: {
        "$loaded.children": {
            handler(): void {
                if (this.$data.$loaded.children !== this.$children.length) {
                    return;
                }

                this.$data.$loaded.completed = true;

                if (!this.$parent) {
                    return;
                }

                this.$parent.$emit("created");
            },
            immediate: true,
        },
    },

    created(): void {
        this.$on("created", () => this.$data.$loaded.children += 1);
    },
});
