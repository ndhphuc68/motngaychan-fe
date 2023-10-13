<script setup lang="ts">
import { useCategoryStore } from "~/stores/category";

const useCategory = useCategoryStore();

const showCategory = ref<number>(0);
const handleClickCategory = (id: any) => {
  showCategory.value === id
    ? (showCategory.value = 0)
    : (showCategory.value = id);
};
</script>

<template>
  <div class="sidebar-main">
    <span class="font-bold">Danh mục</span>
    <div class="menu-item mt-3">
      <div :key="index" v-for="(item, index) in useCategory.listCategory">
        <div @click="handleClickCategory(item.data.id)" class="item mb-2">
          <span>{{ item?.data?.nameCategory }}</span>
          <i
            class="pi"
            :class="
              showCategory === item.data.id ? 'pi-angle-down' : 'pi-angle-right'
            "
            style="font-size: 1rem"
          ></i>
        </div>
        <div v-if="item.children.length > 0">
          <div
            :style="
              showCategory === item.data.id ? 'display:flex' : 'display:none'
            "
            @click="handleClickCategory(val.data.id)"
            class="item item-sub mb-2"
            :key="ind"
            v-for="(val, ind) in item.children"
          >
            <span>{{ val?.data?.nameCategory }}</span>
            <i class="pi pi-angle-right" style="font-size: 1rem"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-main {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  width: 230px;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .menu-item {
    .item {
      cursor: pointer;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:hover {
        background-color: #eaeaea;
        border-radius: 8px;
      }
    }
    .item-sub {
      padding: 10px 10px 10px 20px;
    }
  }
}
</style>
<style>
.sidebar-main .p-tieredmenu {
  border: none;
}
</style>
