<script>
import SectionTitle from './SectionTitle.vue' // Adjust path as needed

export default {
  name: 'Education',
  components: { SectionTitle },
  data() {
    return {
      educationHistory: [],
      isLoading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/education`)
      if (!response.ok) throw new Error('Failed to fetch education data')
      this.educationHistory = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.isLoading = false
    }
  },
}
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gray-50/60 dark:bg-gray-900/60 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative mt-12">
        <div
          class="absolute h-full border-r-2 border-gray-200 dark:border-gray-700 top-0 left-4 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
        ></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="relative mb-8">
          <div
            class="backdrop-blur-sm absolute w-4 h-4 bg-orange-600 rounded-full z-10 ring-8 ring-gray-50/50 dark:ring-gray-900/50 top-1 left-4 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 transition-colors duration-300"
          ></div>

          <div
            :class="[
              'ml-12 md:ml-0', // Margin kiri untuk mobile, reset di desktop
              // Logika untuk tata letak desktop (kiri/kanan)
              index % 2 === 0
                ? 'md:mr-[calc(50%+1rem)] md:pr-8 md:text-right'
                : 'md:ml-[calc(50%+1rem)] md:pl-8 md:text-left',
            ]"
          >
            <div
              class="bg-transparent dark:bg-transparent group hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-900 from-orange-50 to-orange-100 p-4 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg dark:hover:shadow-orange-500/20 hover:shadow-orange-200/50 border border-transparent dark:border-transparent dark:hover:border-gray-700"
            >
              <p class="font-semibold text-orange-600 dark:text-orange-400">{{ edu.period }}</p>
              <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                {{ edu.institution }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
