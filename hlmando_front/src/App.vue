<template>
  <div class="w-full h-24 bg-black-1 justify-between flex relative">
    <div class="flex lg:hidden items-center pr-4 absolute right-0 top-0 bottom-0">
      <i class="pi pi-bars text-white" :style="{ fontSize: '2rem' }"></i>
    </div>
    <Image
      :pt="{
        root: 'flex w-full h-full px-4 py-4',
      }"
      src="LOGO_White.svg"
      alt="Logo"
    />
    <div class="xl:gap-16 gap-6 mr-20 hidden lg:flex whitespace-nowrap">
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
  <div
    class="flex w-full 2xl:h-150 sm:h-125 h-75 bg-black-1 mt-0.5 lg:justify-center lg:items-center flex-col relative"
  >
    <h1
      class="text-white 2xl:text-7xl xl:text-6xl lg:text-5xl hidden lg:block font-bold font-cygre"
    >
      Экспертиза — не в словах, а в действиях
    </h1>
    <div class="bg-yellow-1 w-40 h-0.5 mt-10 hidden lg:block"></div>
    <div class="flex flex-col justify-center h-full pl-5 lg:hidden">
      <h1 class="text-white text-4xl sm:text-6xl font-bold font-cygre">Экспертиза</h1>
      <h1 class="text-white text-4xl sm:text-6xl font-bold font-cygre">— не в словах,</h1>
      <h1 class="text-white text-4xl sm:text-6xl font-bold font-cygre">а в действиях</h1>
      <div class="bg-yellow-1 w-6 sm:w-12 h-0.75 mt-3"></div>
    </div>
    <Image
      unstyled
      src="LION_White_cropped.svg"
      alt="Logo"
      :pt="{
        root: 'rotate-y-180 sm:h-2/3 h-1/2 absolute bottom-0 right-0 opacity-25',
        image: 'h-full w-auto',
      }"
    />
  </div>
  <div class="flex lg:hidden relative">
    <Image src="full_command.jpg" alt="command" class="-mt-10 sm:-mt-100 -z-1" />
    <div class="absolute top-10 flex flex-col w-full px-10 pt-10">
      <h1 class="text-white text-2xl sm:text-4xl font-bold">Soloveva Group</h1>
      <h2 class="text-white text-lg sm:text-2xl pt-5 leading-5 sm:leading-6">
        Soloveva Group – это группа компаний, решающих разные бизнес-задачи в отрасли торговли
        автокомпонентами. Мы сопровождаем бизнес-клиентов от стратегического планирования до полного
        операционного аутсорса в закупках, ВЭД, логистике, продажах, маркетинге и финансах.
      </h2>
    </div>
  </div>
  <div class="lg:hidden flex flex-col w-full bg-gray-100 items-center py-10">
    <h1 class="text-black text-3xl font-bold">Почему мы?</h1>
    <div class="flex flex-col gap-5 mt-10 px-5 w-full">
      <div class="flex gap-2 bg-gray-200 py-5 rounded-2xl shadow-md items-center justify-center">
        <h2 class="text-black text-3xl font-bold">20+</h2>
        <h3 class="text-black text-2xl">успешных кейсов</h3>
      </div>
      <div class="flex bg-gray-200 rounded-2xl shadow-md items-center justify-center py-5">
        <h1 class="text-black text-2xl text-center">
          Сотрудничество с передовыми сервисами и подрядчиками
        </h1>
      </div>
      <div class="flex bg-gray-200 rounded-2xl shadow-md items-center justify-center py-5">
        <h1 class="text-black text-2xl text-center">Инновационные решения в PR и продвижении</h1>
      </div>
      <div class="flex bg-gray-200 rounded-2xl shadow-md items-center justify-center py-5">
        <h1 class="text-black text-2xl text-center">Международный опыт</h1>
      </div>
      <div class="flex bg-gray-200 rounded-2xl shadow-md items-center justify-center py-5">
        <h1 class="text-black text-2xl text-center">Довольные клиенты</h1>
      </div>
      <div class="flex bg-gray-200 rounded-2xl shadow-md items-center justify-center py-5">
        <h1 class="text-black text-2xl text-center">Масштабируем бизнес</h1>
      </div>
    </div>
  </div>
  <div class="lg:hidden overflow-x-auto snap-x py-10 w-screen">
    <div class="inline-flex">
      <div v-for="item in descs" :key="item.title" class="snap-start sm:w-[95vw] w-[90vw] px-4">
        <DescriptionCardSmall
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
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
  <div id="services" class="hidden lg:flex flex-col lg:w-full my-25 2xl:px-40 px-20">
    <h1 class="text-black text-4xl font-bold">Консалтинг</h1>

    <div class="grid grid-cols-4 gap-6 mt-6">
      <div
        @click="handleDescIndex(0)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-cart-arrow-down icon-responsive"></i>
        <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl">Закупки</h1>
      </div>

      <div
        @click="handleDescIndex(1)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-truck icon-responsive"></i>
        <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl">Логистика</h1>
      </div>

      <div
        @click="handleDescIndex(2)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-percentage icon-responsive"></i>
        <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl">Продажи и маркетинг</h1>
      </div>

      <div
        @click="handleDescIndex(3)"
        class="bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl shadow-md aspect-square flex flex-col justify-around cursor-pointer"
      >
        <i class="pi pi-bitcoin icon-responsive"></i>
        <h1 class="text-black 2xl:text-3xl xl:text-2xl text-xl">Финансы</h1>
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
        <div class="flex flex-col items-center w-[45vw] snap-center">
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
        <div class="flex flex-col items-center w-[45vw]">
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
        <div class="flex flex-col items-center w-[45vw]">
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
  <div id="consultation" class="flex flex-col w-full bg-gray-100 lg:px-40 px-10 py-20">
      <h1 class="text-gray-800 2xl:text-5xl sm:text-4xl text-3xl font-bold">
        Заказать личную консультацию
      </h1>
    <form @submit.prevent="submitForm" class="flex flex-col gap-8 mt-15">
      <div class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1">
        <InputText id="name" type="text" v-model="form.name" size="large" placeholder="Имя" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1">
        <InputText id="email" type="email" v-model="form.email" placeholder="E-mail" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1">
        <InputText id="company" type="text" v-model="form.company" placeholder="Компания" />
      </div>
      <div class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1">
        <InputText id="comment" type="text" v-model="form.comment" placeholder="Комментарий" />
      </div>
      <Button
        unstyled
        label="Отправить заявку"
        type="submit"
        :pt="{
          root: 'lg:w-2/5 sm:w-2/3 w-full lg:mt-10 mt-5 2xl:p-5 p-3 bg-yellow-1 rounded-2xl cursor-pointer',
          label: 'text-white 2xl:text-3xl xl:text-2xl text-xl',
        }"
      />
    </form>
  </div>
  <div id="contacts" class="w-full bg-black-1 h-150 relative">
    <h1 class="text-white 2xl:text-5xl sm:text-4xl text-3xl font-bold lg:pl-40 pl-10 lg:pt-15 pt-5">Контакты</h1>
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
import DescriptionCardSmall from './components/DescriptionCardSmall.vue'
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
