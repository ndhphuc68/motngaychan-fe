<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const router = useRouter();

const handleRouter = () => {
  router.push("/cart");
};
</script>

<template>
  <div class="header-main">
    <div class="container">
      <div class="header-img">
        <img
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OIqh5InxrFwXs1M3EMoAJtlikrj...Fv8vo8"
          alt="logo"
        />
      </div>
      <div class="header-search">
        <span class="w-full p-input-icon-right">
          <i class="pi pi-search" />
          <InputText class="w-full" placeholder="Search" />
        </span>
      </div>
      <div class="header-button">
        <Button
          @click="handleRouter"
          icon="pi pi-shopping-cart"
          severity="success"
          text
          rounded
          aria-label="User"
        /><Button
          icon="pi pi-user"
          severity="info"
          text
          rounded
          aria-label="User"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-main {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-img {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        height: 100px;
        object-fit: cover;
      }
    }
    .header-search {
      flex: 2;
    }
    .header-button {
      flex: 1;
      display: flex;
      justify-content: center;
      button:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>

<style>
.header-main .p-button-icon {
  font-size: 1.7rem;
}
</style>
