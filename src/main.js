

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import axios from './axios'
app.config.globalProperties.$axios = axios
app.use(router).mount('#app')



// createApp(App).use(router).mount('#app')
