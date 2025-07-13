// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import animateOnScroll from './directives/animateOnScroll' // <-- Impor
import cursorTrail from './directives/cursorTrail' // <-- Impor cursor trail

const app = createApp(App)
app.directive('animate-on-scroll', animateOnScroll) // <-- Daftarkan
app.directive('cursor-trail', cursorTrail) // <-- Daftarkan cursor trail
app.use(router)
app.mount('#app')
