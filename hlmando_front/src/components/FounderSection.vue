<template>
  <div id="founder" class="flex flex-col w-full bg-gray-100 items-center py-10">
    <h1 class="font-bold 2xl:text-6xl xl:text-4xl text-2xl">Об основателе</h1>
    <Image
      unstyled
      src="founder.jpg"
      :pt="{
        root: 'lg:w-1/4 w-1/2 my-10',
        image: 'rounded-full',
      }"
    />
    <h2 class="text-black 2xl:text-4xl xl:text-3xl text-2xl font-bold text-center">
      Соловьева Ольга Владимировна
    </h2>
    <h3 class="text-black 2xl:text-3xl xl:text-xl text-lg lg:pb-10 mt-2 lg:mt-0 mb-15 lg:mb-0">
      Независимый эксперт в Aftermarket
    </h3>
    <p
      class="text-black 2xl:text-3xl xl:text-xl lg:text-lg text-base lg:mx-45 mx-15 leading-5 lg:leading-10 text-center"
    >
      Независимый эксперт в области Aftermarket с 20-летним опытом работы в дистрибуционном бизнесе.
      Специалист в области закупки, ВЭД, таможенного оформления, международной логистики и
      финансового агентирования. На ее счету запуск нескольких СТМ, работа в одном из крупнейших
      торгово-закупочных союзов, вывод новых брендов на рынок России, учреждение компаний в РФ и
      других странах, участие в международных форумах и конференциях, спикер отраслевых мероприятий.
    </p>
    <a href="#consultation" class="lg:w-1/3 w-2/3 mt-10 lg:mt-20 items-center justify-center flex">
      <Button
        label="Заказать консультацию"
        href="#consultation"
        unstyled
        :pt="{
          root: 'lg:border-3 border-2 border-yellow-1 rounded-2xl lg:p-5 p-2 cursor-pointer hover:bg-gray-200 shadow-md font-bold',
          label: 'text-black 2xl:text-4xl xl:text-2xl lg:text-xl text-base',
        }"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
</script>
