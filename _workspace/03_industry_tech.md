# 국가AI데이터센터 — 산업·기술 조사

- 조사 작성: industry (industry-tech-researcher)
- 작성일: 2026-05-11
- 기준 시점: 정부 첫 공식 발표 ~ 2026-05-11
- 본 산출물은 인프라 사양·참여 기업·공급 체인·산업 영향에 초점을 둠. 정책·예산·법령은 `_workspace/01_policy_official.md` (→ policy), 언론 보도 시계열·논조는 `_workspace/02_press_coverage.md` (→ press), 해외 비교는 `_workspace/04_context_global.md` (→ context) 참조.

---

## 1. 인프라 사양 요약

### 1.1 핵심 사양 표 (2026-05-11 사업자 확정 기준)

| 항목 | 사양 | 출처(매체·발표일) | 비고(확정/추정/이견) |
|------|------|------------------|---------------------|
| **총 연산 능력** | **~1.4 EF (1,400 PF)** 목표 (context/policy 2차 공유 기준) — 정밀도 명시는 정부 공식 자료에서 확인 미흡 | 한국경제 2025-02-07 / 디일렉 2025-04-01 / context·policy 공유 | **확정 목표** — FP 정밀도(FP16/BF16/FP8) 공식 명시 부족 |
| **GPU 수량(1단계)** | 2028년까지 H100 환산 15,000장 | 전자신문 2026-05-11 / ZDNet 2026-05-11 | **확정** — 2026-05-11 사업자 협약 |
| **GPU 수량(최종)** | 2030년까지 50,000장 이상 | 서울경제 2026 / ZDNet 2025-09-08 | **확정 목표** |
| **GPU 모델** | NVIDIA H100·H200·B200·B300(Blackwell)·Blackwell Ultra·AMD MI 시리즈·국산 NPU 모두 탑재 가능 | 전자신문 2025-04-01 ("별도 규격 없이 AI 학습·추론에 특화된 GPU면 모두 탑재 가능") | **확정 규정** — "H100 환산 성능" 기준만 충족하면 모델 무관 |
| **국산 NPU 비중** | 초기 자율 도입(과거 안: 2030년 50% 의무) | 디일렉 2025-09-08 — "기존 50% 의무 → 자율 단계 도입으로 완화" | **변경됨** — 재공모 시 완화 |
| **입지** | 전남 해남 솔라시도(서남해안기업도시) | 서울경제 / 시사저널 / 전자신문 2026-05-11 | **확정** |
| **부지** | 솔라시도 데이터센터파크 약 165만㎡(50만 평) — 삼성E&A·보성산업 MoU(2023) | 한국경제 2023-08-24 | 데이터센터파크 전체 부지(국가AI컴퓨팅센터 단일 점유 면적은 미공개) |
| **전력(데이터센터파크 전체)** | 총 1GW 전력공급 능력 (단계적 확장) | 한국경제 2023-08-24 ("40MW급 데이터센터 최대 25동, 총 1GW") | 데이터센터파크 전체 — 국가AI컴퓨팅센터 단일 시설 MW는 비공개 |
| **태양광·ESS(인근)** | 98MW 태양광 + 306MWh ESS(BS그룹 솔라시도 발전소) — 연 129GWh 발전 | BS-Hycorp / 파이낸셜뉴스 2020-11 / 산군 BS산업 자료 | 국내 최대 단지(직접 PPA 가능성 거론, 직결 여부 비공개) |
| **재생E 확장 계획** | 인근 3GW급 태양광 + 7GW급 풍력, 연 ~22TWh 공급(BS그룹 계획) | BS그룹 보도자료 | 기업 계획·추정 |
| **냉각 방식** | "수냉식(DLC)·액침냉각 도입" 거론, 최종 사양 비공개 | 라이프한 블로그 2025 / NHN 사례 디일렉 2025-08 | **추정** — 국가센터 자체 PUE·냉각 사양 공식 미공개 |
| **운영 일정** | SPC 설립 2026 Q2(4/1), 착공 2026 Q3(7월), 1단계 개소 2028, 최종 2030 | 전자신문/ZDNet/서울경제 2026-05-11, 서울경제 CES2026 2026-01 | **확정** |
| **총사업비** | 2조 5,000억(전자신문·ZDNet) ~ 2조 9,000억(시사저널·데일리저널) | 전자신문 2026-05-11, 데일리저널 | **매체 차이 존재** |
| **초기 출자금** | 4,000억원 (공공 1,160억 / 민간 2,840억) | 전자신문 2026-05-11 / ZDNet 2026-05-11 | **확정** |

### 1.2 발표 시기별 수치 변천 (policy 교차검증 반영 2026-05-11)

정부 공식 채널 발표 기준 시기별 수치 변동 (policy 1차 공유 통합):

| 발표 시점 | 출처/근거 | 총사업비 | 지분 구조 | GPU 사양 | 비고 |
|----------|-----------|---------|---------|---------|------|
| 2024-11-27 | 과기정통부 첫 발표 | **4조원** (민관 합작, 2030년까지) | 미정 | 미정 | 최초안 |
| 2025-01-22 | 과기정통부 실행계획 | **최대 2조원** + 정책금융 저리대출 2.5조원(2027년까지) | 공공 51% / 민간 49%, 정부·정책금융 출자 ~2,000억원 | GPU 1만장(H100급) | 1·2차 공모 기준 |
| 2025-02-17 | 최상목 권한대행 발언 | — | — | H100급 1만장 2025년 내 확보 | 별도 GPU 사업과 연계 |
| 2025-05/06 | 1·2차 공모 | (위 동일) | (위 동일) | (위 동일) | **2회 유찰** — 참여 자격·국산 NPU 50% 의무 등 부담 |
| 2025-09-08 | 과기정통부 재공모 | 2조원+, 세액공제 15~25% | **공공 30% 미만 / 민간 70% 이상**, 매수청구권 제거 | GPU **5만장** 단계 확보, 국산 NPU 자율 도입 | 디일렉/ZDNet |
| 2025-10-21 | 3차 공모 마감 | — | — | — | 삼성SDS 컨소시엄 단독 입찰 |
| 2025-10-31 | NVIDIA APEC | 한국 전체 $9.8B(14조원) | — | 26만장 Blackwell+, 정부 몫 5만장 | NVIDIA IR 1차 출처 |
| **2026-03-10** | **과기정통부 우선협상대상자 선정** | **2.9조원** | 협약 전 (재공모안 적용) | GPU **1만 5,000장(2028까지)** | 입지 솔라시도 확정. policy 공유 |
| **2026-05-11** | **과기정통부-삼성SDS 컨소시엄 실시협약** | **2.5조원** + 초기 출자 4,000억원 | **삼성SDS 30% / 공공 29% / 민간 71%** | **GPU 1만 5,000장(2028) → 5만장+(2030)** | 사업자 최종 확정. 전자신문/ZDNet 2026-05-11 |

