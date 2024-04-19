import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import './assets/index.postcss'
import { OhVueIcon, addIcons } from "oh-vue-icons"

// Importing only needed icons to reduce bundle size
import { CoGithub, IoHome } from "oh-vue-icons/icons"

addIcons(CoGithub, IoHome)

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(head)
app.use(createPinia())

app.component("v-icon", OhVueIcon);

app.mount('#app')
