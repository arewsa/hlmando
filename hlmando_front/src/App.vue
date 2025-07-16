<template>
  <div class="hidden lg:block w-[1440px] mx-auto">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection :descs="descs" :descIndex="descIndex" :handleDescIndex="handleDescIndex" />
    <FounderSection />
    <TeamSection />
    <ConsultationSection />
    <ContactsSection />
  </div>
  <div class="lg:hidden flex flex-col">
    <div class="h-screen flex flex-col">
      <Header />
      <HeroSection />
    </div>
    <div class="flex flex-col">
      <div class="bg-[#070506] h-[30px] w-full"></div>
      <AboutSection />
    </div>
    <ServicesSection :descs="descs" :descIndex="descIndex" :handleDescIndex="handleDescIndex" />
    <FounderSection />
    <TeamSection />
    <ConsultationSection />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import FounderSection from './components/FounderSection.vue'
import TeamSection from './components/TeamSection.vue'
import ConsultationSection from './components/ConsultationSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import { ref } from 'vue'

const descIndex = ref(0)

const handleDescIndex = (index: number) => {
  descIndex.value = index
  console.log(descIndex.value)
}

const descs = [
  {
    title: 'Закупки',
    description: [
      'Сопровождение закупок, поддержка ВЭД и поиск международных поставщиков',
      'Технический анализ и тестирование продукции в специализированных лабораториях',
      'Контрактное производство в РФ',
      'Языковое сопровождение бизнес кейса',
    ],
    icon: 'Procurement.png',
  },
  {
    title: 'Логистика',
    description: [
      'Таможенное оформление',
      'Сертификация и выпуск разрешительной документации в соответствии с требованиями и регламентами РФ',
      'Маркировка «Честный знак»',
      'Международная транспортная логистика',
      'Подбор и анализ складских 3PL услуг',
    ],
    icon: 'Logistics.png',
  },
  {
    title: 'Продажи и маркетинг',
    description: [
      'Вывод иностранных брендов на рынок РФ',
      'Анализ конкурентной среды: емкость рынка, статистика продаж, ассортиментный и ценовой анализ',
      'Ценообразование',
      'Создание сбытовой цепи',
      'Работа с e-commerce площадками',
      'Реклама и продвижение в ведущих отраслевых СМИ',
      'Продвижение в сети',
    ],
    icon: 'Sales.png',
  },
  {
    title: 'Финансы',
    description: ['Финансовая логистика', 'Аудит', 'Бухгалтерская поддержка'],
    icon: 'Finance.png',
  },
]
</script>
