import Vue from "vue";
import Vuex from "vuex";
import config from "./stores/config";

Vue.use(Vuex);

export function setup(): any {
    return new Vuex.Store({
        strict: true,
        state: {},
        mutations: {},
        actions: {},
        modules: {
            config
        }
    });
}
