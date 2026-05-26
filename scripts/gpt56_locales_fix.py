# -*- coding: utf-8 -*-
"""Full native overrides for locales that previously fell back to Portuguese."""

from __future__ import annotations


def _guide_4(lang: str) -> str:
    guides = {
        "ar": (
            "قبل إطلاق GPT-5.6، اعتاد على **GPT-5.5 / GPT-5.4** لتقليل تكلفة الانتقال:\n\n"
            "1. **اضغط المدخلات الطويلة** قبل الرفع—احذف الأجزاء غير الضرورية واستخدم فهرساً أو ملخصاً.\n"
            "2. **حدد شروط التوقف** في مهام الوكيل والبرمجة—مثل «بحثان كحد أقصى» أو «توقف عند كفاية الأدلة».\n"
            "3. **قسّم طلبات الواجهة**—اطلب هيكل المعلومات وقائمة المكوّنات ثم الكود.\n"
            "4. **احتفظ بمجموعة اختبار ثابتة**—شغّل نفس الأسئلة عند `low` و`medium` وسجّل التأخير والتكلفة والجودة.\n\n"
            "لتجربة GPT في المتصفح، استخدم الزر أدناه على LimaxAI (**gpt-5.4**؛ اختر النماذج الأحدث من القائمة لاحقاً)."
        ),
        "id": (
            "Sebelum GPT-5.6 rilis, biasakan diri dengan **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Ringkas input panjang**—buang bagian tidak relevan, gunakan outline atau ringkasan singkat.\n"
            "2. **Tulis aturan berhenti** untuk agen/kode—misalnya «maksimal dua putaran pencarian».\n"
            "3. **UI bertahap**—minta arsitektur informasi dan daftar komponen dulu, baru kode.\n"
            "4. **Set eval tetap**—uji pertanyaan yang sama di `low` / `medium`, catat latensi, biaya, kualitas.\n\n"
            "Coba GPT di browser lewat tombol LimaxAI di bawah (**gpt-5.4**)."
        ),
        "ms": (
            "Sebelum GPT-5.6 dilancarkan, biasakan **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Mampatkan input panjang**—buang bahagian tidak relevan, guna rangka atau ringkasan.\n"
            "2. **Tulis syarat henti** untuk ejen/pengekodan—contohnya «maksimum dua pusingan carian».\n"
            "3. **UI berlapis**—minta seni bina maklumat dan senarai komponen dahulu.\n"
            "4. **Set eval tetap**—uji soalan sama pada `low` / `medium`, rekod kependaman dan kos.\n\n"
            "Cuba GPT dalam pelayar melalui butang LimaxAI di bawah (**gpt-5.4**)."
        ),
        "vi": (
            "Trước khi GPT-5.6 ra mắt, hãy quen **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Nén đầu vào dài**—bỏ phần không liên quan, neo bằng mục lục hoặc tóm tắt ngắn.\n"
            "2. **Viết điều kiện dừng** cho agent/lập trình—ví dụ «tối đa hai vòng tìm kiếm».\n"
            "3. **UI theo lớp**—yêu cầu kiến trúc thông tin và danh sách component trước, rồi mới code.\n"
            "4. **Bộ eval cố định**—chạy cùng câu hỏi ở `low` / `medium`, ghi độ trễ, chi phí, chất lượng.\n\n"
            "Dùng nút LimaxAI bên dưới để trò chuyện GPT (**gpt-5.4**)."
        ),
        "th": (
            "ก่อน GPT-5.6 เปิดตัว ฝึกใช้ **GPT-5.5 / GPT-5.4** ให้คล่อง:\n\n"
            "1. **บีบอินพุตยาว**—ตัดส่วนที่ไม่จำเป็น ใช้สารบัญหรือสรุปสั้นเป็นจุดยึด\n"
            "2. **เขียนเงื่อนไขหยุด** สำหรับ agent/โค้ด—เช่น «ค้นหาได้สูงสุดสองรอบ»\n"
            "3. **แบ่ง UI เป็นชั้น**—ขอสถาปัตยกรรมข้อมูลและรายการคอมโพเนนต์ก่อน แล้วค่อยขอโค้ด\n"
            "4. **ชุด eval คงที่**—รันคำถามเดิมที่ `low` / `medium` บันทึก latency ต้นทุน คุณภาพ\n\n"
            "ลอง GPT บนเบราว์เซอร์ผ่านปุ่ม LimaxAI ด้านล่าง (**gpt-5.4**)"
        ),
        "tr": (
            "GPT-5.6 gelmeden önce **GPT-5.5 / GPT-5.4** ile alışkanlık edinin:\n\n"
            "1. **Uzun girdiyi sıkıştırın**—ilgisiz bölümleri atın, özet veya içindekiler kullanın.\n"
            "2. **Durma kuralları yazın**—ör. «en fazla iki arama turu», «kanıt yeterliyse dur».\n"
            "3. **UI’yi katmanlayın**—önce bilgi mimarisi ve bileşen listesi, sonra kod.\n"
            "4. **Sabit eval seti**—aynı soruları `low` / `medium` ile çalıştırın, gecikme/maliyet kaydedin.\n\n"
            "Tarayıcıda GPT için aşağıdaki LimaxAI düğmesini kullanın (**gpt-5.4**)."
        ),
        "hi": (
            "GPT-5.6 आने से पहले **GPT-5.5 / GPT-5.4** पर अभ्यास करें:\n\n"
            "1. **लंबे इनपुट को संक्षिप्त करें**—अप्रासंगिक हिस्से हटाएँ, आउटलाइन या संक्षिप्त सार अंक बनाएँ।\n"
            "2. **एजेंट/कोडिंग के लिए स्टॉप नियम**—जैसे «अधिकतम दो खोज राउंड»।\n"
            "3. **UI को परतों में माँगें**—पहले सूचना वास्तु और कंपोनेंट सूची, फिर कोड।\n"
            "4. **स्थिर eval सेट**—एक ही प्रश्न `low` / `medium` पर चलाएँ, विलंब/लागत/गुणवत्ता लिखें।\n\n"
            "LimaxAI बटन (**gpt-5.4**) से GPT आज़माएँ।"
        ),
        "fa": (
            "قبل از عرضه GPT-5.6 با **GPT-5.5 / GPT-5.4** عادت کنید:\n\n"
            "1. **ورودی بلند را فشرده کنید**—بخش‌های غیرضروری را حذف و با فهرست یا خلاصه لنگر بیندازید.\n"
            "2. **قوانین توقف** برای agent/کدنویسی—مثلاً «حداکثر دو دور جستجو».\n"
            "3. **UI لایه‌ای**—اول معماری اطلاعات و فهرست کامپوننت، بعد کد.\n"
            "4. **مجموعه ارزیابی ثابت**—همان سؤالات را در `low` / `medium` اجرا و تأخیر/هزینه را ثبت کنید.\n\n"
            "از دکمه LimaxAI پایین (**gpt-5.4**) برای گفتگو استفاده کنید."
        ),
        "pl": (
            "Zanim pojawi się GPT-5.6, przyzwyczaj się do **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Skracaj długie wejścia**—usuń zbędne fragmenty, zakotwicz spis treści lub krótkim streszczeniem.\n"
            "2. **Reguły zatrzymania** dla agentów/kodu—np. «maks. dwie rundy wyszukiwania».\n"
            "3. **UI warstwami**—najpierw architektura informacji i lista komponentów, potem kod.\n"
            "4. **Stały zestaw eval**—te same pytania przy `low` / `medium`, zapisz opóźnienie i koszt.\n\n"
            "Przycisk LimaxAI poniżej (**gpt-5.4**)."
        ),
        "nl": (
            "Voor GPT-5.6 landt, oefen op **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Langere input inkorten**—irrelevante delen weg, inhoudsopgave of korte samenvatting.\n"
            "2. **Stopregels** voor agents/code—bijv. «maximaal twee zoekrondes».\n"
            "3. **UI in lagen**—eerst informatiearchitectuur en componentenlijst, dan code.\n"
            "4. **Vaste eval-set**—dezelfde prompts op `low` / `medium`, log latency en kosten.\n\n"
            "LimaxAI-knop hieronder (**gpt-5.4**)."
        ),
        "sv": (
            "Innan GPT-5.6 kommer, vänj dig vid **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Korta långa indata**—ta bort irrelevanta delar, förankra med innehållsförteckning.\n"
            "2. **Stoppregler** för agenter/kod—t.ex. «högst två sökrundor».\n"
            "3. **UI i lager**—först informationsarkitektur och komponentlista, sedan kod.\n"
            "4. **Fast eval-uppsättning**—samma frågor på `low` / `medium`, logga latens och kostnad.\n\n"
            "LimaxAI-knappen nedan (**gpt-5.4**)."
        ),
        "ro": (
            "Înainte de GPT-5.6, exersează pe **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Comprimă intrările lungi**—elimină părți irelevante, folosește cuprins sau rezumat.\n"
            "2. **Reguli de oprire** pentru agenți/cod—ex. «maxim două runde de căutare».\n"
            "3. **UI pe straturi**—mai întâi arhitectura informației, apoi codul.\n"
            "4. **Set eval fix**—aceleași întrebări la `low` / `medium`, notează latența și costul.\n\n"
            "Buton LimaxAI mai jos (**gpt-5.4**)."
        ),
        "fr": (
            "Avant GPT-5.6, entraînez-vous sur **GPT-5.5 / GPT-5.4** :\n\n"
            "1. **Compressez les longues entrées**—supprimez le superflu, ancrez avec un plan ou un résumé.\n"
            "2. **Définissez des conditions d'arrêt** pour agents et code—ex. « deux recherches max ».\n"
            "3. **UI par couches**—architecture d'information et liste de composants d'abord.\n"
            "4. **Jeu de tests fixe**—mêmes prompts en `low` / `medium`, notez latence et coût.\n\n"
            "Bouton LimaxAI ci-dessous (**gpt-5.4**)."
        ),
        "de": (
            "Vor GPT-5.6 Gewohnheiten mit **GPT-5.5 / GPT-5.4** aufbauen:\n\n"
            "1. **Lange Eingaben kürzen**—Irrelevantes streichen, Inhaltsverzeichnis oder Kurzfassung.\n"
            "2. **Stoppregeln** für Agenten/Code—z. B. « höchstens zwei Suchrunden ».\n"
            "3. **UI schichtweise**—zuerst Informationsarchitektur, dann Code.\n"
            "4. **Festes Eval-Set**—gleiche Fragen bei `low` / `medium`, Latenz und Kosten loggen.\n\n"
            "LimaxAI-Button unten (**gpt-5.4**)."
        ),
        "pt": (
            "Antes do GPT-5.6, crie hábitos com **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Encurte entradas longas**—remova partes irrelevantes, use índice ou resumo.\n"
            "2. **Condições de parada** em agentes/código—ex. « no máximo duas buscas ».\n"
            "3. **UI em camadas**—arquitetura de informação primeiro, código depois.\n"
            "4. **Conjunto de testes fixo**—mesmas perguntas em `low` / `medium`.\n\n"
            "Botão LimaxAI abaixo (**gpt-5.4**)."
        ),
        "it": (
            "Prima di GPT-5.6, abituatevi a **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Comprimete input lunghi**—tagliate il superfluo, usate indice o riassunto.\n"
            "2. **Regole di stop** per agenti/codice—es. « al massimo due ricerche ».\n"
            "3. **UI a strati**—prima architettura informativa, poi codice.\n"
            "4. **Set di test fisso**—stesse domande a `low` / `medium`.\n\n"
            "Pulsante LimaxAI sotto (**gpt-5.4**)."
        ),
        "ru": (
            "До выхода GPT-5.6 привыкайте к **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Сжимайте длинный ввод**—убирайте лишнее, якорь — оглавление или краткое резюме.\n"
            "2. **Правила остановки** для агентов и кода — например «не более двух поисков».\n"
            "3. **UI слоями** — сначала архитектура и список компонентов, потом код.\n"
            "4. **Фиксированный eval** — одни и те же вопросы на `low` / `medium`.\n\n"
            "Кнопка LimaxAI ниже (**gpt-5.4**)."
        ),
        "uk": (
            "Перед GPT-5.6 звикайте до **GPT-5.5 / GPT-5.4**:\n\n"
            "1. **Стискайте довгий ввід**—приберіть зайве, якір — зміст або короткий резюме.\n"
            "2. **Правила зупинки** для агентів і коду.\n"
            "3. **UI шарами** — спочатку архітектура, потім код.\n"
            "4. **Фіксований eval** — ті самі питання на `low` / `medium`.\n\n"
            "LimaxAI (**gpt-5.4**) — кнопка нижче."
        ),
        "ko": (
            "GPT-5.6 출시 전 **GPT-5.5 / GPT-5.4**로 습관을 들이면 이전 비용이 줄어듭니다:\n\n"
            "1. **긴 입력 압축**—불필요한 절 삭제, 목차·요약으로 고정.\n"
            "2. **에이전트/코딩 중단 조건**—예: «검색 최대 2회».\n"
            "3. **UI 단계화**—정보 구조·컴포넌트 목록 후 코드.\n"
            "4. **고정 eval**—`low`/`medium` A/B.\n\n"
            "LimaxAI 버튼(**gpt-5.4**)."
        ),
    }
    return guides[lang]


