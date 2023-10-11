<script setup lang="ts">
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Product from "~/components/product/Product.vue";
import ProductSkuPrice from "~/components/product/ProductSkuPrice.vue";
import ProductBranch from "~/components/product/ProductBranch.vue";

import { ref } from "vue";

definePageMeta({
  layout: "admin",
});

const tabs = ref([
  { title: "Product", content: shallowRef(Product) },
  { title: "Product Sku Price", content: shallowRef(ProductSkuPrice) },
  { title: "Product Branch", content: shallowRef(ProductBranch) },
]);
</script>

<template>
  <div class="product-main h-100">
    <div class="product-title d-flex align-items-center mb-4">
      <Icon size="50px" name="fluent-mdl2:product-variant" /><span class="ms-1"
        >Product</span
      >
    </div>
    <TabView>
      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <KeepAlive> <component :is="tab.content" /></KeepAlive>
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped lang="scss">
.product-main {
  .product-title {
    span {
      font-size: 35px;
      font-weight: 400;
    }
  }
}
</style>

<style lang="scss">
.p-tabview .p-tabview-nav {
  padding: 0 !important;
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  color: #3b82f6;
}
</style>
