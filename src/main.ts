import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./App.vue') },
    { path: '/composition', component: () => import('./Composition/Composition.vue') },
    { path: '/setup', component: () => import('./Setup/Setup.vue') },
    { path: '/options', component: () => import('./Options/Options.vue') },
  ]
})

createApp(Main).use(router).mount('#app')
