import Vue from "vue";

Vue.directive("click-outside", {
    bind(element: any, binding: any, vnode: any) {
        element.clickOutsideEvent = (event: Event) => {
            if (!(element == event.target || element.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };

        document.body.addEventListener("click", element.clickOutsideEvent)
    },

    unbind(element: any) {
        document.body.removeEventListener("click", element.clickOutsideEvent)
    },
});
