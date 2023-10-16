<script setup>
import Header from "~/components/Header.vue";
import { useCategoryStore } from "~/stores/category";

const categoryStore = useCategoryStore();

await categoryStore.getListCategory();

onMounted(async () => {});
</script>

<template>
  <div class="page">
    <Header />
    <div class="flex-row mt-3 container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
