<template>
    <div class="border-2 border-gray-300 rounded-2xl py-5 px-2 flex flex-col gap-5 items-center justify-center h-full">
      <div class="flex flex-col items-center justify-center">
        <i :class="icon" class="icon-responsive" style="margin-bottom: 1rem"></i>
        <h1 class="text-black text-xl sm:text-2xl text-center">{{ title }}</h1>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div v-for="item in description" :key="item" class="pb-2 px-4 flex items-center gap-2">
          <i class="pi pi-circle-fill pr-2" style="font-size: 0.5rem"></i>
          <p class="text-black text-sm sm:text-base break-words">{{ item }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    description: string[]
    icon: string
  }>()
  </script>
  
  <style scoped></style>
  