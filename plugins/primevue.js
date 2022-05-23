
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Sidebar from 'primevue/sidebar';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Sidebar', Sidebar);
});