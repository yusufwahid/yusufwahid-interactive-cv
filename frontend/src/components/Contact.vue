<template>
  <footer id="kontak" class="py-12 md:py-16  text-white transition-colors duration-300">
    <div class="container mx-auto px-6 text-center">

      <h1 class="text-3xl md:text-4xl text-gray-100 mb-4 font-bold">Hubungi Saya</h1>
      <p class="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk terhubung!
      </p>

      <a
        href="mailto:yusufwahid@students.amikom.ac.id"
        class="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors duration-300 inline-block mb-10"
      >
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/yusufwahid"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
          >GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/muhammad-yusuf-nurwahid-56a638373/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
          >LinkedIn</a
        >
      </div>

      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Muhammad Yusuf Nurwahid. Dibuat dengan 🧡
      </p>
    </div>
  </footer>
</template>
