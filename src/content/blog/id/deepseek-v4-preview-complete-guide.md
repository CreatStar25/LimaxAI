---
title: "Setelah 15 Bulan Menunggu, DeepSeek Akhirnya Memperkenalkan Pratinjau V4: Analisis Komprehensif"
description: "DeepSeek V4 Preview secara resmi dirilis, menampilkan dua model MoE (Pro dan Flash) dengan dukungan native untuk konteks 1 juta token, memberikan peningkatan kinerja yang signifikan sambil secara drastis mengurangi biaya inferensi. Artikel ini memberikan rincian terperinci mengenai arsitektur teknis, kinerja, dan harga DeepSeek V4."
tags: ["deepseek v4", "situs resmi deepseek", "tutorial deepseek", "harga deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "id"
author: "DeepSeek HK"
---

Artikel ini mengeksplorasi fitur teknis, kinerja, dan panduan penggunaan DeepSeek V4, memberikan analisis komprehensif mengenai keunggulan inti dari model bahasa besar generasi baru ini. Konten ditulis dengan gaya yang mudah diakses cocok untuk penggemar teknologi maupun pengembang.

Kata kunci: deepseek v4, situs resmi deepseek, tutorial deepseek, harga deepseek v4.

Tanggal Publikasi: 25 April 2026
Penulis: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Mulai Menggunakan DeepSeek
  </a>
</div>

![Analisis Komprehensif Pratinjau DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. Peluncuran Resmi Pratinjau DeepSeek V4

Pada 24 April, DeepSeek secara resmi mengumumkan peluncuran V4 Preview. Pembaruan besar ini datang 15 bulan setelah perilisan V3.2, menandai terobosan penting lainnya dalam peta jalan teknologi model besar DeepSeek.

Menurut pengenalan resmi, seri V4 mencakup dua model MoE:
- **DeepSeek-V4-Pro**: 1,6T total parameter, 49B parameter yang diaktifkan
- **DeepSeek-V4-Flash**: 284B total parameter, 13B parameter yang diaktifkan

Kedua model secara native mendukung konteks 1 juta token, mewakili lompatan kualitatif dalam kemampuan pemrosesan teks panjang. Perlu dicatat bahwa di bawah pengaturan konteks 1M:
- FLOPs inferensi per-token V4-Pro hanya 27% dari V3.2, dengan KV Cache hanya 10%
- V4-Flash bahkan lebih ekstrem, mengurangi metrik ini menjadi 10% dan 7% masing-masing

Ini berarti bahwa sementara panjang konteks telah berkembang hampir 8 kali lipat dari 128K V3.2 menjadi 1M V4, kebutuhan komputasi per-token justru menurun secara signifikan, mencapai terobosan baik dalam kemampuan konteks panjang maupun efisiensi inferensi.

Pihak resmi DeepSeek secara jelas menyatakan bahwa V4 Preview diposisikan sebagai pembaruan infrastruktur, terutama merekonstruksi struktur biaya konteks panjang untuk mempersiapkan jalan bagi tahap selanjutnya dari penskalaan waktu pengujian dan tugas jangka panjang. Tingkat kemampuannya saat ini masih tertinggal dari GPT-5.4 dan Gemini-3.1-Pro, dengan jalur pengembangan kira-kira 3-6 bulan di belakang model sumber tertutup mutakhir.

## 2. Dua Model, Tiga Mode Inferensi: Fitur Inti V4

### 2.1 Parameter Model dan Keunggulan Biaya

Sorotan terbesar dari seri V4 adalah optimalisasi signifikan pada kurva biaya. Di bawah pengaturan konteks 1M token:
- V4-Pro: FLOPs inferensi per-token hanya 27% dari V3.2, KV Cache hanya 10%
- V4-Flash: FLOPs inferensi per-token hanya 10% dari V3.2, KV Cache hanya 7%

Peningkatan efisiensi ini secara drastis mengurangi biaya inferensi untuk konteks level juta, menyediakan solusi yang layak secara ekonomi untuk pemrosesan teks panjang, analisis dokumen, dan skenario lainnya.

### 2.2 Sistem Harga API

DeepSeek melanjutkan strategi harga bernilai tinggi yang konsisten:
- **V4-Pro**: ¥1 per juta token input (cache hit) atau ¥12 (cache miss), ¥24 per juta token output
- **V4-Flash**: ¥0,2 per juta token input (cache hit) atau ¥1 (cache miss), ¥2 per juta token output

### 2.3 Tiga Tingkat Intensitas Inferensi

Setiap model menawarkan tiga mode inferensi untuk memenuhi berbagai kebutuhan skenario:
1. **Non-think**: Mode output langsung, kecepatan respons tercepat
2. **Think High**: Mode berpikir mendalam reguler, menyeimbangkan kecepatan dan kualitas
3. **Think Max**: Menyuntikkan instruksi kuat, memaksimalkan panjang konteks dan output, melepaskan kemampuan penuh model

Mode Max secara signifikan meningkatkan kinerja model: skor V4-Pro-Max meningkat dari 34,5 menjadi 37,7 dalam tes HLE, dan dari 85,5 menjadi 90,2 dalam tes Apex Shortlist, dengan mengorbankan penggandaan jumlah token output.

## 3. Kinerja Tes Benchmark

Menurut data tes resmi yang dirilis oleh DeepSeek, seri V4 tampil sangat baik dalam beberapa evaluasi:

### 3.1 Tes Pengetahuan dan Penalaran
- DeepSeek-V4-Pro-Max menempati peringkat pertama di Apex Shortlist (90,2%) dan Codeforces (Rating 3206), dua tugas penalaran/pemrograman hardcore, menunjukkan kemampuan logika dan algoritma yang sangat kuat
- Gemini-3.1-Pro-High memimpin di SimpleQA Verified (75,6%)
- Claude dan GPT memiliki kekuatan masing-masing di berbagai proyek, dengan kesenjangan keseluruhan yang kecil

### 3.2 Tes Kemampuan Agen
- Keempat model tampil setara dalam tugas SWE Verified (semua mencapai 80,6%)
- DeepSeek unggul di Terminal Bench 2.0 (67,9%) dan Toolathlon (51,8%), menunjukkan keunggulan yang jelas dalam skenario eksekusi instruksi kompleks dan pemanggilan alat

Pihak resmi menyatakan bahwa kemampuan Agen DeepSeek-V4-Pro telah meningkat secara signifikan dibandingkan generasi sebelumnya, "menawarkan pengalaman pengguna yang lebih baik daripada Sonnet 4.5, dengan kualitas pengiriman mendekati mode non-thinking Opus 4.6, meskipun masih tertinggal dari mode thinking Opus 4.6 sampai batas tertentu."

### 3.3 Pengetahuan Dunia dan Kemampuan Umum
- V4-Pro secara signifikan mengungguli model open-source lainnya dalam evaluasi pengetahuan dunia, hanya sedikit tertinggal dari model sumber tertutup teratas Gemini-Pro-3.1
- Dalam matematika, STEM, dan evaluasi kode kompetitif, V4-Pro melampaui semua model open-source yang saat ini dievaluasi secara publik, mencapai level model sumber tertutup teratas dunia
- Sebagai model ekonomis, V4-Flash memiliki cadangan pengetahuan yang sedikit lebih sedikit daripada versi Pro, tetapi kemampuan penalaran yang serupa. Dengan parameter dan nilai aktivasi yang lebih kecil, menyediakan layanan API yang lebih cepat dan lebih hemat biaya
- Dalam evaluasi Agen, V4-Flash tampil sebanding dengan versi Pro pada tugas sederhana, tetapi masih memiliki kesenjangan pada tugas dengan tingkat kesulitan tinggi

## 4. Inovasi Teknologi Inti: Menulis Ulang Mekanisme Perhatian

Perubahan teknis paling inti dari V4 adalah pada lapisan perhatian, secara fundamental menyelesaikan masalah efisiensi inferensi konteks panjang.

Dalam mekanisme perhatian Transformer tradisional, setiap token perlu menghitung kemiripan dengan semua token sebelumnya. Ketika konteks meluas dari 100K menjadi 1M, biaya komputasi meningkat 100 kali lipat, yang merupakan hambatan inti yang mencegah adopsi konteks panjang secara luas.

V4 mengadopsi mekanisme perhatian ganda inovatif dengan lapisan yang bergantian:
1. **CSA (Compressed Sparse Attention)**: Pertama menggabungkan cache KV untuk setiap 4 token menjadi satu ringkasan, kemudian memungkinkan setiap kueri hanya memilih top-k ringkasan yang paling relevan untuk perhitungan perhatian, baik memampatkan konten yang akan diproses maupun hanya berfokus pada informasi yang relevan
2. **HCA (Heavy Compressed Attention)**: Menggunakan kompresi yang lebih agresif, menggabungkan setiap 128 token menjadi satu ringkasan, kemudian menerapkan perhatian padat pada ringkasan yang tersisa tanpa seleksi sparse

Kedua mekanisme perhatian bergantian dan ditumpuk, dikombinasikan dengan cabang jendela geser yang menangani ketergantungan detail antar token terdekat, membentuk pendekatan gabungan "butir kasar + butir halus, sparse + padat".

Dari perspektif evolusi teknologi, DeepSeek V2 dan V3 terutama mengikuti rute sparsifikasi parameter (total parameter besar tetapi hanya mengaktifkan ahli parsial per token). V4 membuka jalur baru sparsifikasi konteks (kompresi KV, seleksi top-k, tingkat kompresi berlapis) di atas basis ini. Ini adalah pertama kalinya DeepSeek menerapkan konsep "sparsifikasi" pada struktur inti Transformer.

Selain lapisan perhatian, V4 memiliki dua peningkatan arsitektural penting lainnya:
1. Meningkatkan koneksi residual tradisional menjadi mHC (Manifold Constrained Hyperconnection), membuat propagasi maju dan mundur jaringan dalam lebih stabil melalui kendala matematis
2. Mengganti AdamW dengan pengoptimal Muon untuk sebagian besar modul, mencapai konvergensi lebih cepat dan pelatihan yang lebih stabil

Ini adalah pertama kalinya DeepSeek secara bersamaan memodifikasi tiga komponen Transformer inti: perhatian, koneksi residual, dan pengoptimal.

## 5. Inovasi Paradigma Pasca-Pelatihan: Distilasi Model Ahli

Dibandingkan dengan perubahan arsitektur, inovasi V4 dalam metode pasca-pelatihan bahkan lebih patut diperhatikan.

V3.2 menggunakan pendekatan "RL campuran", mengoptimalkan beberapa tujuan secara bersamaan dengan pembelajaran penguatan. V4 mengadopsi strategi dua langkah "diferensiasi lalu penyatuan":
1. **Fase Diferensiasi**: Untuk domain berbeda seperti matematika, kode, Agen, dan pengikutan instruksi, latih model ahli terpisah untuk setiap domain. Para ahli ini pertama-tama menjalani penyetelan halus yang diawasi dengan data domain berkualitas tinggi, kemudian pembelajaran penguatan dengan algoritma GRPO, masing-masing ahli mencapai kinerja optimal di domain khususnya
2. **Fase Penyatuan**: Menggunakan metode On-Policy Distillation (OPD) untuk "mensintesis" lebih dari sepuluh ahli domain kembali ke dalam model siswa yang terpadu. Setelah siswa menghasilkan jawaban, ia mencocokkan distribusi output dari ahli yang "paling memahami masalah ini", menyerap kemampuan ahli melalui penjajaran pada level logits

Pendekatan ini dapat dipahami sebagai menyuling kemampuan dari beberapa "siswa terbaik" domain ke dalam satu model. Untuk menyelesaikan tantangan rekayasa dalam memuat lebih dari sepuluh model guru parameter triliunan secara bersamaan, DeepSeek membongkar semua bobot guru ke penyimpanan terdistribusi, hanya menyembunyikan keadaan tersembunyi dari lapisan terakhir setiap guru. Selama pelatihan, sampel diurutkan berdasarkan indeks guru, memastikan hanya satu kepala guru yang berada di memori GPU pada satu waktu.

Pendekatan ini menghindari masalah interferensi kemampuan yang umum dalam "RL campuran" tradisional, memungkinkan model mencapai kinerja level teratas di berbagai domain.

## 6. Optimasi Khusus Kemampuan Agen

DeepSeek V4 mencakup adaptasi dan optimasi khusus untuk produk Agen arus utama, dengan peningkatan kinerja dalam tugas kode, pembuatan dokumen, dan skenario lainnya.

Optimasi khusus V4 untuk kemampuan Agen meliputi:
1. Selama pasca-pelatihan, Agen diperlakukan sebagai arah ahli independen bersama matematika dan kode, dengan pelatihan terpisah
2. Format pemanggilan alat diubah dari JSON menjadi struktur XML dengan token khusus, mengurangi tingkat kesalahan escape
3. Jejak penalaran antar-turn sepenuhnya dipertahankan dalam skenario pemanggilan alat, tidak lagi dihapus setiap turn seperti di V3.2
4. Platform sandbox DSec yang dibangun sendiri, dengan satu klaster mampu mengelola ratusan ribu instance sandbox secara bersamaan, mendukung pelatihan dan evaluasi pembelajaran penguatan Agen

Pihak resmi menyatakan bahwa kemampuan Agen V4-Pro "lebih baik daripada Sonnet 4.5, dengan kualitas pengiriman mendekati mode non-thinking Opus 4.5, meskipun masih tertinggal dari mode thinking Opus 4.6 sampai batas tertentu."

![Arsitektur Teknis DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Kesimpulan

DeepSeek V4 Preview adalah model besar dengan inovasi teknologi yang luar biasa. Melalui rekonstruksi mekanisme perhatian dan inovasi paradigma pelatihan, ia mempertahankan kemampuan penalaran yang kuat sambil secara drastis mengurangi biaya inferensi konteks panjang, mempersiapkan jalan bagi aplikasi praktis konteks level juta.

Baik untuk skenario profesional yang memerlukan kemampuan penalaran yang kuat maupun aplikasi skala besar yang mengejar efektivitas biaya, seri V4 menyediakan pilihan yang sesuai. Jika Anda ingin merasakan kemampuan luar biasa dari DeepSeek V4, selamat datang untuk menggunakannya langsung melalui platform kami.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Mulai Menggunakan DeepSeek
  </a>
</div>
