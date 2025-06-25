<template>
  <div class="w-full h-full bg-black-1 justify-between hidden md:flex">
    <Image
      :pt="{
        root: 'flex m-4 w-43 h-16 ml-10',
      }"
      src="white-image.png"
      alt="Logo"
    />
    <div class="flex xl:gap-16 gap-6 mr-20">
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
          root: 'mx-4 my-8 ',
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
  <div class="flex w-full h-150 bg-black-1 mt-0.5 justify-center items-center flex-col relative">
    <h1 class="text-white text-7xl font-bold">Экспертиза - не в словах, а в действиях</h1>
    <div class="bg-yellow-1 w-40 h-0.5 mt-10"></div>
    <Image
      src="white-image-cropped.png"
      alt="Logo"
      class="absolute bottom-0 right-0 rotate-y-180 opacity-25"
    />
  </div>
  <div id="about" class="flex w-full px-40 bg-gray-100">
    <div class="w-1/2 pt-25">
      <h1 class="text-black text-5xl font-bold mb-20">Soloveva Group</h1>
      <p class="text-black text-2xl">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами. Мы сопровождаем бизнес-клиентов от стратегического планирования до полного
        операционного аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </p>
      <h2 class="text-black text-3xl font-bold mt-15">Почему мы?</h2>
      <div class="flex flex-wrap gap-5 mt-10">
        <div class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/5">
          <h3 class="text-black text-5xl mt-3">20+</h3>
          <p class="text-black text-2xl">успешных кейсов</p>
        </div>
        <div class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3">
          <h3 class="text-black text-2xl">Сотрудничество с передовыми сервисами и подрядчиками</h3>
        </div>
        <div class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3">
          <h3 class="text-black text-2xl">Инновационные решения в PR и продвижении</h3>
        </div>
        <div class="bg-gray-200 rounded-2xl shadow-md w-full md:w-1/3 p-3">
          <h3 class="text-black text-2xl mt-3">Международный опыт</h3>
        </div>
        <div class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/5">
          <h3 class="text-black text-2xl">Довольные клиенты</h3>
        </div>
        <div class="bg-gray-200 p-5 rounded-2xl shadow-md w-full md:w-1/3">
          <h3 class="text-black text-2xl">Масштабируем бизнес</h3>
        </div>
      </div>
    </div>
    <Image
      src="command.jpg"
      alt="About Us"
      :pt="{
        root: 'w-1/2 my-auto',
      }"
    />
  </div>
  <div id="services" class="flex flex-col md:w-full my-25 px-40">
    <h1 class="text-black text-4xl font-bold">Консалтинг</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div
        @click="handleDescIndex(0)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-cart-arrow-down" style="font-size: 8rem"></i>
        <h1 class="text-black text-3xl">Закупки</h1>
      </div>

      <div
        @click="handleDescIndex(1)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-truck" style="font-size: 8rem"></i>
        <h1 class="text-black text-3xl">Логистика</h1>
      </div>

      <div
        @click="handleDescIndex(2)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-percentage" style="font-size: 8rem"></i>
        <h1 class="text-black text-3xl">Продажи и маркетинг</h1>
      </div>

      <div
        @click="handleDescIndex(3)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-bitcoin" style="font-size: 8rem"></i>
        <h1 class="text-black text-3xl">Финансы</h1>
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
      />
    </Transition>
  </div>
  <div id="founder" class="flex flex-col w-full bg-gray-100 items-center py-20">
    <h1 class="font-bold text-6xl">Об основателе</h1>
    <Image
      unstyled
      src="founder.jpg"
      :pt="{
        root: 'w-1/4 my-10',
        image: 'rounded-full',
      }"
    />
    <h2 class="text-black text-4xl font-bold">Соловьева Ольга Владимировна</h2>
    <h3 class="text-black text-3xl my-5">Независимый эксперт в Aftermarket</h3>
    <p class="text-black text-3xl mx-45 text-center">
      Независимый эксперт в области Aftermarket с 20-летним опытом работы в дистрибуционном бизнесе.
      Специалист в области закупки, ВЭД, таможенного оформления, международной логистики и
      финансового агентирования. На ее счету запуск нескольких СТМ, работа в одном из крупнейших
      торгово-закупочных союзов, вывод новых брендов на рынок России, учреждение компаний в РФ и
      других странах, участие в международных форумах и конференциях, спикер отраслевых мероприятий.
    </p>
    <Button
      label="Заказать консультацию"
      unstyled
      :pt="{
        root: 'w-1/3 mt-20 border-3 border-yellow-1 rounded-2xl p-5 cursor-pointer hover:bg-gray-200 shadow-md',
        label: 'text-black text-4xl',
      }"
    />
  </div>
  <div id="team" class="flex flex-col w-full py-20 px-40">
    <h1 class="text-black text-4xl font-bold">Наша команда</h1>
    <p class="text-black text-3xl w-1/2 pt-10">
      Мы – это команда профессионалов с обширным опытом запуска разнообразных проектов в области
      запчастей как в России, так и зарубежом.
    </p>
    <p class="text-black text-3xl w-1/2 pb-10">Наша экспертиза – ваш успех!</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 w-4/5">
      <div class="flex flex-col items-center">
        <Image
          unstyled
          src="nastyaV.jpg"
          alt="Command"
          :pt="{
            image: 'rounded-full',
          }"
        />
        <h1 class="text-gray-600 text-3xl text-center">Анастасия Вилисова</h1>
        <h2 class="text-gray-500 text-3xl text-center">Финансы, Аудит, Налоги</h2>
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
        <h1 class="text-gray-600 text-3xl text-center">Мария Панченко</h1>
        <h2 class="text-gray-500 text-3xl text-center">Закупка, Логистика, ВЭД</h2>
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
        <h1 class="text-gray-600 text-3xl text-center">Анастасия Щербакова</h1>
        <h2 class="text-gray-500 text-3xl text-center">PR, Продажи</h2>
      </div>
    </div>
  </div>
  <div id="consultation" class="flex flex-col w-full bg-gray-100 px-40 py-20">
    <h1 class="text-gray-800 text-5xl font-bold">Заказать личную консультацию</h1>
    <form @submit.prevent="submitForm" class="flex flex-col gap-8 mt-15">
      <div class="flex flex-col border-3 rounded-2xl p-5 w-2/5 border-yellow-1">
        <InputText id="name" type="text" v-model="form.name" size="large" placeholder="Имя" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl p-5 w-2/5 border-yellow-1">
        <InputText id="email" type="email" v-model="form.email" placeholder="E-mail" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl p-5 w-2/5 border-yellow-1">
        <InputText id="company" type="text" v-model="form.company" placeholder="Компания" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl p-5 w-2/5 border-yellow-1">
        <InputText id="comment" type="text" v-model="form.comment" placeholder="Комментарий" />
      </div>
      <Button
        unstyled
        label="Отправить заявку"
        type="submit"
        :pt="{
          root: 'w-2/5 mt-10 p-5 bg-yellow-1 rounded-2xl cursor-pointer',
          label: 'text-white text-3xl',
        }"
      />
    </form>
  </div>
  <div id="contacts" class="w-full bg-black-1 h-150 relative">
    <h1 class="text-white text-5xl font-bold pl-40 pt-15">Контакты</h1>
    <div class="w-full absolute bottom-20 flex justify-center">
      <div class="bg-yellow-1 w-1/8 h-1"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
import { ref } from 'vue'
import DescriptionCard from './components/DescriptionCard.vue'
import InputText from 'primevue/inputtext'

const form = ref({
  name: '',
  company: '',
  email: '',
  comment: '',
})

const submitForm = () => {
  console.log(form.value)
}

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
    icon: 'pi pi-cart-arrow-down',
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
    icon: 'pi pi-truck',
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
    icon: 'pi pi-percentage',
  },
  {
    title: 'Финансы',
    description: ['Финансовая логистика', 'Аудит', 'Бухгалтерская поддержка'],
    icon: 'pi pi-bitcoin',
  },
]
</script>