**핵심 충돌 해석**:
- **총사업비 4조 → 2조 → 2.9조 → 2.5조**: 초기안(4조) → 실행계획 축소(2조) → 우선협상대상자 선정 시(2.9조, 2030년 5만장 최종확장 합산) → 협약 시 본 사업비(2.5조)로 정정. 매체별 보도 차이는 **두 시점**(2026-03-10 / 2026-05-11) 사이에 발생
- **지분 구조 51% 공공 → 29% 공공**: 1·2차 유찰 후 민간 부담 완화 차원에서 재공모 시 역전. 협약 시 공공 29%로 확정
- **GPU 1만장 → 5만장**: 정책금융 추가 + 단계적 확보로 확장
- **1만 5,000장 vs 1만 3,000장 vs 8,000장 혼동 금지**:
  - **국가AI컴퓨팅센터 1단계**: 1만 5,000장(H100 환산, 2028년까지)
  - **추경 GPU 임차 사업**(별개, 1.46조원): 13,136장(B200 10,080 + H200 3,056). NHN 7,656/Naver 3,056/Kakao 2,424 분담
  - **슈퍼컴 6호기**: 8,000장(2026 상반기 구축 예정, 별개)
- **조세·전력 지원**: AI 국가전략기술 지정(조특법), 전력계통영향평가 신속 처리, 비수도권 입지 원칙 — policy 공유

### 1.3 위치 선정 배경

