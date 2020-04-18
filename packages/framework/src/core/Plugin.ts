import { Context } from "@framework/interfaces/core/Config";

export async function registerPlugin(install: Function, context: Context) {
    const plugin = await install(context);
}
