<template>
    <div class="w-full flex flex-row tablet:justify-center mobile:justify-center tablet:py-5 mobile:py-5">
        <div class="desktop:w-[110px] w-[100px] flex flex-row justify-between">
          <button type="button" class="rounded-full desktop:w-3 desktop:h-3 tablet:w-2 tablet:h-2 mobile:w-2 mobile:h-2 hover:bg-gray-400" v-for="index in indexes" :key="index" :class="[isActive === index ? 'bg-white' : 'bg-gray-500']" @click="changeActive(index)"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CrewOptions',
    props: {
        isActive: Number,
        length: Number
    },
    data() {
        return {
            indexes: Array.from({ length: this.length }, (_, i) => i)
        }
    },
    methods: {
        changeActive(index) {
            this.$emit('change-active', index);
        }
    }
}
</script>

<style scoped>
</style>