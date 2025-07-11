<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    // UBAH BARIS INI
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal memuat data proyek:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div v-if="projects.length" class="grid md:grid-cols-2 gap-8 md:gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
class="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg dark:border dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-orange-300/50 dark:hover:shadow-orange-500/40"        >
          <div class="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img
              :src="project.image"
              alt="Gambar Proyek"
              class="absolute inset-0 w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div class="relative z-10 p-4 md:p-6">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-orange-100 text-orange-800 dark:bg-orange-400/20 dark:text-orange-300 text-sm font-semibold px-2.5 py-0.5 rounded-full"
                >{{ t }}</span
              >
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-2 text-orange-600 dark:text-orange-400 font-semibold hover:underline"
              >Lihat Detail →</a
            >
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-600 dark:text-gray-400 pt-10">Memuat proyek...</div>
    </div>
  </section>
</template>
