<template>
  <section id="profil" class="container mx-auto px-6 py-24 md:py-40 flex flex-col md:flex-row items-center transition-colors duration-300">

    <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya
        <br>
        <span class="bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-400 bg-clip-text text-transparent hover:from-orange-600 hover:to-purple-600 dark:hover:from-orange-400 dark:hover:to-purple-500 transition-all duration-300">
          Muhammad Yusuf Nurwahid
        </span>
      </h1>
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 animate-slide-in-left"
        style="animation-delay: 400ms"
      >
        Mahasiswa S1 Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>
      <a
        href="#kontak"
        class="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        Hubungi Saya
      </a>
    </div>

    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="/profil.jpg"
        alt="Foto Profil"
        class="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover shadow-lg dark:shadow-2xl dark:shadow-black/25"
      />
    </div>

  </section>
</template>
