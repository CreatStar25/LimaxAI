---
title: "DeepSeek V4 diluncurkan secara resmi, harga API resmi diumumkan"
description: "Model seri DeepSeek V4 telah dirilis secara resmi, dengan harga API resmi lengkap diumumkan. Termasuk versi Pro dan Flash, mendukung konteks ultra-panjang 1 juta token, dan menyediakan layanan model besar berkinerja tinggi dan hemat biaya untuk pengembang."
tags: ["deepseek v4", "situs web resmi deepseek", "tutorial deepseek", "harga deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "id"
author: "DeepSeek HK"
---

Kata kunci: deepseek v4, situs web resmi deepseek, tutorial deepseek, harga deepseek v4

Tanggal publikasi: 25 April 2026

Penulis: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Mulai Menggunakan DeepSeek
  </a>
</div>

![DeepSeek V4 diluncurkan secara resmi, harga API resmi diumumkan](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

Hari ini, DeepSeek secara resmi mengumumkan rencana harga API untuk model seri V4 baru, yang menandai peluncuran komersial resmi dari model besar generasi berikutnya yang sangat dinanti-nantikan untuk pengembang di seluruh dunia. Seri DeepSeek V4 mencakup dua versi: Flash dan Pro, keduanya mendukung konteks ultra-panjang 1 juta token. Sementara tingkat kinerja telah meningkat secara signifikan, efisiensi biaya juga telah dioptimalkan, memberikan opsi yang lebih kompetitif untuk pengembangan aplikasi AI.

## Deskripsi Model dan Harga
Harga API DeepSeek dihitung per juta token. Token adalah unit teks terkecil yang dikenali oleh model, yang bisa berupa kata, angka, atau bahkan tanda baca. Biaya dihitung berdasarkan jumlah total token input dan output yang benar-benar diproses oleh model.

### Perbandingan Detail Parameter Model
| Fitur | deepseek-v4-flash* | deepseek-v4-pro |
|---------|---------------------|------------------|
| URL Dasar (format OpenAI) | https://api.deepseek.com | https://api.deepseek.com |
| URL Dasar (format Anthropic) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| Versi Model | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| Mode Berpikir | Mendukung baik mode tidak berpikir maupun mode berpikir (default). Lihat Mode Berpikir untuk instruksi peralihan | Mendukung baik mode tidak berpikir maupun mode berpikir (default). Lihat Mode Berpikir untuk instruksi peralihan |
| Panjang Konteks | 1 juta | 1 juta |
| Panjang Output Maksimum | Hingga 384 ribu | Hingga 384 ribu |
| Output JSON | ✓ | ✓ |
| Panggilan Alat | ✓ | ✓ |
| Penyelesaian Awalan Obrolan (Beta) | ✓ | ✓ |
| Penyelesaian FIM (Beta) | Hanya mode tidak berpikir | Hanya mode tidak berpikir |
| 1 juta token input (cache terpakai) | $0.028 | $0.145 |
| 1 juta token input (cache tidak terpakai) | $0.14 | $1.74 |
| 1 juta token output | $0.28 | $3.48 |

* Catatan: Nama model "deepseek-chat" dan "deepseek-reasoner" akan dihapus secara bertahap di masa mendatang. Untuk kompatibilitas, kedua nama ini saat ini masing-masing sesuai dengan mode tidak berpikir dan mode berpikir dari "deepseek-v4-flash".

## Aturan Pemotongan Biaya
Jumlah konsumsi aktual = penggunaan token × harga satuan yang sesuai. Biaya akan dipotong langsung dari saldo isi ulang atau saldo hadiah Anda. Ketika kedua saldo ada, sistem akan memprioritaskan penggunaan saldo hadiah.

Harga produk dapat disesuaikan sesuai dengan kondisi pasar, dan DeepSeek berhak akhir atas penyesuaian harga. Pengembang disarankan untuk mengisi ulang sesuai dengan kebutuhan penggunaan aktual dan secara teratur memeriksa halaman harga resmi untuk informasi terbaru.

## Analisis Keunggulan Utama
Sambil mempertahankan kinerja tinggi, seri DeepSeek V4 menerapkan strategi harga yang sangat kompetitif, yang sangat cocok untuk berbagai skenario aplikasi AI:

### Opsi Daya Komputasi Hemat Biaya
Versi deepseek-v4-flash menawarkan kinerja yang sangat baik dengan harga yang sangat rendah, sangat cocok untuk skenario dengan throughput tinggi dan persyaratan kecepatan respons yang tinggi, seperti layanan pelanggan cerdas, pembuatan konten, aplikasi obrolan reguler, dll. Harganya hanya $0.028 per juta token input ketika cache terpakai secara signifikan mengurangi biaya operasional aplikasi skala besar.

### Pengalaman Kinerja Unggulan
Versi deepseek-v4-pro dioptimalkan untuk tugas penalaran kompleks dan bidang profesional, dan berkinerja lebih baik dalam skenario seperti perhitungan matematis, pembuatan kode, pertanyaan pengetahuan profesional, cocok untuk skenario aplikasi profesional yang memerlukan output presisi tinggi.

### Dukungan Konteks Ultra-Panjang
Kedua versi mendukung konteks ultra-panjang 1 juta token dan panjang output maksimum 384 ribu token, dan dapat menangani tugas teks berukuran sangat besar seperti buku lengkap, dokumen panjang, kode proyek lengkap, memberikan dasar yang kuat untuk pengembangan aplikasi AI yang kompleks.

## Panduan Mulai Cepat
Memulai menggunakan DeepSeek V4 sangat mudah:
1. Kunjungi situs web resmi DeepSeek untuk mendaftar akun
2. Dapatkan kunci API
3. Lakukan panggilan antarmuka sesuai dengan dokumentasi resmi
4. Mulai membangun aplikasi AI Anda

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Mulai Menggunakan DeepSeek
  </a>
</div>

Peluncuran DeepSeek V4 menawarkan lebih banyak opsi bagi pengembang. Baik Anda pengembang individu maupun aplikasi tingkat perusahaan, Anda dapat menemukan solusi daya komputasi yang sesuai dengan kebutuhan Anda dalam sistem model ini. Dengan perbaikan berkelanjutan pada ekosistem model, kami percaya bahwa DeepSeek V4 akan menjadi landasan penting untuk pengembangan aplikasi AI, mendorong kelahiran lebih banyak produk inovatif.
