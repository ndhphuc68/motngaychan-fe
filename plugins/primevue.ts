import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
});
