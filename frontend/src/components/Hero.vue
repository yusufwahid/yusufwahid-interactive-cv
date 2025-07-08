<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex- col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1
        class="text-5xl font-bold text-gray-800 mb-4 animate-slide- in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya
        <br>
        <span class="bg-gradient-to-r from-orange-800 to-orange-600 bg-clip-text text-transparent hover:from-orange-600 hover:to-purple-600 transition-all duration-300 ">Muhammad Yusuf Nurwahid</span>
        </br>
      </h1>
      <p class="text-xl text-gray-600 mb-8 animate-slide-in-left" style="animation-delay: 400ms">
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
      src="../assets/images/profil.jpg"
    alt="Foto Profil"
    class="w-80 h-80 rounded-full object-cover shadow-lg"
  />
</div>
  </section>
</template>
