import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)

app.mount('#app')
