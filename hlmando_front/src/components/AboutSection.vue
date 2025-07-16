<template>
  <div class="flex flex-col lg:hidden relative" id="about">
    <Image src="full_command.jpg" alt="command" class="-mt-10 sm:-mt-110 -z-1" />
    <div class="absolute flex flex-col w-full px-[25px] pt-[20px]">
      <h1 class="text-white text-[36px] sm:text-4xl font-bold">Soloveva Group</h1>
      <h2 class="text-white text-[16px] sm:text-2xl pt-[24px] leading-5 sm:leading-6">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами.
      </h2>
      <h2 class="text-white text-[16px] sm:text-2xl pt-[24px] leading-5 sm:leading-6">
        Мы сопровождаем бизнес-клиентов от стратегического планирования до полного
        операционного аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </h2>
    </div>
    <div class="px-[25px] flex flex-col pt-[60px] w-5/6">
      <h1 class="text-[#333333] text-[32px] font-[600]">Почему мы?</h1>
      <div class="w-[200px] h-[200px] border-[2px] border-[#777777] rounded-[10px] custom-shadow mt-[42px] place-items-center relative">
        <h1 class="absolute top-6 left-6 text-[#777777] font-[500] text-[19px]">Более</h1>
        <div class="flex flex-col h-full w-full pl-[10px] pt-[50px]">
          <h1 class="text-center text-[91px] text-[#777777] leading-none font-[700] p-0">20</h1>
          <h2 class="text-center text-[13px] text-[#777777] font-[500]">успешных кейсов</h2>
        </div>
      </div>
      <div class="flex flex-col mt-[38px] gap-[54px]">
        <div class="flex flex-col gap-[54px]">
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-[#333333] text-[16px] font-[600]">Сильные партнёрства</h1>
            <p class="text-[#333333] text-[16px] font-[400]">Работаем с лучшими подрядчиками в логистике, маркетинге и IT</p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-[#333333] text-[16px] font-[600]">Международный охват</h1>
            <p class="text-[#333333] text-[16px] font-[400]">Запуски в Европе, Азии, СНГ. Сопровождение ВЭД и локализация</p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-[#333333] text-[16px] font-[600]">Нас рекомендуют</h1>
            <p class="text-[#333333] text-[16px] font-[400]">Большинство клиентов приходят по сарафанному радио</p>
          </div>
        </div>
        <div class="flex flex-col gap-[54px]">
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-[#333333] text-[16px] font-[600]">Растим бизнес клиентов</h1>
            <p class="text-[#333333] text-[16px] font-[400]">Помогаем расти: от пилота до федерального уровня</p>
          </div>
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-[#333333] text-[16px] font-[600]">Современный PR и digital</h1>
            <p class="text-[#333333] text-[16px] font-[400]">Эффективный PR, продвижение в отраслевых и digital-медиа</p>
          </div>
        </div>
      </div>
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
