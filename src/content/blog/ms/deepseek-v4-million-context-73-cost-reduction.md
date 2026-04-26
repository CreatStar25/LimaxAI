---
title: "DeepSeek V4: Konteks 1J Token, Pengurangan Kos 73%"
description: "Siri model DeepSeek V4 secara rasmi dilancarkan, menyokong konteks 1 juta token, dengan kos inferens dikurangkan 73% berbanding generasi sebelumnya. Termasuk versi Pro dan Flash, menyediakan pilihan model besar berprestasi tinggi dan kos efektif untuk pembangun AI."
tags: ["deepseek v4", "laman web rasmi deepseek", "tutorial deepseek", "harga deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "ms"
author: "DeepSeek HK"
---

Kata kunci: deepseek v4, laman web rasmi deepseek, tutorial deepseek, harga deepseek v4

Tarikh Terbitan: 2026-04-24

Pengarang: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/ms/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Mula Menggunakan DeepSeek
  </a>
</div>

![DeepSeek V4: Konteks 1J Token, Pengurangan Kos 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Hari ini, DeepSeek secara rasmi melancarkan dan membuka sumber versi pratonton siri DeepSeek-V4, sistem model andalan generasi seterusnya selepas V3.2. Pelancaran ini merangkumi dua model: DeepSeek-V4-Pro dan DeepSeek-V4-Flash, kedua-duanya menggunakan seni bina MoE dengan skala parameter keseluruhan masing-masing 1.6T (49B diaktifkan) dan 284B (13B diaktifkan), dan kedua-duanya menyokong konteks maksimum 1 juta token.

Pihak rasmi DeepSeek juga menyatakan bahawa terhad oleh kuasa pengiraan tinggi, daya pengeluaran perkhidmatan DeepSeek-V4-Pro pada masa ini sangat terhad. Dijangka bahawa selepas pelancaran besar-besaran nod super Ascend 950 pada separuh kedua tahun ini, harganya akan dikurangkan dengan ketara. Selain itu, DeepSeek-V4 telah menerima sokongan penyesuaian Day 0 dari Cambricon, dan kod penyesuaian berkaitan telah dibuka sumber kepada komuniti GitHub.

## Perbezaan Kedudukan Model
DeepSeek-V4-Pro memfokuskan pada had prestasi, menyasarkan model andalan sumber tertutup; manakala DeepSeek-V4-Flash secara drastik mengurangkan skala parameter dan skala pengaktifan untuk pertukaran latensi lebih rendah dan kos lebih rendah. Berbanding model generasi sebelumnya, ia telah meningkat lagi dalam keupayaan Agent, pengetahuan dunia dan tugas penaakulan kompleks, dan buat pertama kalinya "konteks 1 juta token" dibuka sebagai keupayaan lalai.

### Keupayaan Agent Ditingkatkan Secara Ketara
Dari segi keupayaan Agent, keupayaan Agent DeepSeek-V4-Pro telah dipertingkatkan dengan ketara. Ia telah memasuki peringkat pertama sumber terbuka dalam penilaian seperti Agentic Coding. Penilaian dalaman menunjukkan kualiti penghantaran hampir dengan mod bukan pemikiran Claude Opus 4.6, tetapi masih terdapat jurang berbanding mod pemikirannya.

DeepSeek-V4-Pro telah melebihi model sumber terbuka yang sedang dinilai secara umum dalam tugas kesukaran tinggi seperti matematik, STEM dan kod pertandingan, dan prestasi keseluruhannya hampir atau setanding dengan model sumber tertutup teratas seperti GPT-5.4 dan Claude Opus 4.6-Max.

### Kos Konteks Panjang Dikurangkan Secara Ketara
Pada masa yang sama, DeepSeek-V4 telah memperkenalkan set pengoptimuman yang lebih radikal dalam kecekapan konteks panjang: dalam senario 1 juta token, pengiraan inferens token tunggalnya hanya 27% daripada V3.2, dan penggunaan KV Cache dikurangkan kepada kira-kira 10%, dengan ketara mengurangkan kos kuasa pengiraan dan memori video untuk tugas pautan panjang.

## Pelan Harga API
Pihak rasmi mengumumkan harga API untuk siri DeepSeek-V4:
- DeepSeek-V4-Pro: input cache 1 yuan / juta token, input tidak cache 12 yuan / juta token, output 24 yuan / juta token
- DeepSeek-V4-Flash: input cache hanya 0.2 yuan / juta token, input tidak cache 1 yuan / juta token, output 2 yuan / juta token

Pada masa ini, siri DeepSeek-V4 telah dilancarkan di laman web rasmi dan App, dan API serta berat model dibuka secara serentak.

## Pengalaman Praktikal: Peningkatan Keupayaan Komprehensif
Kami pada mulanya mengalami perubahan DeepSeek-V4, terutamanya menguji model DeepSeek-V4-Pro.

### Keupayaan Pengaturcaraan Agentic Meningkat Dengan Ketara
Dalam kes one-shot laman web bahagian hadapan, DeepSeek-V4-Pro menunjukkan kecekapan pelaksanaan yang tinggi. Oleh kerana keperluan tidak rumit, model hanya mengambil masa 5 saat untuk berfikir, kemudian membangun dengan cepat, yang berbeza dengan corak model DeepSeek sebelumnya yang membazirkan banyak token untuk berfikir. Selepas memasuki proses penjanaan sebenar, panjang output DeepSeek-V4-Pro jauh lebih lama daripada model DeepSeek lain, kelajuan penjanaan pantas, pada dasarnya boleh output dalam unit 5 baris kod, tahap penyelesaian laman web lebih tinggi daripada DeepSeek-V3.2, dengan reka bentuk yang lebih kaya.

Dalam ujian tugas yang menggabungkan keupayaan Agent dan pengaturcaraan, DeepSeek-V4-Pro boleh membuat panggilan alat pelbagai pusingan yang kompleks, bilangan entri carian dalam talian juga telah meningkat berbanding bilangan model sebelumnya, dan pengumpulan maklumat lebih komprehensif. Pelan perjalanan yang dijana akhir dirancang dengan munasabah, dan dilengkapi dengan lokasi setiap tempat menarik, yang boleh digunakan secara langsung dalam aplikasi navigasi selepas diklik, sangat mudah. Dalam tugas Agent, dapat diperhatikan bahawa tindakannya sangat tegas, panggilan alat dan pemikiran diselesaikan dalam beberapa saat, dan kecekapan token baik.

### Ujian Praktikal Keupayaan Konteks 1J Token
Siri model DeepSeek-V4 menyokong konteks 1 juta token. Kami memuat naik trilogi "Tiga Badan" lengkap (jumlah kira-kira 540 ribu token) untuk ujian, dan model dapat mencari kandungan yang ditentukan dengan cepat, berjaya melaksanakan pencarian maklumat dalam teks sangat panjang.

Ujian tarikh potong pengetahuan menunjukkan bahawa tarikh potong pengetahuan DeepSeek-V4-Pro masih berhenti pada 2025. Selain itu, model ini buat masa ini belum menyokong keupayaan visual, selepas memuat naik imej ia masih akan melakukan pengekstrakan teks, dan imej tanpa teks akan menunjukkan bahawa ia tidak boleh diproses.

## Inovasi Seni Bina Teknikal
Perubahan paling langsung generasi V4 ini ialah "konteks panjang" telah menjadi keupayaan lalai. Berbeza dengan cara tradisional memperluaskan tetingkap secara mudah, DeepSeek-V4-Pro memperkenalkan seni bina perhatian hibrid baharu, menggabungkan Compressed Sparse Attention dengan Perhatian Mampatan Tinggi (HCA), dan bekerjasama dengan perhatian jarang DSA untuk memampatkan dalam dimensi token.

Selain itu, model memperkenalkan sambungan hiper kekangan manifold (mHC) untuk meningkatkan sambungan sisa tradisional, dan menggunakan pengoptimum Muon untuk meningkatkan kelajuan penumpuan dan kestabilan latihan. Siri reka bentuk ini membolehkan model mengawal kos pengiraan dengan berkesan sambil "ingat lebih lama".

Menurut data rasmi, dalam konteks 1 juta token, TFLOP inferens token tunggal DeepSeek-V4-Pro menurun kira-kira 3.7 kali hingga 9.8 kali berbanding DeepSeek-V3.2, dan penggunaan KV Cache menurun 9.5 kali hingga 13.7 kali. Ini bermakna tugas pautan sangat panjang yang sukar dilaksanakan pada masa lalu (seperti perancangan Agent pelbagai pusingan, pemprosesan dokumen panjang) telah mula memasuki julat boleh laksana.

## Prestasi: Siling Baharu Model Sumber Terbuka
Dari segi struktur keupayaan, peningkatan DeepSeek-V4-Pro adalah peningkatan serentak penaakulan, pengetahuan dan keupayaan Agent:

### Keupayaan Pengetahuan dan Penaakulan
Dalam tugas pengetahuan dan penaakulan, ia melebihi model sumber terbuka arus perdana semasa dalam penilaian seperti SimpleQA, Apex, Codeforces, dan hampir dengan GPT-5.4 dan Gemini 3.1 Pro dalam banyak tugas. Contohnya, ia memperoleh 90.2 mata dalam Senarai Pendek Apex, sudah melebihi model sumber tertutup teratas; ia juga mengekalkan tahap peringkat pertama dalam tugas pertandingan seperti Codeforces.

### Keupayaan Agent
Dalam tugas berkaitan keupayaan Agent, DeepSeek-V4-Pro menunjukkan prestasi stabil dalam penunjuk seperti SWE Verified, Terminal Bench. SWE Verified mencapai 80.6, hampir dengan Claude Opus 4.6, jauh lebih tinggi daripada kebanyakan model sumber terbuka. Dalam Terminal Bench 2.0, prestasinya juga melebihi model seperti GLM-5.1 Thinking, Kimi K2.6 Thinking.

Secara keseluruhan, DeepSeek-V4-Pro pada masa ini adalah "siling" model sumber terbuka.

### Pengoptimuman Khas untuk Senario Agent
Generasi DeepSeek-V4 ini secara ketara mengukuhkan penyesuaian untuk senario Agent. Ia telah menjalankan pengoptimuman khas untuk rangka kerja Agent utama seperti Claude Code, OpenClaw, CodeBuddy, dan menunjukkan prestasi lebih stabil dalam tugas berbilang langkah seperti penjanaan kod, penjanaan dokumen.

Dari sudut kedudukan praktikal, DeepSeek-V4-Pro telah digunakan sebagai model Pengaturcaraan Agentic dalam DeepSeek, memberi tumpuan kepada "menyelesaikan tugas". Untuk tugas mudah, V4-Flash sudah hampir dengan versi Pro, tetapi masih terdapat jurang ketara dalam tugas kompleks, pada dasarnya menyediakan dua "geganti kuasa pengiraan" untuk aplikasi Agent.

## Kesimpulan
Pelancaran DeepSeek-V4 bukan sahaja menunjukkan pengumpulan pasukan dalam teknologi dan seni bina, tetapi juga menandakan keupayaan perlaksanaan sebenar model besar sumber terbuka di bawah ekosistem kuasa pengiraan domestik. Selepas penyesuaian dan pengoptimuman untuk cip domestik seperti Huawei Ascend dan Cambricon, siri DeepSeek-V4 telah mencapai sokongan stabil dan inferens cekap untuk konteks 1 juta token, menjadikan tugas pautan panjang dan pelaksanaan Agent berbilang langkah mungkin.

Versi ini melaksanakan kedudukan berbeza Pro dan Flash, hampir dengan model andalan sumber tertutup dari segi prestasi, dan mengekalkan kos efektif yang tinggi dari segi kos, menyediakan pilihan terbuka yang belum pernah ada sebelum ini untuk pembangun domestik. Lebih penting lagi, keluaran ini menunjukkan bahawa model sumber terbuka bukan sahaja boleh berpijak kukuh dalam persaingan global, tetapi juga boleh mengubah potensi teknologi kepada produktiviti yang boleh digunakan secara praktikal dengan bantuan kuasa pengiraan domestik dan seni bina yang dioptimumkan.

DeepSeek-V4 mungkin langkah penting yang diambil oleh kuasa sumber terbuka China dalam landasan AI berprestasi tinggi, dan juga memberikan panduan jelas untuk inovasi dan perlaksanaan ekosistem AI domestik.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/ms/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Mula Menggunakan DeepSeek
  </a>
</div>
