import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import MonApproche from './views/MonApproche.vue'

// Configuration des routes
const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/mon-approche', component: MonApproche }
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Création de l'application
const app = createApp(App)
app.use(router)
app.mount('#app')

