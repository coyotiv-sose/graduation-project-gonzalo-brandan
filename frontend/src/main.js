import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//import { useCounterStore } from './stores/counter' //

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
//app.component('Counter', Counter) //
app.use(router)

app.mount('#app')
