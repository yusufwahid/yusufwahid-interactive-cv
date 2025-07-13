<script setup>
import { RouterView } from 'vue-router'
import ParticleBackground from '@/components/ParticleBackground.vue'
</script>
<template>
  <div class="font-sans" v-cursor-trail>
    <ParticleBackground />
    <RouterView />
  </div>
</template>
