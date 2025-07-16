<template>
  <div class="flex lg:hidden relative h-screen" id="about">
    <Image src="full_command.jpg" alt="command" class="-mt-10 sm:-mt-110 -z-1" />
    <div class="absolute top-10 flex flex-col w-full px-10 pt-10">
      <h1 class="text-white text-2xl sm:text-4xl font-bold">Soloveva Group</h1>
      <h2 class="text-white text-lg sm:text-2xl pt-5 leading-5 sm:leading-6">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами. Мы сопровождаем бизнес-клиентов от стратегического планирования до полного
        операционного аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </h2>
    </div>
  </div>
  <div id="about" class="hidden lg:flex w-full px-20 2xl:px-40 bg-gray-100 items-center">
    <div class="w-1/2 pr-5">
      <h1 class="text-black font-bold mb-5 xl:mb-10 2xl:mb-20 text-3xl xl:text-5xl">
        Soloveva Group
      </h1>
      <p class="text-black 2xl:text-2xl xl:text-xl text-base">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами. Мы сопровождаем бизнес-клиентов от стратегического планирования до полного
        операционного аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </p>
      <h2 class="text-black xl:text-3xl text-2xl font-bold mt-5 xl:mt-10 2xl:mt-15">Почему мы?</h2>
      <div class="flex flex-wrap gap-5 mt-5 2xl:mt-10">
        <div
          class="bg-gray-200 rounded-2xl shadow-md w-full md:w-1/5 flex flex-col justify-center items-center"
        >
          <h3 class="text-black 2xl:text-5xl xl:text-3xl text-xl w-full px-3">20+</h3>
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm w-full px-3">успешных кейсов</h3>
        </div>
        <div
          class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3 flex items-center justify-center"
        >
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm">
            Сотрудничество с передовыми сервисами и подрядчиками
          </h3>
        </div>
        <div
          class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3 flex items-center justify-center"
        >
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm">
            Инновационные решения в PR и продвижении
          </h3>
        </div>
        <div
          class="bg-gray-200 rounded-2xl shadow-md w-full md:w-1/3 p-3 flex items-center justify-center"
        >
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm">Международный опыт</h3>
        </div>
        <div
          class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/5 flex items-center justify-center"
        >
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm">Довольные клиенты</h3>
        </div>
        <div
          class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3 flex items-center justify-center"
        >
          <h3 class="text-black 2xl:text-2xl xl:text-base text-sm">Масштабируем бизнес</h3>
        </div>
      </div>
    </div>
    <Image
      src="command.jpg"
      alt="About Us"
      :pt="{
        root: 'w-1/2',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
</script>
