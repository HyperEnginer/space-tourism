<template>
  <div class="p-0 m-0 flex flex-col w-full h-screen overflow-hidden tablet:overflow-x-hidden tablet:overflow-y-auto mobile:overflow-x-hidden mobile:overflow-y-auto" style="background-image: url('src/assets/crew/background-crew-desktop.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
    <Header></Header>
    <div class="flex justify-center tablet:pt-5 mobile:pt-5 pb-auto tablet:pb-0 mobile:pb-8 w-full">
      <div class="w-[70%] max-w-[880px] tablet:w-[90vw] mobile:w-[85vw] max-h-[71vh] tablet:max-h-fit mobile:max-h-fit h-auto pb-9 tablet:pb-0 mobile:pb-0 flex flex-col justify-between">
        <div class="w-full flex flex-row align-middle">
          <h1 class="title w-full flex align-middle mobile:justify-center"><small class="title-prefix w-auto">02</small> MEET YOUR CREW</h1>
        </div>
        <CrewCarousel></CrewCarousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../Header/Header.vue';
import CrewCarousel from './CrewCarousel/CrewCarousel.vue';
</script>

<style scoped>
  .title-prefix {
    font-family: Barlow Condensed;
    font-weight: 700;
    line-height: 33.6px;
    letter-spacing: 4.724999904632568px;
    text-align: left;
    gap: 0px;
    opacity: 0.25px;
    color: #717171;
    padding-right: 12px;
  }
  .title {
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    letter-spacing: 4px;
    text-align: left;
    gap: 0px;
    opacity: 0px;
    color: #FFFFFF;
  }
</style>