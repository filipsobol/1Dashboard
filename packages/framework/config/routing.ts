import { Routing } from "@framework/interfaces/core/Config";

const routing: Routing = {
    /**
     * Mode in which router will work. More information can be found here: https://router.vuejs.org/api/#mode
     */
    mode: "history",

    /**
     * Array of callback called right before first navigation.
     */
    onReady: [],

    /**
     * Array of callback called before every route change.
     */
    beforeEach: [],

    /**
     * Array of callback called after every route change.
     */
    afterEach: [],
};

export default routing;
