---
title: "🛵 JogjaMotor — Sistem Manajemen & Operasional Rental Motor"
description: "simple rental, aplikasi pemesanan motor online"
date: "2026-10-16"
tags:
  - simple-rental
---

**JogjaMotor** adalah aplikasi web operasional rental motor wisata terpadu yang menghubungkan proses pemesanan tamu secara mandiri (*self-service booking*), operasional lapangan kurir (*mobile digital inspection & handover*), serta administrasi bisnis dan rekapitulasi keuangan.

---

## 🌟 Sorotan Fitur Utama

### 1. 🌐 Portal Tamu & Pemesanan Online
* **Durasi Cerdas 24 Jam**: Perhitungan durasi fleksibel berbasis kelipatan 24 jam dengan toleransi gratis (<=30 menit) dan kompensasi lembur (*overtime*) per jam.
* **Ketersediaan Unit Real-Time**: Mencegah pemesanan bentrok (*anti double-booking*) pada rentang jadwal yang sama.
* **Tarif Dinamis (Dynamic Pricing)**:
  * Tarif khusus akhir pekan (*Weekend: Jumat – Minggu*).
  * Kalender musim libur (*Peak Season*: Lebaran, Nataru, Long Weekend) dengan skema tambahan (*surcharge*) atau harga tetap (*fixed*).
  * Rincian tarif kalender transparan hari demi hari.
* **Tiket Digital & Tracking**: Halaman tiket mandiri pelanggan untuk memantau status verifikasi DP, identitas kurir pengantar, dan bukti reservasi.

### 2. 📱 Portal Petugas Lapangan (Mobile-First)
* **Klaim & Navigasi Tugas**: Antarmuka ringkas khusus smartphone untuk kurir pengantar (*delivery*) dan penjemput (*return*).
* **Berita Acara Digital (Handover & Return)**:
  * Ceklis kondisi motor, jumlah helm, jas hujan, STNK, dan tingkat bensin.
  * Konfirmasi penahanan dan pengembalian fisik KTP jaminan.
  * Verifikasi kontak darurat keluarga/kerabat.
  * Penagihan pelunasan sisa sewa (tunai / transfer bank) di lokasi.
  * Tanda tangan digital pelanggan langsung di layar sentuh ponsel kurir.

### 3. 🖥️ Workspace Admin
* **Dashboard Operasional Responsif**: Menampilkan antaran hari ini, unit yang sedang disewa, dan booking terbaru dengan tata letak adaptif bebas *scroll* horizontal.
* **Manajemen Reservasi**: Verifikasi bukti transfer DP, alokasi unit motor fisik & penugasan kurir, penyesuaian nominal DP, serta fitur revisi jadwal (*reschedule*) dengan kalkulasi ulang biaya otomatis.
* **Master Data Terpusat**: Unit motor fisik (plat nomor, warna, tahun), tipe motor & merek pabrikan (otomatis generate gambar thumbnail), zona pengantaran & ongkir, dan akun staf.

### 4. 📊 Laporan & Rekapitulasi Bisnis
* **4 Dimensi Analisis**: Rincian Keuangan/Omset, Tingkat Utilisasi Armada Motor, Kinerja & Setoran Kas Kurir, serta Sebaran Titik Antar-Jemput Populer.
* **Ekspor Fleksibel**:
  * Unduh spreadsheet **Excel / CSV** dengan format angka rupiah dan kompatibilitas UTF-8 BOM.
  * Cetak **PDF Resmi** ber-Kop Surat formal dengan ringkasan statistik dan kolom tanda tangan pimpinan/operasional.

---

## 🛠️ Arsitektur & Teknologi

| Komponen | Teknologi |
| :--- | :--- |
| **Framework Backend** | [Laravel 11 / 12](https://laravel.com) (PHP 8.3) |
| **Database** | MySQL / SQLite |
| **Gaya Antarmuka** | [Tailwind CSS v4](https://tailwindcss.com) & [Alpine.js](https://alpinejs.dev) |
| **Format Gambar** | Otomatis kompresi WEBP & pembuatan thumbnail ganda |
| **Kualitas Kode** | [Laravel Pint](https://laravel.com/docs/pint) (PSR-12) |
| **Test Suite** | [PHPUnit](https://phpunit.de) (50 Feature & Unit Tests) |

---

## 🚀 Panduan Instalasi Cepat

### 1. Kloning Repositori & Pasang Dependensi
```bash
git clone <url-repository> sewamotor
cd sewamotor

composer install
npm install
```

### 2. Konfigurasi Lingkungan
```bash
cp .env.example .env
php artisan key:generate
```
> Sesuaikan konfigurasi database (`DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`) pada berkas `.env`.

### 3. Migrasi & Data Awal (Seed)
```bash
php artisan migrate --seed
php artisan storage:link
```

### 4. Kompilasi Aset & Jalankan Server
```bash
npm run build
php artisan serve
```
Buka peramban pada alamat: `http://localhost:8000`

---

## 🔑 Akun Bawaan Sistem

Setelah menjalankan database seeder, Anda dapat masuk menggunakan akun berikut:

| Peran (Role) | Email | Password | Akses URL |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@rentaljogja.com` | `password` | `/admin` |
| **Petugas Lapangan** | `budi@rentaljogja.com` | `password` | `/staff/tasks` |

---

## 🧪 Pengujian & Kualitas Kode

Aplikasi dilengkapi dengan rangkaian pengujian fitur otomatis menyeluruh (*comprehensive automated feature tests*):

```bash
# Menjalankan seluruh test suite (50 tests, 266 assertions)
php artisan test --compact

# Memeriksa dan merapikan standar format kode PHP
php vendor/bin/pint
```

---

## 📄 Lisensi
Sistem ini dirilis di bawah lisensi terbuka [MIT License](LICENSE).
