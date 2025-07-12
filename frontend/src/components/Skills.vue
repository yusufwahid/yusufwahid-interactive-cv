<script>
import SectionTitle from './SectionTitle.vue'; // Adjust path as needed

export default {
  name: 'Skills',
  components: { SectionTitle },
  data() {
    return {
      skills: [],
      isLoading: true,
      error: null,
    };
  },
  methods: {
    handleImageError(event, skill) {
      event.target.src = '/fallback-icon.png'; // Fallback image
    },
  },
  async mounted() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skills`);
      if (!response.ok) throw new Error('Failed to fetch skills data');
      this.skills = await response.json();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <section id="skill" class="py-20 relative overflow-hidden transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div v-if="isLoading" class="flex animate-pulse">
        <div class="flex" v-for="n in 2" :key="'skeleton-row-' + n">
          <div v-for="i in 8" :key="'skeleton-item-' + i" class="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mx-2 md:mx-4 min-w-[120px] md:min-w-[150px] h-[136px] md:h-[168px]"></div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <div v-else class="flex animate-slide-left">
        <div class="flex" v-for="n in 2" :key="'row-' + n">
          <div
            v-for="skill in skills"
            :key="skill.name + '-' + n"
            class="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg dark:border dark:border-gray-700 text-center transform hover:-translate-y-2 transition-transform duration-300 mx-2 md:mx-4 min-w-[120px] md:min-w-[150px]"
          >
            <img
              :src="skill.image"
              :alt="`${skill.name} icon`"
              class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 object-contain dark:invert"
              @error="handleImageError($event, skill)"
              width="64" height="64"
              loading="lazy"
              decoding="async"
            >
            <h3 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">{{ skill.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-2">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#111827] to-transparent pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#111827] to-transparent pointer-events-none"></div>
  </section>
</template>

<!-- <script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vuedotjs.svg' },
        { name: 'JavaScript', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg' },
        { name: 'Tailwind CSS', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg' },
        { name: 'Node.js', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg' },
        { name: 'Express.js', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg' },
        { name: 'PostgreSQL', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg' },
        { name: 'Git & GitHub', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg' },
        { name: 'HTML5 & CSS3', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg' },
      ]
    }
  },
  methods: {
    handleImageError(event, skill) {
      console.warn(`Failed to load image for ${skill.name}`);
      event.target.src = '/icons/default.png'; // Ensure default.png exists in public folder
    }
  }
}
</script> -->

<style scoped>
img {
  display: block;
  fill: currentColor;
}

.animate-slide-left {
  animation: slide-left 40s linear infinite;
}

@keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Ensure cards stay in a single row */
.flex {
  display: flex;
  white-space: nowrap;
}

/* Pause animation on hover */
/* .animate-slide-left:hover {
  animation-play-state: paused;
} */

/* Ensure container is relative for absolute positioning of gradients */
.relative {
  position: relative;
}
</style>
