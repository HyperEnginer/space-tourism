<template>
  <div class="p-0 m-0 w-full min-h-dvh flex justify-between" style="background-image: url('src/assets/crew/background-crew-desktop.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
    <Header></Header>
    <div class="flex justify-center self-end pb-14 tablet:pb-0 mobile:pb-8 h-[80vh] w-full">
      <div class="w-[70vw] tablet:w-[90vw] mobile:w-[85vw] border border-white">
        <div class="w-full flex flex-row mobile:text-center">
          <h2 class="title-prefix w-auto">02</h2>
          <h1 class="title w-auto mobile:w-[127px]">MEET YOUR CREW</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header/Header.vue';

export default {
  name: 'Crew',
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style scoped>
  .title-prefix {
    font-family: Barlow Condensed;
    font-size: 22px;
    font-weight: 700;
    line-height: 33.6px;
    letter-spacing: 4.724999904632568px;
    text-align: left;
    width: 30px;
    height: 34px;
    gap: 0px;
    opacity: 0.25px;
    color: #717171;
    padding-right: 40px;
  }
  .title {
    font-family: Barlow Condensed;
    font-size: var(--font-sizedesktoptext-preset-5);
    font-weight: 400;
    line-height: 33.6px;
    letter-spacing: 4px;
    text-align: left;
    width: 219px;
    height: 34px;
    gap: 0px;
    opacity: 0px;
    color: #FFFFFF;
  }
</style>
