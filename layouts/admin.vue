<script setup lang="ts">
const showSidebar = ref<boolean>(true);
</script>

<template>
  <div class="container-fluid d-flex">
    <div class="body-main">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
  background-color: white;
  padding: 0;

  .sidebar-main {
    width: 20rem;
    height: 100%;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .body-main {
    width: 100%;
    padding: 30px;
  }
}
</style>
