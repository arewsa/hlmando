<template>
  <div id="services" class="lg:hidden">
    <h1 class="text-[#0F1D40] text-[26px] font-bold px-4 pt-10">Консалтинг</h1>
    <div class="overflow-x-auto snap-x py-10 w-screen">
      <div class="inline-flex">
        <div v-for="item in descs" :key="item.title" class="snap-start sm:w-[95vw] w-[90vw] px-4">
          <DescriptionCardSmall
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="services" class="hidden lg:flex flex-col lg:w-full my-25 2xl:px-40 px-20">
    <h1 class="text-black text-4xl font-bold">Консалтинг</h1>
    <div class="grid grid-cols-4 gap-6 mt-6">
      <div
        v-for="(item, idx) in descs"
        :key="item.title"
        @click="handleDescIndex(idx)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i :class="item.icon" class="icon-responsive"></i>
        <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl">{{ item.title }}</h1>
      </div>
    </div>
    <Transition
      enter-from-class="opacity-0 -translate-y-10"
      enter-active-class="transition duration-500 ease-out"
      leave-from-class="opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-to-class="opacity-0 -translate-y-10"
      mode="out-in"
    >
      <DescriptionCard
        v-if="descIndex !== null"
        :key="descIndex"
        :title="descs[descIndex].title"
        :description="descs[descIndex].description"
        :icon="descs[descIndex].icon"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import DescriptionCard from './DescriptionCard.vue'
import DescriptionCardSmall from './DescriptionCardSmall.vue'
import { Transition } from 'vue'

defineProps<{
  descs: Array<{ title: string; description: string[]; icon: string }>
  descIndex: number | null
  handleDescIndex: (idx: number) => void
}>()
</script>
