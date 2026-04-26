---
title: "15개월의 기다림 끝에 DeepSeek이 마침내 V4 Preview 공개: 종합 분석"
description: "DeepSeek V4 Preview가 공식 출시되었습니다. 100만 토큰 컨텍스트의 기본 지원을 갖춘 두 가지 MoE 모델(Pro 및 Flash)을 선보이며, 성능을 크게 향상시키면서 추론 비용을 획기적으로 절감합니다. 이 글에서는 DeepSeek V4의 기술 아키텍처, 성능 및 가격 책정을 자세히 분석합니다."
tags: ["deepseek v4", "deepseek 공식 웹사이트", "deepseek 튜토리얼", "deepseek v4 가격"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "ko"
author: "DeepSeek HK"
---

이 글에서는 DeepSeek V4의 기술적 특징, 성능 및 사용 지침을 살펴보고, 이 신세대 대형 언어 모델의 핵심 이점을 종합적으로 분석합니다. 내용은 기술 애호가와 개발자 모두에게 적합한 쉬운 스타일로 작성되었습니다.

키워드: deepseek v4, deepseek 공식 웹사이트, deepseek 튜토리얼, deepseek v4 가격.

게시일: 2026년 4월 25일
저자: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/ko/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeek 사용 시작하기
  </a>
</div>

![DeepSeek V4 Preview 종합 분석](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview 공식 출시

4월 24일, DeepSeek은 V4 Preview 출시를 공식 발표했습니다. 이번 주요 업데이트는 V3.2 출시 15개월 만에 이루어진 것으로, DeepSeek의 대형 모델 기술 로드맵에서 또 하나의 중요한 돌파구를 의미합니다.

공식 소개에 따르면, V4 시리즈는 두 가지 MoE 모델을 포함합니다:
- **DeepSeek-V4-Pro**: 총 1.6T 파라미터, 활성화 파라미터 49B
- **DeepSeek-V4-Flash**: 총 284B 파라미터, 활성화 파라미터 13B

두 모델 모두 기본적으로 100만 토큰 컨텍스트를 지원하며, 이는 긴 텍스트 처리 능력의 질적인 도약을 의미합니다. 특히 1M 컨텍스트 설정에서:
- V4-Pro의 토큰당 추론 FLOPs는 V3.2의 27%에 불과하고, KV Cache는 10%에 그침
- V4-Flash는 더욱 극단적으로, 이 지표를 각각 10%와 7%로 낮춤

이는 컨텍스트 길이가 V3.2의 128K에서 V4의 1M으로 거의 8배 확장되었음에도 불구하고, 토큰당 연산 요구량이 오히려 크게 감소하여 긴 컨텍스트 기능과 추론 효율성 모두에서 돌파구를 이루었음을 의미합니다.

DeepSeek 측은 V4 Preview가 인프라 업데이트로 포지셔닝되며, 주로 다음 단계의 테스트 시간 스케일링과 장거리 작업을 위한 긴 컨텍스트 비용 구조를 재구성하는 것이 목적이라고 명확히 밝혔습니다. 현재 능력 수준은 여전히 GPT-5.4와 Gemini-3.1-Pro에 뒤처져 있으며, 최첨단 클로즈드 소스 모델보다 약 3~6개월 정도 뒤처진 개발 궤적을 보이고 있습니다.

## 2. 두 모델, 세 가지 추론 모드: V4의 핵심 기능

### 2.1 모델 파라미터 및 비용 이점

V4 시리즈의 가장 큰 하이라이트는 비용 곡선의 상당한 최적화입니다. 100만 토큰 컨텍스트 설정에서:
- V4-Pro: 토큰당 추론 FLOPs는 V3.2의 27%에 불과, KV Cache는 10%
- V4-Flash: 토큰당 추론 FLOPs는 V3.2의 10%에 불과, KV Cache는 7%

이러한 효율성 향상은 100만 수준 컨텍스트의 추론 비용을 획기적으로 절감하여, 긴 텍스트 처리, 문서 분석 등의 시나리오에 경제적으로 실현 가능한 솔루션을 제공합니다.

### 2.2 API 가격 체계

DeepSeek은 일관된 고가치 가격 전략을 지속하고 있습니다:
- **V4-Pro**: 100만 입력 토큰당 ¥1(캐시 히트) 또는 ¥12(캐시 미스), 100만 출력 토큰당 ¥24
- **V4-Flash**: 100만 입력 토큰당 ¥0.2(캐시 히트) 또는 ¥1(캐시 미스), 100만 출력 토큰당 ¥2

### 2.3 세 가지 추론 강도 레벨

각 모델은 다양한 시나리오 요구에 맞춰 세 가지 추론 모드를 제공합니다:
1. **Non-think**: 직접 출력 모드, 가장 빠른 응답 속도
2. **Think High**: 일반 심층 사고 모드, 속도와 품질의 균형
3. **Think Max**: 강력한 지시어를 주입하여 컨텍스트와 출력 길이를 최대화하고 모델의 모든 능력을 발휘

Max 모드는 모델 성능을 크게 향상시킵니다: V4-Pro-Max 점수는 HLE 테스트에서 34.5에서 37.7로, Apex Shortlist 테스트에서 85.5에서 90.2로 상승하며, 출력 토큰 수가 두 배로 늘어나는 대가를 치릅니다.

## 3. 벤치마크 테스트 성능

DeepSeek이 공개한 공식 테스트 데이터에 따르면, V4 시리즈는 여러 평가에서 우수한 성능을 보입니다:

### 3.1 지식 및 추론 테스트
- DeepSeek-V4-Pro-Max는 Apex Shortlist(90.2%)와 Codeforces(레이팅 3206) 두 가지 고난이도 추론/프로그래밍 작업에서 1위를 차지하며, 매우 강력한 논리 및 알고리즘 능력을 입증
- Gemini-3.1-Pro-High는 SimpleQA Verified(75.6%)에서 선두
- Claude와 GPT는 각기 다른 프로젝트에서 강점을 보이며, 전반적으로 작은 격차를 보임

### 3.2 에이전트 능력 테스트
- 네 모델 모두 SWE Verified 작업에서 동일하게 수행(모두 80.6% 달성)
- DeepSeek은 Terminal Bench 2.0(67.9%)과 Toolathlon(51.8%)에서 우수하며, 복잡한 지시 실행 및 도구 호출 시나리오에서 명확한 이점을 보임

관계자는 DeepSeek-V4-Pro의 에이전트 능력이 이전 세대에 비해 크게 향상되어 "Sonnet 4.5보다 사용자 경험이 우수하며, Opus 4.6 비사고 모드에 근접한 전달 품질을 제공하지만, 다소 Opus 4.6 사고 모드에는 여전히 뒤처져 있다"고 밝혔습니다.

### 3.3 세계 지식 및 일반 능력
- V4-Pro는 세계 지식 평가에서 다른 오픈소스 모델을 크게 능가하며, 최고의 클로즈드 소스 모델인 Gemini-Pro-3.1에 근소하게 뒤처져 있음
- 수학, STEM 및 경쟁 코드 평가에서 V4-Pro는 현재 공개 평가된 모든 오픈소스 모델을 능가하며, 세계 최고 수준의 클로즈드 소스 모델 수준에 도달
- 경제적인 모델인 V4-Flash는 Pro 버전보다 지식 저장량이 약간 적지만, 유사한 추론 능력을 보유. 더 작은 파라미터와 활성화 값으로 더 빠르고 비용 효율적인 API 서비스를 제공
- 에이전트 평가에서 V4-Flash는 간단한 작업에서 Pro 버전과 비슷한 성능을 보이지만, 고난이도 작업에서는 여전히 격차가 존재

## 4. 핵심 기술 혁신: 어텐션 메커니즘 재작성

V4의 가장 핵심적인 기술 변화는 어텐션 레이어에 있으며, 긴 컨텍스트 추론의 효율성 문제를 근본적으로 해결합니다.

기존 Transformer 어텐션 메커니즘에서 각 토큰은 이전 모든 토큰과의 유사도를 계산해야 합니다. 컨텍스트가 100K에서 1M으로 확장되면 계산 비용이 100배 증가하는데, 이는 긴 컨텍스트의 광범위한 채택을 방해하는 핵심 병목입니다.

V4는 교차하는 레이어를 가진 혁신적인 이중 어텐션 메커니즘을 채택합니다:
1. **CSA(Compressed Sparse Attention)**: 먼저 매 4개 토큰의 KV 캐시를 하나의 요약으로 병합한 후, 각 쿼리가 가장 관련성 높은 top-k 요약만 선택하여 어텐션 계산을 수행하도록 하여 처리할 콘텐츠를 압축하고 관련 정보만 집중
2. **HCA(Heavy Compressed Attention)**: 더 공격적인 압축을 사용하여 매 128개 토큰을 하나의 요약으로 병합한 후, 남은 요약에 대해 희소 선택 없이 밀집 어텐션을 적용

두 어텐션 메커니즘이 교차하여 쌓이고, 인근 토큰 간의 세부 종속성을 처리하는 슬라이딩 윈도우 브랜치와 결합하여 "거친 입자 + 미세 입자, 희소 + 밀집"의 결합 접근 방식을 형성합니다.

기술 진화 관점에서 DeepSeek V2와 V3는 주로 파라미터 희소화 경로(총 파라미터는 크지만 토큰당 부분 전문가만 활성화)를 따랐습니다. V4는 이를 기반으로 컨텍스트 희소화(KV 압축, top-k 선택, 계층적 압축률)의 새로운 경로를 개척합니다. 이는 DeepSeek이 "희소화" 개념을 Transformer의 핵심 구조에 적용한 첫 사례입니다.

어텐션 레이어 외에도 V4에는 두 가지 중요한 아키텍처 개선이 있습니다:
1. 기존 잔차 연결을 mHC(Manifold Constrained Hyperconnection)로 업그레이드하여, 수학적 제약을 통해 심층 네트워크의 순전파 및 역전파를 더 안정적으로 만듦
2. 대부분의 모듈에서 AdamW를 Muon 옵티마이저로 교체하여 더 빠른 수렴과 더 안정적인 학습을 달성

이는 DeepSeek이 어텐션, 잔차 연결, 옵티마이저라는 Transformer의 세 가지 핵심 구성 요소를 동시에 수정한 첫 사례입니다.

## 5. 사후 학습 패러다임 혁신: 전문가 모델 증류

아키텍처 변경에 비해 V4의 사후 학습 방법에서의 혁신은 더욱 주목할 만합니다.

V3.2는 "혼합 RL" 접근 방식을 사용하여 강화 학습으로 여러 목표를 동시에 최적화했습니다. V4는 "차별화 후 통합"이라는 두 단계 전략을 채택합니다:
1. **차별화 단계**: 수학, 코드, 에이전트, 지시 따르기 등 다양한 도메인에 대해 각 도메인별로 별도의 전문가 모델을 학습시킵니다. 이 전문가들은 먼저 고품질 도메인 데이터로 지도 미세 조정을 받은 후 GRPO 알고리즘으로 강화 학습을 수행하여, 각 전문가가 자신의 전문 분야에서 최적의 성능을 달성합니다
2. **통합 단계**: On-Policy Distillation(OPD) 방법을 사용하여 10개 이상의 도메인 전문가를 단일 학생 모델로 "합성"합니다. 학생이 답변을 생성한 후, "이 문제를 가장 잘 이해하는" 전문가의 출력 분포와 일치시켜, 로짓 수준 정렬을 통해 전문가의 능력을 흡수합니다

이 접근 방식은 여러 도메인의 "우등생" 능력을 하나의 모델로 증류하는 것으로 이해할 수 있습니다. 10개 이상의 조 단위 파라미터 교사 모델을 동시에 로드하는 엔지니어링 과제를 해결하기 위해, DeepSeek은 모든 교사 가중치를 분산 저장소에 오프로드하고 각 교사의 마지막 레이어 은닉 상태만 캐싱합니다. 학습 중에는 샘플을 교사 인덱스별로 정렬하여, 어느 시점이든 GPU 메모리에는 하나의 교사 헤드만 상주하도록 보장합니다.

이 접근 방식은 기존 "혼합 RL"에서 흔한 능력 간섭 문제를 피하여, 모델이 여러 도메인에서 최고 수준의 성능을 달성할 수 있게 합니다.

## 6. 에이전트 능력 특수 최적화

DeepSeek V4는 주류 에이전트 제품에 대한 특수 적응 및 최적화를 포함하며, 코드 작업, 문서 생성 및 기타 시나리오에서 향상된 성능을 보입니다.

V4의 에이전트 능력에 대한 특수 최적화는 다음을 포함합니다:
1. 사후 학습 과정에서 에이전트는 수학 및 코드와 함께 독립적인 전문가 방향으로 취급되며, 별도의 학습을 받음
2. 도구 호출 형식이 JSON에서 특수 토큰이 있는 XML 구조로 변경되어, 이스케이프 오류율을 감소시킴
3. 도구 호출 시나리오에서 교차 턴 추적이 완전히 보존되며, V3.2처럼 매 턴마다 지워지지 않음
4. 자체 구축된 DSec 샌드박스 플랫폼으로, 단일 클러스터가 동시에 수십만 개의 샌드박스 인스턴스를 관리할 수 있으며, 에이전트 강화 학습 학습 및 평가를 지원

관계자는 V4-Pro의 에이전트 능력이 "Sonnet 4.5보다 우수하며, Opus 4.5 비사고 모드에 근접한 전달 품질을 제공하지만, 다소 Opus 4.6 사고 모드에는 여전히 뒤처져 있다"고 밝혔습니다.

![DeepSeek V4 기술 아키텍처](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 요약

DeepSeek V4 Preview는 뛰어난 기술 혁신을 갖춘 대형 모델입니다. 어텐션 메커니즘 재구성 및 학습 패러다임 혁신을 통해 강력한 추론 능력을 유지하면서 긴 컨텍스트 추론 비용을 획기적으로 절감하여, 100만 수준 컨텍스트의 실용적 응용을 위한 길을 열었습니다.

강력한 추론 능력이 필요한 전문 시나리오든, 비용 효율성을 추구하는 대규모 응용 프로그램이든, V4 시리즈는 적합한 옵션을 제공합니다. DeepSeek V4의 강력한 기능을 경험하고 싶다면, 저희 플랫폼을 통해 바로 사용해 보세요.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/ko/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeek 사용 시작하기
  </a>
</div>