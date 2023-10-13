<script setup lang="ts">
import Carousel from "primevue/carousel";

const banner = [
  "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
  "https://img.freepik.com/free-vector/abstract-yellow-blue-geometric-banner-half-tone-design_1017-39620.jpg",
  "https://img.pikbest.com/backgrounds/20181015/educational-dark-blue-banner-background-hd-download_2767152.jpg!bwr800",
];
</script>

<template>
  <div class="main-banner mb-3">
    <Carousel
      :showIndicators="false"
      :showNavigators="false"
      :value="banner"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="3000"
      circular
    >
      <template #item="slotProps">
        <img :src="slotProps.data" alt="banner" />
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.main-banner {
  img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }
}
</style>
