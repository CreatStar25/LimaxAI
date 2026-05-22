# Full-depth locale strings for gpt55_full_sections (all keys per language).

def _tpl(L: dict) -> dict:
    """Build full section dict from locale-specific fragments."""
    return {
        "intro": L["intro"],
        "keywords": L["keywords"],
        "published": L["published"],
        "img_alt": L["img_alt"],
        "h_bg": L["h_bg"],
        "bg": (
            f"{L['bg_p1']}\n\n"
            f"{L['simon_line']}"
        ),
        "h1": L["h1"],
        "c1": (
            f"**{L['c1_old_lbl']}**\n\n"
            f"> {L['c1_old']}\n\n"
            f"**{L['c1_new_lbl']}**\n\n"
            f"> {L['c1_new']}\n\n"
            f"{L['c1_sum']}"
        ),
        "h2": L["h2"],
        "c2": L["c2"],
        "tbl_h1": L["tbl_h1"],
        "tbl_h2": L["tbl_h2"],
        "tbl_r1": L["tbl_r1"],
        "tbl_r1b": L["tbl_r1b"],
        "tbl_r2": L["tbl_r2"],
        "tbl_r2b": L["tbl_r2b"],
        "c2_ex": L["c2_ex"],
        "h3": L["h3"],
        "c3": (
            f"{L['c3_intro']}\n\n"
            f"- **Role:** {L['c3_role']}\n"
            f"- **Personality:** {L['c3_pers']}\n\n"
            f"{L['c3_tpl_intro']}\n\n"
            f"- **Steady:** {L['c3_steady']}\n"
            f"- **Expressive:** {L['c3_expr']}\n\n"
            f"{L['c3_close']}"
        ),
        "h4": L["h4"],
        "c4": (
            f"{L['c4_intro']}\n\n"
            f"> {L['c4_quote']}\n\n"
            f"{L['c4_codex']}"
        ),
        "h5": L["h5"],
        "c5": (
            f"{L['c5_intro']}\n\n"
            f"{L['c5_strats']}\n\n"
            f"1. **{L['c5_s1_t']}:** {L['c5_s1']}\n"
            f"2. **{L['c5_s2_t']}:** {L['c5_s2']}"
        ),
        "h6": L["h6"],
        "c6_table": L["c6_table"],
        "c6_note": L["c6_note"],
        "h7": L["h7"],
        "c7": (
            f"{L['c7_intro']}\n\n"
            f"{L['c7_ex1']}\n\n"
            f"> {L['c7_q1']}\n\n"
            f"{L['c7_rw']}\n\n"
            f"> {L['c7_q2']}\n\n"
            f"{L['c7_close']}"
        ),
        "h_mig": L["h_mig"],
        "mig": L["mig"],
        "h_sum": L["h_sum"],
        "sum_line": L["sum_line"],
        "sum_table": L["sum_table"],
        "outro": L["outro"],
    }


# Shared table row labels pattern for romance/germanic
def _rows(L):
    return {
        "tbl_h1": L.get("tbl_h1", "Situation"),
        "tbl_h2": L.get("tbl_h2", "Style"),
        "tbl_r1": L["tbl_r1"],
        "tbl_r1b": L["tbl_r1b"],
        "tbl_r2": L["tbl_r2"],
        "tbl_r2b": L["tbl_r2b"],
    }


LOCALE_FRAGMENTS: dict[str, dict] = {}

