# Aplikasi Stack Indonesia

Proyek ini dibuat dengan  stack TypeScript modern yang menggabungkan React, TanStack Router, Hono, TRPC, dan lainnya.

## Fitur-Fitur

- **TypeScript** - Untuk keamanan tipe dan pengalaman developer yang lebih baik
- **TanStack Router** - Routing berbasis file dengan keamanan tipe penuh
- **React Native** - Membangun aplikasi mobile menggunakan React
- **Expo** - Tools untuk pengembangan React Native
- **TailwindCSS** - CSS utility-first untuk pengembangan UI yang cepat
- **shadcn/ui** - Komponen UI yang dapat digunakan kembali
- **Hono** - Framework server yang ringan dan performan
- **tRPC** - API yang aman tipe dari ujung ke ujung
- **Bun** - Runtime environment
- **Drizzle** - ORM yang mengutamakan TypeScript
- **SQLite/Turso** - Mesin database
- **Autentikasi** - Autentikasi email & password dengan Better Auth
- **PWA** - Dukungan Progressive Web App
- **Biome** - Linting dan formatting
- **Husky** - Git hooks untuk kualitas kode
- **Tauri** - Membangun aplikasi desktop native
- **Starlight** - Situs dokumentasi dengan Astro
- **Turborepo** - Sistem build monorepo yang dioptimalkan

## Memulai

Pertama, install dependensi:

```bash
npm install
```
## Pengaturan Database

Proyek ini menggunakan SQLite dengan Drizzle ORM.

1. Jalankan database SQLite lokal:
```bash
cd apps/server && npm run db:local
```

2. Perbarui file `.env` Anda di direktori `apps/server` dengan detail koneksi yang sesuai jika diperlukan.

3. Terapkan skema ke database Anda:
```bash
npm run db:dorong
```

Kemudian, jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3001](http://localhost:3001) di browser Anda untuk melihat aplikasi web.
Gunakan aplikasi Expo Go untuk menjalankan aplikasi mobile.
API berjalan di [http://localhost:3000](http://localhost:3000).



## Struktur Proyek

```
aplikasi-stack-indonesia/
├── apps/
│   ├── web/         # Aplikasi frontend (React + TanStack Router)
│   ├── native/      # Aplikasi mobile (React Native, Expo)
│   ├── docs/        # Situs dokumentasi (Astro Starlight)
│   └── server/      # Backend API (Hono, TRPC)
```

## Script yang Tersedia

- `npm run dev`: Jalankan semua aplikasi dalam mode pengembangan
- `npm run bangun`: Build semua aplikasi
- `npm run dev:web`: Jalankan hanya aplikasi web
- `npm run dev:server`: Jalankan hanya server
- `npm run periksa-tipe`: Periksa tipe TypeScript di semua aplikasi
- `npm run dev:mobile`: Jalankan server pengembangan React Native/Expo
- `npm run db:dorong`: Dorong perubahan skema ke database
- `npm run db:studio`: Buka UI studio database
- `cd apps/server && npm run db:local`: Jalankan database SQLite lokal
- `npm run periksa`: Jalankan formatting dan linting Biome
- `cd apps/web && npm run generate-pwa-assets`: Generate aset PWA
- `cd apps/web && npm run desktop:dev`: Jalankan aplikasi desktop Tauri dalam pengembangan
- `cd apps/web && npm run desktop:build`: Build aplikasi desktop Tauri
- `cd apps/docs && npm run dev`: Jalankan situs dokumentasi
- `cd apps/docs && npm run build`: Build situs dokumentasi

============== By Pak-Idi_Skansapung ===================
