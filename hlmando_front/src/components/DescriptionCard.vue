<template>
  <div class="w-full flex mt-20 border-2 border-gray-300 rounded-2xl p-10">
    <div class="flex flex-col items-center justify-center ml-10 mr-20">
      <i :class="icon" class="icon-responsive" style="margin-bottom: 1rem"></i>
      <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl text-center">{{ title }}</h1>
      <div class="bg-yellow-1 w-full h-1 mt-5"></div>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div v-for="item in description" :key="item" class="relative pl-6 2xl:pb-4 pb-2">
        <i
          class="pi pi-circle-fill absolute"
          style="font-size: 0.5rem; left: 0; top: 0.75rem"
        ></i>
        <p class="text-black 2xl:text-2xl xl:text-xl text-lg">{{ item }}</p>
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
