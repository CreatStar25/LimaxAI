---
title: "Selepas 15 Bulan Menunggu, DeepSeek Akhirnya Memperkenalkan Pratonton V4: Analisis Komprehensif"
description: "DeepSeek V4 Preview dilancarkan secara rasmi, menampilkan dua model MoE (Pro dan Flash) dengan sokongan asli untuk konteks 1 juta token, memberikan peningkatan prestasi yang signifikan sambil mengurangkan kos inferens secara drastik. Artikel ini menyediakan perincian terperinci mengenai seni bina teknikal, prestasi, dan harga DeepSeek V4."
tags: ["deepseek v4", "laman web rasmi deepseek", "tutorial deepseek", "harga deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "ms"
author: "DeepSeek HK"
---

Artikel ini menerokai ciri teknikal, prestasi, dan garis panduan penggunaan DeepSeek V4, menyediakan analisis komprehensif mengenai kelebihan teras model bahasa besar generasi baharu ini. Kandungan ditulis dalam gaya yang mudah diakses sesuai untuk penggemar teknologi dan pembangun.

Kata kunci: deepseek v4, laman web rasmi deepseek, tutorial deepseek, harga deepseek v4.

Tarikh Penerbitan: 25 April 2026
Pengarang: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/ms/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Mula Menggunakan DeepSeek
  </a>
</div>

![Analisis Komprehensif Pratonton DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. Pelancaran Rasmi Pratonton DeepSeek V4

Pada 24 April, DeepSeek secara rasmi mengumumkan pelancaran V4 Preview. Kemas kini utama ini datang 15 bulan selepas pelancaran V3.2, menandakan satu lagi terobosan penting dalam peta jalan teknologi model besar DeepSeek.

Menurut pengenalan rasmi, siri V4 merangkumi dua model MoE:
- **DeepSeek-V4-Pro**: 1.6T jumlah parameter, 49B parameter diaktifkan
- **DeepSeek-V4-Flash**: 284B jumlah parameter, 13B parameter diaktifkan

Kedua-dua model menyokong secara asli konteks 1 juta token, mewakili lompatan kualitatif dalam keupayaan pemprosesan teks panjang. Perlu diperhatikan bahawa di bawah tetapan konteks 1M:
- FLOPs inferens per-token V4-Pro hanya 27% daripada V3.2, dengan KV Cache hanya 10%
- V4-Flash lebih melampau, mengurangkan metrik ini kepada 10% dan 7% masing-masing

Ini bermakna bahawa walaupun panjang konteks telah berkembang hampir 8 kali ganda daripada 128K V3.2 kepada 1M V4, keperluan pengkomputeran per-token sebenarnya berkurangan dengan ketara, mencapai terobosan dalam kedua-dua keupayaan konteks panjang dan kecekapan inferens.

Pihak rasmi DeepSeek dengan jelas menyatakan bahawa V4 Preview diposisikan sebagai kemas kini infrastruktur, terutamanya membina semula struktur kos konteks panjang untuk menyediakan jalan bagi peringkat seterusnya penskalaan masa ujian dan tugas jangka panjang. Tahap keupayaan semasanya masih ketinggalan daripada GPT-5.4 dan Gemini-3.1-Pro, dengan trajektori pembangunan kira-kira 3-6 bulan di belakang model sumber tertutup terkini.

## 2. Dua Model, Tiga Mod Inferens: Ciri Teras V4

### 2.1 Parameter Model dan Kelebihan Kos

Sorotan terbesar siri V4 adalah pengoptimuman ketara pada lengkung kos. Di bawah tetapan konteks 1M token:
- V4-Pro: FLOPs inferens per-token hanya 27% daripada V3.2, KV Cache hanya 10%
- V4-Flash: FLOPs inferens per-token hanya 10% daripada V3.2, KV Cache hanya 7%

Peningkatan kecekapan ini mengurangkan kos inferens untuk konteks tahap juta secara drastik, menyediakan penyelesaian yang layak secara ekonomi untuk pemprosesan teks panjang, analisis dokumen, dan senario lain.

### 2.2 Sistem Harga API

DeepSeek meneruskan strategi penentuan harga konsisten bernilai tinggi:
- **V4-Pro**: ¥1 setiap juta token input (kena cache hit) atau ¥12 (cache miss), ¥24 setiap juta token output
- **V4-Flash**: ¥0.2 setiap juta token input (kena cache hit) atau ¥1 (cache miss), ¥2 setiap juta token output

### 2.3 Tiga Tahap Kekuatan Inferens

Setiap model menawarkan tiga mod inferens untuk memenuhi keperluan senario yang berbeza:
1. **Non-think**: Mod output terus, kelajuan respons paling pantas
2. **Think High**: Mod pemikiran mendalam biasa, mengimbangi kelajuan dan kualiti
3. **Think Max**: Menyuntik arahan kuat, memaksimumkan panjang konteks dan output, melepaskan keupayaan penuh model

Mod Max meningkatkan prestasi model dengan ketara: skor V4-Pro-Max meningkat daripada 34.5 kepada 37.7 dalam ujian HLE, dan daripada 85.5 kepada 90.2 dalam ujian Apex Shortlist, pada kos menggandakan bilangan token output.

## 3. Prestasi Ujian Penanda Aras

Menurut data ujian rasmi yang dikeluarkan oleh DeepSeek, siri V4 berprestasi cemerlang dalam beberapa penilaian:

### 3.1 Ujian Pengetahuan dan Penaakulan
- DeepSeek-V4-Pro-Max menduduki tempat pertama dalam Apex Shortlist (90.2%) dan Codeforces (Rating 3206), dua tugas penaakulan/pemrograman hardcore, menunjukkan keupayaan logik dan algoritma yang sangat kuat
- Gemini-3.1-Pro-High mendahului dalam SimpleQA Verified (75.6%)
- Claude dan GPT mempunyai kekuatan masing-masing merentas projek yang berbeza, dengan jurang keseluruhan yang kecil

### 3.2 Ujian Keupayaan Ejen
- Keempat-empat model berprestasi sama dalam tugas SWE Verified (semua mencapai 80.6%)
- DeepSeek unggul dalam Terminal Bench 2.0 (67.9%) dan Toolathlon (51.8%), menunjukkan kelebihan yang jelas dalam senario pelaksanaan arahan kompleks dan panggilan alat

Pihak rasmi menyatakan bahawa keupayaan Ejen DeepSeek-V4-Pro telah meningkat dengan ketara berbanding generasi sebelumnya, "menawarkan pengalaman pengguna yang lebih baik daripada Sonnet 4.5, dengan kualiti penghantaran hampir kepada mod non-thinking Opus 4.6, walaupun masih ketinggalan daripada mod thinking Opus 4.6 sampai tahap tertentu."

### 3.3 Pengetahuan Dunia dan Keupayaan Am
- V4-Pro mengatasi model sumber terbuka lain dengan ketara dalam penilaian pengetahuan dunia, hanya sedikit ketinggalan daripada model sumber tertutup teratas Gemini-Pro-3.1
- Dalam matematik, STEM, dan penilaian kod kompetitif, V4-Pro mengatasi semua model sumber terbuka yang sedang dinilai secara umum, mencapai tahap model sumber tertutup terbaik dunia
- Sebagai model ekonomi, V4-Flash mempunyai rizab pengetahuan sedikit lebih rendah daripada versi Pro, tetapi keupayaan penaakulan yang serupa. Dengan parameter dan nilai pengaktifan yang lebih kecil, ia menyediakan perkhidmatan API yang lebih pantas dan lebih berkesan kos
- Dalam penilaian Ejen, V4-Flash berprestasi setanding dengan versi Pro pada tugas mudah, tetapi masih mempunyai jurang pada tugas tahap kesukaran tinggi

## 4. Inovasi Teknologi Teras: Menulis Semula Mekanisme Perhatian

Perubahan teknikal paling teras V4 adalah pada lapisan perhatian, menyelesaikan secara asas masalah kecekapan inferens konteks panjang.

Dalam mekanisme perhatian Transformer tradisional, setiap token perlu mengira kesamaan dengan semua token sebelumnya. Apabila konteks berkembang daripada 100K kepada 1M, kos pengkomputeran meningkat 100 kali ganda, yang merupakan botleneck teras yang menghalang penggunaan konteks panjang secara meluas.

V4 mengamalkan mekanisme perhatian dual inovatif dengan lapisan yang berselang:
1. **CSA (Compressed Sparse Attention)**: Pertama menggabungkan cache KV untuk setiap 4 token ke dalam satu ringkasan, kemudian membolehkan setiap pertanyaan hanya memilih top-k ringkasan yang paling relevan untuk pengiraan perhatian, memampatkan kandungan yang akan diproses dan hanya memfokus pada maklumat relevan
2. **HCA (Heavy Compressed Attention)**: Menggunakan pemampatan lebih agresif, menggabungkan setiap 128 token menjadi satu ringkasan, kemudian menggunakan perhatian padat pada baki ringkasan tanpa pilihan jarang

Kedua-dua mekanisme perhatian berselang dan ditindan, digabungkan dengan cawangan tetingkap gelongsor yang mengendalikan pergantungan butiran antara token berdekatan, membentuk pendekatan gabungan "butiran kasar + butiran halus, jarang + padat".

Dari perspektif evolusi teknologi, DeepSeek V2 dan V3 terutamanya mengikuti laluan penjarangparameter (jumlah parameter besar tetapi hanya mengaktifkan pakar separa setiap token). V4 membuka laluan baharu penjarangkonteks (pemampatan KV, pemilihan top-k, kadar pemampatan berlapis) atas asas ini. Ini adalah kali pertama DeepSeek menggunakan konsep "penjarangan" kepada struktur teras Transformer.

Selain lapisan perhatian, V4 mempunyai dua peningkatan seni bina penting lain:
1. Menaik taraf sambungan residual tradisional kepada mHC (Manifold Constrained Hyperconnection), menjadikan penyebaran ke hadapan dan ke belakang rangkaian dalam lebih stabil melalui kekangan matematik
2. Menggantikan AdamW dengan pengoptimum Muon untuk kebanyakan modul, mencapai penumpuan lebih pantas dan latihan lebih stabil

Ini adalah kali pertama DeepSeek serentak mengubah suai tiga komponen Transformer teras: perhatian, sambungan residual, dan pengoptimum.

## 5. Inovasi Paradigma Pasca-Latihan: Penyulingan Model Pakar

Berbanding dengan perubahan seni bina, inovasi V4 dalam kaedah pasca-latihan adalah lebih notable.

V3.2 menggunakan pendekatan "RL bercampur", mengoptimumkan beberapa objektif serentak dengan pembelajaran reinforcement. V4 mengamalkan strategi dua langkah "bezakan kemudian satukan":
1. **Fasa Pembezaan**: Untuk domain berbeza seperti matematik, kod, Ejen, dan pengikutan arahan, latih model pakar berasingan untuk setiap domain. Pakar-pakar ini pertama-tama menjalani penyetelan halus yang diselia dengan data domain berkualiti tinggi, kemudian pembelajaran reinforcement dengan algoritma GRPO, setiap pakar mencapai prestasi optimum dalam domain khususnya
2. **Fasa Penyatuan**: Menggunakan kaedah On-Policy Distillation (OPD) untuk "mensintesis" lebih daripada sepuluh pakar domain kembali ke dalam model pelajar yang seragam. Selepas pelajar menjana jawapan, ia sepadan dengan taburan output daripada pakar yang "paling memahami masalah ini", menyerap keupayaan pakar melalui penjajaran pada tahap logits

Pendekatan ini boleh difahami sebagai menyuling keupayaan beberapa "pelajar terbaik" domain ke dalam satu model. Untuk menyelesaikan cabaran kejuruteraan memuatkan lebih daripada sepuluh model guru parameter trilion secara serentak, DeepSeek membuang semua pemberat guru ke storan teragih, hanya menyembunyikan keadaan tersembunyi lapisan terakhir setiap guru. Semasa latihan, sampel disusun mengikut indeks guru, memastikan hanya satu kepala guru berada dalam memori GPU pada bila-bila masa.

Pendekatan ini mengelakkan masalah gangguan keupayaan yang biasa dalam "RL bercampur" tradisional, membolehkan model mencapai prestasi tahap teratas merentas beberapa domain.

## 6. Pengoptimuman Khusus Keupayaan Ejen

DeepSeek V4 merangkumi penyesuaian dan pengoptimuman khusus untuk produk Ejen arus perdana, dengan peningkatan prestasi dalam tugas kod, penjanaan dokumen, dan senario lain.

Pengoptimuman khusus V4 untuk keupayaan Ejen merangkumi:
1. Semasa pasca-latihan, Ejen dianggap sebagai arah pakar bebas bersama matematik dan kod, dengan latihan berasingan
2. Format panggilan alat diubah daripada JSON kepada struktur XML dengan token khas, mengurangkan kadar ralat escape
3. Jejak penaakulan rentas pusingan dikekalkan sepenuhnya dalam senario panggilan alat, tidak lagi dibersihkan setiap pusingan seperti dalam V3.2
4. Platform kotak pasir DSec yang dibina sendiri, dengan satu kluster berkeupayaan menguruskan ratusan ribu contoh kotak pasir serentak, menyokong latihan dan penilaian pembelajaran reinforcement Ejen

Pihak rasmi menyatakan bahawa keupayaan Ejen V4-Pro "lebih baik daripada Sonnet 4.5, dengan kualiti penghantaran hampir kepada mod non-thinking Opus 4.5, walaupun masih ketinggalan daripada mod thinking Opus 4.6 sampai tahap tertentu."

![Seni Bina Teknikal DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Kesimpulan

DeepSeek V4 Preview adalah model besar dengan inovasi teknikal yang cemerlang. Melalui pembinaan semula mekanisme perhatian dan inovasi paradigma latihan, ia mengekalkan keupayaan penaakulan yang kuat sambil secara drastik mengurangkan kos inferens konteks panjang, menyediakan jalan bagi aplikasi praktikal konteks tahap juta.

Sama ada untuk senario profesional yang memerlukan keupayaan penaakulan yang kuat atau aplikasi berskala besar yang mengejar keberkesanan kos, siri V4 menyediakan pilihan yang sesuai. Jika anda ingin mengalami keupayaan hebat DeepSeek V4, anda dialu-alukan untuk menggunakannya secara langsung melalui platform kami.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/ms/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Mula Menggunakan DeepSeek
  </a>
</div>
