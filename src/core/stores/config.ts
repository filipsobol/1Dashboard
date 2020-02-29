export default {
    namespaced: true,

    state: {
        app: null,
        pages: null,
    },

    mutations: {
        update(state: any, { name, value }: any) {
            state[name] = value;
        }
    }
};
