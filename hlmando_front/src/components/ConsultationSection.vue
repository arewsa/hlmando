<template>
  <div id="consultation" class="flex flex-col w-full bg-gray-100 px-[35px] pt-[40px] pb-[120px]">
    <h1 class="text-[26px] text-[#333333] font-[600]">
      Заказать личную консультацию
    </h1>
    <form @submit.prevent="submitForm" class="flex flex-col gap-[23px] mt-15">
      <div
        class="flex flex-col  w-full border-[1.6px] px-[12px] py-[12px] rounded-[10px] border-yellow-1"
      >
        <InputText id="name" type="text" v-model="form.name" size="small" placeholder="Имя" />
      </div>
      <div
        class="flex flex-col border-[1.6px] px-[12px] py-[12px] rounded-[10px] border-yellow-1"
      >
        <InputText id="email" type="email" v-model="form.email" placeholder="E-mail" />
      </div>
      <div
        class="flex flex-col border-[1.6px] px-[12px] py-[12px] rounded-[10px] border-yellow-1"
      >
        <InputText id="company" type="text" v-model="form.company" placeholder="Компания" />
      </div>
      <div
        class="flex flex-col border-[1.6px] px-[12px] py-[12px] rounded-[10px] border-yellow-1"
      >
        <InputText id="comment" type="text" v-model="form.comment" placeholder="Комментарий" />
      </div>
      <Button
        unstyled
        label="Отправить заявку"
        type="submit"
        :pt="{
          root: 'w-full bg-yellow-1 rounded-[10px] cursor-pointer py-[18px] mt-[14px]',
          label: 'text-white text-[16px] font-[700]',
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
