<!-- <template>
  <div class="p-0 m-0 w-full min-h-screen flex flex-col gap-4" style="background-image: url('src/assets/crew/background-crew-desktop.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
    <Header></Header>
    <div class="flex justify-center self-end tablet:pt-5 mobile:pt-5 desktop:pb-auto tablet:pb-0 mobile:pb-8 w-full">
      <div class="w-[70%] max-w-[880px] tablet:w-[90vw] mobile:w-[85vw] desktop:h-[75vh] h-auto desktop:pb-9 flex flex-col justify-between">
        <div class="w-full flex flex-row align-middle">
          <h1 class="title w-full flex align-middle mobile:justify-center"><small class="title-prefix w-auto">02</small> MEET YOUR CREW</h1>
        </div>
        <CrewCarousel></CrewCarousel>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="p-0 m-0 w-full min-h-screen flex flex-col gap-4" style="background-image: url('src/assets/crew/background-crew-desktop.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
    <Header></Header>
    <div class="flex justify-center self-center tablet:pt-5 mobile:pt-5 desktop:pb-auto tablet:pb-0 mobile:pb-8 w-full">
      <div class="w-[70%] max-w-[880px] tablet:w-[90vw] mobile:w-[85vw] desktop:h-[75vh] h-auto desktop:pb-9 flex flex-col justify-between">
        <div class="w-full flex flex-row align-middle">
          <h1 class="title w-full flex align-middle mobile:justify-center"><small class="title-prefix w-auto">02</small> MEET YOUR CREW</h1>
        </div>
        <CrewCarousel></CrewCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header/Header.vue';
import CrewCarousel from './CrewCarousel/CrewCarousel.vue';

export default {
  name: 'Crew',
  components: {
    Header,
    CrewCarousel,
  },
}
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