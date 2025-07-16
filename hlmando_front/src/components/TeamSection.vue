<template>
  <div id="team" class="flex flex-col w-full lg:py-20 lg:px-40 py-10">
    <h1 class="text-black 2xl:text-4xl xl:text-3xl text-2xl font-bold px-10 lg:px-0">
      Наша команда
    </h1>
    <p
      class="text-black 2xl:text-3xl xl:text-xl lg:text-lg text-base xl:w-1/2 lg:w-2/3 lg:pt-10 pt-5 px-10 lg:px-0"
    >
      Мы – это команда профессионалов с обширным опытом запуска разнообразных проектов в области
      запчастей как в России, так и за рубежом.
    </p>
    <p
      class="text-black 2xl:text-3xl xl:text-xl lg:text-lg text-base xl:w-1/2 lg:w-2/3 pb-10 px-10 lg:px-0"
    >
      Наша экспертиза – ваш успех!
    </p>
    <div class="overflow-x-auto lg:hidden w-screen">
      <div class="inline-flex gap-10 px-10 pt-10 pb-5 snap-x">
        <div class="flex flex-col items-center w-[45vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="nastyaV.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-gray-600 text-xs text-center">Анастасия Вилисова</h1>
          <h2 class="text-gray-500 text-xs text-center">Финансы, Аудит, Налоги</h2>
        </div>
        <div class="flex flex-col items-center w-[45vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="maria.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-gray-600 text-xs text-center">Мария Панченко</h1>
          <h2 class="text-gray-500 text-xs text-center">Закупка, Логистика, ВЭД</h2>
        </div>
        <div class="flex flex-col items-center w-[45vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="nastyaSh.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-gray-600 text-xs text-center">Анастасия Щербакова</h1>
          <h2 class="text-gray-500 text-xs text-center">PR, Продажи</h2>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 2xl:gap-40 xl:w-4/5 w-full"
    >
      <div class="flex flex-col items-center">
        <Image
          unstyled
          src="nastyaV.jpg"
          alt="Command"
          :pt="{
            image: 'rounded-full',
          }"
        />
        <h1 class="text-gray-600 2xl:text-3xl xl:text-xl text-base text-center">
          Анастасия Вилисова
        </h1>
        <h2 class="text-gray-500 2xl:text-3xl xl:text-xl text-base text-center">
          Финансы, Аудит, Налоги
        </h2>
      </div>
      <div class="flex flex-col items-center">
        <Image
          unstyled
          src="maria.jpg"
          alt="Command"
          :pt="{
            image: 'rounded-full',
          }"
        />
        <h1 class="text-gray-600 2xl:text-3xl xl:text-xl text-base text-center">Мария Панченко</h1>
        <h2 class="text-gray-500 2xl:text-3xl xl:text-xl text-base text-center">
          Закупка, Логистика, ВЭД
        </h2>
      </div>
      <div class="flex flex-col items-center">
        <Image
          unstyled
          src="nastyaSh.jpg"
          alt="Command"
          :pt="{
            image: 'rounded-full',
          }"
        />
        <h1 class="text-gray-600 2xl:text-3xl xl:text-xl text-base text-center">
          Анастасия Щербакова
        </h1>
        <h2 class="text-gray-500 2xl:text-3xl xl:text-xl text-base text-center">PR, Продажи</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
</script>
