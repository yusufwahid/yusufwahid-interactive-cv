<template>
  <header class="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 animate-fade-in border-b border-gray-100">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3 group">
        <!-- Logo -->
        <div class="relative">
          <img
            src="../assets/images/logo2.jpg"
            alt="Logo"
            class="w-12 h-12 rounded-full object-cover hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-blue-200"
          />
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <!-- Nama -->
        <div class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent hover:from-orange-600 hover:to-purple-600 transition-all duration-300">
          Muhammad Yusuf Nurwahid
        </div>
      </div>

      <ul class="flex space-x-1 items-center">
        <li>
          <a
            href="#profil"
            class="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group"
          >
            Profil
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#pendidikan"
            class="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group"
          >
            Pendidikan
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#skill"
            class="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group"
          >
            Skill
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            class="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group"
          >
            Proyek
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            class="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-300 font-medium relative group"
          >
            Kontak
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
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

/* Smooth scrolling untuk anchor links */
html {
  scroll-behavior: smooth;
}

/* Active state untuk menu yang sedang aktif */
.nav-active {
  color: #f97316 !important;
  background-color: #fff7ed !important;
}

.nav-active span {
  width: 100% !important;
  left: 0 !important;
}
</style>
