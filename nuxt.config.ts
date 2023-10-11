// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "@nuxtjs/axios";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/main.css",
    "primeflex/primeflex.scss",
  ],
  build: {
    transpile: ["primevue"],
  },
  modules: ["nuxt-icon", "@pinia/nuxt"],
  routeRules: {
    "/admin": { redirect: "/admin/login" },
  },
});
