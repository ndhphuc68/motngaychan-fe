import { defineStore } from "pinia";
import { apiGet } from "~/helpers/api";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return { listCategory: [] };
  },
  getters: {},
  actions: {
    async getListCategory() {
      const res = await apiGet("/category/list");
      if (res?.success) {
        this.listCategory = res.data;
      }
    },
  },
});
