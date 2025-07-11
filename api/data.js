// backend/data.js
const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMK Negeri 3 Yogyakarta', major: 'Multimedia' },
    { id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Seyegan', major: 'Umum' },
    { id: 4, period: '2011 - 2017', institution: 'SD Negeri Pete', major: 'Umum' }
];
const skills = [
        { name: 'Vue.js', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vuedotjs.svg' },
        { name: 'JavaScript', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg' },
        { name: 'Tailwind CSS', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg' },
        { name: 'Node.js', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg' },
        { name: 'Express.js', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg' },
        { name: 'PostgreSQL', level: 'Menengah', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg' },
        { name: 'Git & GitHub', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg' },
        { name: 'HTML5 & CSS3', level: 'Mahir', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg' },
];
const projects = [
  {
    title: 'Website Toko Online',
    image: '/project1.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: '/project2.jpg',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['Vue.js', 'Laravel'],
    link: '#',
  },
];
module.exports = { educationHistory, skills, projects };
