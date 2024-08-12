<template>
  <div class="w-full flex flex-row h-full tablet:hidden mobile:hidden">
    <div class="w-6/12 h-full flex flex-col align-middle justify-end">
      <div class="h-auto">
        <div class="w-full min-h-80">
          <div class="w-auto">
            <h3 class="crew-header h-auto w-auto">{{ header }}</h3>
            <h2 class="crew-name h-auto w-auto">{{ name }}</h2>
            <p class="crew-description h-auto w-auto">{{ description }}</p>
          </div>
        </div>
        <CrewOptions :isActive="active" :length="length" @change-active="changeActive"></CrewOptions>
      </div>
    </div>
    <div class="w-6/12 h-full flex justify-end align-bottom">
      <img :src="src" alt="person" class="h-full desktop:max-h-[94%] tablet:max-h-[80%] mobile:max-h-[70%]  self-end">
    </div>
  </div>
  <div class="w-full h-auto mt-8 flex flex-col justify-center desktop:hidden">
    <div class="w-full h-auto flex justify-center py-2 mb-6">
      <div class="w-full">
        <h3 class="crew-header h-auto w-auto text-center">{{ header }}</h3>
        <h2 class="crew-name h-auto w-auto text-center">{{ name }}</h2>
        <p class="crew-description h-auto w-auto text-center">{{ description }}</p>
        <CrewOptions :isActive="active" :length="length" @change-active="changeActive"></CrewOptions>
      </div>
    </div>
    <div class="w-full h-full flex justify-center">
      <img :src="src" alt="person" class="h-full desktop:max-h-[94%] tablet:max-h-[80%] mobile:max-h-[70%] ">
    </div>
  </div>
</template>

<script>
import CrewOptions from './CrewOptions/CrewOptions.vue';

export default {
  name: 'CrewProfile',
  components: {
    CrewOptions,
  },
  props: {
    active: Number,
    length: Number,
    name: String,
    description: String,
    header: String,
    src: String
  },
  methods: {
    changeActive(index) {
      this.$emit('change-active', index);
    }
  }
}
</script>

<style scoped>
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
