import axios, { AxiosRequestConfig, Method } from "axios";
import { PageLayout } from "@/interfaces/core/Config";
import { Component } from "@/interfaces/core/Components";

export async function resolvePageContext(component: any, layout: PageLayout): Promise<Component> {
    if (typeof layout !== "function") {
        return layout;
    }

    const request = axios.create(component.$store.state.resources);

    const makeRequest = async (method: Method, url: string, config?: AxiosRequestConfig) => {
        const { data } = await request({
            url,
            method,
            ...config
        });

        return data;
    };

    return layout({
        route: component.$router.history.current,
        router: component.$router,
        get: (url: string, config?: AxiosRequestConfig) => makeRequest("get", url, config),
        post: (url: string, config?: AxiosRequestConfig) => makeRequest("post", url, config),
        put: (url: string, config?: AxiosRequestConfig) => makeRequest("put", url, config),
        patch: (url: string, config?: AxiosRequestConfig) => makeRequest("patch", url, config),
        delete: (url: string, config?: AxiosRequestConfig) => makeRequest("delete", url, config),
    });
}
