<template>
    <div class="w-full flex flex-row tablet:justify-center mobile:justify-center tablet:py-5 mobile:py-5">
        <div class="desktop:w-[110px] w-[100px] flex flex-row justify-between">
          <button type="button" class="rounded-full desktop:w-3 desktop:h-3 tablet:w-2 tablet:h-2 mobile:w-2 mobile:h-2 hover:bg-gray-400" v-for="index in indexes" :key="index" :class="[isActive === index ? 'bg-white' : 'bg-gray-500']" @click="changeActive(index)"></button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isActive: Number,
    length: Number
});

const indexes = Array.from({ length: props.length }, (_, i) => i);

const emit = defineEmits(['change-active']);

function changeActive(index) {
    emit('change-active', index);
}
</script>

<style scoped>
</style>