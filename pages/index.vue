<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import Banner from "~/components/Banner.vue";

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<template>
  <Sidebar />
  <div class="main">
    <Banner />
    <div class="main-header">
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="w-full md:w-14rem"
      />
    </div>
    <div class="main-body"></div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding: 10px;
  margin-left: 20px;
  background-color: white;
  height: fit-content;
  border-radius: 8px;
  .main-header {
    display: flex;
    justify-content: flex-end;
  }
  .main-body {
  }
}
</style>