def apply_locale_fixes(overrides: dict[str, dict[str, str]], es: dict[str, str]) -> None:
    """Merge full native content for locales that used Portuguese fallback."""

    def merge(lang: str, **kwargs: str) -> None:
        base = es.copy()
        base.update(kwargs)
        overrides[lang] = base

    # Vietnamese
    merge(
        "vi",
        intro="Nhiều nhà phát triển thấy **GPT-5.6** trong log backend OpenAI Codex trước khi có thông báo chính thức. Nếu đúng, thế hệ tiếp theo có thể có khoảng **1,5 triệu token** ngữ cảnh, khung thời gian ra mắt hướng tới **tháng 6/2026**. Bài viết tách phần đã xác minh và phần chưa chắc, đồng thời so với GPT-5.5.",
        keywords="Từ khóa: chatgpt, GPT-5.6, hướng dẫn gpt.",
        published="Đăng: 26 tháng 5, 2026",
        img_alt="Rò rỉ OpenAI GPT-5.6 ngữ cảnh 1,5M",
        outro="Bắt đầu GPT trên LimaxAI bằng nút bên dưới.",
        h_leak="Manh mối đến từ đâu: canary trong log Codex",
        leak="Khoảng ba tuần sau GPT-5.5, **log định tuyến Codex** có lúc trỏ tới `gpt-5.6` rồi biến mất—giống cấu hình triển khai sót hơn là công bố có chủ đích.\n\n**OpenAI chưa công bố GPT-5.6.** Nội dung dưới đây từ log nhà phát triển, tái hiện cộng đồng và tin rò rỉ.",
        h_codenames="Tên nội bộ: iris-alpha, ember-alpha, beacon-alpha",
        codenames="Nhắc tới **iris-alpha** (gắn GPT-5.6 nhất), **ember-alpha**, **beacon-alpha**; chưa rõ ánh xạ tier công khai.",
        codenames_table="| Tên | Thông tin công khai | Ghi chú |\n| --- | --- | --- |\n| iris-alpha | Xuất hiện cùng tên GPT-5.6 | Gần bản phát hành nhất |\n| ember-alpha | Trong log | Chưa rõ vai trò |\n| beacon-alpha | Trong log | Chưa rõ vai trò |",
        h_context="Ngữ cảnh 1,5M: so với GPT-5.5 tăng bao nhiêu",
        context="Tin rò rỉ chỉ khoảng **1.500.000 token** cho GPT-5.6:",
        ctx_table="| Kênh / phiên bản | Giới hạn (ước) | so với 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1.050.000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400.000 | ~+275% |\n| GPT-5.6 (rò rỉ) | 1.500.000 | — |",
        context_note="Ít cắt khối thủ công hơn nhưng chi phí và độ trễ mỗi lần gọi cao hơn.",
        h_test="Thử nghiệm cực dài (không chính thức)",
        test="Cộng đồng thử trên **OpenCode** v.v.: ~**900k token** vẫn phản hồi; có ca >**1,05M**. Không phải SLA chính thức.",
        h_ui="Sinh UI: gần frontend có thể ship hơn",
        ui="Ảnh rò rỉ có **Lumen Notes** với prompt ngắn—lưới và typography gọn hơn. Chờ bản công khai trước khi dùng production.",
        h_release="Đọc lịch phát hành",
        release="Chưa có ngày chốt. Tín hiệu yếu:",
        sig_table="| Tín hiệu | Ghi chú |\n| --- | --- |\n| Dòng thời gian rò rỉ | Nhiều nguồn **tháng 6/2026** |\n| Thị trường dự đoán | Polymarket = kỳ vọng cộng đồng |\n| Nhịp sản phẩm | Manh mối 5.6 ~3 tuần sau 5.5 |\n| Theo dõi | Thêm canary, system card, routing Codex |",
        release_note="Một dòng log không phải ngày phát hành.",
        h_unknown="Chưa rõ",
        unknown="Quy mô tham số, giá API, gói ChatGPT, sửa lỗi «goblin»—chờ thông báo chính thức.",
        h_guide="Hướng dẫn GPT trước khi ra mắt",
        guide=_guide_4("vi"),
        h_sum="Tóm tắt",
        sum_table="| Hạng mục | Đánh giá hiện tại |\n| --- | --- |\n| Công bố chính thức | Chưa |\n| Ngữ cảnh (rò rỉ) | ~1,5M |\n| so với API 5.5 | ~+43% |\n| Thời điểm | Thường nói 6/2026, chưa xác nhận |\n| Gợi ý | Dùng tốt GPT hiện có; chuyển sau system card |",
        sum_line="GPT-5.6 có đúng hạn và mở full context cho mọi người hay không phụ thuộc thông báo tiếp theo của OpenAI.",
    )

    # Indonesian
    merge(
        "id",
        intro="Beberapa pengembang melihat **GPT-5.6** di log backend OpenAI Codex sebelum pengumuman resmi. Jika benar, generasi berikutnya bisa menawarkan sekitar **1,5 juta token** konteks, dengan jendela rilis sekitar **Juni 2026**. Artikel ini memisahkan yang bisa diverifikasi dari yang belum pasti dan membandingkan dengan GPT-5.5.",
        keywords="Kata kunci: chatgpt, GPT-5.6, tutorial gpt.",
        published="Diterbitkan: 26 Mei 2026",
        img_alt="Kebocoran OpenAI GPT-5.6 konteks 1,5M",
        outro="Mulai GPT di LimaxAI lewat tombol di bawah.",
        h_leak="Dari mana petunjuknya: canary di log Codex",
        leak="Sekitar tiga minggu setelah GPT-5.5, **routing Codex** sempat menunjuk `gpt-5.6` lalu hilang—lebih seperti sisa deploy.\n\n**OpenAI belum mengumumkan GPT-5.6.**",
        h_codenames="Nama internal: iris-alpha, ember-alpha, beacon-alpha",
        codenames="Disebut **iris-alpha** (paling dekat GPT-5.6), **ember-alpha**, **beacon-alpha**; pemetaan tier publik belum jelas.",
        codenames_table="| Nama | Info publik | Catatan |\n| --- | --- | --- |\n| iris-alpha | Muncul dengan nama GPT-5.6 | Terdekat ke rilis |\n| ember-alpha | Di log | Peran belum jelas |\n| beacon-alpha | Di log | Peran belum jelas |",
        h_context="Konteks 1,5M: dibanding GPT-5.5",
        context="Bocoran menunjuk sekitar **1.500.000 token**:",
        ctx_table="| Saluran | Batas (perkiraan) | vs 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1.050.000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400.000 | ~+275% |\n| GPT-5.6 (bocoran) | 1.500.000 | — |",
        context_note="Lebih sedikit pemotongan manual, tetapi biaya dan latensi per panggilan naik.",
        h_test="Tes stres (tidak resmi)",
        test="Di **OpenCode** dll.: ~**900k token** masih merespons; ada kasus >**1,05M**. Bukan SLA resmi.",
        h_ui="Generasi UI: lebih siap produksi",
        ui="Bocoran menampilkan **Lumen Notes** dengan prompt pendek—grid dan tipografi lebih rapi.",
        h_release="Membaca timeline rilis",
        release="Belum ada tanggal pasti. Sinyal lemah:",
        sig_table="| Sinyal | Catatan |\n| --- | --- |\n| Timeline bocoran | Banyak mengarah **Juni 2026** |\n| Pasar prediksi | Polymarket = ekspektasi komunitas |\n| Ritme produk | Petunjuk 5.6 ~3 minggu setelah 5.5 |\n| Pantau | Canary, system card, routing Codex |",
        release_note="Satu baris log bukan tanggal rilis.",
        h_unknown="Masih belum jelas",
        unknown="Parameter, harga API, paket ChatGPT, perbaikan «goblin»—tunggu pengumuman resmi.",
        h_guide="Tutorial GPT sebelum rilis",
        guide=_guide_4("id"),
        h_sum="Ringkasan",
        sum_table="| Item | Penilaian |\n| --- | --- |\n| Diumumkan | Belum |\n| Konteks | ~1,5M |\n| vs API 5.5 | ~+43% |\n| Waktu | Sering Juni 2026, belum pasti |\n| Saran | Kuasai GPT sekarang |",
        sum_line="Jadwal resmi ada di tangan OpenAI; manfaatkan GPT yang sudah ada dulu.",
    )

    # Malay — distinct from Indonesian
    merge(
        "ms",
        intro="Beberapa pembangun melihat **GPT-5.6** dalam log backend OpenAI Codex sebelum pengumuman rasmi. Jika betul, generasi seterusnya mungkin menawarkan kira-kira **1.5 juta token** konteks, dengan tetingkap pelancaran sekitar **Jun 2026**. Artikel ini asingkan yang boleh disahkan daripada yang belum pasti.",
        keywords="Kata kunci: chatgpt, GPT-5.6, tutorial gpt.",
        published="Diterbitkan: 26 Mei 2026",
        img_alt="Kebocoran OpenAI GPT-5.6 konteks 1.5M",
        outro="Mula GPT di LimaxAI melalui butang di bawah.",
        h_leak="Dari mana petunjuk: canary dalam log Codex",
        leak="Kira-kira tiga minggu selepas GPT-5.5, **routing Codex** seketika menunjuk `gpt-5.6` kemudian hilang.\n\n**OpenAI belum umum GPT-5.6.**",
        h_codenames="Nama dalaman: iris-alpha, ember-alpha, beacon-alpha",
        codenames="**iris-alpha**, **ember-alpha**, **beacon-alpha** disebut; pemetaan tier awam belum jelas.",
        codenames_table="| Nama | Maklumat awam | Nota |\n| --- | --- | --- |\n| iris-alpha | Dengan nama GPT-5.6 | Paling hampir pelancaran |\n| ember-alpha | Dalam log | Peranan belum jelas |\n| beacon-alpha | Dalam log | Peranan belum jelas |",
        h_context="Konteks 1.5M berbanding GPT-5.5",
        context="Bocoran: kira-kira **1,500,000 token**:",
        ctx_table="| Saluran | Had (anggaran) | vs 1.5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1,050,000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400,000 | ~+275% |\n| GPT-5.6 (bocoran) | 1,500,000 | — |",
        context_note="Kurang potongan manual, tetapi kos dan kependaman setiap panggilan lebih tinggi.",
        h_test="Ujian tekanan (tidak rasmi)",
        test="Dalam **OpenCode** dll.: ~**900k token** masih bertindak balas; ada >**1.05M**. Bukan SLA rasmi.",
        h_ui="Penjanaan UI",
        ui="Tangkapan bocoran: **Lumen Notes** dengan prompt pendek—grid lebih kemas.",
        h_release="Membaca jadual pelancaran",
        release="Tiada tarikh pasti. Isyarat lemah:",
        sig_table="| Isyarat | Nota |\n| --- | --- |\n| Garis masa bocoran | Ramai tunjuk **Jun 2026** |\n| Pasaran ramalan | Polymarket = jangkaan komuniti |\n| Rentak produk | Petunjuk 5.6 ~3 minggu selepas 5.5 |",
        release_note="Satu baris log bukan tarikh pelancaran.",
        h_unknown="Masih tidak jelas",
        unknown="Parameter, harga API, pelan ChatGPT—tunggu pengumuman rasmi.",
        h_guide="Tutorial GPT sebelum pelancaran",
        guide=_guide_4("ms"),
        h_sum="Ringkasan",
        sum_table="| Item | Bacaan semasa |\n| --- | --- |\n| Diumumkan | Tidak |\n| Konteks | ~1.5M |\n| vs API 5.5 | ~+43% |\n| Masa | Jun 2026 kerap disebut |",
        sum_line="OpenAI yang tentukan masa; gunakan GPT sedia ada dengan lebih baik dahulu.",
    )

    # Thai
    merge(
        "th",
        intro="นักพัฒนาหลายคนพบ **GPT-5.6** ในล็อก backend ของ OpenAI Codex ก่อนประกาศอย่างเป็นทางการ หากข่าวจริง รุ่นถัดไปอาจมีบริบทราว **1.5 ล้านโทเค็น** ช่วงเปิดตัวชี้ไปที่ **มิถายน 2026** บทความนี้แยกสิ่งที่ตรวจสอบได้กับสิ่งที่ยังไม่แน่",
        keywords="คำสำคัญ: chatgpt, GPT-5.6, บทช่วยสอน gpt",
        published="เผยแพร่: 26 พ.ค. 2026",
        img_alt="ข่าวลือ OpenAI GPT-5.6 บริบท 1.5M",
        outro="เริ่มใช้ GPT บน LimaxAI ที่ปุ่มด้านล่าง",
        h_leak="เบาะแสมาจากไหน: canary ในล็อก Codex",
        leak="ประมาณสามสัปดาห์หลัง GPT-5.5 **การกำหนดเส้นทาง Codex** มีรายการชี้ `gpt-5.6` ชั่วคราวแล้วหาย\n\n**OpenAI ยังไม่ประกาศ GPT-5.6**",
        h_codenames="ชื่อภายใน: iris-alpha, ember-alpha, beacon-alpha",
        codenames="มี **iris-alpha**, **ember-alpha**, **beacon-alpha** ยังไม่ชัดว่าแมป tier สาธารณะอย่างไร",
        codenames_table="| ชื่อ | ข้อมูลสาธารณะ | หมายเหตุ |\n| --- | --- | --- |\n| iris-alpha | ปรากฏกับชื่อ GPT-5.6 | ใกล้เวอร์ชันจำหน่าย |\n| ember-alpha | ในล็อก | บทบาทไม่ชัด |\n| beacon-alpha | ในล็อก | บทบาทไม่ชัด |",
        h_context="บริบท 1.5M เทียบ GPT-5.5",
        context="ข่าวลือชี้ประมาณ **1,500,000 โทเค็น**:",
        ctx_table="| ช่องทาง | เพดาน (โดยประมาณ) | เทียบ 1.5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1,050,000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400,000 | ~+275% |\n| GPT-5.6 (ข่าวลือ) | 1,500,000 | — |",
        context_note="ตัดชิ้นมือน้อยลง แต่ต้นทุนและความหน่วงต่อครั้งสูงขึ้น",
        h_test="ทดสอบความยาวสุดขั้ว (ไม่เป็นทางการ)",
        test="ชุมชนทดใน **OpenCode** ฯลฯ: ~**900k โทเค็น** ยังตอบได้ บางเคส >**1.05M** ไม่ใช่ SLA",
        h_ui="สร้าง UI: ใกล้ frontend พร้อมขึ้นระบบ",
        ui="ภาพรั่วมี **Lumen Notes** จากพรอมต์สั้น—เลย์เอาต์เรียบขึ้น",
        h_release="อ่านไทม์ไลน์เปิดตัว",
        release="ยังไม่มีวันยืนยัน สัญญาณอ่อน:",
        sig_table="| สัญญาณ | หมายเหตุ |\n| --- | --- |\n| ไทม์ไลน์ข่าวลือ | หลายแหล่งชี้ **มิถายน 2026** |\n| ตลาดทำนาย | Polymarket = ความคาดหวังชุมชน |\n| จังหวะผลิตภัณฑ์ | เบาะแส 5.6 ~3 สัปดาห์หลัง 5.5 |",
        release_note="บรรทัดล็อกหนึ่งบรรทัดไม่ใช่วันเปิดตัว",
        h_unknown="ยังไม่ชัด",
        unknown="พารามิเตอร์ ราคา API แผน ChatGPT—รอประกาศอย่างเป็นทางการ",
        h_guide="บทช่วยสอน GPT ก่อนเปิดตัว",
        guide=_guide_4("th"),
        h_sum="สรุป",
        sum_table="| รายการ | มุมมองตอนนี้ |\n| --- | --- |\n| ประกาศแล้ว | ยัง |\n| บริบท (ข่าวลือ) | ~1.5M |\n| เทียบ API 5.5 | ~+43% |",
        sum_line="OpenAI จะเป็นคนบอกกำหนดถัดไป จนกว่านั้นใช้ GPT ที่มีให้คุ้มก่อน",
    )

    # Turkish
    merge(
        "tr",
        intro="Birçok geliştirici, resmi duyurudan önce OpenAI Codex arka uç günlüklerinde **GPT-5.6** gördü. Doğruysa yeni nesil yaklaşık **1,5 milyon token** bağlam ve **Haziran 2026** penceresi sunabilir. Yazı doğrulanabilir ile belirsizi ayırır ve GPT-5.5 ile karşılaştırır.",
        keywords="Anahtar kelimeler: chatgpt, GPT-5.6, gpt eğitimi.",
        published="Yayın: 26 Mayıs 2026",
        img_alt="OpenAI GPT-5.6 sızıntısı 1,5M bağlam",
        outro="LimaxAI'de GPT için aşağıdaki düğmeyi kullanın.",
        h_leak="İpucu nereden: Codex günlüklerinde canary",
        leak="GPT-5.5'ten yaklaşık üç hafta sonra **Codex yönlendirmesi** kısa süre `gpt-5.6` gösterdi sonra kayboldu.\n\n**OpenAI GPT-5.6 duyurmadı.**",
        h_codenames="Dahili kod adları: iris-alpha, ember-alpha, beacon-alpha",
        codenames="**iris-alpha**, **ember-alpha**, **beacon-alpha** geçiyor; genel katman eşlemesi belirsiz.",
        codenames_table="| Kod | Kamuya açık bilgi | Not |\n| --- | --- | --- |\n| iris-alpha | GPT-5.6 adıyla | Sürüme en yakın |\n| ember-alpha | Günlükte | Rol belirsiz |\n| beacon-alpha | Günlükte | Rol belirsiz |",
        h_context="1,5M bağlam: GPT-5.5'e göre",
        context="Sızıntılar GPT-5.6 için yaklaşık **1.500.000 token** diyor:",
        ctx_table="| Kanal | Yaklaşık üst sınır | 1,5M'ye göre |\n| --- | --- | --- |\n| GPT-5.5 API | 1.050.000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400.000 | ~+275% |\n| GPT-5.6 (sızıntı) | 1.500.000 | — |",
        context_note="Daha az manuel parçalama, daha yüksek maliyet ve gecikme.",
        h_test="Aşırı uzunluk stres testleri (resmi değil)",
        test="**OpenCode** vb.: ~**900k token** yanıt veriyor; >**1,05M** örnekler var. SLA değil.",
        h_ui="UI üretimi",
        ui="Sızıntıda kısa istemle **Lumen Notes**—daha düzenli ızgara ve tipografi.",
        h_release="Yayın takvimini okumak",
        release="Kesin tarih yok. Zayıf sinyaller:",
        sig_table="| Sinyal | Not |\n| --- | --- |\n| Sızıntı zaman çizelgesi | Çoğu **Haziran 2026** |\n| Tahmin piyasaları | Polymarket = topluluk beklentisi |\n| Ürün temposu | 5.6 ipucu ~3 hafta sonra 5.5 |",
        release_note="Tek log satırı yayın tarihi değildir.",
        h_unknown="Hâlâ belirsiz",
        unknown="Parametreler, API fiyatı, ChatGPT planları—resmi duyuru beklenmeli.",
        h_guide="Yayın öncesi GPT eğitimi",
        guide=_guide_4("tr"),
        h_sum="Özet",
        sum_table="| Öğe | Şimdiki okuma |\n| --- | --- |\n| Duyuruldu | Hayır |\n| Bağlam | ~1,5M |\n| API 5.5'e göre | ~+43% |",
        sum_line="Zamanlama OpenAI'ye bağlı; elinizdeki GPT'yi verimli kullanın.",
    )

    # Hindi
    merge(
        "hi",
        intro="कई डेवलपर्स ने आधिकारिक घोषणा से पहले OpenAI Codex बैकएंड लॉग में **GPT-5.6** देखा। यदि सही हो, अगली पीढ़ी लगभग **15 लाख टोकन** संदर्भ और **जून 2026** विंडो दे सकती है। लेख सत्यापित और अनिश्चित को अलग करता है।",
        keywords="कीवर्ड: chatgpt, GPT-5.6, gpt ट्यूटोरियल।",
        published="प्रकाशित: 26 मई 2026",
        img_alt="OpenAI GPT-5.6 लीक 15 लाख संदर्भ",
        outro="LimaxAI पर GPT शुरू करने के लिए नीचे बटन दबाएँ।",
        h_leak="सुराग कहाँ से: Codex लॉग में canary",
        leak="GPT-5.5 के लगभग तीन सप्ताह बाद **Codex रूटिंग** में कुछ सत्र `gpt-5.6` दिखे फिर गायब—जानबूझकर घोषणा नहीं।\n\n**OpenAI ने GPT-5.6 की घोषणा नहीं की।**",
        h_codenames="आंतरिक कोड नाम",
        codenames="**iris-alpha**, **ember-alpha**, **beacon-alpha** का ज़िक्र; सार्वजनिक टियर मैपिंग अज्ञात।",
        codenames_table="| नाम | सार्वजनिक जानकारी | नोट |\n| --- | --- | --- |\n| iris-alpha | GPT-5.6 नाम के साथ | रिलीज़ के सबसे नज़दीक |\n| ember-alpha | लॉग में | भूमिका अज्ञात |\n| beacon-alpha | लॉग में | भूमिका अज्ञात |",
        h_context="15 लाख संदर्भ: GPT-5.5 की तुलना",
        context="लीक लगभग **1,500,000 टोकन** बताती है:",
        ctx_table="| चैनल | अनुमानित सीमा | 15 लाख से |\n| --- | --- | --- |\n| GPT-5.5 API | 1,050,000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400,000 | ~+275% |\n| GPT-5.6 (लीक) | 1,500,000 | — |",
        context_note="कम मैनुअल चंकिंग, अधिक लागत और विलंब।",
        h_test="अत्यंत लंबाई स्ट्रेस टेस्ट (अनौपचारिक)",
        test="**OpenCode** आदि में ~**9 लाख टोकन** पर भी जवाब; कुछ >**10.5 लाख**। SLA नहीं।",
        h_ui="UI जनरेशन",
        ui="लीक में छोटे प्रॉम्प्ट पर **Lumen Notes**—साफ़ लेआउट।",
        h_release="रिलीज़ समयरेखा पढ़ना",
        release="कोई पुष्ट तिथि नहीं। कमज़ोर संकेत:",
        sig_table="| संकेत | नोट |\n| --- | --- |\n| लीक समयरेखा | कई **जून 2026** |\n| भविष्य बाज़ार | Polymarket = समुदाय अपेक्षा |",
        release_note="एक लॉग पंक्ति लॉन्च तिथि नहीं।",
        h_unknown="अभी अज्ञात",
        unknown="पैरामीटर, API मूल्य, ChatGPT योजनाएँ—आधिकारिक घोषणा की प्रतीक्षा।",
        h_guide="लॉन्च से पहले GPT ट्यूटोरियल",
        guide=_guide_4("hi"),
        h_sum="सारांश",
        sum_table="| आइटम | वर्तमान |\n| --- | --- |\n| घोषित | नहीं |\n| संदर्भ | ~15 लाख |\n| API 5.5 बनाम | ~+43% |",
        sum_line="समय OpenAI तय करेगा; अभी मौजूदा GPT से अधिक लें।",
    )

    # Persian
    merge(
        "fa",
        intro="چند توسعه‌دهنده پیش از اعلام رسمی، **GPT-5.6** را در لاگ بک‌اند OpenAI Codex دیدند. اگر درست باشد، نسل بعدی حدود **۱٫۵ میلیون توکن** زمینه و پنجره **ژوئن ۲۰۲۶** دارد. این نوشتار تأییدشده را از نامشخص جدا می‌کند.",
        keywords="کلیدواژه‌ها: chatgpt، GPT-5.6، آموزش gpt.",
        published="انتشار: ۲۶ مه ۲۰۲۶",
        img_alt="نشت OpenAI GPT-5.6 زمینه ۱٫۵M",
        outro="برای شروع GPT در LimaxAI دکمه زیر را بزنید.",
        h_leak="سرنخ از کجا: canary در لاگ Codex",
        leak="حدود سه هفته پس از GPT-5.5، مسیریابی **Codex** موقتاً `gpt-5.6` نشان داد و ناپدید شد.\n\n**OpenAI هنوز GPT-5.6 را اعلام نکرده.**",
        h_codenames="نام‌های رمز داخلی",
        codenames="**iris-alpha**، **ember-alpha**، **beacon-alpha**—نگاشت عمومی نامشخص.",
        codenames_table="| نام | اطلاعات عمومی | یادداشت |\n| --- | --- | --- |\n| iris-alpha | همراه نام GPT-5.6 | نزدیک‌ترین به انتشار |\n| ember-alpha | در لاگ | نقش نامشخص |\n| beacon-alpha | در لاگ | نقش نامشخص |",
        h_context="زمینه ۱٫۵M در برابر GPT-5.5",
        context="نشت‌ها حدود **۱٬۵۰۰٬۰۰۰ توکن** می‌گویند:",
        ctx_table="| کانال | سقف تقریبی | نسبت ۱٫۵M |\n| --- | --- | --- |\n| GPT-5.5 API | 1,050,000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400,000 | ~+275% |\n| GPT-5.6 (نشت) | 1,500,000 | — |",
        context_note="برش دستی کمتر، هزینه و تأخیر بیشتر.",
        h_test="تست فشار (غیررسمی)",
        test="در **OpenCode** و مشابه: ~**۹۰۰هزار توکن** پاسخ می‌دهد؛ گاهی >**۱٫۰۵M**. SLA نیست.",
        h_ui="تولید UI",
        ui="در نشت‌ها **Lumen Notes** با پرامپت کوتاه—چیدمان منظم‌تر.",
        h_release="خواندن زمان‌بندی انتشار",
        release="تاریخ قطعی نیست. سیگنال‌های ضعیف:",
        sig_table="| سیگنال | یادداشت |\n| --- | --- |\n| خط زمانی نشت | بسیاری **ژوئن ۲۰۲۶** |\n| بازار پیش‌بینی | Polymarket = انتظار جامعه |",
        release_note="یک خط لاگ تاریخ انتشار نیست.",
        h_unknown="هنوز نامشخص",
        unknown="پارامترها، قیمت API، طرح ChatGPT—منتظر اعلام رسمی.",
        h_guide="آموزش GPT پیش از عرضه",
        guide=_guide_4("fa"),
        h_sum="جمع‌بندی",
        sum_table="| مورد | وضعیت |\n| --- | --- |\n| اعلام رسمی | خیر |\n| زمینه | ~۱٫۵M |\n| در برابر API 5.5 | ~+43% |",
        sum_line="زمان‌بندی با OpenAI است؛ فعلاً از GPT موجود بیشترین بهره را ببرید.",
    )

    # Arabic — full native
    merge(
        "ar",
        intro="رصد عدة مطورين **GPT-5.6** في سجلات خلفية OpenAI Codex قبل أي إعلان رسمي. إذا صحت التسريبات، قد تقدّم الجيل التالي نحو **1.5 مليون رمز** سياقاً، مع نافذة إطلاق نحو **يونيو 2026**. يفصل المقال ما يمكن التحقق منه عما لا يزال غير مؤكد ويقارن مع GPT-5.5.",
        keywords="الكلمات المفتاحية: chatgpt، GPT-5.6، دليل gpt.",
        published="تاريخ النشر: 26 مايو 2026",
        img_alt="تسريب OpenAI GPT-5.6 سياق 1.5M",
        outro="لبدء GPT على LimaxAI اضغط الزر أدناه.",
        h_leak="من أين جاءت الأدلة: canary في سجلات Codex",
        leak="بعد نحو ثلاثة أسابيع من GPT-5.5، ظهرت في **سجلات توجيه Codex** إدخالات تشير مؤقتاً إلى `gpt-5.6` ثم اختفت—أشبه ببقايا نشر لا بإعلان مقصود.\n\n**OpenAI لم تعلن GPT-5.6 رسمياً.** ما يلي من سجلات المطورين وإعادة الإنتاج والتسريبات.",
        h_codenames="أسماء داخلية: iris-alpha وember-alpha وbeacon-alpha",
        codenames="يُذكر **iris-alpha** (الأقرب إلى GPT-5.6) و**ember-alpha** و**beacon-alpha**؛ لا يُعرف بعد ربطها بالفئات العامة.",
        codenames_table="| الاسم | معلومات معلنة | ملاحظة |\n| --- | --- | --- |\n| iris-alpha | يظهر مع اسم GPT-5.6 | الأقرب إلى الإصدار |\n| ember-alpha | في السجلات | دور غير معروف |\n| beacon-alpha | في السجلات | دور غير معروف |",
        h_context="سياق 1.5M: مقارنة بـ GPT-5.5",
        context="تشير التسريبات إلى نحو **1,500,000 رمز** لـ GPT-5.6:",
        ctx_table="| القناة | سقف تقريبي | مقابل 1.5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1,050,000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400,000 | ~+275% |\n| GPT-5.6 (تسريب) | 1,500,000 | — |",
        context_note="تقطيع يدوي أقل، لكن تكلفة وانتظار أعلى لكل استدعاء.",
        h_test="اختبارات ضغط بطول extreme (غير رسمية)",
        test="في **OpenCode** وغيرها: ~**900 ألف رمز** ما زالت تستجيب؛ بعض الحالات >**1.05M**. ليست SLA رسمية.",
        h_ui="توليد واجهات: أقرب لمنتج جاهز",
        ui="تسريبات أظهرت **Lumen Notes** بمطالبات قصيرة—شبكات وطباعة أوضح. انتظر الإصدار العام قبل الإنتاج.",
        h_release="كيف تقرأ الجدول الزمني",
        release="لا تاريخ مؤكد. إشارات ضعيفة:",
        sig_table="| إشارة | ملاحظة |\n| --- | --- |\n| خط زمني للتسريب | كثيراً **يونيو 2026** |\n| أسواق التوقع | Polymarket = توقع مجتمعي |\n| إيقاع المنتج | أدلة 5.6 بعد ~3 أسابيع من 5.5 |\n| متابعة | المزيد من canary وبطاقة النظام وCodex |",
        release_note="سطر سجل واحد ليس تاريخ إطلاق.",
        h_unknown="ما لا يزال غير واضح",
        unknown="حجم النموذج والتسعير وخطط ChatGPT وإصلاحات «goblin»—بانتظار الإعلان الرسمي أو بطاقة النظام.",
        h_guide="دليل GPT قبل الإطلاق",
        guide=_guide_4("ar"),
        h_sum="خلاصة",
        sum_table="| البند | التقييم الحالي |\n| --- | --- |\n| أُعلن رسمياً | لا |\n| سياق (تسريب) | ~1.5M |\n| مقابل API 5.5 | ~+43% |\n| التوقيت | يونيو 2026 غالباً، غير مؤكد |\n| نصيحة | أتقن GPT الحالي ثم انتقل بعد بطاقة النظام |",
        sum_line="موعد GPT-5.6 واتساع النافذة للجميع يحدده إعلان OpenAI التالي؛ حتى ذلك الحين استفد من GPT المتاح.",
    )

    # Polish, Dutch, Swedish, Romanian — replace PT table fallback
    for lc in ("pl", "nl", "sv", "ro"):
        g = _guide_4(lc)
        extra = {
            "pl": dict(
                h_codenames="Wewnętrzne nazwy kodowe",
                codenames="Wspominane są **iris-alpha**, **ember-alpha**, **beacon-alpha**; mapowanie na tiery publiczne niejasne.",
                codenames_table="| Nazwa | Co wiadomo | Uwagi |\n| --- | --- | --- |\n| iris-alpha | Z nazwą GPT-5.6 | Najbliżej wydania |\n| ember-alpha | W logach | Rola nieznana |\n| beacon-alpha | W logach | Rola nieznana |",
                ctx_table="| Kanał | Limit (ok.) | vs 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1 050 000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400 000 | ~+275% |\n| GPT-5.6 (przeciek) | 1 500 000 | — |",
                sig_table="| Sygnał | Uwagi |\n| --- | --- |\n| Przecieki | Często **czerwiec 2026** |\n| Rynki | Polymarket = oczekiwanie społeczności |\n| Tempo | Wskazówki ~3 tyg. po 5.5 |",
                sum_table="| Punkt | Ocena |\n| --- | --- |\n| Ogłoszono | Nie |\n| Kontekst | ~1,5M |\n| vs API 5.5 | ~+43% |\n| Termin | Czerwiec 2026 (plotka) |",
                context_note="Mniej ręcznego dzielenia, wyższy koszt i opóźnienie.",
                release_note="Jeden wpis w logu to nie data premiery.",
                guide=g,
            ),
            "nl": dict(
                codenames_table="| Naam | Openbaar | Opmerking |\n| --- | --- | --- |\n| iris-alpha | Met GPT-5.6 | Dichtst bij release |\n| ember-alpha | In logs | Rol onbekend |\n| beacon-alpha | In logs | Rol onbekend |",
                ctx_table="| Kanaal | Limiet (ca.) | vs 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1.050.000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400.000 | ~+275% |\n| GPT-5.6 (lek) | 1.500.000 | — |",
                sig_table="| Signaal | Opmerking |\n| --- | --- |\n| Lekken | Vaak **juni 2026** |\n| Markten | Polymarket = verwachting |\n| Tempo | ~3 weken na 5.5 |",
                sum_table="| Item | Stand |\n| --- | --- |\n| Aangekondigd | Nee |\n| Context | ~1,5M |\n| vs API 5.5 | ~+43% |",
                context_note="Minder handmatig chunken, hogere kosten en latentie.",
                release_note="Eén logregel is geen releasedatum.",
                guide=g,
            ),
            "sv": dict(
                codenames_table="| Namn | Offentligt | Anteckning |\n| --- | --- | --- |\n| iris-alpha | Med GPT-5.6 | Närmast release |\n| ember-alpha | I loggar | Roll okänd |\n| beacon-alpha | I loggar | Roll okänd |",
                ctx_table="| Kanal | Tak (ca.) | vs 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1 050 000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400 000 | ~+275% |\n| GPT-5.6 (läcka) | 1 500 000 | — |",
                sig_table="| Signal | Anteckning |\n| --- | --- |\n| Läckor | Ofta **juni 2026** |\n| Marknader | Polymarket = förväntan |\n| Tempo | ~3 veckor efter 5.5 |",
                sum_table="| Punkt | Bedömning |\n| --- | --- |\n| Tillkännagetts | Nej |\n| Kontext | ~1,5M |\n| vs API 5.5 | ~+43% |",
                context_note="Mindre manuell chunking, högre kostnad och latens.",
                release_note="En loggrad är inte releasedatum.",
                guide=g,
            ),
            "ro": dict(
                codenames_table="| Nume | Public | Notă |\n| --- | --- | --- |\n| iris-alpha | Cu GPT-5.6 | Cel mai aproape de lansare |\n| ember-alpha | În jurnale | Rol necunoscut |\n| beacon-alpha | În jurnale | Rol necunoscut |",
                ctx_table="| Canal | Limită (aprox.) | vs 1,5M |\n| --- | --- | --- |\n| GPT-5.5 API | 1.050.000 | ~+43% |\n| GPT-5.5 (Codex OAuth) | 400.000 | ~+275% |\n| GPT-5.6 (zvon) | 1.500.000 | — |",
                sig_table="| Semnal | Notă |\n| --- | --- |\n| Zvonuri | Des **iunie 2026** |\n| Piețe | Polymarket = așteptare |\n| Ritm | Indicii ~3 săpt. după 5.5 |",
                sum_table="| Element | Evaluare |\n| --- | --- |\n| Anunțat | Nu |\n| Context | ~1,5M |\n| vs API 5.5 | ~+43% |",
                context_note="Mai puțin chunking manual, cost și latență mai mari.",
                release_note="O linie de log nu e dată de lansare.",
                guide=g,
            ),
        }[lc]
        cur = overrides.get(lc, es.copy())
        cur.update(extra)
        overrides[lc] = cur

    for lc in ("ko", "fr", "de", "pt", "it", "ru", "uk"):
        if lc in overrides:
            overrides[lc]["guide"] = _guide_4(lc)
