<script setup>
defineProps({ title: String })
</script>
<template>
  <div class="mb-8 md:mb-12 text-center">

    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">{{ title }}</h2>

    <div class="w-20 md:w-24 h-1 bg-orange-600 dark:bg-orange-500 mx-auto mt-3 md:mt-4 rounded transition-colors duration-300"></div>

  </div>
</template>
