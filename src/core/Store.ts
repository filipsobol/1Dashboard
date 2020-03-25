import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function setup(): any {
    return new Vuex.Store({
        strict: true,

        state: {
            app: null,
            localization: null,
            styles: null,
            pages: null,
        },

        getters: {},

        mutations: {
            update(state: any, { name, value }: any) {
                state[name] = value;
            }
        },

        actions: {},
    });
}
