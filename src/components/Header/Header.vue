<template>
  <header
    class="flex items-center justify-between mt-10 tablet:mt-0 mobile:mt-6"
  >
    <img :src="Logo" class="pl-16 tablet:pl-10 mobile:pl-6" alt="" />
    <div
      class="flex gap-12 py-9 font-barlow-condensed text-white text-base pl-40 pr-16 backdrop-blur-4xl  relative before:content-[''] before:w-4/5 before:h-[1px] before:absolute before:-left-3/4 before:top-1/2 before:-translate-y-1/2 before:bg-[#979797] tablet:before:hidden tablet:pl-28 tablet:pr-10 mobile:hidden"
    >
    
    <RouterLink v-for="obj in data" class="tracking-[2px] cursor-pointer" :to="obj.to"><span class="font-bold tracking-[2.7px] tablet:hidden">{{ obj.id }}</span>
      {{ obj.name }}</RouterLink>

    </div>
    <img
      ref="navbarIcon"
      :src="HamburgerIcon"
      alt=""
      class="hidden mobile:block mobile:pr-6"
    />
    <Navbar/>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
const navbarIcon = ref(null);

// Images
import Logo from "../../assets/shared/logo.svg";
import HamburgerIcon from "../../assets/shared/icon-hamburger.svg";

// Components
import Navbar from "../../components/Navbar/Navbar.vue";


onMounted(() => {
  navbarIcon.value.addEventListener("click", (e) => {
    document.getElementById('navbar').classList.remove("invisible");
    document.body.classList.add('overflow-hidden')
  });
});

const data = [
  {
    to:'/',
    name:'HOME',
    id:'00'
  },
  {
    to:'/destination',
    name:'DESTINATION',
    id:'01'
  },
  {
    to:'/crew',
    name:'CREW',
    id:'02'
  },
  {
    to:'/technology',
    name:'TECHNOLOGY',
    id:'03'
  },
]
</script>

<style scoped></style>
