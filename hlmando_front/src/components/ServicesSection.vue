<template>
  <div id="services">
    <div class="lg:hidden">
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
    <div class="hidden lg:flex flex-col lg:w-full mt-[100px] px-[140px]">
      <h1 class="text-[#0F1D40] text-[24px] font-[700]">Консалтинг</h1>
      <div class="flex mt-[60px] justify-between">
        <div
          v-for="(item, idx) in descs"
          :key="item.title"
          @click="handleDescIndex(idx)"
          class="bg-[#F2F4F7] hover:bg-[#E2E6ED] pl-[20px] rounded-xl shadow-md aspect-square w-[270px] flex flex-col py-[45px] justify-between cursor-pointer"
        >
          <Image
            :src="item.icon"
            alt="icon"
            :pt="{
              image: 'w-[80px] h-[80px]',
            }"
          />
          <h1 class="text-[#0F1D40] text-[18px]">{{ item.title }}</h1>
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
          class="mb-[100px]"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import DescriptionCard from './DescriptionCard.vue'
import DescriptionCardSmall from './DescriptionCardSmall.vue'
import { Transition } from 'vue'
import Image from 'primevue/image'

defineProps<{
  descs: Array<{ title: string; description: string[]; icon: string }>
  descIndex: number | null
  handleDescIndex: (idx: number) => void
}>()
</script>
