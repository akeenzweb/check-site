import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import AosVue from "aos-vue";
import "aos/dist/aos.css";


createApp(App).use(store).use(AosVue).use(router).mount('#app')


