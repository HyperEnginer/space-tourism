<template>
  <div class="p-0 m-0 w-full min-h-dvh flex justify-between" style="background-image: url('src/assets/crew/background-crew-desktop.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
    <Header></Header>
    <div class="flex justify-center self-end tablet:pt-10 mobile:pt-10 desktop:pb-14 tablet:pb-0 mobile:pb-8 w-full">
      <div class="w-[70%] max-w-[880px] tablet:w-[90vw] mobile:w-[85vw] desktop:h-[80vh]  desktop:pb-8 flex flex-col justify-between">
        <div class="w-full flex flex-row align-middle">
          <h1 class="title w-full flex align-middle mobile:justify-center"><small class="title-prefix w-auto">02</small> MEET YOUR CREW</h1>
        </div>
        <div class="w-full flex flex-row h-full tablet:hidden mobile:hidden">
          <div class="w-6/12 h-full flex flex-col align-middle justify-end">
            <div class="h-auto">
              <div class="w-full h-80">
                <div class="w-auto">
                  <h3 class="crew-header h-auto w-auto">COMMANDER</h3>
                  <h2 class="crew-name h-auto w-auto">Douglas Hurley</h2>
                  <p class="crew-description h-auto w-auto">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                  </p>
                </div>
              </div>
              <div class="w-full flex flex-row">
                <div class="w-[110px] flex flex-row justify-between">
                  <button type="button" class="rounded-full bg-white hover:bg-gray-400 w-3 h-3"></button>
                  <button type="button" class="rounded-full bg-gray-500 hover:bg-gray-400 w-3 h-3"></button>
                  <button type="button" class="rounded-full bg-gray-500 hover:bg-gray-400 w-3 h-3"></button>
                  <button type="button" class="rounded-full bg-gray-500 hover:bg-gray-400 w-3 h-3"></button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-6/12 h-full flex justify-end align-bottom">
            <img src="/src/assets/crew/image-douglas-hurley.webp" alt="person" class="h-full desktop:max-h-[94%] tablet:max-h-[80%] mobile:max-h-[70%]  self-end">
          </div>
        </div>
        <div class="w-full h-auto mt-8 flex flex-col justify-center desktop:hidden">
          <div class="w-full h-auto flex justify-center py-2 mb-6">
            <div class="w-full">
              <h3 class="crew-header h-auto w-auto text-center">COMMANDER</h3>
              <h2 class="crew-name h-auto w-auto text-center">Douglas Hurley</h2>
              <p class="crew-description h-auto w-auto text-center">
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
              </p>
              <div class="w-full flex flex-row justify-center py-5">
                <div class="w-[100px] flex flex-row justify-between">
                  <button type="button" class="rounded-full bg-white w-2 h-2"></button>
                  <button type="button" class="rounded-full bg-gray-500 w-2 h-2"></button>
                  <button type="button" class="rounded-full bg-gray-500 w-2 h-2"></button>
                  <button type="button" class="rounded-full bg-gray-500 w-2 h-2"></button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-full flex justify-center">
            <img src="/src/assets/crew/image-douglas-hurley.webp" alt="person" class="h-full desktop:max-h-[94%] tablet:max-h-[80%] mobile:max-h-[70%] ">
          </div>
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
    }
  }
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
  .crew-header {
    gap: 0px;
    opacity: 0.5px;
    font-family: Bellefair;
    font-size: 22px;
    font-weight: 400;
    line-height: 36.67px;
    color: #717171;
  }
  .crew-name {
    gap: 0px;
    opacity: 0px;
    font-family: Bellefair;
    font-size: 42px;
    font-weight: 400;
    line-height: 64.18px;
    color: #FFFFFF;
  }
  .crew-description {
    gap: 0px;
    opacity: 0px;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 32.4px;
    height: auto;
    color: #FFFFFF;
  }
</style>
