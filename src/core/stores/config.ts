export default {
    namespaced: true,

    state: {
        app: null,
        template: null,
    },

    mutations: {
        update(state: any, { name, value }: any) {
            state[name] = value;
        }
    }
};
