<template>
    <nav
        @keydown.esc="open = false"
        class="bg-gray-800">
        <div class="container mx-auto px-4 sm:px-0">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img
                            class="h-8 w-8"
                            src="https://via.placeholder.com/50x50"
                            alt=""/>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-6 flex items-baseline">
                            <router-link
                                v-for="page in menuPages"
                                :key="page.url"
                                :to="page.url"
                                exact-active-class="text-white bg-gray-900 hover:text-white hover:bg-gray-900"
                                class="ml-4 mt-1 block px-3 py-2 rounded-md text-base font-small text-gray-300 hover:text-white hover:bg-gray-700"
                                tag="a">
                                {{ $t(page.name) }}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>

                        <div class="ml-3 relative">
                            <div>
                                <button
                                    @click="open = !open"
                                    class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid">
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""/>
                                </button>
                            </div>

                            <transition
                                enter-class="transform opacity-0 scale-95"
                                enter-active-class="transition ease-out duration-100"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-to-class="transform opacity-0 scale-95">
                                <div
                                    v-if="open"
                                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <div class="py-1 rounded-md bg-white shadow-xs">
                                        <a
                                            href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {{ $t("Your Profile") }}
                                        </a>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {{ $t("Settings") }}
                                        </a>
                                        <router-link
                                            to="/auth/logout"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {{ $t("Sign out") }}
                                        </router-link>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button
                        @click="open = !open"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                        <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                v-if="!open"
                                class="inline-flex"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"/>
                            <path
                                v-if="open"
                                class="inline-flex"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div
            :class="{'block': open, 'hidden': !open}"
            class="block md:hidden">
            <div class="px-2 pt-2 pb-3 sm:px-3">
                <router-link
                    v-for="page in menuPages"
                    :key="page.url"
                    :to="page.url"
                    exact-active-class="active"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-small text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    tag="a">
                    {{ $t(page.name) }}
                </router-link>
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""/>
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium leading-none text-white">User name</div>
                        <div class="mt-1 text-sm font-medium leading-none text-gray-400">User email</div>
                    </div>
                </div>
                <div class="mt-3 px-2">
                    <a
                        href="#"
                        class="block px-3 py-2 rounded-md text-base font-small text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                        {{ $t("Your Profile") }}
                    </a>
                    <a
                        href="#"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-small text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                        {{ $t("Settings") }}
                    </a>
                    <router-link
                        to="/auth/logout"
                        class="mt-1 block px-3 py-2 rounded-md text-base font-small text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                        {{ $t("Sign out") }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, inject } from "@vue/composition-api";
    import { Page, PageUrl } from "@framework/interfaces/core/Config";

    export default defineComponent({
        name: "Header",

        setup(_) {
            const open = ref<boolean>(false);
            const pages = inject<any>(Symbol.for("context")).configuration.pages;
            const menuPages = computed<Page>(() => pages.filter(({ url }: Page) => !Object.values(PageUrl).includes(url as PageUrl)));

            return {
                // State
                _,
                open,
                pages,
                menuPages
            };
        },
    });
</script>
