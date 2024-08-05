<template>
  <div class="h-dvh absolute right-0 top-0 backdrop-blur-4xl grid grid-rows-4 items-center font-barlow-condensed text-white text-base w-2/3 invisible" id="navbar">
    <div class=" row-start-2 row-end-3 flex flex-col gap-6 pl-8">
      <RouterLink to="/" class="tracking-[2px] cursor-pointer header-link"
        ><span class="font-bold tracking-[2.7px]">00</span>
        HOME</RouterLink
      >
      <RouterLink
        to="/destination"
        class="tracking-[2px] cursor-pointer header-link"
        ><span class="font-bold tracking-[2.7px]">01</span>
        DESTINATION</RouterLink
      >
      <RouterLink to="/crew" class="tracking-[2px] cursor-pointer header-link"
        ><span class="font-bold tracking-[2.7px]">02</span> CREW</RouterLink
      >
      <RouterLink
        to="/technology"
        class="tracking-[2px] cursor-pointer header-link"
        ><span class="font-bold tracking-[2.7px]">03</span> TECHNOLOGY</RouterLink
      >
    </div>
    <img ref="close" src="../../assets/shared/icon-close.svg" class="absolute top-6 right-6" alt="">
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'
const close = ref(null)

onMounted(() => {
    close.value.addEventListener('click', (e) => {
      document.getElementById('navbar').classList.add('invisible')
      document.body.classList.remove('overflow-hidden')
  })
})

</script>

<style lang="scss" scoped></style>