- 최종 선정: 전남 해남 솔라시도 (광주 첨단3지구·무안 등과 경합 끝에 선정)
- 우위 요인: 풍부한 부지(50만 평 데이터센터파크 기조성), 전력망 여건, 용수, 인근 98MW 태양광·306MWh ESS, 토지 비용
  - 출처: 뉴스1 2025-10 "AI컴퓨팅센터 후보지 '솔라시도'…전력망·용수·땅값서 '우위'" [https://www.news1.kr/local/gwangju-jeonnam/5949529]
- 한계: 광주 첨단3지구 측에서 정치적 절차 논란("오픈AI 판흔들다") 제기 — 드림투데이 [https://www.gjdream.com/news/articleView.html?idxno=663073]

---

## 2. 참여 기업·컨소시엄

### 2.1 SPC(특수목적법인) 지분 구조

2026-05-11 과기정통부-삼성SDS 컨소시엄 실시협약 기준:

| 기업/주체 | 출자금 | 지분 | 역할 | 출처 |
|----------|--------|------|------|------|
| **삼성SDS** | 1,200억원 | 30% (단일 최대주주) | 컨소시엄 주관·인프라 구축·운영 | 전자신문 2026-05-11 |
| **공공(정부 등)** | 1,160억원 | 29% | 정책·자원 배분 감독 | ZDNet 2026-05-11 |
| **네이버클라우드** | 비공개(추정 ~26%) | 26% | 클라우드 운영·LLM 학습 자원 | 시사저널 2025-11 |
| **카카오** | 비공개 | 4% | 클라우드/AI 모델 운영 | 시사저널 2025-11 |
| **삼성물산** | 비공개 | 4% | 시공 EPC | 시사저널 / 한경 2023-08 |
| **삼성전자** | 비공개 | 3% | 메모리·서버 칩 공급 | 시사저널 2025-11 |
| **클러쉬(Clush)** | 비공개 | 3% | AI 인프라·운영 SW | 디일렉 2025 |
| **KT** | 비공개 | 1% | 네트워크·전용회선·클라우드 | 시사저널 2025-11 |
| **전라남도** | 비공개 | (지자체 지분) | 부지·인허가 | 전자신문 2026-05-11 |
| **서남해안기업도시개발** | 비공개 | (지자체 지분) | 토지·기반 | 전자신문 2026-05-11 |
| **민간 합계** | 2,840억원 | 71% | — | 전자신문 2026-05-11 |
| **총계** | 4,000억원 (초기 출자) | 100% | — | — |

- 삼성그룹 합산(삼성SDS·삼성물산·삼성전자) **37%** — 단일 그룹 최대 지분 (시사저널 2025-11) [https://www.sisajournal.com/news/articleView.html?idxno=350215]
- 네이버클라우드 26%는 2대 주주 (단일 회사 기준)
- 정부(공공) 29%는 단독 2대 주주 (총 출자 기준)

### 2.2 컨소시엄 구성 변천사

| 시기 | 사건 | 출처 |
|------|------|------|
| 2025-Q1 | SPC 의향서 접수 — 100개 기업·기관 제출. 주요 4사(네이버·SKT·KT·LG U+) 참여 의향 표명 — 김경만 과기정통부 AI정책관 발언 | 블로터 [https://www.bloter.net/news/articleView.html?idxno=633365] |
| 2025-05 / 2025-06 | 1·2차 공모 모두 유찰 (참여 자격·국산 NPU 50% 의무·공공 51% 지분 등 부담) | 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=33551] |
| 2025-09-08 | 3차 재공모: 공공 30% 미만, 국산 NPU 의무 자율화, 세액공제 15~25% 확대, 매수청구권 제거 | ZDNet [https://zdnet.co.kr/view/?no=20250908145810] / 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=40465] |
| 2025-10-13 | 광주 후보지(120MW급) 거론 — 후보지 경쟁 본격화 | 뉴시스 [https://www.newsis.com/view/NISX20251013_0003360041] |
| 2025-10-21 | 3차 공모 마감 — 삼성SDS 컨소시엄(CSP 4사: 삼성SDS·네이버·KT·카카오) 단독 입찰 | 뉴스1 [https://www.news1.kr/it-science/general-it/5948870] / 머니투데이 [https://www.mt.co.kr/tech/2025/10/21/2025102114162092508] / 경향신문 [https://www.khan.co.kr/article/202510211908001] |
| 2025-10-31 | APEC 정상회의 — Jensen Huang 방한, 26만장 GPU 공급 발표 ($9.8B/14조원) | NVIDIA IR [https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx] |
| 2026-01-29 | 삼성SDS 4분기 컨퍼런스콜 — "데이터센터 투자 2029년까지 2배, B300 GPUaaS 1분기 출시" 공언 | 파이낸스스코프 [https://www.finance-scope.com/article/view/scp202601280018] |
| 2026-01 (CES2026) | 삼성SDS 이준희 대표 "7월 착공, 4월 1일 SPC 출범, 2029년 개소" | 서울경제 [https://www.sedaily.com/NewsView/2K780Z3VGP] / 서울경제 [https://www.sedaily.com/NewsView/2K782VM4PB] |
| 2026-01-08 | 삼성SDS 임직원 솔라시도 부지 시찰 | 서울신문 [https://www.seoul.co.kr/news/economy/industry/2026/01/08/20260108020004] |
| **2026-03-10** | **과기정통부 우선협상대상자 선정 발표** — 삼성SDS 컨소시엄 9개사, 솔라시도, 1.5만장 GPU(2028), 사업비 2.9조, 산은·기은 금융심사 통과 | 정책브리핑 1차 [https://www.korea.kr/briefing/pressReleaseView.do?newsId=156748164] / 헤럴드경제 [https://biz.heraldcorp.com/article/10691089] / 뉴스1 [https://www.news1.kr/local/gwangju-jeonnam/6096577] |
| **2026-05-11** | **과기정통부-삼성SDS 컨소시엄 실시협약 체결** — 사업자 최종 확정, 본 사업비 2.5조, 초기 출자 4,000억(공공 1,160억/민간 2,840억), "AI 고속도로 심장부" 표현(배경훈 부총리 추정) | 전자신문 [https://www.etnews.com/20260511000423] / 머니투데이 [https://www.mt.co.kr/tech/2026/05/11/2026051116423058829] / 아시아경제 [https://www.asiae.co.kr/article/2026051117073960678] / ZDNet [https://zdnet.co.kr/view/?no=20260511170131] |

> **참고**: CES2026(2026-01)에서 발표된 "2029년 개소"와 2026-05-11 협약 시 발표된 "2028년 1단계 완공/2030년 최종"은 시기 차이가 있다. 후자가 협약 기준 공식 일정으로 확정. CES 발언은 보수적 일정 안내로 추정.

> **사업비 2.9조 vs 2.5조 정합성 확인**: 2026-03-10 우선협상자 선정 시점 사업비 2.9조원은 **2030년 최종(GPU 5만장+) 합산**, 2026-05-11 실시협약 시점 사업비 2.5조원은 **1단계(2028년 GPU 1.5만장) 본 사업비**로 보임. 4,000억 초기 출자에 산업은행·기업은행 정책금융 추가 조달 구조.

### 2.3 컨소시엄 각 사 핵심 역할 (추정 매핑)

| 기업 | 핵심 역할 | 근거 |
|------|----------|------|
| 삼성SDS | SPC 주관·데이터센터 운영·GPUaaS 서비스(B300 등) | 삼성SDS IR 2026-01-29 |
| 네이버클라우드 | LLM(HyperCLOVA X 2.0) 학습 자원·하이퍼스케일 운영 노하우 | NVIDIA IR 2025-10-31, KED Global |
| 삼성물산 | EPC 시공(데이터센터 건물) | 한경 2023-08-24 솔라시도 데이터센터파크 MoU |
| 삼성전자 | 메모리(HBM3E/HBM4)·서버·NPU 공급 | NVIDIA 발표 / SK하이닉스와 경쟁 |
| KT | 백본 네트워크·전용회선·MSP | 디일렉 솔라시도 관련 / KT클라우드 GPU 사업 이력 |
| 카카오 | AI 모델(카나나)·클라우드 운영 분담 | 정부 GPU 1.3만장 사업에서 2,424장 운영 이력 |
| 클러쉬(Clush) | AI 인프라/플랫폼 SW | 디일렉·전자신문 |
| 전라남도 | 부지 인허가·세제 지원 | 정책 발표 |
| 서남해안기업도시개발 | 부지 제공·기반 시설 | 전자신문 2026-05-11 |

### 2.4 상위 거버넌스 — 국가인공지능전략위원회 (2025-09-02 개편)

산업·기술 차원에서 SPC 위에 정부 단위 의사결정 기구가 있음:

- **개편 전**: '국가인공지능위원회' (윤석열 정부)
- **개편 후**: **'국가인공지능전략위원회'** (이재명 정부, 2025-09-02 개편)
- **위원장**: 이재명 대통령
- **부위원장**: 임문영
- **위원**: 50명
- **출처**: ZDNet [https://zdnet.co.kr/view/?no=20250902140712]

→ 정책 거버넌스 상세는 `_workspace/01_policy_official.md` (policy) 참조.

---

## 3. 공급 체인 분석

### 3.1 GPU/AI 가속기 (1차 공급사)

| 공급사 | 제품 | 국가AI컴퓨팅센터 연결 | 출처 |
|--------|------|----------------------|------|
| **NVIDIA** | Blackwell(B200/B300)·Blackwell Ultra·H100/H200·Rubin(예정) | **정부 몫 5만장 Blackwell** 공급 약정 (2025-10-31 APEC) — Naver Cloud·NHN Cloud·Kakao 통해 초기 13,000장 배치 | NVIDIA IR [https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx] |
| AMD | Instinct MI300·MI355 | "탑재 가능"(전자신문 2025-04-01) — 단, 명시적 도입 약정 없음. Upstage가 별도로 MI355 1만장 검토 보도(2026-03 Bloomberg) | 전자신문 / Bloomberg [https://www.bloomberg.com/news/articles/2026-03-23/ai-startup-upstage-looking-at-buying-10-000-amd-chips-in-korea] |
| Intel | Gaudi 시리즈 | "탑재 가능" — 명시 도입 없음 | 전자신문 2025-04-01 |
| **리벨리온(Rebellions)** | REBEL 100 (구 REBEL-Quad) — 삼성 4nm + HBM3E 144GB | 후보 거론. KT클라우드 도입 이력. 2025년 하반기 양산 | 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=55151] / ZDNet [https://zdnet.co.kr/view/?no=20260330153746] |
| **퓨리오사AI** | RNGD(Renegade) — TSMC 5nm + HBM3 + CoWoS | 후보 거론. Meta 인수 제안설로 "국산 인정 여부" 변수 | 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=33551] |

### 3.2 메모리(HBM) 공급

| 공급사 | 제품 | 비고 | 출처 |
|--------|------|------|------|
| SK하이닉스 | HBM3E 5세대 12단(B200·Blackwell Ultra 단독 공급), HBM4 6세대 (Rubin용) | NVIDIA Blackwell 사실상 단독, HBM4 시장 ~70% 점유 전망(UBS) | 비즈니스포스트 [https://www.businesspost.co.kr/BP?command=article_view&num=387296] / SK하이닉스 뉴스룸 |
| 삼성전자 | HBM3E 8단/12단, HBM4 — NVIDIA 인증 진행 | AMD Instinct에는 채택 — NVIDIA Blackwell 인증은 일부 | 뉴스핌 / SK하이닉스 [https://www.thelec.kr/news/articleView.html?idxno=50559] |
| Micron | HBM3E | 3rd-tier 공급 | — |

### 3.3 서버·네트워크·시공·운영

| 분야 | 공급사/사업자 | 역할 | 출처 |
|------|--------------|------|------|
| 데이터센터 EPC | 삼성물산·BS산업(보성산업) | 솔라시도 데이터센터파크 시공 주관 | 한경 2023-08-24 |
| 데이터센터 운영 | 삼성SDS(SPC) | 메인 운영 | 전자신문 2026-05-11 |
| 클라우드 사업자(공동) | 네이버클라우드·KT·카카오 | GPU 자원 분배·서비스 | 시사저널 2025-11 |
| 네트워크 백본 | KT(추정) | 광역망·전용회선 | KT 참여 사실 |
| 전력·재생E | BS그룹(BS-Hycorp/한양) | 솔라시도 태양광 98MW + ESS 306MWh — RE100 잠재 | 파이낸셜뉴스 2020-11 [https://www.fnnews.com/news/202011011415014691] |
| 액침/수냉 냉각 | 미확정 — NHN Cloud의 DLC 사례 참고 | 정부 B200 사업에서 NHN이 75% 수주한 결정타가 "수냉식 제안"이었던 점 시사 | 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=38711] |
| 국산 NPU 검증 | R&D 존(별도 조성) — 리벨리온·퓨리오사·딥엑스·모빌린트 등 검증 무대 | 협약 시 "국산 AI 반도체 생태계 육성을 위한 R&D 존" 명시 | ZDNet 2026-05-11 |

### 3.4 NVIDIA APEC 발표(2025-10-31) 분배 매핑

이재명 대통령 ↔ Jensen Huang APEC 정상회의 합의. 5년간 인도, 2030년까지 단계 배치.

| 수신처 | 수량 | 모델 | 용도 | 비고 |
|--------|------|------|------|------|
| 대한민국 정부(과기정통부) | **최대 50,000장** | Blackwell | 국가AI컴퓨팅센터 + 자체 AI 파운데이션 모델 개발 | "초기 13,000장 Blackwell"이 NVIDIA Cloud Partner 3사(NAVER Cloud·NHN Cloud·Kakao Corp)를 통해 sovereign cloud infrastructure에 배치 (NVIDIA 한국 공식 블로그 [https://blogs.nvidia.co.kr/blog/south-korea-ai-infrastructure/]) |
| 삼성전자 | 50,000장+ | Blackwell | AI 팩토리(반도체 제조 최적화·디지털 트윈) | 전자신문 2025-10-31 / NVIDIA IR |
| SK그룹 | 50,000장+ | Blackwell | 디지털 트윈·R&D | "Samsung and SK will construct semiconductor production digital twins" (NVIDIA 발표) |
| 현대차그룹 | 50,000장 | Blackwell | 자율주행·로보틱스·Physical AI ($3B 공동투자 포함) |
| 네이버클라우드 | 60,000장+ | RTX PRO 6000 Blackwell + Blackwell 일반 | HyperCLOVA X 2.0 |
| **합계** | **260,000장+** | Blackwell 계열 | 총 약 $9.8B (14조원), 2030년까지 인도 |

(출처: NVIDIA Investor Relations 2025-10-31 [https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx], KED Global [https://www.kedglobal.com/tech,-media-telecom/newsView/ked202510310020], Korea Herald [https://www.koreaherald.com/article/10606193])

---

## 4. 산업 영향

### 4.1 국내 클라우드 사업자에 미치는 영향

**(1) CSP 4사 동맹 — 경쟁→협력 구도 전환**

> "Multiple CSP participation receives bonus points" — 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=42194]

- 평가 가점 도입으로 삼성SDS·네이버·KT·카카오가 "한국 CSP 빅4 동맹"으로 묶임
- 업계 분석: "Korea's limited CSP options into one consortium creates significant competitive advantages" (디일렉 인용)
- **함의**: 향후 공공 클라우드·AI 자원 시장에서 4사 카르텔화 우려와 동시에, AWS·Azure·GCP에 대한 사실상의 국가 협상력 강화

**(2) 정부 B200 사업(1.46조원/13,000장)의 사업자 분배(2025-07-29)**

| 사업자 | 운영 GPU | 정부용 분량 | 특이점 |
|--------|---------|-----------|--------|
| NHN클라우드 | B200 7,656장 | 6,120장 (~80%) | **수냉식(DLC) 제안이 결정타** |
| 카카오 | B200 2,424장 | 2,040장 | — |
| 네이버클라우드 | H200 3,056장 | 2,296장 | (구세대 GPU 분담) |
- 출처: ZDNet [https://zdnet.co.kr/view/?no=20250729105008], 디일렉 [https://www.thelec.kr/news/articleView.html?idxno=38711]
- 이 1.3만장 GPU 사업은 국가AI컴퓨팅센터 본 사업(2.5조)과 **별개**의 추경 사업이나, 동일 CSP들이 함께 운영하므로 **국가AI컴퓨팅센터의 사전 운영 모델·하드웨어 검증**으로 기능

**(3) GPUaaS 가격 압력 — 시간당 임대료 인하 가능성**

- KT클라우드 A100 2매 기준 시간당 12,090원 — AWS 대비 비싸다는 평가 (디일렉 [https://www.thelec.kr/news/articleView.html?idxno=34943])
- 삼성SDS는 2026년 1분기 NVIDIA B300 기반 GPUaaS 출시 공언 (파이낸스스코프 2026-01-29)
- 국가AI컴퓨팅센터 가동 시 "중소기업·스타트업·연구기관 특별 할인" 정책 — 민간 GPUaaS 가격에 하방 압력 (아시아경제 2026-05-11)

### 4.2 AI 스타트업·연구기관 활용 모델

- "GPU 통합지원 플랫폼" 운영 → 스타트업·학계·연구소에 자원 분배, 대기업 집중 방지 (ZDNet 2025-07-29)
- 월드베스트LLM(WBL) 선정 기업 우선 제공 (한국경제 2025-02-07)
- 정책 우선순위:
  - WBL 선정 기업(국가대표 생성형AI)
  - 중소·스타트업 + 연구기관 할인
  - 국산 NPU 검증·R&D 존 입주 기업
- → policy의 정책 섹션과 교차 참조 권장

### 4.3 GPU 자원 배분·가격 영향

- **공급 측면**: NVIDIA 26만장 한국 공급 + 정부 5만장 별도 확보 → 한국이 미·중에 이어 **세계 3위 GPU 보유국** 진입 (KED Global, 2025-10-31)
- **수요 측면**: WBL·국산 LLM 개발사·국산 NPU 검증 기업 등 다수 수요. 정부 자원이 시장 가격의 50~70% 수준에 제공될 경우 민간 GPUaaS 가격 압력 전망
- **AMD 대안 등장**: Upstage가 별도로 AMD MI355 10,000장 도입 검토 — NVIDIA 의존 축소 효과 (Bloomberg 2026-03-23 [https://www.bloomberg.com/news/articles/2026-03-23/ai-startup-upstage-looking-at-buying-10-000-amd-chips-in-korea])

### 4.4 메모리·반도체 산업 파급

- SK하이닉스: NVIDIA Blackwell·Rubin 대응 HBM3E 12단·HBM4 단독 공급(70% 추정) → 국가AI컴퓨팅센터 26만장 GPU의 HBM 절대다수가 국내 공급사 (직접 수혜)
- 삼성전자: HBM4 NVIDIA 인증 진행 — AMD Instinct에 채택 — 국가센터의 AMD 채택 시 직접 수혜
- → 국가AI컴퓨팅센터는 **GPU 수입 의존**이지만 **메모리는 국내 수출** 구조로, 무역수지 영향은 부분 상쇄 가능

---

## 5. 유사 사례 비교

### 5.1 국내 민간 사례

| 시설 | 운영주체 | 규모 | 전력 | 면적 | 핵심 용도 | 출처 |
|------|---------|------|------|------|----------|------|
| **국가AI컴퓨팅센터(해남)** | 삼성SDS-led SPC | GPU 1.5만→5만장, 1 EF+ | 비공개 (1GW 데이터센터파크 내) | 165만㎡ 데이터센터파크 內 | 공공 LLM·스타트업 자원 | 전자신문 2026-05-11 |
| **네이버 각 세종** | 네이버 | 서버 60만 유닛 | 최대 270MW (6차 증설 후) | 29.4만㎡(축구장 41개) | 하이퍼클로바X·검색·상용 | 서울신문 2025-10-29, ZDNet 2023-11 |
| 네이버 각 춘천 | 네이버 | (각 세종의 1/6 규모) | ~40MW 추정 (각 세종 6.75배 차이) | 약 4.9만㎡ | 검색·메일·클라우드 | ZDNet/뉴스룸 |
| 삼성SDS 구미 AI 데이터센터 | 삼성SDS | (미공개) | (미공개) | (미공개) | 2029 가동 목표, GPUaaS·기업용 | 삼성SDS IR 2026-01-29 |
| 삼성E&A 솔라시도 데이터센터파크 | 삼성E&A·보성산업·등 | 40MW급 25동 = 총 1GW | 1GW | 165만㎡ | 멀티 테넌트 (국가AI컴퓨팅센터 포함) | 한경 2023-08-24 |
| 카카오 안산 데이터센터 | 카카오 | 12만대 서버 | 약 40MW | — | 자체 서비스 + 카카오클라우드 | (참고) |

**핵심 차이**:
- 네이버 각 세종(270MW, 60만 유닛)이 단일 시설 규모에서는 국가AI컴퓨팅센터 1단계와 동급 이상이나, "공공 자원 분배·국산 NPU 검증·LLM 학습 특화"라는 **역할이 다름**
- 국가AI컴퓨팅센터는 "정부 50% 미만 지분 + 민간 운영"으로 민간 데이터센터와 운영 모델 자체가 상이

### 5.2 해외 사례 (context 2차 정밀 수치 통합 2026-05-11)

context 팀 2차 공유(1차/공식 출처 기반). 상세 분석은 `_workspace/04_context_global.md` 참조.

> **⚠ 비교 시 주의 (context 권고)**: 각 시설은 사업비 정의가 다름 — 한국=GPU·운영비 중심, 미국·UAE=캠퍼스 일체(부지·전력·건물 포함), Stargate $500B=4년 전국 누계. 단순 액수 비교는 오인 가능.

| 국가/시설 | GPU 수량·모델 | 페타플롭스(PF) | 전력 | 면적 | 총사업비 | 운영 주체 | 가동/일정 | 출처 |
|----------|--------------|--------------|------|------|---------|----------|---------|------|
| **🇰🇷 국가AI컴퓨팅센터(해남)** | 1.5만(2028)→**5만(2030)** Blackwell·B300·H200·AMD·국산NPU 허용 | **~1,400 PF (1.4 EF) 목표** (context/policy) | ~100MW(추정, 비공개) | 솔라시도(비공개) | **2.5~2.9조원 (~$1.8~2.1B)** | 삼성SDS·네이버·KT·카카오 SPC (민 71%/공 29%) | 2028 1단계 / 2030 최종 | 전자신문·ZDNet 2026-05-11 / 정책브리핑 2026-03-10 |
| **🇺🇸 Stargate Abilene(플래그십)** | **400,000 NVIDIA GB200** (캠퍼스 설계 수용량) | 미공개 | 캠퍼스 **1.2GW**, 8빌딩×200MW (1차 2빌딩 400MW) | **875~1,000 에이커(3.5~4 km²)**, 빌딩당 98만 sq ft | (Stargate 전국 **$500B/4년**, 2025년말 7GW·>$400B) | OpenAI·Oracle·SoftBank·NVIDIA·MGX | 2025-10 가동 | Oracle 팩트시트(arrington.house.gov), CoStar, OpenAI |
| **🇺🇸 NAIRR Pilot** | 자원 위탁형(14 연방+28 민간) | — | — | — | NAIRR-OC 최대 **$35M/5년** | NSF | 2024-01~ | NSF |
| **🇪🇺 EU AI Factories** | 13 팩토리+13 Antennas(2025-10) | 분산 | 분산 | 다중 거점 | 슈퍼컴 €400M~€800M, 운영 €15M×3년/곳 | EuroHPC JU | 2024-12~ | EuroHPC JU |
| **🇯🇵 ABCI 3.0** | **NVIDIA H200 6,128장(766 노드)** | **FP16 6.22 EF / FP32 3.0 EF** | 비공개 | AIST 가시와 캠퍼스 | **360억엔(~$232M)** / METI 경제안보기금 | AIST (100% 공공) | 2025-01 가동 | arXiv 2411.09134 / NVIDIA |
| **🇯🇵 GENIAC** | 자원 위탁 | — | — | — | 미공개 | METI | 2024-02~, 2주기 30개 프로젝트 | METI |
| **🇬🇧 Isambard-AI** | NVIDIA GH200 5,400장 | **216.50 PFLOPS** (Top500 11위, 2025-06) | 무탄소 100% | Bristol | **£225M(~$285M)** | Bristol/AIRR | 2025-07 가동 | Top500 / UK gov |
| **🇸🇦 HUMAIN(PIF)** | 1차 **GB300 18,000장** → 3년 **최대 600,000장** | 미공개 | NVIDIA 5년 **최대 500MW** | 미공개 | PIF 직접출자, HUMAIN+Infra $1.2B 별도 발표 | PIF 자회사(2025-05 설립), 첫 고객 xAI | 단계 확장(2025~) | nvidianews / DCD / CNBC 2025-11-19 |
| **🇦🇪 Stargate UAE(G42)** | GB300 환산 **최대 35,000장 수출 승인** | 미공개 | 캠퍼스 **5GW**, 1차 **1GW**, 1단계 **200MW** | **10 sq mile (~25.9 km²)** | **$30B 초기 발표**(US-UAE $1.4T 협정 일부) | G42·OpenAI·Oracle·NVIDIA·SoftBank·Cisco | 2026 Q3 1단계 200MW 가동 | g42.ai / thenationalnews 2025-12 / aimcongress |
| **🇹🇼 Foxconn AI Factory(가오슝)** | NVIDIA **Blackwell 10,000장** | 미공개 | **100MW** (20+40+40 단계) | 가오슝 분산(비공개) | 비공개 | Foxconn·TSMC·NVIDIA·정부 | 2025-05 발표, 단계 가동 | nvidianews 2025-05 / CNBC 2025-05-20 |
| **🇹🇼 NCHC Nano 시리즈** | Nano4·Nano5(Hopper) | Nano4 81.55 PF, **480 PF 목표(2029)** | Nano4 2.214 MW | NCHC | 미공개 | 행정원 NCHC | 2029 480 PF | Nikkei / Top500 |
| **🇸🇬 IMDA** | 자원 위탁 | — | — | — | **S$1B+/5년** (AI컴퓨팅 S$500M + Enterprise S$150M) | IMDA | 2024-02~ | imda.gov.sg |

### 5.3 비교 함의 (context 2차 권장 반영)

| 항목 | 한국 | 비교 결론 |
|------|------|----------|
| **GPU 규모(2030 목표)** | 5만장 | UAE 수출승인 3.5만 대비 **+43%**, Stargate Abilene 단일 캠퍼스 40만 대비 **12.5%**, 사우디 HUMAIN 60만 발표 대비 **8.3%**, 대만 Foxconn 1만 대비 **5배** |
| **단일 시설 연산** | **1.4 EF 목표** | 일본 ABCI 3.0 6.22 EF(FP16) 대비 **22.5%** / 영국 Isambard-AI 0.2165 EF 대비 **6.5배** |
| **전력** | ~100MW(추정) | 대만 Foxconn AI Factory 100MW와 **동급**, UAE 1차 200MW의 **50%**, Stargate Abilene 1.2GW의 **8%** |
| **총사업비** | $1.8~2.1B | 일본 ABCI 3.0 $232M 대비 **8~9배**, UAE Stargate $30B 대비 **6~7%**, Stargate 전국 $500B 대비 **0.4%** |
| **자본 구조** | SPC 민 71%/공 29% | 미국 Stargate(민간 100%) · 사우디 HUMAIN(국가 100%) · 일본·대만(공공) · 영국·EU(공공) 사이의 **중간 모델** — 한국 고유 형태이나 1·2차 유찰 반복은 균형 잡기 어려움 시사 |
| **단위 비용(주의)** | GPU 1장당 ≈$36~42K (본체 중심) | Stargate Abilene 40만/$500B 추정 단가 $1.25M (부지·전력·건물 포함). **항목 구성이 달라 단순비교 위험** |
| **GPU 모델 유연성** | Blackwell·B300·H200·AMD·국산 NPU 모두 허용 | ABCI(H200 단일) · Isambard-AI(GH200 단일) · UAE(GB300 단일) 등 단일 모델 한정형 대비 **유연성 가장 높음** |
| **재생E** | 솔라시도 인근 98MW + 306MWh ESS, 3GW 태양광 계획 | 영국 Isambard-AI(무탄소 100%)와 가장 유사 |
| **거버넌스 유형** | SPC 단일 거점 + 자원 위탁 병행 | 단일 거점형(英 Isambard-AI · 사우디 HUMAIN · 미 Stargate Abilene) vs 분산 자원형(美 NAIRR · EU AI Factories · 日 GENIAC · 싱 IMDA)의 **하이브리드** |

**종합**: 한국 국가AI컴퓨팅센터는 **단일 시설 단위로 중규모(~$2B / 1.4EF / 100MW)** — 일본 ABCI 3.0(연산 ↑·예산 ↓)과 영국 Isambard-AI(연산 ↓·재생E ↑) 사이 카테고리. NVIDIA 한국 26만장 전체 합산 시 단일 국가 4~5위권. 거버넌스는 SPC 민관 혼합형으로 세계적으로 가장 균형 잡은 형태이나, 그만큼 유찰·조건 협상 비용이 컸음.

---

## 6. 기업 IR·공시 내 관련 언급

### 6.1 삼성SDS

**2026-01-29 4Q 컨퍼런스콜 / 2026-01 CES2026 (이준희 대표)**:
- "2029년까지 데이터센터 투자를 현재의 2배 수준으로 늘릴 계획"
- "NVIDIA B300 기반 GPUaaS를 2026년 1분기 출시"
- "기술 심사는 완료, 재무 심사 진행 중"
- "7월 국가AI컴퓨팅센터 착공" — CES2026 시점 발언
- 2025년 IT서비스 매출 6.54조원 중 클라우드 41%, IT서비스 영업이익률 12.6%
- 출처: 파이낸스스코프 [https://www.finance-scope.com/article/view/scp202601280018], 서울경제 CES2026 [https://www.sedaily.com/NewsView/2K780Z3VGP]

**서울경제 2025**:
- "현금 6.4조원 보유…AX·AI보안·GPU인프라 기업 M&A 추진" [https://www.sedaily.com/article/20020829]

### 6.2 SK하이닉스

**2026 시장 전망 뉴스룸**:
- "HBM이 이끄는 메모리 슈퍼사이클에 주목" — Blackwell·Rubin 향 HBM4 공급 확대 [https://news.skhynix.co.kr/2026-market-outlook/]
- HBM4 시장 점유율 70% 전망(UBS) — 국가AI컴퓨팅센터 직접 수혜

### 6.3 NVIDIA

**2025-10-31 IR 보도자료**:
- Korea sovereign AI 26만장 공급. 정부 5만장 — "via NAVER Cloud, NHN Cloud and Kakao Corp." 초기 13,000장
- Jensen Huang: "Korea's leadership in technology and manufacturing positions it at the heart of the AI industrial revolution — where accelerated computing infrastructure becomes as vital as power grids and broadband."
- 출처: [https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx]

### 6.4 리벨리온

- 2025-12 박성현 CEO: "NPU로 美 AI 본토 공략" — 글로벌 진출 의지 (전자신문 [https://www.etnews.com/20251216000319])
- 2026-03 차세대 칩 명칭 'REBEL-Quad' → **'REBEL 100'**으로 변경, 2026년 하반기 양산 (ZDNet [https://zdnet.co.kr/view/?no=20260330153746])
- KT클라우드 데이터센터 공급 이력 (디일렉 [https://www.thelec.kr/news/articleView.html?idxno=55151])

### 6.5 BS그룹 / BS산업

- 솔라시도 RE100 산업단지 2GW급 + 1GW급 AI 데이터센터파크 조성 계획
- 인근 3GW 태양광 + 7GW 풍력으로 연 ~22TWh 재생E 공급 목표 (기업 주장)
- 출처: BS-Hycorp 자료 / 산군 BS산업 인터뷰

---

## 7. 미해결·불확실 영역

| 항목 | 현재 상태 | 추가 확인 필요 |
|------|----------|---------------|
| 국가AI컴퓨팅센터 자체 PUE·냉각 사양 | 미공개 | 협약 후속 발표 / NHN DLC 모델 채택 여부 |
| 단일 시설 전력(MW) | 데이터센터파크 1GW 중 일부 (비공개) | policy 측 공식 자료 |
| 단일 시설 점유 면적(㎡) | 비공개 (165만㎡ 데이터센터파크 內) | 협약 첨부 자료 |
| GPU 정확한 모델 분배 | "H100 환산 1.5만장" 추상 — Blackwell·H200·B200 비율 미정 | SPC 출범 후 발주 시 공개 예상 |
| 총사업비 2.5조 vs 2.9조 | 협약 시 발표(2.5조)와 시사저널·데일리저널(2.9조) 차이 | 협약 본문 확보 (policy 협조) |
| 일정: 2028 vs 2029 개소 | CES2026 발언(2029) vs 협약 발표(2028 1단계) | 협약 본문 일정표 |
| 국산 NPU 도입 비중·일정 | "자율 도입"으로 완화 — 구체 비중 미정 | 추후 SPC 운영 방침 |
| AMD GPU 실제 도입 여부 | 규정상 허용되나 도입 약정 없음 | SPC 발주 단계 |
| GPU 임대 가격 책정 | 결정 안됨 — 중소·연구기관 할인 정책만 명시 | SPC 운영 규정 |
| 카카오·KT의 SPC 내 구체 R&R | 지분만 공개, 운영 분담 비공개 | 협약 부속서 |

---

## 8. 출처 목록

**1차 출처(정부·기업 발표)**:
1. NVIDIA Investor Relations, "NVIDIA, South Korea Government and Industrial Giants Build AI Infrastructure", 2025-10-31. https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx
1a. NVIDIA 한국 공식 블로그, "South Korea AI Infrastructure — 25만장+ GPU 배치 및 클라우드 파트너 13,000장 Blackwell". https://blogs.nvidia.co.kr/blog/south-korea-ai-infrastructure/
2. SK하이닉스 뉴스룸, "2026년 시장 전망 — HBM 슈퍼사이클". https://news.skhynix.co.kr/2026-market-outlook/
3. BS-Hycorp, "솔라시도 태양광발전소". https://www.bs-hycorp.co.kr/hy/solarpower.php
4. NIPA, "2025년도(추경) AI컴퓨팅 자원 활용 기반 강화(GPU 임차)". https://www.nipa.kr/home/2-2/16253
5. 대한민국 정책브리핑, "최상목 권한대행, 국가AI컴퓨팅센터 올해 개소". https://www.korea.kr/news/policyNewsView.do?newsId=148939678
5a. 대한민국 정책브리핑(과기정통부 보도자료), 국가AI컴퓨팅센터 우선협상대상자 선정, 2026-03-10. https://www.korea.kr/briefing/pressReleaseView.do?newsId=156748164

**전문 매체·경제지·종합지**:
6. 전자신문, "삼성SDS, 국가AI컴퓨팅센터 설립 확정…공공 지분 29%", 2026-05-11. https://www.etnews.com/20260511000423
7. 전자신문, "국가AI컴퓨팅센터, 블랙웰·AMD GPU도 가능…1사 1컨소시엄", 2025-04-01. https://www.etnews.com/20250401000258
8. ZDNet Korea, "국가AI컴퓨팅센터 SPC 설립 본궤도", 2026-05-11. https://zdnet.co.kr/view/?no=20260511170131
9. ZDNet Korea, "국가AI컴퓨팅센터 구축 재도전…정부 GPU 5만장 확보", 2025-09-08. https://zdnet.co.kr/view/?no=20250908145810
10. ZDNet Korea, "정부, 엔비디아 H200·B200 구입...10월부터 GPU 서비스", 2025-05-14. https://zdnet.co.kr/view/?no=20250514113506
11. ZDNet Korea, "AI 고속도로 주역 네이버·카카오·NHN…민관 GPU 1.3만장 가동", 2025-07-29. https://zdnet.co.kr/view/?no=20250729105008
12. ZDNet Korea, "리벨리온, 차세대 AI칩 '리벨 100' 명칭 변경", 2026-03-30. https://zdnet.co.kr/view/?no=20260330153746
13. 디일렉, "2조 규모 '국가 AI컴퓨팅 센터' 참여 자격 까다로워져 논란". https://www.thelec.kr/news/articleView.html?idxno=33551
14. 디일렉, "과기정통부, GPU 5만장 국가 AI센터 재추진…공공 지분 30% 미만". https://www.thelec.kr/news/articleView.html?idxno=40465
15. 디일렉, "삼성SDS 주도 CSP 4사 동맹...국가 데이터센터 참여". https://www.thelec.kr/news/articleView.html?idxno=42194
16. 디일렉, "NHN, 정부 B200 구매분 75% 싹쓸이…수냉식 냉각이 결정타". https://www.thelec.kr/news/articleView.html?idxno=38711
17. 디일렉, "KT클라우드, AWS보다 GPU 요금 비싸". https://www.thelec.kr/news/articleView.html?idxno=34943
18. 디일렉, "리벨리온, KT에 차세대 칩 '리벨100' 공급". https://www.thelec.kr/news/articleView.html?idxno=55151
19. 한국경제, "국가 AI컴퓨팅센터에 GPU 1만5000개 넣는다", 2025-02-07. https://www.hankyung.com/article/2025020711811
20. 한국경제, "삼성물산·보성산업 등 전남 솔라시도에 데이터센터 파크 조성", 2023-08-24. https://www.hankyung.com/article/202308246162i
21. 서울경제, "해남 국가AI컴퓨팅센터, 3분기 첫삽". https://www.sedaily.com/article/20017554
22. 서울경제, "국가AI컴퓨팅센터, 이 때 첫 삽 — 삼성SDS CES2026". https://www.sedaily.com/NewsView/2K780Z3VGP
23. 서울경제, "삼성SDS '현금 6.4조 보유…GPU인프라 M&A 추진'". https://www.sedaily.com/article/20020829
24. 아시아경제, "국가AI컴퓨팅센터 구축 사업자에 삼성SDS 컨소시엄 최종 확정", 2026-05-11. https://www.asiae.co.kr/article/2026051117073960678
25. 머니투데이, "삼수 끝 국가AI컴퓨팅센터, 삼성SDS 단독 입찰", 2025-10-21. https://www.mt.co.kr/tech/2025/10/21/2025102114162092508
25a. 머니투데이, "AI 고속도로 심장부 국가AI컴퓨팅센터, 삼성SDS가 맡는다", 2026-05-11. https://www.mt.co.kr/tech/2026/05/11/2026051116423058829
25b. 전자신문, "NVIDIA-한국 GPU 26만장 파트너십 — 정부 몫 5만장(국가AI컴퓨팅센터+네이버·NHN·카카오)", 2025-10-31. https://www.etnews.com/20251031000349
25c. ZDNet Korea, "국가인공지능전략위원회 개편 — 이재명 대통령 위원장 / 임문영 부위원장 / 위원 50명", 2025-09-02. https://zdnet.co.kr/view/?no=20250902140712
26. 경향신문, "국가AI컴퓨팅센터 구축 사업, 삼수 끝에 삼성SDS 컨소시엄 단독 입찰", 2025-10-21. https://www.khan.co.kr/article/202510211908001
26a. 헤럴드경제, "국가AI컴퓨팅센터 우선협상대상자 삼성SDS 컨소시엄 선정", 2026-03-10. https://biz.heraldcorp.com/article/10691089
26b. 블로터, "100개사 SPC 설립 의향서 — 네이버·SKT·KT·LG U+ 등 참여 의향". https://www.bloter.net/news/articleView.html?idxno=633365
26c. 뉴스1, "3차 단독응찰 — 삼성SDS 컨소시엄", 2025-10-21. https://www.news1.kr/it-science/general-it/5948870
26d. 뉴스1, "SDS·삼전·네이버 참여 유력". https://www.news1.kr/it-science/general-it/5787705
26e. 뉴스1, "해남 솔라시도 국가AI컴퓨팅센터 2.9조". https://www.news1.kr/local/gwangju-jeonnam/6096577
26f. 뉴시스, "광주 후보지 120MW급", 2025-10-13. https://www.newsis.com/view/NISX20251013_0003360041
26g. 서울신문, "삼성SDS 솔라시도 부지 시찰", 2026-01-08. https://www.seoul.co.kr/news/economy/industry/2026/01/08/20260108020004
26h. 서울경제, "2026-07 착공 CES2026". https://www.sedaily.com/NewsView/2K782VM4PB
27. 시사저널, "국가AI컴퓨팅센터 전남행 유력…해남 솔라시도". https://www.sisajournal.com/news/articleView.html?idxno=350215
28. 뉴스1, "AI컴퓨팅센터 후보지 솔라시도…전력망·용수·땅값 우위". https://www.news1.kr/local/gwangju-jeonnam/5949529
29. 데일리저널, "해남 솔라시도 2조9천억 국가 AI컴퓨팅센터 문제". https://www.dailyjn.com/news/articleView.html?idxno=102085
30. 비즈니스포스트, "SK하이닉스 블랙웰 울트라에 HBM3E 12단 단독 공급". https://www.businesspost.co.kr/BP?command=article_view&num=387296
31. 파이낸셜뉴스, "국내 최대 태양광 솔라시도", 2020-11. https://www.fnnews.com/news/202011011415014691
32. 파이낸스스코프, "삼성SDS 클라우드·AI 인프라 중심 IT서비스 체질 전환", 2026-01-30. https://www.finance-scope.com/article/view/scp202601280018
33. AI타임스, "해남 솔라시도, 국가 AI컴퓨팅센터 유치". https://www.aitimes.com/news/articleView.html?idxno=207769

**해외 매체**:
34. NVIDIA Investor Relations, 2025-10-31 (위 1번 동일)
35. Bloomberg, "Nvidia Forges AI Deals With South Korea's Samsung, Hyundai, SK", 2025-10-31. https://www.bloomberg.com/news/articles/2025-10-31/nvidia-forges-ai-deals-with-south-korea-s-biggest-companies
36. Bloomberg, "AI Startup Upstage in Talks to Buy 10,000 AMD Chips in Korea", 2026-03-23. https://www.bloomberg.com/news/articles/2026-03-23/ai-startup-upstage-looking-at-buying-10-000-amd-chips-in-korea
37. KED Global, "Nvidia strikes AI alliance with S.Korea, pledges 260,000 GPUs worth $9.8 billion", 2025-10-31. https://www.kedglobal.com/tech,-media-telecom/newsView/ked202510310020
38. Korea Herald, "Korea secures 260,000 Nvidia GPUs for AI push". https://www.koreaherald.com/article/10606193
39. DataCenterDynamics, "Nvidia to deploy more than 250,000 GPUs across South Korea". https://www.datacenterdynamics.com/en/news/nvidia-to-deploy-more-than-250000-gpus-across-south-korea-with-samsung-sk-group-and-hyundai-all-announcing-ai-factories/
40. The Register, "Rebellions eyes global expansion with rack-scale AI platform", 2026-03-30. https://www.theregister.com/2026/03/30/rebellions_ai_rackscale/

**기타 참고**:
41. 라이프한, "GPU 26만장 시대의 심장, 해남 솔라시도 데이터센터". https://lifehan.com/haenam-solaseado-ai-datacenter-investment/
42. 산군, "해남 솔라시도 태양광발전소 & AI 데이터센터 건설현장 (feat. BS산업)". https://www.sankun.com/blog/detail/1196
43. 서울신문, "네이버 각 세종 GPU 임대 산업 주도권 선언", 2025-10-29. https://www.seoul.co.kr/news/economy/IT/2025/10/29/20251029020001
44. 인공지능신문 / 코카니우스 등 보조 출처

---

## 변경 이력

| 일자 | 작성자 | 변경 내용 |
|------|--------|----------|
| 2026-05-11 | industry | 초안 작성 — 2026-05-11 사업자 확정 협약 발표 직후 기준 |
| 2026-05-11 | industry | §5.2/5.3 해외 사례 비교 통합 — context 팀 공유 수치(Stargate $500B, ABCI 3.0 6,128장 H200, Isambard-AI 5,400장 GH200, HUMAIN GB300 1.8만장, UAE Stargate 5GW, NCHC, IMDA S$1B+) 반영 |
| 2026-05-11 | industry | §1.2 발표 시기별 수치 변천 재구성 — policy 1차 교차검증 통합(4조→2조→2.9조→2.5조 변동, 공공 51%→29% 변동, 2026-03-10 우선협상자/2026-05-11 실시협약 시점 구분, 추경 13,136장·슈퍼컴 8,000장 혼동 방지) |
| 2026-05-11 | industry | §2.2 컨소시엄 변천사 보강 — press 공유 1차 출처 통합(정책브리핑 2026-03-10 보도자료, 헤럴드·머니투데이·뉴스1·블로터·뉴시스·서울신문·서울경제 CES2026 추가). 2.9조(2030 최종 합산) vs 2.5조(1단계 본 사업비) 정합성 해석 추가 |
| 2026-05-11 | industry | §5.2/5.3 해외 사례 2차 정밀화 — context 2차 공유(Stargate Abilene 40만 GB200/1.2GW/3.5~4km²/$500B 4년, UAE Stargate $30B/10sq mile/35,000 GB300 수출승인, 사우디 HUMAIN 60만장 확장 계획, 대만 Foxconn AI Factory 10,000 Blackwell/100MW). §1.1 연산능력 1.4 EF로 갱신. 비교 표 12개 시설로 확장, 단위 비용 비교 주의문 추가 |
| 2026-05-11 | industry | §3.4 NVIDIA 분배 매핑 1차 출처 강화 — NVIDIA 한국 공식 블로그(blogs.nvidia.co.kr) 추가, 클라우드 파트너 3사(NAVER·NHN·Kakao) 13,000 Blackwell sovereign cloud 배치 원문 인용. §2.4 신설 — 국가인공지능전략위원회(2025-09-02 개편, 이재명 위원장) 상위 거버넌스 명시. §8 출처 목록에 전자신문 2025-10-31 NVIDIA 26만장 기사·ZDNet 위원회 개편 기사 추가 |
