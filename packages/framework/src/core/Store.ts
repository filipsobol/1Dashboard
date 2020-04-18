import Vue from "vue";
import Vuex from "vuex";
import { AppConfiguration } from "@framework/interfaces/core/Config";

Vue.use(Vuex);

export function setupStore(state: AppConfiguration): any {
    return new Vuex.Store({
        strict: true,

        state,

        getters: {},

        mutations: {
            update(state: any, { name, value }: any) {
                state[name] = value;
            },
        },

        actions: {},
    });
}
