# 🚀 Yusuf Wahid Interactive CV

[🌐 Demo Live](https://yusufwahid-interactive-cv.vercel.app/)

## 📋 Deskripsi

Ini adalah proyek _portfolio_ interaktif milik **Muhammad Yusuf Nurwahid**, menampilkan CV, pengalaman, pendidikan, keahlian, dan proyek-proyek yang pernah dikerjakan. Website ini dibangun dengan stack modern, responsif, dan memiliki tampilan yang menarik serta animasi interaktif.

## ✨ Fitur Utama

- 🎯 Hero section dengan nama, foto, dan animasi gradien
- 📚 Daftar pendidikan, keahlian, dan proyek
- 📧 Kontak (Email, GitHub, LinkedIn) dengan ikon SVG custom
- 🧭 Navigasi dengan efek blur dan transisi halus
- 🌙 Mode gelap (dark mode)
- 🔄 Data dinamis dari backend (Node.js + PostgreSQL/Neon)
- 🚀 Deploy di Vercel (frontend & backend)

## 🛠️ Teknologi yang Digunakan

- **Frontend:** Vue 3, Vite, Tailwind CSS
- **Backend:** Node.js, Express, PostgreSQL (Neon)
- **Deployment:** Vercel

## 🚀 Cara Menjalankan Secara Lokal

### 1. 📥 Clone Repository

```bash
git clone <repo-url>
cd porto_yusuf
```

### 2. ⚙️ Setup Backend

```bash
cd backend
npm install
# Buat file .env dan isi DATABASE_URL sesuai Neon
npm start
```

### 3. 🎨 Setup Frontend

```bash
cd ../frontend
npm install
# Buat file .env dan isi VITE_API_URL sesuai backend
npm run dev
```

Frontend berjalan di http://localhost:5173 dan backend di http://localhost:3000 (default).

## 📁 Struktur Folder

- `frontend/` : Source code Vue + Tailwind
- `backend/` : API Express + koneksi database

## 📄 Lisensi

MIT

---

> 🌐 Website ini dapat diakses secara online di: [https://yusufwahid-interactive-cv.vercel.app/](https://yusufwahid-interactive-cv.vercel.app/)
