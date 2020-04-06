import Vue from "vue";
import Vuex from "vuex";
import { ObjectWithAnyKeys } from "@framework/interfaces/core/Helpers";

Vue.use(Vuex);

export function setupStore(state: ObjectWithAnyKeys): any {
    return new Vuex.Store({
        strict: true,

        state,

        getters: {},

        mutations: {},

        actions: {},
    });
}
