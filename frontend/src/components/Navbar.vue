<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- LOGIKA STATE ---
const isMenuOpen = ref(false);
const theme = ref('light');
const isScrolled = ref(false);

// --- FUNGSI-FUNGSI ---
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  theme.value = newTheme;
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};

// Fungsi untuk mendeteksi scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// --- LOGIKA LIFECYCLE VUE ---
onMounted(() => {
  // Atur tema awal
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  theme.value = savedTheme;
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');

  // Tambahkan event listener untuk scroll
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Panggil sekali saat load untuk mengatur state awal

  // Logika untuk navigasi aktif (scroll-spy)
  // Dijalankan di sini agar tidak error saat menu mobile belum ada di DOM
  const sections = document.querySelectorAll('section[id]');
  if (sections.length === 0) return;

  const observerOptions = {
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    // Cari SEMUA link (desktop & mobile) setiap kali ada perubahan
    const allNavLinks = document.querySelectorAll('.nav-link');
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Hapus class aktif dari semua link
        allNavLinks.forEach(link => {
          link.classList.remove('nav-active');
        });

        // Tambahkan class aktif ke link yang sesuai (desktop dan mobile)
        const activeLinks = document.querySelectorAll(`.nav-link[href="#${id}"]`);
        activeLinks.forEach(link => {
          link.classList.add('nav-active');
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Hapus event listener saat komponen tidak lagi digunakan
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="sticky top-5 z-50 animate-fade-in">
    <nav :class="[
      'max-w-7xl mx-auto px-3 py-2 flex justify-between items-center border rounded-full transition-all duration-300',
      isScrolled
        ? 'bg-white/80 dark:bg-gray-800/80 shadow-lg dark:shadow-black/20 border-gray-100 dark:border-gray-700 backdrop-blur-lg'
        : 'bg-transparent dark:bg-transparent border-transparent'
    ]">
      <div class="flex items-center space-x-6 group">
        <div class="relative">
          <a href="#profil">
            <img
              src="/logo2.jpg"
              alt="Logo"
              class="w-12 h-12 rounded-full object-cover hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-orange-600 dark:hover:ring-orange-500"
            />
          </a>
        </div>
        <div class="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-200 bg-clip-text text-transparent hover:from-orange-600 hover:to-orange-400 dark:hover:from-orange-600 dark:hover:to-orange-400 transition-all duration-300">
          YusufWahid
        </div>
      </div>

      <ul class="hidden md:flex space-x-1 items-center">
    <li>
        <a href="#profil" class="nav-link px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group">
            Profil
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
    </li>
    <li>
        <a href="#pendidikan" class="nav-link px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group">
            Pendidikan
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
    </li>
    <li>
        <a href="#skill" class="nav-link px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group">
            Skill
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
    </li>
    <li>
        <a href="#proyek" class="nav-link px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group">
            Proyek
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
    </li>
    <li>
        <a href="#kontak" class="nav-link px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group">
            Kontak
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
    </li>
</ul>

      <div class="hidden md:block ml-4">
        <button @click="toggleTheme" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
          <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button>
      </div>

      <div class="md:hidden flex items-center">
        <button @click="toggleTheme" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button>
        <button @click="toggleMenu" class="ml-2 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="md:hidden mt-3 mx-3 absolute top-full left-0 right-0">
        <ul class="flex flex-col space-y-1 p-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl border border-gray-100 dark:border-gray-700 rounded-2xl">
            <li><a href="#profil" @click="closeMenu" class="nav-link block text-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 font-medium transition-colors">Profil</a></li>
            <li><a href="#pendidikan" @click="closeMenu" class="nav-link block text-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 font-medium transition-colors">Pendidikan</a></li>
            <li><a href="#skill" @click="closeMenu" class="nav-link block text-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 font-medium transition-colors">Skill</a></li>
            <li><a href="#proyek" @click="closeMenu" class="nav-link block text-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 font-medium transition-colors">Proyek</a></li>
            <li><a href="#kontak" @click="closeMenu" class="nav-link block text-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 font-medium transition-colors">Kontak</a></li>
        </ul>
    </div>
  </header>
</template>

<style scoped>
/** * =========================================
 * Animasi & Gaya Global
 * =========================================
 */

html {
  scroll-behavior: smooth;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}


/** * =========================================
 * Gaya Navigasi Aktif (Scroll-spy)
 * =========================================
 */

/* State aktif default (Light Mode) */
.nav-active {
  color: #f97316 !important; /* text-orange-600 */
}

/* State aktif untuk Dark Mode */
.dark .nav-active {
  color: #fb923c !important; /* text-orange-400 */
}

/* Efek garis bawah untuk link navigasi di desktop saat aktif */
.nav-active span {
  width: 100% !important;
  left: 0 !important;
}
</style>