# Korean
LOCALE_FRAGMENTS["ko"] = {
    "intro": "GPT-5.5 출시와 함께 OpenAI가 공식 프롬프트 가이드를 공개했습니다. 구형 모델의 «단계별 지시» 프롬프트는 모델의 발휘를 좁힐 수 있습니다. 가장 중요한 7가지 변화를 실무 가이드로 정리합니다.",
    "keywords": "키워드: chatgpt, gpt 5.5, gpt 튜토리얼.",
    "published": "게시일: 2026년 5월 22일",
    "img_alt": "OpenAI GPT 5.5 프롬프트 가이드 7가지 핵심 변화",
    "h_bg": "배경: 왜 기존 프롬프트를 다시 써야 하나",
    "bg_p1": "공식 문서는 분명합니다. 이전 프롬프트는 **절차를 과도하게 지정**하는 경우가 많았고, 초기 모델이 궤도를 벗어나지 않도록 돕기 위함이었습니다. GPT-5.5에서는 그 세부가 노이즈가 되어 탐색 공간을 줄이고 기계적인 답을 만듭니다.",
    "simon_line": "Django 공동 창시자 Simon Willison은 OpenAI가 튜닝된 레거시 프롬프트가 그대로 통할 것이라 가정하지 말고 **처음부터 다시 쓰라**고 권한다고 지적했습니다. GPT-5.5로 이전하거나 LimaxAI에서 비슷한 기능을 쓸 때 프롬프트를 모델 이름 교체가 아닌 새 제품 설계로 보세요.",
    "h1": "변화 1: 손잡이식 지시에서 결과 중심으로",
    "c1_old_lbl": "구 스타일(절차 우선)",
    "c1_old": "A를 확인하고 B를 확인한 뒤, 필드를 하나씩 비교하고, 모든 예외를 따져 어떤 도구를 호출할지 정하고, 끝나면 전 과정을 사용자에게 설명한다.",
    "c1_new_lbl": "신 스타일(결과 우선)",
    "c1_new": "사용자 문제를 완전히 해결한다. 정책과 계정 데이터로 무엇을 먼저 할지 정하고, 한 뒤 무엇을 했고 무엇이 남았는지 보고한다. 정보가 부족하면 가장 중요한 질문 하나만 한다.",
    "c1_sum": "한 줄로: **목적지를 설명하고, 지도의 모든 굴곡은 쓰지 않는다.** GPT-5.5는 스스로 경로를 계획한다. 경로를 고정하면 더 나은 해법을 막을 수 있다.",
    "h2": "변화 2: 절대 표현은 줄이고, 진짜 레드라인에만",
    "c2": "«항상 JSON», «500자를 절대 넘기지 마», «답하기 전에 반드시 검색» 같은 가드레일이 흔했습니다. GPT-5.5는 **절대 표현에 매우 민감**합니다—서로 충돌하는 «반드시» 두 개가 있으면 둘 다 만족하려다 둘 다 실패할 수 있습니다.",
    "tbl_h1": "상황", "tbl_h2": "권장 스타일",
    "tbl_r1": "안전 규칙, 필수 필드, 엄격한 금지", "tbl_r1b": "always/never(항상/절대)",
    "tbl_r2": "검색할지, 사용자에게 물을지", "tbl_r2b": "조건문",
    "c2_ex": "예: «답변 전 반드시 검색»을 «질문을 받은 뒤 기존 맥락만으로 답할 수 있는지 판단하고, 가능하면 검색 없이 바로 답한다»로 바꾼다.",
    "h3": "변화 3: 역할은 다시 중요하지만 짧게",
    "c3_intro": "«20년 경력의 최고 애널리스트…» 같은 긴 이력서형 페르소나는 GPT-5.5에서 ROI가 낮습니다. 공식 **7단 골격**은 여전히 **Role**과 **Personality**로 시작하지만 형태가 바뀌었습니다:",
    "c3_role": "기능과 맥락을 1~2문장으로.",
    "c3_pers": "톤, 온도, 협업 스타일—이력서가 아님.",
    "c3_tpl_intro": "가이드의 두 가지 페르소나 예:",
    "c3_steady": "믿을 만한 협업자—차분하고 직접적; 사용자는 유능하다고 가정; 불필요한 확인 없이 일을 진행.",
    "c3_expr": "대화적이고 호기심 많으며 적절히 위트; 모호하면 묻고, 맥락이 충분하면 결단.",
    "c3_close": "**Personality**는 «어떻게 말하는지», **협업 스타일**은 «어떻게 행동하는지」(모호한 요청에서 추측 vs. 확인)—따로 쓰세요.",
    "h4": "변화 4: 다단계 작업은 실행 전에 확인",
    "c4_intro": "복잡한 작업에서 모델은 한동안 내부 추론만 하고 화면에 출력이 없어 사용자가 멈춘 것으로 착각하기 쉽습니다. 프롬프트에 **Preamble(서두 확인)** 규칙을 넣으세요:",
    "c4_quote": "다단계 작업에서 도구를 호출하기 전에, 요청을 받았고 첫 단계가 무엇인지 알리는 짧은 사용자용 업데이트를 1~2문장으로 보낸다.",
    "c4_codex": "Codex 같은 제품은 이미 «코드베이스를 분석 중이며, 테스트 파일부터 시작합니다» 같은 패턴을 쓰며, API와 긴 ChatGPT 작업 모두에 유효합니다.",
    "h5": "변화 5: 중단 조건을 정의하라",
    "c5_intro": "«관련 정보를 검색한 뒤 답한다»만 쓰고 언제 멈출지 정하지 않으면 검색이 반복되고 토큰은 늘며 답은 산만해집니다.",
    "c5_strats": "두 가지 흔한 전략:",
    "c5_s1_t": "검색 예산", "c5_s1": "일반 Q&A는 기본 1라운드; 1페이지 증거로 충분하면 답한다. 2라운드는 1페이지에 답이 없거나, 핵심 데이터가 빠지거나, 사용자가 전면 커버를 원할 때만.",
    "c5_s2_t": "루프 중단", "c5_s2": "각 도구 라운드 후 기존 증거로 핵심 질문에 답할 수 있는지 스스로 묻고, 가능하면 멈춘다.",
    "h6": "변화 6: 공식 7단 프롬프트 골격",
    "c6_table": "| 구간 | 목적 |\n| --- | --- |\n| Role | 기능·맥락(1~2문장) |\n| Personality | 톤·스타일·협업 |\n| Goal | 사용자에게 보이는 산출물 |\n| Success | 완료 정의 |\n| Constraints | 안전·비즈니스·증거·부작용 경계 |\n| Output | 형식·길이·목소리 |\n| Stop rules | 재시도·에스컬레이션·거절·질문·중단 시점 |",
    "c6_note": "참고: **매번 7단을 다 쓸 필요는 없습니다**. 단순 Q&A는 Goal+Output만으로 충분할 수 있고, 다중 도구 에이전트는 전체가 필요합니다. OpenAI 개발자 콘솔의 **Optimize**로 기존 프롬프트를 이 구조에 맞게 다듬을 수 있습니다.",
    "h7": "변화 7: 형식 제어와 간결한 기본값",
    "c7_intro": "GPT-5.5는 기본적으로 간결하고 직접적입니다. API에서는 `text.verbosity`(`medium` 기본, 더 짧게는 `low` 시도); 복잡한 형식은 프롬프트에 큰 JSON 예시 대신 **Structured Outputs**를 쓰세요.",
    "c7_ex1": "문체는 프롬프트로도 지정할 수 있습니다. 예:",
    "c7_q1": "기본은 자연스러운 단락; 제목·굵게·목록은 이해에 도움이 될 때만.",
    "c7_rw": "리라이트는 **무엇을 유지할지**를 **어떻게 고칠지**보다 먼저:",
    "c7_q2": "원문 구조·길이·문체를 유지하고 명료성만 높인다—사용자가 요청하지 않는 한 새 주장·단락을 추가하지 않는다.",
    "c7_close": "유지 규칙이 없으면 모델은 기본적으로 확장·재구성하기 쉽습니다.",
    "h_mig": "이전 팁: reasoning effort는 낮은 쪽부터",
    "mig": "프롬프트 외에 **`reasoning.effort`**도 재평가하세요. GPT-5.5 기본은 `medium`이고 많은 작업은 `low`로 충분합니다. 높을수록 항상 좋은 것은 아닙니다—충돌 지시나 약한 중단 규칙에 높은 effort는 과도한 검색·우회를 낳을 수 있습니다. 고정 평가 세트로 A/B를 돌리고 `low`/`medium`부터 시작해, 품질 이득이 지연·비용을 정당화할 때만 `high`/`xhigh`로 올리세요.",
    "h_sum": "요약: 한 줄로 기억하기",
    "sum_line": "**원하는 것을 말하고, 모든 실행 단계는 가르치지 마라.**",
    "sum_table": "| 차원 | GPT-5.4 이전 | GPT-5.5 |\n| --- | --- | --- |\n| 절차 | 상세 단계 | 결과만 |\n| 어조 | 절대 표현 다수 | 레드라인만 절대, 나머지는 조건 |\n| 역할 | 긴 배경 | 1~2문장+페르소나 |\n| 다단계 | 즉시 실행 | 먼저 확인 |\n| 중단 | 자주 생략 | 명시 권장 |\n| 구조 | 자유 | 7단 골격(필요 시 축소) |\n| 형식 | 기본값 | API 매개변수+프롬프트 |",
    "outro": "다시 쓴 뒤 실제 작업에서 나란히 테스트하세요. 채팅으로 GPT를 쓰려면 아래 LimaxAI 버튼에서 원하는 모델을 선택하세요.",
}

