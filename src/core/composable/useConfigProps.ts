import { reactive } from "@vue/composition-api";
import { UnwrapRef } from "@vue/composition-api/dist/reactivity";

export interface ConfigProps<T> {
    data: T;
    fetching: boolean;
    error: string | null;
}

export function useConfigProps<T>(props: any | Function): UnwrapRef<ConfigProps<T>> {
    const state = reactive<ConfigProps<T>>({
        data: props,
        fetching: false,
        error: null,
    });

    if (typeof props !== "function") {
        return state;
    }

    const fetch = async () => {
        state.fetching = true;

        try {
            const { data } = await props();
            state.data = data;
        } catch (error) {
            state.error = error;
        } finally {
            state.fetching = false;
        }
    };

    fetch();

    return state;
}
