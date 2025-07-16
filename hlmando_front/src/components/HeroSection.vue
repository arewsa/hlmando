<template>
  <div
    class="flex w-full 2xl:h-150 sm:h-125 h-full bg-black-1 mt-0.5 lg:justify-center lg:items-center flex-col relative"
  >
    <h1
      class="text-white 2xl:text-7xl xl:text-6xl lg:text-5xl hidden lg:block font-bold font-cygre"
    >
      Экспертиза — не в словах, а в действиях
    </h1>
    <div class="bg-yellow-1 w-40 h-0.5 mt-10 hidden lg:block"></div>
    <div class="flex flex-col justify-center items-center h-1/2 lg:hidden pt-15">
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">Экспертиза —</h1>
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">не в словах,</h1>
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">а в действиях</h1>
      <div class="bg-yellow-1 w-10 sm:w-12 h-[6px] mt-[50px]"></div>
    </div>
    <div class="h-1/2 relative overflow-hidden">
    <Image
      unstyled
      src="LION_White.svg"
      alt="Logo"
      :pt="{
        root: 'rotate-y-180 absolute opacity-25 h-full -right-13 -bottom-10',
        image: 'h-full sm:w-auto w-full',
      }"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
</script>