# French
LOCALE_FRAGMENTS["fr"] = {
    "intro": "Avec le lancement de GPT-5.5, OpenAI a publié un guide officiel de prompting. Si vous écrivez encore des prompts « pas à pas » des anciens modèles, vous limitez peut-être le modèle. Cet article transforme les sept changements les plus importants en conseils pratiques.",
    "keywords": "Mots-clés : chatgpt, gpt 5.5, tutoriel gpt.",
    "published": "Publié le 22 mai 2026",
    "img_alt": "Guide de prompts OpenAI GPT 5.5 sept changements clés",
    "h_bg": "Contexte : pourquoi réécrire les anciens prompts",
    "bg_p1": "La documentation est claire : les anciens prompts **sur-spécifient souvent le processus**, car les modèles précédents avaient besoin de plus de garde-fous. Avec GPT-5.5, ce détail devient du bruit, réduit l'espace de recherche et produit des réponses mécaniques.",
    "simon_line": "Simon Willison, co-créateur de Django, a noté qu'OpenAI recommande de **réécrire from scratch** plutôt que de supposer que d'anciens prompts ajustés fonctionnent encore. Si vous migrez vers GPT-5.5 (ou testez des capacités similaires sur LimaxAI), traitez les prompts comme une nouvelle conception produit, pas un simple changement de nom de modèle.",
    "h1": "Changement 1 : de la main dans la main au résultat d'abord",
    "c1_old_lbl": "Ancien style (processus d'abord)",
    "c1_old": "Vérifier A, puis B, comparer champ par champ, raisonner sur chaque exception, choisir l'outil, puis expliquer tout le processus à l'utilisateur.",
    "c1_new_lbl": "Nouveau style (résultat d'abord)",
    "c1_new": "Résoudre entièrement le problème de l'utilisateur. S'appuyer sur la politique et les données de compte pour décider quoi faire en premier, puis indiquer ce qui a été fait et ce qui reste. Une seule question critique si une information manque.",
    "c1_sum": "En une ligne : **décrivez la destination, pas chaque virage sur la carte.** GPT-5.5 planifie son propre chemin ; un script rigide peut bloquer de meilleures routes.",
    "h2": "Changement 2 : moins d'absolus—réservez-les aux vraies lignes rouges",
    "c2": "Des garde-fous comme « toujours JSON », « ne jamais dépasser 500 mots » ou « doit chercher avant de répondre » étaient courants. GPT-5.5 est **très sensible aux absolus** : deux règles « doit » contradictoires peuvent faire échouer les deux.",
    "tbl_h1": "Cas", "tbl_h2": "Style recommandé",
    "tbl_r1": "Sécurité, champs requis, interdictions strictes", "tbl_r1b": "toujours/jamais",
    "tbl_r2": "Chercher ou demander à l'utilisateur", "tbl_r2b": "règles conditionnelles",
    "c2_ex": "Exemple : remplacez « doit chercher avant de répondre » par « Après la question, vérifier si le contexte existant suffit ; si oui, répondre sans chercher ».",
    "h3": "Changement 3 : le rôle revient—mais reste court",
    "c3_intro": "Les longues personas CV (« analyste top avec 20 ans d'expérience… ») ont un faible ROI sur GPT-5.5. Le **squelette officiel en sept parties** commence toujours par **Role** et **Personality**, mais la forme a changé :",
    "c3_role": "1–2 phrases sur la fonction et le contexte.",
    "c3_pers": "ton, chaleur et style de collaboration—not a CV.",
    "c3_tpl_intro": "Deux modèles de personnalité du guide :",
    "c3_steady": "collaborateur fiable—calme, direct ; suppose que l'utilisateur est capable ; avance sans confirmations inutiles.",
    "c3_expr": "conversationnel, curieux, spirituel quand c'est pertinent ; demande si c'est ambigu, décide si le contexte suffit.",
    "c3_close": "**Personality** = comment ça sonne ; **style de collaboration** = comment ça agit (deviner vs. clarifier sur des demandes vagues)—écrivez-les séparément.",
    "h4": "Changement 4 : accuser réception avant d'exécuter",
    "c4_intro": "Sur des tâches complexes, le modèle peut raisonner en silence sans sortie visible ; l'utilisateur croit qu'il est bloqué. Ajoutez une règle de **préambule** :",
    "c4_quote": "Sur les tâches multi-étapes, avant tout appel d'outil, envoyer une courte mise à jour visible confirmant la réception et la première action—une ou deux phrases.",
    "c4_codex": "Des produits comme Codex utilisent déjà ce schéma (p. ex. « Analyse de votre dépôt, en commençant par les tests ») pour l'API et les longues tâches ChatGPT.",
    "h5": "Changement 5 : définir les conditions d'arrêt",
    "c5_intro": "Si vous écrivez seulement « chercher puis répondre » sans définir quand s'arrêter, le modèle peut boucler la récupération : les tokens montent et les réponses se dispersent.",
    "c5_strats": "Deux stratégies courantes :",
    "c5_s1_t": "Budget de recherche", "c5_s1": "une ronde par défaut en Q&R ordinaire ; répondre si la première page suffit. Deuxième ronde seulement si la première page n'a pas la réponse, données clés manquantes ou demande exhaustive de l'utilisateur.",
    "c5_s2_t": "Arrêt de boucle", "c5_s2": "après chaque ronde d'outils, se demander si les preuves actuelles répondent à la question centrale ; si oui, arrêter.",
    "h6": "Changement 6 : le squelette officiel en sept parties",
    "c6_table": "| Partie | Rôle |\n| --- | --- |\n| Role | Fonction et contexte (1–2 phrases) |\n| Personality | Ton, style, collaboration |\n| Goal | Livrable visible |\n| Success | Définition du terminé |\n| Constraints | Sécurité, business, preuves, effets |\n| Output | Format, longueur, voix |\n| Stop rules | Quand réessayer, escalader, refuser, demander ou arrêter |",
    "c6_note": "Note : **vous n'avez pas besoin des sept à chaque fois**. Q&R simple : Goal + Output ; agents multi-outils : ensemble complet. La console développeur OpenAI propose aussi **Optimize** pour adapter les prompts existants.",
    "h7": "Changement 7 : format et concision par défaut",
    "c7_intro": "GPT-5.5 répond de façon concise et directe par défaut. Côté API, `text.verbosity` (`medium` par défaut ; essayez `low` pour plus court) ; pour les formats complexes, préférez **Structured Outputs** plutôt que de gros exemples JSON dans le prompt.",
    "c7_ex1": "Vous pouvez aussi guider la mise en page en prose, par exemple :",
    "c7_q1": "Par défaut des paragraphes naturels ; titres, gras et listes seulement s'ils aident la compréhension.",
    "c7_rw": "Pour les réécritures, indiquez **quoi préserver** avant **comment éditer** :",
    "c7_q2": "Conserver structure, longueur et voix d'origine ; améliorer seulement la clarté—pas de nouvelles affirmations ou paragraphes sauf demande de l'utilisateur.",
    "c7_close": "Sans règles de préservation, le modèle tend à développer et restructurer par défaut.",
    "h_mig": "Astuce migration : régler reasoning effort depuis le bas",
    "mig": "Au-delà des prompts, réévaluez **`reasoning.effort`**. GPT-5.5 est en `medium` par défaut ; beaucoup de tâches suffisent en `low`. Plus haut n'est pas automatiquement mieux : instructions conflictuelles ou règles d'arrêt faibles + effort élevé = sur-recherche et détours. Faites des A/B sur un jeu d'éval fixe ; commencez `low`/`medium`, puis `high`/`xhigh` seulement si le gain qualité justifie latence et coût.",
    "h_sum": "Résumé : une ligne à retenir",
    "sum_line": "**Dites ce que vous voulez—pas comment faire chaque étape.**",
    "sum_table": "| Dimension | GPT-5.4 et avant | GPT-5.5 |\n| --- | --- | --- |\n| Processus | Étapes détaillées | Résultats seulement |\n| Ton | Beaucoup d'absolus | Absolus pour lignes rouges ; conditionnels ailleurs |\n| Rôle | Long parcours | 1–2 phrases + personnalité |\n| Multi-étapes | Exécuter tout de suite | Préambule d'abord |\n| Arrêt | Souvent omis | Doit être explicite |\n| Structure | Libre | Squelette 7 parties (rogner si besoin) |\n| Format | Défauts | Paramètres API + prompt |",
    "outro": "Après réécriture, testez côte à côte sur de vraies tâches. Pour essayer GPT en chat, utilisez le bouton ci-dessous sur LimaxAI avec le modèle de votre choix.",
}

# Fix French c3_pers typo
LOCALE_FRAGMENTS["fr"]["c3_pers"] = "ton, chaleur et style de collaboration—pas un CV."
