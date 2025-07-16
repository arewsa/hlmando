<template>
  <div id="consultation" class="flex flex-col w-full bg-gray-100 lg:px-40 px-10 py-20">
    <h1 class="text-gray-800 2xl:text-5xl sm:text-4xl text-3xl font-bold">
      Заказать личную консультацию
    </h1>
    <form @submit.prevent="submitForm" class="flex flex-col gap-8 mt-15">
      <div
        class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1"
      >
        <InputText id="name" type="text" v-model="form.name" size="large" placeholder="Имя" />
      </div>
      <div
        class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1"
      >
        <InputText id="email" type="email" v-model="form.email" placeholder="E-mail" />
      </div>
      <div
        class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1"
      >
        <InputText id="company" type="text" v-model="form.company" placeholder="Компания" />
      </div>
      <div
        class="flex flex-col border-3 rounded-2xl 2xl:p-5 p-3 lg:w-2/5 sm:w-2/3 w-full border-yellow-1"
      >
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
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  email: '',
  comment: '',
})

const submitForm = () => {
  console.log(form.value)
}
</script>
