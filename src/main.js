import './assets/main.css'
import '@/css/dark.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


// elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
app.use(ElementPlus)

// elementplus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import i18n from './i18n';
app.use(i18n)