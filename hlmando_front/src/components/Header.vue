<template>
  <Drawer
    v-model:visible="visible"
    header="Soloveva Group"
    :show-close-icon="false"
    :pt="{
      root: 'w-2/3 h-screen bg-white',
      header: '!bg-white font-bold text-2xl !p-5 flex !justify-center',
      content: 'bg-white',
    }"
  >
    <div class="flex flex-col gap-4 w-full h-full bg-white items-center">
      <a href="#about" class="text-xl">О нас</a>
      <a href="#services" class="text-xl">Услуги</a>
      <a href="#founder" class="text-xl">Основатель</a>
      <a href="#team" class="text-xl">Команда</a>
      <a href="#contacts" class="text-xl">Контакты</a>
    </div>
  </Drawer>
  <Transition name="fade">
    <div v-if="visible" class="fixed inset-0 bg-black/40 z-40" @click="visible = false"></div>
  </Transition>
  <div class="w-full h-[100px] bg-black-1 justify-between flex relative lg:px-30">
    <div class="flex lg:hidden items-center pr-8 absolute right-0 top-0 bottom-0">
      <Button
        icon="pi pi-bars"
        :pt="{ root: 'text-white', icon: 'text-white big-icon' }"
        @click="visible = true"
      />
    </div>
    <Image
      :pt="{
        root: 'flex w-full h-full pl-8 py-4',
      }"
      src="LOGO_White.svg"
      alt="Logo"
    />
    <div class="xl:gap-21 gap-6 mr-20 hidden lg:flex whitespace-nowrap">
      <a href="#about">
        <Button
          label="О нас"
          :pt="{
            root: 'mx-4 my-8',
            label: 'text-white font-bold text-xl hover:text-gray-400',
          }"
        />
      </a>
      <a href="#services">
        <Button
          label="Услуги"
          :pt="{
            root: 'mx-4 my-8',
            label: 'text-white font-bold text-xl hover:text-gray-400',
          }"
        />
      </a>
      <a href="#founder">
        <Button
          label="Основатель"
          :pt="{
            root: 'mx-4 my-8 ',
            label: 'text-white font-bold text-xl hover:text-gray-400',
          }"
        />
      </a>
      <a href="#team">
        <Button
          label="Команда"
          :pt="{
            root: 'mx-4 my-8 ',
            label: 'text-white font-bold text-xl hover:text-gray-400',
          }"
        />
      </a>
      <a href="#contacts">
        <Button
          label="Контакты"
          :pt="{
            root: 'mx-4 my-8 ',
            label: 'text-white font-bold text-xl hover:text-gray-400',
          }"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
import Drawer from 'primevue/drawer'
import { ref } from 'vue'
import type { preProcessFile } from 'typescript'

const visible = ref(false)
</script>
