import axios, { AxiosRequestConfig, Method } from "axios";
import { Context } from "@framework/interfaces/core/Config";

export function setupResources(context: Context): void {
    const request = axios.create(context.configuration.resources);

    context.resource = async (method: Method, url: string, config?: AxiosRequestConfig): Promise<any> => {
        const { data } = await request({
            url,
            method,
            ...config
        });

        return data;
    };
}
