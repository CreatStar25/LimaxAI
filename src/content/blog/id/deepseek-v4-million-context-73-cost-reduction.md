---
title: "DeepSeek V4: Konteks 1J Token, Pengurangan Biaya 73%"
description: "Model seri DeepSeek V4 dirilis secara resmi, mendukung konteks 1 juta token, dengan biaya inferensi berkurang 73% dibanding generasi sebelumnya. Termasuk versi Pro dan Flash, menyediakan opsi model besar berkinerja tinggi dan hemat biaya untuk pengembang AI."
tags: ["deepseek v4", "situs web resmi deepseek", "tutorial deepseek", "harga deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "id"
author: "DeepSeek HK"
---

Kata kunci: deepseek v4, situs web resmi deepseek, tutorial deepseek, harga deepseek v4

Tanggal publikasi: 24 April 2026

Penulis: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Mulai Menggunakan DeepSeek
  </a>
</div>

![DeepSeek V4: Konteks 1J Token, Pengurangan Biaya 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Hari ini, DeepSeek secara resmi mengumumkan peluncuran dan open source versi pratinjau seri DeepSeek-V4, sistem model andalan generasi berikutnya setelah V3.2. Rilis ini mencakup dua model: DeepSeek-V4-Pro dan DeepSeek-V4-Flash, keduanya mengadopsi arsitektur MoE dengan skala parameter total masing-masing 1,6T (49B diaktifkan) dan 284B (13B diaktifkan), dan keduanya mendukung konteks maksimum 1 juta token.

Pihak DeepSeek juga menyatakan bahwa karena keterbatasan daya komputasi kelas atas, throughput layanan DeepSeek-V4-Pro saat ini sangat terbatas. Diharapkan setelah peluncuran massal supernode Ascend 950 pada semester kedua tahun ini, harganya akan berkurang secara signifikan. Selain itu, DeepSeek-V4 menerima dukungan adaptasi Hari 0 dari Cambricon, dan kode adaptasi terkait telah di-open source ke komunitas GitHub.

## Perbedaan Posisi Model
DeepSeek-V4-Pro berfokus pada batas atas kinerja, menyaingi model andalan sumber tertutup; sedangkan DeepSeek-V4-Flash secara signifikan mengurangi skala parameter dan skala aktivasi dengan imbalan latensi yang lebih rendah dan biaya yang lebih murah. Dibandingkan model generasi sebelumnya, model ini mengalami peningkatan lebih lanjut dalam kemampuan agen, pengetahuan dunia, dan tugas penalaran kompleks, dan untuk pertama kalinya, "konteks 1 juta token" dibuka sebagai kemampuan default.

### Kemampuan Agen Ditingkatkan Secara Signifikan
Dalam hal kemampuan agen, kemampuan agen DeepSeek-V4-Pro telah ditingkatkan secara signifikan. Model ini telah memasuki tingkat pertama sumber terbuka dalam evaluasi seperti Pengkodean Agenik. Evaluasi internal menunjukkan bahwa kualitas pengirimannya mendekati mode non-berpikir Claude Opus 4.6, tetapi masih ada kesenjangan dibandingkan dengan mode berpikirnya.

DeepSeek-V4-Pro telah melampaui model sumber terbuka yang saat ini dievaluasi secara publik dalam tugas-tugas dengan kesulitan tinggi seperti matematika, STEM, dan kode kompetisi, dan kinerja keseluruhannya mendekati atau bahkan sebanding dengan model sumber tertutup teratas seperti GPT-5.4 dan Claude Opus 4.6-Max.

### Biaya Konteks Panjang Berkurang Secara Signifikan
Pada saat yang sama, DeepSeek-V4 telah memperkenalkan serangkaian optimasi yang lebih radikal dalam efisiensi konteks panjang: dalam skenario 1 juta token, perhitungan inferensi per tokennya hanya 27% dari V3.2, dan penggunaan cache KV berkurang menjadi sekitar 10%, secara signifikan mengurangi biaya daya komputasi dan memori video untuk tugas-tugas tautan panjang.

## Rencana Harga API
Harga API yang diumumkan secara resmi untuk seri DeepSeek-V4:
- DeepSeek-V4-Pro: 1 yuan / juta token untuk input yang di-cache, 12 yuan / juta token untuk input yang tidak di-cache, 24 yuan / juta token untuk output
- DeepSeek-V4-Flash: hanya 0,2 yuan / juta token untuk input yang di-cache, 1 yuan / juta token untuk input yang tidak di-cache, 2 yuan / juta token untuk output

Saat ini, seri DeepSeek-V4 telah diluncurkan di situs web resmi dan aplikasi, serta API dan bobot model dibuka secara bersamaan.

## Pengalaman Praktis: Peningkatan Kemampuan yang Komprehensif
Kami pada awalnya mengalami perubahan DeepSeek-V4, terutama menguji model DeepSeek-V4-Pro.

### Kemampuan Pemrograman Agenik Meningkat Secara Signifikan
Dalam kasus pengembangan web front-end satu kali, DeepSeek-V4-Pro menunjukkan efisiensi eksekusi yang tinggi. Karena persyaratannya tidak rumit, model hanya membutuhkan 5 detik untuk berpikir, kemudian mengembangkan dengan cepat, yang berbeda secara signifikan dari pola model DeepSeek sebelumnya yang menghabiskan banyak token untuk berpikir. Setelah memasuki proses generasi yang sebenarnya, panjang output DeepSeek-V4-Pro secara signifikan lebih panjang daripada model DeepSeek lainnya, dengan kecepatan generasi yang cepat, pada dasarnya menghasilkan dalam satuan 5 baris kode, dan tingkat penyelesaian halaman web lebih tinggi daripada DeepSeek-V3.2, dengan desain yang lebih kaya.

Dalam pengujian tugas yang menggabungkan kemampuan agen dan pemrograman, DeepSeek-V4-Pro dapat melakukan panggilan alat multi-putaran yang kompleks, dan jumlah entri pencarian online juga meningkat dibandingkan dengan model sebelumnya, dan pengumpulan informasi lebih komprehensif. Rencana perjalanan yang dihasilkan akhir direncanakan secara wajar, dan dilengkapi dengan lokasi setiap objek wisata, yang dapat langsung digunakan di aplikasi navigasi setelah diklik, sangat nyaman. Dalam tugas agen, dapat diamati bahwa tindakannya sangat tegas, panggilan alat dan pemikiran diselesaikan dalam beberapa detik, dan efisiensi token baik.

### Uji Praktis Konteks 1J Token
Model seri DeepSeek-V4 mendukung konteks 1 juta token. Kami mengunggah trilogi "Tiga Tubuh" lengkap (total sekitar 540.000 token) untuk pengujian, dan model dapat dengan cepat menemukan konten yang ditentukan, berhasil mewujudkan pengambilan informasi dalam teks yang sangat panjang.

Uji tanggal batas pengetahuan menunjukkan bahwa tanggal batas pengetahuan DeepSeek-V4-Pro masih pada tahun 2025. Selain itu, model ini untuk sementara belum mendukung kemampuan visual. Setelah mengunggah gambar, model masih akan melakukan ekstraksi teks, dan gambar tanpa teks akan menunjukkan bahwa tidak dapat diproses.

## Inovasi Arsitektur Teknis
Perubahan paling langsung dari generasi V4 ini adalah bahwa "konteks panjang" telah menjadi kemampuan default. Berbeda dengan metode tradisional yang hanya memperluas jendela, DeepSeek-V4-Pro memperkenalkan arsitektur perhatian hibrida baru, menggabungkan Perhatian Jarang Terkompresi dengan Perhatian Kompresi Tinggi (HCA), dan bekerja sama dengan perhatian jarang DSA untuk mengompresi dalam dimensi token.

Selain itu, model memperkenalkan hiperkoneksi yang dibatasi manifold (mHC) untuk meningkatkan koneksi residu tradisional, dan menggunakan pengoptimal Muon untuk meningkatkan kecepatan konvergensi dan stabilitas pelatihan. Serangkaian desain ini memungkinkan model untuk secara efektif mengontrol biaya komputasi sambil "mengingat lebih lama".

Menurut data resmi, dalam konteks 1 juta token, TFLOP inferensi per token DeepSeek-V4-Pro berkurang sekitar 3,7 hingga 9,8 kali lipat dibandingkan dengan DeepSeek-V3.2, dan penggunaan cache KV berkurang 9,5 hingga 13,7 kali lipat. Ini berarti bahwa tugas tautan yang sangat panjang yang sebelumnya sulit dijalankan secara nyata (seperti perencanaan agen multi-putaran, pemrosesan dokumen panjang) telah mulai memasuki rentang yang dapat dieksekusi.

## Kinerja: Plafon Baru untuk Model Sumber Terbuka
Dari perspektif struktur kemampuan, peningkatan DeepSeek-V4-Pro adalah peningkatan simultan dari kemampuan penalaran, pengetahuan, dan agen:

### Kemampuan Pengetahuan dan Penalaran
Dalam tugas pengetahuan dan penalaran, model ini melampaui model sumber terbuka arus utama saat ini dalam evaluasi seperti SimpleQA, Apex, dan Codeforces, dan mendekati GPT-5.4 dan Gemini 3.1 Pro dalam banyak tugas. Misalnya, model ini mendapat skor 90,2 poin dalam Daftar Pendek Apex, sudah melampaui model sumber tertutup teratas; model ini juga mempertahankan tingkat tingkat pertama dalam tugas kompetisi seperti Codeforces.

### Kemampuan Agen
Dalam tugas yang terkait dengan kemampuan agen, DeepSeek-V4-Pro berkinerja stabil dalam indikator seperti SWE Verified dan Terminal Bench. SWE Verified mencapai 80,6, mendekati Claude Opus 4.6, secara signifikan lebih tinggi daripada sebagian besar model sumber terbuka. Dalam Terminal Bench 2.0, kinerjanya juga melampaui model seperti GLM-5.1 Thinking dan Kimi K2.6 Thinking.

Secara keseluruhan, DeepSeek-V4-Pro saat ini merupakan "plafon" model sumber terbuka.

## Optimasi Khusus untuk Skenario Agen
Generasi DeepSeek-V4 ini secara signifikan memperkuat adaptasi terhadap skenario agen. Model ini telah melakukan optimasi khusus untuk kerangka kerja agen arus utama seperti Claude Code, OpenClaw, dan CodeBuddy, dan berkinerja lebih stabil dalam tugas multi-langkah seperti generasi kode dan generasi dokumen.

Dari sudut pandang posisi praktis, DeepSeek-V4-Pro telah digunakan sebagai model pengkodean agenik di dalam DeepSeek, dengan fokus pada "menyelesaikan tugas". Untuk tugas sederhana, V4-Flash sudah mendekati versi Pro, tetapi masih ada kesenjangan yang signifikan dalam tugas kompleks, yang pada dasarnya menyediakan dua "gigi daya komputasi" untuk aplikasi agen.

## Kesimpulan
Rilis DeepSeek-V4 tidak hanya menunjukkan akumulasi tim dalam teknologi dan arsitektur, tetapi juga menandai kemampuan implementasi nyata dari model besar sumber terbuka di bawah ekosistem daya komputasi domestik. Setelah adaptasi dan optimasi untuk chip domestik seperti Huawei Ascend dan Cambricon, seri DeepSeek-V4 telah mencapai dukungan stabil dan inferensi efisien untuk konteks 1 juta token, membuat tugas tautan panjang dan eksekusi agen multi-langkah menjadi mungkin.

Versi ini mengimplementasikan posisi yang berbeda dari Pro dan Flash, mendekati model andalan sumber tertutup dalam kinerja, dan mempertahankan efektivitas biaya yang tinggi dalam biaya, menyediakan opsi terbuka yang belum pernah ada sebelumnya untuk pengembang domestik. Lebih penting lagi, rilis ini menunjukkan bahwa model sumber terbuka tidak hanya dapat berpijak kokoh dalam kompetisi global, tetapi juga dapat mengubah potensi teknis menjadi produktivitas praktis dengan bantuan daya komputasi domestik dan arsitektur yang dioptimalkan.

DeepSeek-V4 mungkin merupakan langkah kunci yang diambil oleh kekuatan sumber terbuka Tiongkok di jalur AI berkinerja tinggi, dan juga memberikan panduan yang jelas untuk inovasi dan implementasi ekosistem AI domestik.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/id/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Mulai Menggunakan DeepSeek
  </a>
</div>
