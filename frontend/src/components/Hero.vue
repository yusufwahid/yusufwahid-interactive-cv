<script setup>
import { ref, onMounted } from 'vue'

const fullText = "Muhammad Yusuf Nurwahid"
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
<section id="profil" class="container mx-auto px-6 py-16 md:py-[220px] flex flex-col md:flex-row items-center transition-colors duration-300">
      <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya
        <br>
        <span
          :class="['bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-400 bg-clip-text text-transparent hover:from-orange-600 hover:to-purple-600 dark:hover:from-orange-400 dark:hover:to-purple-500 transition-all duration-300', 'typing-effect']"
        >
          {{ displayText }}
        </span>
      </h1>
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 animate-slide-in-left"
        style="animation-delay: 400ms"
      >
      Membangun dan merancang aplikasi web, saat ini sedang menempuh studi S1 Informatika.        </p>
      <a
        href="#kontak"
        class="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        Hubungi Saya
      </a>
    </div>

    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <picture>
        <img
          src="/profil.jpg"
          alt="Foto potret Muhammad Yusuf Nurwahid"
          width="420"
          height="420"
          loading="eager"
          decoding="async"
          class="w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg dark:shadow-2xl dark:shadow-black/25 hover:shadow-xl dark:hover:shadow-xl"
        />
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
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
