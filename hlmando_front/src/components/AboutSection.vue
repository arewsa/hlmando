<template>
  <div id="about" class="flex flex-col lg:hidden relative">
    <Image src="full_command.jpg" alt="command" class="-mt-10 sm:-mt-110 -z-1" />
    <div class="absolute flex flex-col w-full px-[25px] pt-[30px]">
      <h1 class="text-white text-[36px] sm:text-4xl font-bold">Soloveva Group</h1>
      <h2 class="text-white text-[16px] sm:text-2xl pt-[24px] leading-5 sm:leading-6">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами.
      </h2>
      <h2 class="text-white text-[16px] sm:text-2xl pt-[24px] leading-5 sm:leading-6">
        Мы сопровождаем бизнес-клиентов от стратегического планирования до полного операционного
        аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </h2>
    </div>
    <div class="bg-[#F2F4F7] pb-[60px]">
      <div class="px-[25px] flex flex-col pt-[60px] w-5/6">
        <h1 class="text-[#333333] text-[32px] font-[600]">Почему мы?</h1>
        <div
          class="w-[200px] h-[200px] border-[2px] border-[#777777] rounded-[10px] custom-shadow-mobile mt-[42px] place-items-center relative"
        >
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
              <p class="text-[#333333] text-[16px] font-[400]">
                Работаем с лучшими подрядчиками в логистике, маркетинге и IT
              </p>
            </div>
            <div class="flex flex-col gap-[10px]">
              <h1 class="text-[#333333] text-[16px] font-[600]">Международный охват</h1>
              <p class="text-[#333333] text-[16px] font-[400]">
                Запуски в Европе, Азии, СНГ. Сопровождение ВЭД и локализация
              </p>
            </div>
            <div class="flex flex-col gap-[10px]">
              <h1 class="text-[#333333] text-[16px] font-[600]">Нас рекомендуют</h1>
              <p class="text-[#333333] text-[16px] font-[400]">
                Большинство клиентов приходят по сарафанному радио
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-[54px]">
            <div class="flex flex-col gap-[10px]">
              <h1 class="text-[#333333] text-[16px] font-[600]">Растим бизнес клиентов</h1>
              <p class="text-[#333333] text-[16px] font-[400]">
                Помогаем расти: от пилота до федерального уровня
              </p>
            </div>
            <div class="flex flex-col gap-[10px]">
              <h1 class="text-[#333333] text-[16px] font-[600]">Современный PR и digital</h1>
              <p class="text-[#333333] text-[16px] font-[400]">
                Эффективный PR, продвижение в отраслевых и digital-медиа
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:flex w-full px-[120px] bg-gray-100 flex-col">
    <div class="flex justify-between">
      <div class="w-1/2 pr-[25px]">
        <h1 class="text-[#0F1D40] font-[700] text-[28px] mt-[100px]">Soloveva Group</h1>
        <p class="text-[#333333] text-[18px]/7 mt-[30px]">
          Soloveva Group — это группа компаний, объединённых одной целью: помогать бизнесу в сфере
          автокомпонентов расти быстрее, работать эффективнее и выходить на новые рынки.
        </p>
        <p class="text-[#333333] text-[18px]/7 mt-[20px]">
          Мы сопровождаем клиентов на всех этапах: от стратегического планирования и аналитики до
          полного операционного аутсорса — в закупках, ВЭД, логистике, продажах, маркетинге и
          финансах.
        </p>
        <p class="text-[#333333] text-[18px]/7 mt-[20px]">
          Работаем с производителями, дистрибьюторами и сетевыми ритейлерами. Наш опыт — десятки
          успешных запусков брендов и проектов, как в России, так и за рубежом.
        </p>
        <a href="#services">
          <Button
            class="w-[395px] border-[#C49551] border-[2px] custom-shadow h-[70px] rounded-xl mt-[70px] cursor-pointer"
          >
            <p class="text-[#0F1D40] text-[20px] font-[700]">Посмотреть направления</p>
          </Button>
        </a>
      </div>
      <Image
        src="command.jpg"
        alt="About Us"
        :pt="{
          root: 'w-[550px]',
        }"
      />
    </div>
    <div class="bg-[#F2F4F7] mb-[100px]">
      <div class="flex flex-col mt-[50px] w-full">
        <h1 class="text-[#0F1D40] text-[26px] font-[700]">Почему мы?</h1>
        <div class="flex gap-[90px] mt-[60px]">
          <div
            class="w-[300px] h-[300px] border-[3px] border-[#777777] rounded-[12px] custom-shadow-mobile place-items-center relative"
          >
            <h1 class="absolute top-[30px] left-[40px] text-[#777777] text-[30px]">Более</h1>
            <div class="flex flex-col h-full w-full pl-[40px] pt-[78px]">
              <h1 class="text-center text-[140px] text-[#777777] leading-none font-[700]">20</h1>
              <h2 class="text-center text-[20px] text-[#777777] font-[500]">успешных кейсов</h2>
            </div>
          </div>
          <div class="grid grid-row-2 gap-[70px] items-center">
            <div class="flex gap-[60px]">
              <div class="flex flex-col gap-[10px] w-[233px]">
                <h1 class="text-[#333333] text-[16px] font-[600]">Сильные партнёрства</h1>
                <p class="text-[#333333] text-[16px] font-[400]">
                  Работаем с лучшими подрядчиками в логистике, маркетинге и IT
                </p>
              </div>
              <div class="flex flex-col gap-[10px] w-[233px]">
                <h1 class="text-[#333333] text-[16px] font-[600]">Международный охват</h1>
                <p class="text-[#333333] text-[16px] font-[400]">
                  Запуски в Европе, Азии, СНГ. Сопровождение ВЭД и локализация
                </p>
              </div>
              <div class="flex flex-col gap-[10px] w-[233px]">
                <h1 class="text-[#333333] text-[16px] font-[600]">Нас рекомендуют</h1>
                <p class="text-[#333333] text-[16px] font-[400]">
                  Большинство клиентов приходят по сарафанному радио
                </p>
              </div>
            </div>
            <div class="flex gap-[60px]">
              <div class="flex flex-col gap-[10px] w-[233px]">
                <h1 class="text-[#333333] text-[16px] font-[600]">Растим бизнес клиентов</h1>
                <p class="text-[#333333] text-[16px] font-[400]">
                  Помогаем расти: от пилота до федерального уровня
                </p>
              </div>
              <div class="flex flex-col gap-[10px] w-[233px]">
                <h1 class="text-[#333333] text-[16px] font-[600]">Современный PR и digital</h1>
                <p class="text-[#333333] text-[16px] font-[400]">
                  Эффективный PR, продвижение в отраслевых и digital-медиа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
</script>
