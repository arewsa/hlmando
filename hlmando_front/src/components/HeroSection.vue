<template>
  <div class="flex w-full lg:h-150 h-full bg-black-1 mt-0.5 flex-col relative overflow-hidden">
    <div class="lg:flex flex-col justify-center items-center mt-[180px] hidden">
      <p class="text-white text-[56px]/16 font-bold font-cygre p-0 w-[700px] text-center">
        Экспертиза — не в словах, а в действиях
      </p>
      <div class="bg-yellow-1 w-40 h-0.5 mt-10"></div>
    </div>
    <div class="flex flex-col justify-center items-center h-1/2 lg:hidden pt-15">
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">
        Экспертиза —
      </h1>
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">
        не в словах,
      </h1>
      <h1 class="text-white text-[40px] leading-11 sm:text-6xl font-bold font-cygre">
        а в действиях
      </h1>
      <div class="bg-yellow-1 w-10 sm:w-12 h-[6px] mt-[50px]"></div>
    </div>
      <Image
        unstyled
        src="LION_White.svg"
        alt="Logo"
        :pt="{
          root: 'rotate-y-180 absolute h-1/2 xl:h-4/5 lg:h-3/5 lg:right-0 lg:-bottom-20 -right-8 -bottom-10',
          image: 'h-full w-auto opacity-10',
        }"
      />
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
</script>
