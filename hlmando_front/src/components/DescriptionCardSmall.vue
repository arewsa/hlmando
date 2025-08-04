<template>
  <div class="border-2 border-gray-300 rounded-2xl px-2 py-10 flex flex-col gap-5 h-full">
    <div class="mx-4 w-[100px] flex flex-col">
      <Image :src="icon" alt="icon" />
      <h1 class="text-[#0F1D40] text-[18px] font-[500] whitespace-nowrap">{{ title }}</h1>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div v-for="item in description" :key="item" class="pb-2 px-4 flex items-center gap-2">
        <i class="pi pi-circle pr-2" style="font-size: 0.5rem"></i>
        <p class="text-black text-sm sm:text-base break-words">{{ item }}</p>
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
