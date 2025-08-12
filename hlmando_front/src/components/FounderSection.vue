<template>
  <div id="founder" class="flex flex-col w-full bg-gray-100 items-center py-15 lg:py-[100px] lg:px-[120px] px-[20px]">
    <h1 class="font-[700] text-[30px] lg:text-[24px] text-[#0F1D40]">Об основателе</h1>
    <Image
      unstyled
      src="founder.jpg"
      :pt="{
        root: 'lg:w-[270px] w-1/2 mt-10 mb-[35px] lg:mt-15 lg:mb-[30px]',
        image: 'rounded-full',
      }"
    />
    <h2 class="text-[23px] lg:text-[16px] text-[#0F1D40] font-[700]">
      Соловьева Ольга Владимировна
    </h2>
    <h3 class="text-[14px] text-[#0F1D40] mt-[10px] mb-[72px] lg:mb-[30px]">
      Независимый эксперт в Aftermarket
    </h3>
    <p class="text-center text-[16px]/6 text-[#333333] px-[20px] lg:px-[160px] w-full ">
      Независимый эксперт в области Aftermarket с 20-летним опытом работы в дистрибуционном бизнесе.
      Специалист в области закупки, ВЭД, таможенного оформления, международной логистики и
      финансового агентирования. На ее счету запуск нескольких СТМ, работа в одном из крупнейших
      торгово-закупочных союзов, вывод новых брендов на рынок России, учреждение компаний в РФ и
      других странах, участие в международных форумах и конференциях, спикер отраслевых мероприятий.
    </p>
    <a href="#consultation" class="lg:w-1/3 w-2/3 mt-10 lg:mt-[65px] items-center justify-center flex">
      <Button
        label="Заказать консультацию"
        href="#consultation"
        unstyled
        :pt="{
          root: 'border-[1.21px] border-yellow-1 rounded-[7.25px] cursor-pointer hover:bg-gray-200 shadow-md py-[12px]',
          label: 'text-[#0F1D40] text-[16px] font-[700] px-[22px] my-[12px]',
        }"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
</script>
