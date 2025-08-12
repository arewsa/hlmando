<template>
  <div id="team" class="flex flex-col w-full pl-[35px] lg:px-[140px]">
    <h1 class="text-[26px] text-[#0F1D40] font-[700] pt-[50px] pr-[45px]">Наша команда</h1>
    <p class="text-[16px] text-[#333333] font-[400] pt-[30px] pr-[45px]">
      Мы – это команда профессионалов с обширным опытом запуска разнообразных проектов в области
      запчастей как в России, так и за рубежом.
    </p>
    <p class="text-[16px] text-[#333333] font-[400] pr-[45px]">Наша экспертиза – ваш успех!</p>
    <div class="overflow-x-auto lg:hidden pt-[110px] pb-[70px]">
      <div class="inline-flex gap-10 snap-x">
        <div class="flex flex-col items-center w-[34vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="nastyaV.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-[10.77px] text-[#777777] font-[500] text-center">Анастасия Вилисова</h1>
          <h2 class="text-[9.42px] text-[#777777] font-[400] text-center">
            Финансы, Аудит, Налоги
          </h2>
        </div>
        <div class="flex flex-col items-center w-[34vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="maria.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-[10.77px] text-[#777777] font-[500] text-center">Мария Панченко</h1>
          <h2 class="text-[9.42px] text-[#777777] font-[400] text-center">
            Закупка, Логистика, ВЭД
          </h2>
        </div>
        <div class="flex flex-col items-center w-[34vw] sm:w-[40vw] snap-center">
          <Image
            unstyled
            src="nastyaSh.jpg"
            alt="Command"
            :pt="{
              image: 'rounded-full',
            }"
          />
          <h1 class="text-[10.77px] text-[#777777] font-[500] text-center">Анастасия Щербакова</h1>
          <h2 class="text-[9.42px] text-[#777777] font-[400] text-center">PR, Продажи</h2>
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
