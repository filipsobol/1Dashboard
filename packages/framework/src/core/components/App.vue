<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <DbHeader />

        <transition
            :duration="80"
            name="fade"
            mode="out-in">
            <RouterView :key="$route.fullPath" />
        </transition>

        <DbFooter />
    </div>
</template>

<script lang="ts">
    import { defineComponent, provide, watchEffect } from "@vue/composition-api";
    import DbHeader from "@framework/core/components/Header.vue";
    import DbFooter from "@framework/core/components/Footer.vue";
    import { Context } from '@framework/interfaces/core/Config';

    export default defineComponent({
        name: "Application",

        components: {
            DbHeader,
            DbFooter
        },

        props: {
            context: {
                type: Object,
                required: true,
            },
        },

        setup(_: { context: Context }) {
            const ContextSymbol = Symbol.for("context");
            provide(ContextSymbol, _.context);

            watchEffect(() => {
                document.title = _.context.configuration.app.title;

                document
                    .querySelector("meta[name='description']")
                    ?.setAttribute("content", _.context.configuration.app.description);

                document
                    .querySelector("meta[name='keywords']")
                    ?.setAttribute("content", _.context.configuration.app.keywords);

                document
                    .querySelector("link[rel='icon']")
                    ?.setAttribute("href", _.context.configuration.app.faviconUrl);

                document
                    .querySelector("link[rel='icon']")
                    ?.setAttribute("type", _.context.configuration.app.faviconType);
            });

            return {
                // state
                _,
            }
        }
    });
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
