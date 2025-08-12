<template>
  <div class="w-full flex mt-20 border-2 border-gray-300 rounded-2xl py-[40px]">
    <div class="flex flex-col ml-[40px] mr-[60px]">
      <Image :src="icon" alt="icon" :pt="{ image: 'w-[80px] h-[80px]' }" />
      <p class="text-[#0F1D40] text-[18px] text-center mt-[20px]">{{ title }}</p>
      <div class="bg-yellow-1 w-full h-1 mt-[5px]"></div>
    </div>
    <div class="flex flex-col gap-2">
      <div v-for="item in description" :key="item" class="relative pl-6 2xl:pb-4 pb-2">
        <i
          class="pi pi-circle absolute"
          style="font-size: 0.5rem; left: 0; top: 0.75rem"
        ></i>
        <p class="text-[#333333] text-[16px]">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'

defineProps<{
  title: string
  description: string[]
  icon: string
}>()
</script>

<style scoped></style>
