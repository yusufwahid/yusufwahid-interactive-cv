<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'Muhammad Yusuf Nurwahid'
const displayText = ref('')
let charIndex = 0

// Fungsi untuk animasi mengetik
const typeWriter = () => {
  if (charIndex < fullText.length) {
    displayText.value += fullText.charAt(charIndex)
    charIndex++
    setTimeout(typeWriter, 150) // Kecepatan mengetik (ms)
  }
}

// Jalankan setelah komponen dimuat
onMounted(() => {
  // Mulai animasi setelah animasi slide-in selesai (sesuaikan delay jika perlu)
  setTimeout(typeWriter, 800)
})
</script>

<template>
  <section
    id="profil"
    class="container mx-auto px-6 py-16 md:py-[220px] flex flex-col md:flex-row items-center transition-colors duration-300"
  >
    <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya
        <br />
        <span
          :class="[
            'bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-400 bg-clip-text text-transparent hover:from-orange-600 hover:to-purple-600 dark:hover:from-orange-400 dark:hover:to-purple-500 transition-all duration-500 ease-in-out delay-100',
            'typing-effect',
          ]"
        >
          {{ displayText }}
        </span>
      </h1>
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 animate-slide-in-left"
        style="animation-delay: 400ms"
      >
        Membangun dan merancang aplikasi web, saat ini sedang menempuh studi S1 Informatika.
      </p>
      <!-- Button dan Icon dalam satu baris -->
      <div
        class="flex flex-col md:flex-row items-center md:justify-start justify-center gap-4 mb-4 animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        <a
          href="#proyek"
          class="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 inline-block"
        >
          Projek saya
        </a>
        <div class="flex space-x-6">
          <!-- GitHub -->
          <a
            href="https://github.com/yusufwahid"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/muhammad-yusuf-nurwahid-56a638373/"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <!-- Email -->
          <a
            href="mailto:yusufwahid@students.amikom.ac.id"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <picture>
        <div class="relative group">
          <img
            src="/profil.jpg"
            alt="Foto potret Muhammad Yusuf Nurwahid"
            width="420"
            height="420"
            loading="eager"
            decoding="async"
            class="w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg dark:shadow-2xl dark:shadow-black/25 hover:shadow-xl dark:hover:shadow-xl relative z-10"
          />
          <div
            class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-orange-500 group-hover:animate-border-draw"
          ></div>
        </div>
      </picture>
    </div>
  </section>
</template>

<style scoped>
.typing-effect::after {
  content: '|';
  animation: blink-caret 0.75s step-end infinite;
  color: #f97316; /* Warna kursor oranye */
  margin-left: 0.25rem;
  font-weight: normal; /* Pastikan kursor tidak tebal */
  font-size: 0.8em; /* ✅ Tambahkan ini untuk membuat kursor lebih pendek */
}

.dark .typing-effect::after {
  color: #fb923c; /* Warna oranye lebih terang untuk dark mode */
}

@keyframes blink-caret {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
