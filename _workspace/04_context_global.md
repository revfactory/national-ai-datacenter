# 국가AI데이터센터 — 맥락·국제 비교·전문가 분석

작성자: context (맥락·국제 비교 리서처)
작성일: 2026-05-11
입력 범위: 전체 균형(찬·반·중립). 비교 대상국: 미국·EU·일본·영국·사우디·UAE·대만·싱가포르.
관련 산출물: `01_policy_official.md`(policy) / `02_press_coverage.md`(press) / `03_industry_tech.md`(industry)

> 본 문서는 한국 정부의 국가AI컴퓨팅센터(이하 "국가AI데이터센터")를 **국제 사례·학계·전문가·시민사회** 관점에서 비교·분석한다. 한국 정책·산업 수치 자체는 policy / industry 산출물을 참조하되, 본 문서는 비교 기준점과 균형 잡힌 외부 시각을 제공한다.

---

## 1. 국제 비교 매트릭스

| 국가/프로그램 | 발표 시점 | 규모(예산/연산/전력) | 운영 주체 | 정책 목표 | 한국과의 비교 시사점 | 핵심 출처 |
|---|---|---|---|---|---|---|
| **🇺🇸 미국 Stargate** | 2025-01-21 | 4년 $500B(초기 $100B), 목표 10GW(2025년말 7GW 발표) | OpenAI(운영) / SoftBank(재무) / Oracle·NVIDIA·MGX(기술) | 민간 주도 초대형 데이터센터 — 미국 내 AI 우위 유지 | 100% 민간 컨소시엄 모델. 정부는 인허가·전력만 지원. 한국과 정반대(공공 주도) | OpenAI, 2025-01-21 (https://openai.com/index/announcing-the-stargate-project/) ; CNN, 2025-01-21 |
| **🇺🇸 NAIRR Pilot** | 2024-01 시작 | NAIRR-OC 전환 최대 $35M/5년 | NSF + 14개 연방기관 + 28개 민간 파트너 | 학계·공공 연구자 AI 접근권 보장 — "AI 민주화" | 비영리·연구자 중심. 인프라보다 접근권. 한국 GPU 공동활용 사업과 유사 | NSF, 2024-05-06 (https://www.nsf.gov/funding/opportunities/nairr-oc-foundations-operating-national-artificial-intelligence/nsf25-546/solicitation) |
| **🇪🇺 EU AI Factory / EuroHPC** | 2024-12 1차 선정 | Digital Europe €800M(슈퍼컴 조달), Horizon Europe AI Factory €15M×3년/팩토리 | EuroHPC JU + 19개 회원국 컨소시엄 | 다국가 분산형 — 회원국별 거점화, 13개 Antennas 보조 | 분산 거점 모델. 한국이 단일 거점(해남) 집중 추진하는 것과 대조 | EuroHPC JU, 2025-10-10 (https://www.eurohpc-ju.europa.eu/eurohpc-ju-selects-six-additional-ai-factories-expand-europes-ai-capabilities-2025-10-10_en) |
| **🇯🇵 일본 ABCI 3.0** | 2025-01 가동 | 360억엔(~$232M), METI 경제안보기금. H200 6,128장. FP16 6.22 EF | AIST(국립연구개발법인) | 학·산 공동 활용 슈퍼컴, 국산 LLM 개발 지원 | 공공 R&D 인프라 모델. 한국 SPC형 민관 합작과 다른 100% 공공 모델 | arXiv 2411.09134 (https://arxiv.org/abs/2411.09134) ; NVIDIA blog |
| **🇯🇵 GENIAC** | 2024-02 시작 | $1B 규모 광역 이니셔티브의 일부 | METI 주도 | 일본어 LLM·산업특화 모델 가속화. 2주기 30개 프로젝트 | 모델·서비스 측 지원. 한국 "국가대표AI" 선발 방식과 비교 가능 | NVIDIA blog (https://blogs.nvidia.com/blog/abci-aist/) |
| **🇬🇧 Isambard-AI / AIRR** | 2025-07 가동 | £225M, GH200 5,400장, 216.5 PFLOPS(Top500 11위) | Bristol Univ(BriCS) — 공공 연구 인프라 | 영국 AI Research Resource — 학계·공공 우선 + 100% 무탄소 전력 | "녹색 슈퍼컴" 강조. 한국이 LNG·원전 의존 시도와 정책 충돌 시사 | Univ of Bristol, 2025-07 (https://www.bristol.ac.uk/news/2025/july/isambard-launch.html) ; HPCwire 2025-07-17 |
| **🇸🇦 사우디 HUMAIN** | 2025-05 설립 | 5년간 최대 500MW + 수십만 GPU. 1단계 GB300 18,000장. 3년 60만장 확장 계획 | PIF(국부펀드) 자회사 — 100% 국가 자본 | "세계 3위 AI 공급자" 목표(Tareq Amin CEO) | 국부펀드 직접 출자. 한국 "민간 70%" 모델과 정반대 | NVIDIA Newsroom, 2025-05-13 (https://nvidianews.nvidia.com/news/humain-and-nvidia-announce-strategic-partnership-to-build-ai-factories-of-the-future-in-saudi-arabia) ; CNBC 2025-08-27 |
| **🇦🇪 UAE Stargate UAE** | 2025-05 발표 | 5GW UAE-US AI Campus 중 1차 1GW. GB300 환산 35,000장 수출 승인. 200MW 1단계 2026 Q3 가동 | G42(Khazna 시공) + OpenAI / Oracle 운영 + NVIDIA / SoftBank / Cisco | 미국 동맹 sovereign compute 거점. 원전+태양광+가스 혼합 | RTE(Regulated Tech Environments) 프레임. 한국 GPU 공급 협상에서 수출통제 변수 노출 | G42 (https://www.g42.ai/resources/news/global-tech-alliance-launches-stargate-uae) ; The National 2025-12-05 |
| **🇹🇼 대만 NCHC** | 2025 ~ 2029 | Nano4 81.55 PF (2.214 MW). Nano5 Top500 118위. 480 PFLOPS 목표(2029) | NCHC(국가고성능컴퓨팅센터) / NSTC | "AI 아일랜드 2029" — 480 PF 도달 + TAIDE LLM | 단계적 목표·기간(2029) 명시. 한국 "2030년 글로벌 3강" 목표와 유사 | Nikkei Asia ; thequantuminsider.com 2025-05-20 |
| **🇸🇬 싱가포르 IMDA** | 2024-02 / 2025-02 | 5년간 S$1B+ (AI 컴퓨팅 최대 S$500M). Enterprise Compute Initiative 추가 S$150M | IMDA(정부기관) — 클라우드 파트너십 모델 | 기업 도입 지원 중심. 자체 인프라보다 파트너십 활용 | "자체 미보유 + 파트너십" 모델. 한국과는 정반대 전략 | IMDA, 2025-02 (https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/sg-ramps-up-ai-push-to-turn-digital-ambition-into-real-world-impact) |
| **🇰🇷 한국 국가AI컴퓨팅센터** | 2024 발표 → 2025-10 3차 단독응찰 → **2026-05-11 협약** | 총사업비 **2.5조원**(2030 확장 시 2.9조원 추정), 연산 **1 EF**(BF16 추정), GPU **2028년 H100환산 1.5만장 → 2030년 5만장+**, 전남 해남 솔라시도 | SPC **9개사 컨소시엄** — 삼성SDS(30%)·네이버클라우드(26%)·삼성물산·카카오(4%)·삼성전자·클러쉬(3%)·KT(1%)·전라남도·서남해안기업도시개발 + 공공(29%). 초기 출자 4,000억(공공 1,160억 / 민간 2,840억) | "AI 3대 강국 도약" + sovereign AI 인프라 | **세계 유일 SPC 민관 합작 모델**. 정권 교체(윤→권한대행→이) 통해도 사업 연속성. AI 기본법(2026-01-22) 동시 시행 | policy / industry 산출물 / 전자신문·ZDNet·아시아경제 2026-05-11 |

**📌 한국 위치 (확장, 2026-05-11 industry 협약 기준)**:
- 1차(2025-05-30)·2차(2025-06-13) 유찰 후 3차에서 SPC 지분 51%→30% 미만 완화, **매수청구권(buyback) 조항 제거**, 국산 NPU 50% 의무 → 자율 도입으로 완화하여 단독 응찰 성사. **2026-05-11 협약 체결**.
- **NVIDIA APEC 2025-10-31 발표**: 한국 전체에 GPU 26만장+($9.8B/14조원, 2030년까지) → 미·중에 이어 GPU 보유 3위 진입. 그중 초기 13,000장 Blackwell이 NAVER Cloud·NHN Cloud·Kakao Corp 통해 정부 측에 배치. (NVIDIA IR)
- **일정**: 2026 Q2(4월) SPC 설립 → Q3(7월) 착공 → 2028 1단계 완공(H100환산 1.5만장) → 2030 최종(5만장+). 단, 삼성SDS 이준희 대표는 CES 2026(2026-01)에서 "2029년 개소"로 발언 — 시기 차이 존재(서울경제).
- 거버넌스는 "국가인공지능위원회"(2024-09 윤) → 권한대행 → "국가인공지능전략위원회"(2025-09 이) 로 개편되며 사업은 지속. 자세한 한국 측 수치·정책 맥락은 `01_policy_official.md` 및 `03_industry_tech.md` 참조.

---

## 2. 주요 국가별 사례 상세

### 2.1 🇺🇸 미국 — Stargate / NAIRR

#### Stargate Project
- **선언 형식**: 트럼프 대통령이 백악관에서 직접 발표. 정부는 인허가·전력 지원만, 자본은 100% 민간(OpenAI / SoftBank / Oracle / MGX). (CNN Business, 2025-01-21, https://www.cnn.com/2025/01/21/tech/openai-oracle-softbank-trump-ai-investment)
- **운영·재무 분리**: "SoftBank will have financial responsibility for Stargate and OpenAI will have operational responsibility." (OpenAI, 2025-01-21, https://openai.com/index/announcing-the-stargate-project/)
  - 한국어 의역: 소프트뱅크가 재무, 오픈AI가 운영을 분담.
- **진행 속도**: 2025-09 텍사스 애빌린 1호 데이터센터 가동, 뉴멕시코·오하이오 등 5개 신규 부지 추가 발표(2025년 하반기). 총 7GW 발표. (CNBC, 2025-09-23, https://www.cnbc.com/2025/09/23/openai-first-data-center-in-500-billion-stargate-project-up-in-texas.html ; OpenAI, https://openai.com/index/five-new-stargate-sites/)
- **균열 보도**: 일부 매체는 2025년 중반 OpenAI–Oracle–SoftBank 간 운영·자본 구조 분쟁으로 진행이 일시 지연됐다고 보도. (The Decoder, https://the-decoder.com/stargates-500-billion-ai-infrastructure-project-reportedly-stalls-over-unresolved-disputes-between-openai-oracle-and-softbank/) — **한쪽 보도** 표기.

#### NAIRR Pilot
- 2024-01 NSF가 14개 연방기관+28개 민간 파트너와 함께 출범. 18개월 안에 50개주 400+ 연구팀 연결, 누적 600+ 프로젝트·6,000+ 학생 지원. (NSF, https://www.nsf.gov/focus-areas/ai/nairr)
- 상시 운영기관(NAIRR-OC)으로 전환: 1개 기관에 최대 $35M / 5년. (NSF 25-546)
- **한국과의 비교 시사점**: 미국은 "민간 인프라(Stargate)"와 "공공 연구 접근권(NAIRR)"을 **두 트랙으로 분리**. 한국 국가AI컴퓨팅센터는 두 목표(상업 운영 + 공공 연구 지원)를 한 SPC에 묶어 설계해, 유찰의 한 원인이 됐다는 분석이 산업계에서 제기. (참조: `03_industry_tech.md` 산업계 분석)

### 2.2 🇪🇺 EU — AI Factory / EuroHPC

- **선정 절차**: EuroHPC JU(공동기금기구)가 회원국 컨소시엄 공모를 통해 3차에 걸쳐 19개 AI Factory + 13개 Antennas 선정.
  - 1차(2024-12): 핀란드·독일·그리스·이탈리아·룩셈부르크·스페인·스웨덴 7개. 15개 회원국 + 2개 참여국 참여.
  - 2차(2025-03): 오스트리아·불가리아·프랑스·독일·폴란드·슬로베니아 6개.
  - 3차(2025-10): 체코·리투아니아·네덜란드·루마니아·스페인·폴란드 6개.
  - Antennas: 벨기에·키프로스·헝가리·아일랜드·라트비아·몰타·슬로바키아 등 + 비EU(아이슬란드·몰도바·북마케도니아·세르비아·스위스·영국). (EuroHPC JU, 2025-10-13, https://www.eurohpc-ju.europa.eu/eurohpc-ju-selects-ai-factory-antennas-broaden-ai-factories-initiative-2025-10-13_en)
- **재정 구조**: 슈퍼컴 조달은 Digital Europe Programme(€400M/2024, 총 €800M), 운영은 Horizon Europe — AI Factory당 EU 분담금 최대 €15M / 3년. Antennas 최대 €5M / 50% 보조.
- **EU "€200B 디지털 주권 플랜"** 맥락에서 발표. (William Fry, https://www.williamfry.com/knowledge/europes-ai-ambitions-inside-the-eus-e200-billion-digital-sovereignty-plan/)
- **한국과의 시사점**: EU는 **다거점 분산** + EU 공동기금 매칭. 한국은 단일 거점(해남) 집중형으로, 회원국 다거점 모델과는 다른 길.

### 2.3 🇯🇵 일본 — ABCI 3.0 / GENIAC

#### ABCI 3.0
- **하드웨어**: 766 노드 / NVIDIA H200 GPU 6,128장 / 75PB 저장 / InfiniBand NDR-HDR. FP16 6.22 EF, FP32 3.0 EF. ABCI 2.0 대비 7~13배 성능. (arXiv 2411.09134, https://arxiv.org/abs/2411.09134)
- **재원**: METI 경제안보기금 360억엔(~$232M). 광역 $1B METI 이니셔티브의 일부. 2025-01 본격 가동 후 기업·대학에 개방. (NVIDIA blog, https://blogs.nvidia.com/blog/abci-aist/)
- **운영 주체**: 산업기술총합연구소(AIST) — 정부출연 연구기관. 한국의 KISTI에 해당.

#### GENIAC
- METI 가속기 프로그램. 2024-02 출범. 2주기 6개월 사이클, 30개 프로젝트 지원. 일본어 LLM·자율주행 모델 등.
- **Rakuten AI 3.0** 등 산업계 성과 발표(2026-03, https://global.rakuten.com/corp/news/press/2026/0317_01.html).

#### 비판적 보도
- Asia Times(2025-09)는 "Inside Japan's struggle to build sovereign AI"에서 ABCI·GENIAC 규모가 미국·중국 대비 작고, GPU 수입·전력 한계로 자생력 부족하다는 분석 제시. (https://asiatimes.com/2025/09/inside-japans-struggle-to-build-sovereign-ai/)

### 2.4 🇬🇧 영국 — Isambard-AI / AIRR

- **사양**: HPE Cray EX + NVIDIA GH200 Grace Hopper 5,400장. 216.50 PFLOPS, Top500 11위(2025-06). Green500 4위 — **100% 무탄소 전력** 사용. (University of Bristol, 2025-07, https://www.bristol.ac.uk/news/2025/july/isambard-launch.html ; HPCwire, 2025-07-17, https://www.hpcwire.com/2025/07/17/isambard-ai-the-uks-most-powerful-supercomputer-is-officially-launched/)
- **예산·운영**: £225M, Bristol Centre for Supercomputing(BriCS) 운영. Cambridge "Dawn"(19.46 PFLOPS)과 함께 AI Research Resource(AIRR) 구성.
- **활용**: BritLLM(영어+웨일스어 LLM), 헬스케어·교육 공공 서비스.
- **한국과의 시사점**: 영국은 **공공 연구 우선 + 친환경 인프라**를 명시적 정책 목표로 함. 한국은 LNG 직접 PPA 허용 등 화석연료 의존성을 늘리는 방향(특별법)으로 가고 있어 정책 방향이 대조됨.

### 2.5 🇸🇦 사우디 — HUMAIN (PIF)

- **설립 형식**: Public Investment Fund(국부펀드)가 2025-05 자회사로 직접 설립. 100% 국가 자본. (PIF, https://www.pif.gov.sa/en/our-investments/our-portfolio/humain/)
- **NVIDIA 파트너십**: 5년간 최대 **500MW + 수십만 GPU**. 1단계 GB300 18,000장(InfiniBand). 2025-11 미·사우디 투자포럼에서 **3년 60만장**으로 확대. (NVIDIA, 2025-05-13, https://nvidianews.nvidia.com/news/humain-and-nvidia-announce-strategic-partnership-to-build-ai-factories-of-the-future-in-saudi-arabia ; Data Center Dynamics, https://www.datacenterdynamics.com/en/news/saudi-arabian-ai-venture-humain-buys-18000-nvidia-gb300-chips-several-hundred-thousand-more-on-the-way/)
- **첫 고객**: Elon Musk의 xAI. (CNBC, 2025-11-19, https://www.cnbc.com/2025/11/19/musks-xai-will-be-customer-for-nvidia-data-center-in-saudi-arabia.html)
- **CEO 발언(원문 + 의역)**:
  > "Our ambition is very clear. We want to be the third-largest AI provider in the world, behind the United States and China." — Tareq Amin, HUMAIN CEO (CNBC, 2025-08-27, https://www.cnbc.com/2025/08/27/saudi-arabia-wants-to-be-worlds-third-largest-ai-provider-humain.html)
  > 의역: "야망은 분명하다 — 미국과 중국 다음, 세계 3위 AI 공급자가 되겠다."
- **HUMAIN+Infra US$1.2B 데이터센터 합작 프로젝트**도 별도 추진. (AI Magazine, https://aimagazine.com/cloud-infrastructure/inside-humain-and-infras-1-2bn-ai-data-centre-project)
- **시사점**: 한국과 정반대 — 사우디는 정부 자본 100%, 한국은 민간 70%↑ 요구. 한·사우디 모두 "세계 3강"을 목표로 한다는 점은 동일.

### 2.6 🇦🇪 UAE — Stargate UAE / G42

- **규모**: 5GW 총 캠퍼스(10 sq mile). 1차 1GW 클러스터를 G42가 시공(Khazna), OpenAI·Oracle 운영, NVIDIA(GB300)·SoftBank·Cisco 참여. (G42, https://www.g42.ai/resources/news/global-tech-alliance-launches-stargate-uae)
- **첫 단계**: 200MW가 2026년 3분기 가동 예정. 콘크리트 10만㎥, 강재 에펠탑 1.5배, 인력 5,000명+. (The National, 2025-12-05, https://www.thenationalnews.com/business/2025/12/05/stargate-uaes-first-phase-to-be-completed-in-third-quarter-of-2026/)
- **전력 믹스**: 원자력 + 태양광 + 천연가스 혼합. (aimcongress.com)
- **수출통제 변수**: 미국 BIS가 G42에 GB300 환산 최대 35,000장 수출 승인. **Regulated Technology Environments(RTEs)** 프레임 — 동맹국이 sovereign compute를 운영하되 미국 보안·물리 통제 요건 충족. (New Lines Institute, https://newlinesinstitute.org/tech-econ-sov-sec/u-s-uae-ai-cooperation-future-trajectories/)
- **균열 보도**: 일부 매체는 칩 전용(diversion) 우려로 거래 일시 지연 보도. (Digital Watch, https://dig.watch/updates/uae-ai-megaproject-faces-us-chip-export-concerns ; GuruFocus, https://www.gurufocus.com/news/2913423/stargate-uae-ai-deal-stalls-over-u-s-chip-rules) — **한쪽 보도** 표기.
- **한국과의 시사점**: GPU 대량 확보는 미국 수출통제와 직결. 한국이 GPU 5만장 수입을 추진할 때 동일 압력에 직면할 수 있음. RTE 프레임이 향후 한국에도 적용될 가능성.

### 2.7 🇹🇼 대만 — NCHC / NSTC

- **로드맵**: NSTC(국가과학기술위원회)가 2029년까지 국가 슈퍼컴 누계 **480 PFLOPS** 도달 목표 천명. (Nikkei Asia)
- **시스템**: Nano4(81.55 PF, 2.214 MW Top500 측정값) + Nano5(Hopper 기반, Top500 118위 2025-06). 2025-09 타이난 신규 컴퓨팅 센터 완공, Nano4는 2026 상반기 가동 예정. (thequantuminsider.com, https://thequantuminsider.com/2025/05/20/taiwans-nchc-to-launch-nvidia-powered-supercomputer-supporting-quantum-research/)
- **국가 모델**: TAIDE — NSTC 주도, 2023-04 시작.
- **이니셔티브**: 행정원 "10대 AI 인프라 이니셔티브"(2025) — 실리콘 포토닉스·양자·AI 로보틱스.
- **한국과의 시사점**: 대만 역시 명확한 **숫자 목표(480 PF, 2029)** + 자국 LLM. 한국은 "GPU 5만장 / 1.4 EF" 등 목표를 제시했으나 매수청구권 등 제도적 마찰로 출범 지연.

### 2.8.5 🇰🇷 한국 — 국가AI컴퓨팅센터 (정치·거버넌스 맥락, policy 산출물 기반)

> 본 절은 policy 산출물에서 수신한 정치·거버넌스 맥락을 비교 가능한 형태로 정리한 것이다. 한국 정책의 1차 수치·발표문은 `01_policy_official.md` 참조.

- **상위 국가전략 위상**:
  - "AI 3대 강국 도약" 국정 목표 — 윤석열 정부 시기 명문화.
  - **AI 국가전략기술 추가**(조세특례제한법) — 과기정통부 2025-01-13 발표.
  - 최상목 권한대행(2025-02-17): "AI 컴퓨팅 인프라 = 광대역 통신망 구축으로 IT 강국이 된 사례에 비견" — 사업의 격을 1990년대 초고속정보통신망 수준으로 위치 설정.
- **정권 교체에도 사업 연속성**:
  - 2024-09-26 윤석열 정부 "국가인공지능위원회" 출범(대통령 주재).
  - 2025-04 헌재 탄핵 인용 → 최상목 권한대행 체제에서 AI 정책 주도.
  - 2025-06 이재명 대통령 취임.
  - 2025-09-02 국무회의에서 "**국가인공지능전략위원회**"로 전면 개편(이재명 대통령 위원장).
  - → 국가AI컴퓨팅센터 사업은 정권 교체에도 **3개 정부(윤·권한대행·이) 동안 지속 추진** — 한국 사례의 특징적 정치 연속성.
- **AI 기본법 (포괄 규제 동시 시행)**:
  - "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법" — 2024-12-26 본회의 통과, **2026-01-22 시행**. (과기정통부 https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3185321)
  - **EU AI Act 다음 세계 2번째 포괄 AI 규제 시행국**.
  - 시행령 입법예고 중, 시행 초기 **1년 이상 계도 기간** 운영.
  - **EU AI Act 와의 핵심 차이** (KCI 학술논문·법률신문·신&김 뉴스레터 기반):
    | 구분 | EU AI Act | 한국 AI 기본법 |
    |---|---|---|
    | 위험 분류 | 4단계(허용 불가/고위험/제한적/최소) | "고영향 AI"(high-impact) 단일 분류 |
    | 규제 철학 | "통제·기본권 보호 우선" | "**진흥 우선** + 불필요 규제 최소화" |
    | 시스템적 위험 FLOPs 임계 | 10²⁵ FLOPs | 10²⁶ FLOPs (미국과 동일) |
    | 발효 | 2024-05 이사회 승인 + 단계적 시행 6~36개월 | 2024-12-26 통과 → 2026-01-22 일괄 시행 + 계도 1년+ |
  - 출처: KCI 학술논문 "AI 규제 입법의 문제점에 대한 검토 - EU AI Act와 한국의 AI기본법간 비교, 분석을 중심으로" (성균관법학, https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003193769) / 법률신문 (https://www.lawtimes.co.kr/LawFirm-NewsLetter/204816) / 신&김 뉴스레터 (https://www.shinkim.com/kor/media/newsletter/2666)
  - **국제 비교 시사점**: 인프라(국가AI컴퓨팅센터)·자본(SPC)·규제(AI 기본법)가 **모두 "진흥 우선"** 방향으로 정렬. 미국식 무규제·EU식 강규제 사이의 **제3의 중간 모델** — 한국 고유. FLOPs 임계 10²⁶은 한·미 공조 입장.
- **민관 합작 SPC 모델 = 한국 고유**:
  - 미·일(공공/민간 단일) 또는 EU(공동기금 매칭)와 달리 한국은 **SPC(특수목적법인) 민관 합작**.
  - 1차(2025-05-30) / 2차(2025-06-13) 유찰 → 초기 투자 부담·경영 자율성 제약·수익 구조 불투명 = 민간 외면 신호.
  - 3차 공모 시 SPC 지분 구조 변경: 공공 51% → **공공 30% 미만**으로 민간 자율성 확대. **매수청구권(buyback) 조항 제거**(디일렉 2025-09). 국산 NPU 50% 의무 → 자율 도입 + 별도 R&D 존 운영(후보: 리벨리온 REBEL 100·퓨리오사AI RNGD).
  - **2026-05-11 협약 체결** 시점의 컨소시엄 9개사 + 출자 구조는 §1 매트릭스 참조.

- **입지 — 전남 해남 솔라시도** (industry 산출물 수신):
  - 솔라시도 데이터센터파크 전체 약 **165만㎡(50만평)**, 40MW급 25동 총 **1GW** 전력 능력 (한경 2023-08-24, 삼성E&A·보성산업 MoU).
  - 국가AI컴퓨팅센터 단일 시설의 점유 면적·MW는 비공개.
  - 인근 BS그룹 솔라시도 **태양광 98MW + ESS 306MWh** (연 129GWh, 국내 최대) — **RE100 잠재**.
  - 인근 확장 계획: 태양광 3GW + 풍력 7GW (BS그룹 주장).
  - **국제 비교**: UAE Stargate UAE(10 sq mile = 25.9㎢) 대비 약 6% 규모. 다만 RE100 잠재력은 사우디·UAE(화석연료 의존도 높음)보다 우수, 영국 Isambard-AI(100% 무탄소)에 근접 가능.

- **GPU 다양성**:
  - 탑재 가능 GPU: NVIDIA Blackwell·Blackwell Ultra·H100/H200/B200/B300, AMD MI 시리즈, 국산 NPU. (전자신문 2025-04-01)
  - 정부 몫 5만장 Blackwell은 별개로 NVIDIA 2025-10-31 APEC 발표(NVIDIA IR) — 초기 13,000장 Blackwell이 NAVER Cloud·NHN Cloud·Kakao Corp 통해 배치.
  - **국제 비교**: 일본 ABCI 3.0(NVIDIA H200 단일)·영국 Isambard-AI(GH200 단일)와 달리 한국은 **이종 GPU 혼용** 선택 — 공급망 다변화 의도이나 운영 복잡도 증가.
- **한국 사례의 국제 비교상 특이점**:
  1. **인프라 + 규제 = 동시 시행** — 인프라(국가AI컴퓨팅센터)와 포괄 규제(AI 기본법)를 같은 분기(2026 상반기)에 함께 가동. EU·미국은 규제와 인프라 트랙이 별도.
  2. **정치 변동에도 사업 연속성** — 사우디·UAE처럼 권위주의 정권의 결정과 달리, 한국은 민주적 정권 교체 + 탄핵 사이클에도 정책 지속. EU AI Factory(다국가 협정)와 비교 가능한 제도적 회복력.
  3. **민관 SPC 모델의 시장 검증 실패 후 조정** — 일본 ABCI(공공) / 미국 Stargate(민간) 어느 한쪽 모델로 수렴하지 않고 중간 모델을 3차례 조정.

### 2.9 🇸🇬 싱가포르 — IMDA

- 2024-02 예산에서 5년 S$1B+ AI 컴퓨팅·인재·산업 발표. AI 컴퓨팅 자체에 최대 S$500M.
- 2025-02 Enterprise Compute Initiative S$150M 추가 — 기업이 클라우드 파트너와 협업해 AI 컴퓨팅·컨설팅 받도록 지원. (IMDA, 2025-02, https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/sg-ramps-up-ai-push-to-turn-digital-ambition-into-real-world-impact)
- 향후 3년 2,000개 디지털 성숙 기업 지원(Digital Leaders Programme).
- **시사점**: 자체 메가센터를 짓지 않고 **글로벌 클라우드 파트너십**으로 보완. 자국 AI 모델 평가에서 최상위권(`law.asia/ko/singapore-ai-regulation-budget-2026/`).
- **한국과의 시사점**: 자체 인프라 없이도 산업 성과를 낼 수 있다는 반례. 단, 데이터 주권·국방 영역에서는 한계 인정(다음.넷 2025-08).

---

## 3. 학계·연구기관 분석

### 3.1 KISDI(정보통신정책연구원)
- **"한국 AI 정책 현황 및 발전 방안: OECD AI 원칙을 중심으로"** (Perspectives 2025-09, No.2, https://www.kisdi.re.kr/report/fileView.do?key=m2102058837181&arrMasterId=4334696&id=1875076)
  - 한국은 통신 인프라·디지털정부·공공데이터에서 최상위권. 그러나 R&D 생태계는 강화 필요.
  - 정책 권고: ①민·관 파트너십 ②AI 외교 인재 ③**AI 인프라 고도화로 R&D 생태계 구축** ④AI 법·규제 정비.
- **KISDI STAT Report**(2025-08, http://www.kisdi.re.kr/report/fileView.do?key=m2101113025790&arrMasterId=4333447&id=1872156): 한국 2024년 AI 투자 46억→27억$로 **감소**. 미·중 대비 격차 확대.
- **AI 보안 거버넌스**(KISDI 2025): AI 안전·보안을 아우르는 법·제도 개선 제언.

### 3.2 KISTEP(한국과학기술기획평가원)
- "AI로 인한 전력 수요의 폭발적 증가와 대응방안" (https://www.kistep.re.kr/boardDownload.es?bid=0031&list_no=94190&seq=1) — AI 데이터센터 전력 수요 시나리오 분석.

### 3.3 학술 논문·로펌 분석
- **성균관법학 (KCI 등재)** "AI 규제 입법의 문제점에 대한 검토 — EU AI Act와 한국의 AI기본법간 비교, 분석을 중심으로" (https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003193769 / DBpia https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12141925)
  - 위험 분류·시스템적 위험 임계·규제 철학에서 EU와 한국의 차이를 정리. 한국 "고영향 AI" 단일 분류 채택 시 **개별 산업·기술별 위험 평가의 어려움**을 주된 한계로 지적.
  - → §2.8.5 비교표의 1차 학술 근거.
- **한국법제연구원** "유럽연합 인공지능법(EU AI Act)의 특성과 쟁점 — 우리나라 인공지능 입법에 대한 시사점" (https://klri.re.kr/Platform/data/e8aec885-b0e8-4ac3-bf27-7a9d57be3f8b/99cfe817-e5dc-4074-933d-204e87aa235f) — 국가 연구기관 차원의 법제 비교.
- **국가미래연구원(IFS)** "EU AI Act 주요내용 및 시사점" 보고서 (https://www.ifs.or.kr/bbs/board.php?bo_table=research&wr_id=10908)
- **SPRi(소프트웨어정책연구소)** 다운로드 자료 (https://www.spri.kr/download/23545)
- **대륜·신&김 등 로펌 분석** — 한국 기업 컴플라이언스 관점에서 EU AI Act vs 한국 AI 기본법 비교(https://www.daeryunlaw-comp.com/insights/249 / https://www.shinkim.com/kor/media/newsletter/2666).

> **공개 자료 미확보** 영역: KAIST·서울대 차원의 국가AI컴퓨팅센터 전용 정책 보고서는 본 조사 시점(2026-05-11)에서 공개 PDF로 검색되지 않음. STEPI(과학기술정책연구원) 별도 보고서도 미확보 — 추후 보강 필요.

---

## 4. 전문가 기명 의견 (찬·반·중립)

### 4.1 찬성 / 정부 인사
- **임문영 국가AI전략위원회 부위원장**: 엑사원 등 한국 AI 모델 평가에서 "미·중에 이어 3위" 평가 언급. (Daum 뉴스, https://v.daum.net/v/PmMNsuUl1Q) — 정부 측 자신감 표명. 위원회 직위로 기명.
- **김용범 청와대 정책실장**: 반도체·AI 인프라 정책 전면 등판. (Econmingle, https://econmingle.com/economy/ai-power-infrastructure-kim-yongbeom-policy/) — 정부 추진 의지 강조.

### 4.2 반대 / 비판 (정치권 기명)
- **나경원 의원(국민의힘)**: "최첨단 AI 반도체는 미국의 엄격한 수출 통제 하에 있는 전략 무기"라며 이재명 대통령의 'GPU 5만장 확보' 공약을 **"실현 불가능한 공약"**이라고 비판. (아시아경제, 2025-11-21, https://www.asiae.co.kr/article/2025112107213208048)
- **이준석 의원(개혁신당)**: "정부가 자금을 투입해 GPU 자원을 직접 배분하는 것은 자율성과 효율성을 해칠 수 있는 **중앙집중형 구조**"라며 과시적 접근이라고 지적. (아시아경제, 2025-11-21, 동일 출처)

### 4.3 산업계·전문가 칼럼 (기명)
- **이다연 칼럼** "AI 반도체 확보 논쟁과 초당적 협력의 중요성" (뉴스프라임, https://m.newsprime.co.kr/section_view.html?no=711077) — GPU 확보를 정쟁화하지 말고 초당적 협력 필요.
- **이보형(서울경제 객원논설위원) 칼럼** "AI 후폭풍 '에너지'…넛지 정책 도입할 때" (서울경제, https://www.sedaily.com/article/20042118) — 데이터센터 전력 수요 폭증에 넛지 정책 제언.

### 4.3.5 심층 기명 칼럼·기자 논평 (press 산출물 수신, 2025-03~10)

> press 산출물에서 수신한 비판/심층 5건을 국제 비교 관점으로 정리. 출처 1차 검증은 press 영역(`02_press_coverage.md`).

- **서울경제 [기자의 눈] "AI판 국정자원 사태 막아야"** (2025-10-21, https://www.sedaily.com/NewsView/2GZ9K28459)
  - 핵심: "AI판 국정자원관리원 사태가 되풀이될 수 있다" — 과거 국가 IT 인프라 실패 사례에 빗댄 경고.
  - 구체 지적: **DR(재해복구) 평가 배점이 1,000점 중 30점에 불과** — 운영 안정성 경시.
  - **국제 비교 시사점**: 영국 Isambard-AI·일본 ABCI 등 공공 인프라는 SLA·DR 기준이 운영 명세서에 명시. 한국은 RFP 배점 자체가 낮아 운영 안정성 인센티브 부족.

- **서울경제 "예고된 실패…국가AI컴퓨팅센터 응찰 '0'"** (2025-05-30, https://www.sedaily.com/NewsView/2GSZZY1YLK)
  - 핵심 인용:
    > "GPU 비싸게 사서 싸게 공급해야 해 '수지타산'이 안 맞는다."
  - 지방 입지(해남)에 따른 수요 불확실성 지적.
  - **국제 비교 시사점**: 사우디 HUMAIN·UAE Stargate UAE 는 국부펀드 자본으로 수익성 압박 없음. 미국 Stargate 는 OpenAI 자체 수요 수직통합으로 해소. 한국 SPC 는 외부 수요 의존 + 마진 압박 — **수요 보증 메커니즘 부재**.

- **디지털데일리 [국가AI컴퓨팅센터 점검 ⑤] "사업자는 최소 2045년까지, 정부는 언제든 청산 가능?"** (2025-03-24, https://m.ddaily.co.kr/page/view/2025032413492939867)
  - 핵심: **비대칭 리스크** — 민간 사업자 20년 운영 의무 vs 정부 임의 청산권.
  - **국제 비교 시사점**: EU AI Factory(EU 분담금 최대 3년)·미국 Stargate(시장 자율 종료)·일본 ABCI(공공 직영) 모두 한국식 "민간만 길게 묶고 정부는 빠질 수 있는" 비대칭 구조가 없음. 정상적 PPP(민관협력) 표준과 어긋난다는 지적.

- **비즈한국 "'2.5조 규모' 국가 AI컴퓨팅센터, 아무도 응찰 안 한 결정적 이유"** (2025-08-13, https://www.bizhankook.com/bk/article/30133)
  - 1차/2차 유찰 원인 종합: 정부 51% 지분 / 바이백(매수청구권) 의무 / 운영 자율성 제약.
  - **국제 비교 시사점**: 한국이 SPC 지분 51%→30% 미만으로 조정한 것은 미국 Stargate(민간 100%) 방향으로 한 발 이동. 다만 EU 식 "수요 보증·자본 매칭" 같은 안전판은 도입하지 않아 **중간지대**.

- **경향신문 "AI산업 집적화 필요한데 오히려 분산"** (2025-10-23, https://www.khan.co.kr/article/202510231440001)
  - **광주시 입장**(기명): "민간기업이 경제논리로 국가 주요 정책의 방향을 흔들고 있다" — 입지(해남) 결정의 정치·지역 균형 변수.
  - **오상진 사업단장**(기명):
    > "AI 패권 경쟁이 치열한 지금, 국가는 예산의 효과를 가장 크게 낼 수 있는 곳에 투입해야 한다."
  - **국제 비교 시사점**: 미국 Texas Abilene(단일 1,000 acre)·UAE Abu Dhabi(10 sq mile 단일 캠퍼스)·사우디 KSA 집중 = **집적**. 한국은 지역 균형 논리로 입지 분산 경향 — 산업 클러스터 효과와 충돌. 다만 EU 19개 다거점 AI Factory는 한국식 분산과 유사 — "집적 vs 분산"은 정책 선택 문제, 정답 미고정.

#### 4.3.5 종합 — 비판 5건의 공통 축
1. **사업 구조의 비대칭** (디지털데일리, 비즈한국) — 민간 부담↑ / 정부 권한↑
2. **수익성 결손** (서울경제 2025-05-30) — "비싸게 사서 싸게 공급" 마이너스 구조
3. **운영 안정성 경시** (서울경제 2025-10-21) — DR 배점 1,000점 중 30점
4. **입지의 정치성** (경향신문) — 집적 vs 분산 갈등
→ 공통 진단: **민간 시장 신호와 행정 의지의 분리**. 3차 조정으로 일부 완화됐으나 "수요 보증·운영 자율성·DR 기준 강화"는 미완.

> **익명 인용 영역**: 일부 보도에 "업계 관계자에 따르면"식 익명 인용이 다수 있으나, 본 보고서에서는 **익명 인용은 채택하지 않음**. (예: "전력·냉각이 GPU보다 더 큰 병목"이라는 평가는 다수 매체에서 인용되나 발언자 기명 확보 못함 — 산업계 일반 인식으로만 기록)

### 4.3.6 NVIDIA 종속·공급망 단일화 비판 (press 2차 수신 후 보강)

- **전기신문 칼럼** "엔비디아 GPU 26만장, AI 인프라 3대 강국 떠오른 대한민국…**기술 독립·효율 분배 과제**" (https://www.electimes.com/news/articleView.html?idxno=361388)
  - 핵심 진단: NVIDIA 단일 공급망에 절반 이상 의존 → **기술 독립성·효율 분배 두 측면 모두 미해결**.
  - **국제 비교 시사점**: 사우디 HUMAIN·UAE Stargate UAE도 NVIDIA 종속. 다만 그쪽은 RTE/수출통제 협상 카드로 활용. 한국은 자체 NPU(리벨리온·퓨리오사AI) 의무 50% 삭제 후 자율 도입으로 전환 — 단기 공급 안정성을 우선하면서 기술 독립은 후순위.
- **학·산 GPU 격차** (Korea Times·KMJournal 2025-12 보도):
  - 학계·공공이 요청한 GPU 수요는 약 2만장 / 확보 물량은 그 2배 이상.
  - 그러나 대학·중소 스타트업은 여전히 GPU 부족 호소 — **확보량 ≠ 접근권**이라는 격차.
  - 출처: The Korea Times 2025-12-01 "Korea accepts 1st batch of Nvidia GPUs" (https://www.koreatimes.co.kr/business/tech-science/20251201/korea-accepts-1st-batch-of-nvidia-gpus-under-large-scale-ai-infrastructure-plan) / KMJournal "GPU는 충분해졌는데 답은 아직" (https://www.kmjournal.net/news/articleView.html?idxno=7043) / 정책브리핑 "정부 확보 GPU 1만장 산·학·연 푼다" (https://www.korea.kr/news/policyNewsView.do?newsId=148956711)
- **AI Industry News 분석** "NVIDIA and South Korea align on sovereign AI at APEC CEO Summit" (https://www.artificialintelligence-news.com/news/nvidia-and-south-korea-align-on-sovereign-ai-at-apec-summit/) — 외신 시각에서 한·NVIDIA 협업 분석. "sovereign AI" 슬로건이 NVIDIA 영업 전략에 부합한다는 회의적 시각도 병존.
- **종합**: 비판 축은 ① NVIDIA 단일 의존 ② 학·산 접근권 격차 ③ "sovereign AI" 담론의 영업화. 정부 측 입장은 "단기 공급 안정성 우선 + 국산 NPU 별도 R&D 존" — §1·§2.8.5 GPU 다양성 절에서 언급됨.

### 4.4 글로벌 외부 관점 (기명)
- **Jensen Huang(NVIDIA CEO)**:
  > "Korea's leadership in technology and manufacturing positions it at the heart of the AI industrial revolution — where accelerated computing infrastructure becomes as vital as power grids and broadband." — APEC 정상회의(2025-10, https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure)
  > 의역: "한국의 기술·제조 리더십은 AI 산업혁명의 중심에 있으며, 가속 컴퓨팅 인프라는 전력망·광대역만큼 필수가 됐다."
  - NVIDIA는 한국에 25만장 GPU 배포 약속 — 국가AI컴퓨팅센터 5만장 + 네이버클라우드·카카오·NHN 등 분산. (NVIDIA IR, https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx)
  - **이해상충 명시**: NVIDIA는 GPU 공급자이므로 "sovereign AI" 담론은 영업 동기 포함. World Governments Summit에서 "every country needs sovereign AI" 발언도 동일 맥락. (NVIDIA blog, https://blogs.nvidia.com/blog/world-governments-summit/)
- **Tareq Amin(HUMAIN CEO)**: 위 §2.5 인용.

---

## 5. 시민사회·지역사회 반응

### 5.1 환경·시민단체 (반대 입장)

**AI시민행동(41개 시민사회단체 연대체)** — 인권·노동·복지·여성·환경·소비자·평화 단체 결집.
- **참여연대 성명** "[성명] AI 데이터센터 특별법, 산업 진흥 명분으로 규제 완화와 각종 특례·특혜 제공"(2025, https://peoplepower21.org/solidarity/2020404 / https://peoplepower21.org/solidarity/2020321)
  - **핵심 비판 1**: "LNG 직접 PPA(전력구매계약) 허용이 **화석연료 의존을 확대**, 기후위기를 심화하고 에너지 공공성을 약화시킨다."
  - **핵심 비판 2**: "전력계통영향평가 면제는 대규모 전력 수요 시설에 대한 **사전 통제 장치를 무력화**, 계통 안정성을 위협한다."

**녹색연합 성명** "AI 핑계 핵발전 확대 시도, 데이터센터 특별법 즉각 폐기하라!" (2025, https://www.greenkorea.org/activity/energy-conversion/nuclear/117877/)
- 재생에너지·지산지소(地産地消) 원칙 부재 비판. SMR·핵발전 확대 우회 통로로 사용될 우려.

**그린피스 한국** — 새 정부에 기후위기 대응 구조 전환 촉구 성명(2025, https://www.greenpeace.org/korea/press/34274/presidential-election_reactive_2025/). IT 기업에 데이터센터 청정에너지 운영 요구 지속.

### 5.2 지역사회 반발 (NIMBY)
- **수도권 인허가 차질**: 2024~2025년 수도권 데이터센터 인허가 33건 중 **17건(52%)이 주민 반대로 지연·무산**. (그린포스트코리아, https://www.greenpostkorea.co.kr/news/articleView.html?idxno=304741 ; 머니S, https://www.moneys.co.kr/article/2025122416275455769)
- **김포 구래동 사례**: DL이앤씨 시공 데이터센터, 2021-06 건축허가 후 주민 1만명 서명운동으로 4년간 착공 지연. 김포시 착공반려→행정심판으로 위법 판단(2024). (머니S 2025-12)
- **네이버 용인 사례(2017)**: 정치권·주민 반발로 무산, 세종시 이전. (e-focus, https://www.e-focus.co.kr/news/articleView.html?idxno=3001504)
- **반대 사유 분석**: 환경오염·배터리 화재·전자파·소음·열관리·부동산 가치 하락. 일부 사유는 **과학적 근거가 약한 막연한 공포** 포함(MBC 보도, https://imnews.imbc.com/replay/2025/nwdesk/article/6783597_36799.html). 즉, NIMBY 갈등의 일부는 정보 부족 / 일부는 실재 환경 영향.

### 5.3 노조·노동계
- **공개 자료 미확보**: 국가AI컴퓨팅센터·데이터센터 직접 관련 노조 성명은 본 조사 시점 검색되지 않음. 향후 보강 필요.

### 5.4 매체 간 균형
- 정부 측 입장은 "전력·인허가 절차 간소화로 글로벌 경쟁력"(특별법 추진).
- 시민단체 측 입장은 "규제 없는 진흥"·"공공성 약화"·"탄소중립 목표 훼손".
- 동일 사실(특별법 과방위·본회의 통과)에 대해 매체별 프레임 차이 큼. press 산출물 `02_press_coverage.md`에서 매체별 비교 참조.

---

## 6. 주요 쟁점 정리

### 6.1 사업성·운영 모델
- **유찰 3회 후 단독 응찰**: 2025-05 1차 / 2025-06 2차 모두 응찰 0건. 2025-08 조건 완화(민간 지분 70%↑ / 공공 30%↓ / 매수청구권 삭제 / 국산 NPU 50% 의무 삭제) 후 2025-10-21 삼성SDS-네이버클라우드-카카오-KT 컨소시엄 단독 응찰. (전자신문 2025-06-02 / 한국경제 2025-08-11 / 디일렉 2025-08 / ZDNet 2025-10-21)
- **독소 조항**: 공공 51% 지분 + 매수청구권(바이백)이 민간 부담 과중 — 비즈한국 분석(https://www.bizhankook.com/bk/article/30133).
- **수익 모델 불명확**: 초기 투자 부담 대비 회수 경로 불투명. EU·일본 사례 대비 한국이 민간 투자비중 과도하다는 분석.
- **수익성 결손 구조 ("비싸게 사서 싸게 공급")**: 서울경제 2025-05-30 보도 — GPU 조달가 vs 공급가 역마진 구조 우려. 사우디·UAE 국부펀드 모델·미국 자체수요 수직통합 모델과 달리 한국 SPC는 외부 수요 의존.
- **비대칭 리스크 (20년 vs 임의 청산)**: 디지털데일리 2025-03-24 — 민간 운영 의무 최소 2045년 / 정부 청산권 임의. PPP 표준에서 어긋남.
- **DR 평가 배점 1,000점 중 30점**: 서울경제 2025-10-21 [기자의 눈] — 운영 안정성 인센티브 부족. 국제 공공 인프라(영국 AIRR·일본 ABCI) 운영 명세 기준과 격차.

### 6.2 GPU 수급·공급망
- **미국 수출통제 변수**: 나경원 의원 비판처럼 GB300/Blackwell은 美 BIS 통제 품목. 사우디 HUMAIN·UAE G42 모두 별도 승인·RTE 프레임 거침. 한국도 동일 변수.
- **수요 4배 초과**: 2026-02 기준 정부 GPU 보급 신청이 공급의 4배. (엑스디노드 가이드, https://www.xdnode.co.kr/guide/?bmode=view&idx=170150094)
- **NVIDIA 25만장 약속(2025-10)**: 국가AI컴퓨팅센터 5만장 + 클라우드 3사 분산. 단, **공급 시점·가격은 확정 안됨**(IR 자료 기준).

### 6.3 전력·환경 부담
- **데이터센터 전력 수요**: 국내 4,461MW(2025) → 6,175MW(2028), 연평균 +11%. (한국IDC, https://my.idc.com/getdoc.jsp?containerId=prAP53643725)
- **AI 데이터센터 단일 시설 100MW+**: 기존 10~25MW의 4~10배. (전기신문 2026 신년기획, https://www.electimes.com/news/articleView.html?idxno=363963)
- **국가 전력량 초과 우려**: 아시아투데이(2026-02-25, https://www.asiatoday.co.kr/kn/view.php?key=20260225010007633)는 AI 데이터센터 누적 수요가 "국민 절반 전기"에 맞먹는다고 보도 — **추정**, 출처 매체 단독.
- **물 사용·PUE 미공개**: 국내 기업은 PUE·취수량 공개 부실. (서울신문 글로벌 인사이트, https://www.seoul.co.kr/news/international/insight-global/2025/12/03/20251203016001)
- **영국 Isambard-AI(무탄소 100%)와의 대조** — 한국은 LNG PPA·SMR 우회로 의존 강화 방향, 정책 충돌 가능성.

### 6.4 데이터 보안·주권
- **"sovereign AI" 담론**: Jensen Huang 주도 글로벌 캠페인(World Gov Summit·Davos·VivaTech·APEC). 영업 동기 포함이라는 비판도 존재(ABI Research, https://www.abiresearch.com/blog/jensen-huangs-global-sovereign-ai-tour-lands-in-paris-at-vivatech-2025-bringing-nvidia-gtc-and-renewed-optimism-for-the-ai-ecosystem).
- **데이터 주권 vs 클라우드 종속**: 싱가포르처럼 자체 인프라 없이 클라우드 파트너십에 의존하면 데이터 주권 위협. 한국 정부는 "독자 인프라" 명분.
- **수출통제 RTE 프레임**: UAE 사례처럼 미국이 GPU 공급과 운영 통제권을 결부. 한국도 동일 압력 예상.

### 6.4.5 거버넌스·규제 동시성 (한국 고유 변수)
- **인프라 + 규제 동시 가동**: 국가AI컴퓨팅센터 본격 운영 시점(2026)과 AI 기본법 시행(2026-01-22)이 겹친다. EU(AI Act 2024 발효, AI Factory 2024~2025 선정)는 시차가 있고, 미국은 연방 차원 포괄 규제가 없는 상태에서 Stargate가 진행됨. 한국은 **2번째 EU식 포괄 규제 + 자체 거점 인프라 = 동시 출범**이라는 이중 부담을 안고 출발. (policy 산출물 / 비즈한국 2025 "규제 없는 진흥 괜찮을까")
- **포괄 규제 시행 = 운영 리스크**: SPC 운영사가 AI 기본법 의무(고영향 AI 사전평가·투명성·안전성 보고 등)를 GPU 서비스에 적용해야 함. 시행 초기 1년 이상 계도기간은 완충이나, 컨소시엄 4개사 모두 동시에 규제 적응 비용 발생.
- **정치 사이클의 변수**: 사우디·UAE는 권위주의 단일 결정으로 5년 계획 직선 추진 가능. 한국은 정권 교체·국회 다수 변화에 매번 노출. 다만 본 사업은 정권 교체에도 지속 — **여야 합의 영역**에 위치.

### 6.5 형평성·접근권
- **NAIRR 모델**: 미국은 학계·중소기업 접근권을 별도 트랙으로 보장. 한국 국가AI컴퓨팅센터는 상업 SPC 형태로 접근권 보장 메커니즘 미흡(기존 NIPA GPU 공동활용 사업으로 분리).
- **GPU 늘었는데 국가대표 모두 살릴 수 없나** (아시아경제, https://www.asiae.co.kr/article/2025112107213208048): 정부 선발방식에 회의론 — "선택과 집중"이 형평성 해친다는 산업계 반발.
- **인재 부족**: GPU 확보해도 운영 인력 부족. (KMJournal, https://www.kmjournal.net/news/articleView.html?idxno=7040)

---

## 7. 시사점 및 미해결 질문

### 시사점
1. **운영 모델 비교 결과**: 미국=민간 100%, 사우디=정부 100%, EU=다거점 매칭, 일본=공공 R&D, 한국=민관 SPC(민간 70%) — 한국은 "민간 위험 회피 + 공공 통제 유지" 두 마리 토끼를 잡으려다 유찰 반복.
2. **정책 목표의 이중성**: 상업 운영 + 공공 연구 접근권을 한 SPC에 묶은 한국 설계가 시장 호응 낮음. 미국식(Stargate / NAIRR 분리) 또는 EU식(다거점) 검토 여지.
3. **환경 비용은 후순위**: 영국·EU는 명시적 친환경(녹색 슈퍼컴) 목표. 한국 특별법은 LNG PPA 허용·전력계통영향평가 면제 — 정책 방향 거꾸로.
4. **GPU = 수출통제 자산**: 사우디·UAE 사례에서 보듯 미국 BIS 승인이 사실상 필수. "GPU 5만장" 공약은 정치 변수가 아닌 외교·통제 변수.
5. **시민사회 균형**: 데이터센터 NIMBY는 일부 막연한 공포 + 일부 실제 환경 부담. 정부가 정보공개·환경기준 강화 없이 인허가만 간소화하면 사회적 갈등 증폭 우려.
6. **정치 연속성의 강점**: 한국은 정권 교체(윤→권한대행→이)·헌재 탄핵·국정감사 사이클을 겪으면서도 본 사업을 지속. 사우디·UAE식 권위주의 직선 추진이 아니어도 **여야 합의 영역**으로 보호 가능함을 시사. EU 다국가 협정형 회복력에 비견.
7. **인프라 + 포괄 규제 동시 출범**: 한국은 AI 기본법(EU 다음 2번째 포괄 규제) 시행과 국가AI컴퓨팅센터 가동이 같은 분기(2026 상반기)에 겹친다 — **세계 유일 사례**. 운영 리스크이자 동시에 "신뢰 기반 AI 인프라"라는 차별화 포지셔닝 기회.

### 미해결 질문
- ❓ 삼성SDS 컨소시엄 단독 응찰 후 사업 조건은 어떻게 최종 확정되는가? (industry 산출물 후속 추적)
- ❓ NVIDIA 25만장 한국 공급 일정·가격·우선순위는 공식 공개되지 않음 — 보완 조사 필요.
- ❓ KAIST·서울대·STEPI 차원의 국가AI컴퓨팅센터 전용 비평적 보고서는 공개되지 않음 — 학술 자료 추가 추적 필요.
- ❓ 노동조합·종업원 단체의 명시적 입장은 검색되지 않음 — 데이터센터 운영 인력 노동조건 관점은 미수집.
- ❓ 사우디 / UAE 60만장·5GW 발표의 실제 GPU 인도·가동 시점은 추가 검증 필요.

---

## 8. 출처 목록 (한/영)

### L1 — 1차 공식 출처
1. OpenAI, "Announcing The Stargate Project", 2025-01-21. https://openai.com/index/announcing-the-stargate-project/
2. OpenAI, "Five new Stargate sites", 2025 하반기. https://openai.com/index/five-new-stargate-sites/
3. OpenAI, "Stargate advances with 4.5 GW partnership with Oracle". https://openai.com/index/stargate-advances-with-partnership-with-oracle/
4. NSF, "NAIRR Operations Center funding announcement". https://www.nsf.gov/news/nsf-announces-funding-establish-national-ai-research
5. NSF 25-546, NAIRR-OC 솔리시테이션. https://www.nsf.gov/funding/opportunities/nairr-oc-foundations-operating-national-artificial-intelligence/nsf25-546/solicitation
6. NSF, NAIRR focus area page. https://www.nsf.gov/focus-areas/ai/nairr
7. EuroHPC JU, "AI Factories Calls launch", 2024-09-10. https://www.eurohpc-ju.europa.eu/eurohpc-joint-undertaking-launches-ai-factories-calls-boost-european-leadership-trustworthy-ai-2024-09-10_en
8. EuroHPC JU, "Six Additional AI Factories selected", 2025-10-10. https://www.eurohpc-ju.europa.eu/eurohpc-ju-selects-six-additional-ai-factories-expand-europes-ai-capabilities-2025-10-10_en
9. EuroHPC JU, "AI Factory Antennas selected", 2025-10-13. https://www.eurohpc-ju.europa.eu/eurohpc-ju-selects-ai-factory-antennas-broaden-ai-factories-initiative-2025-10-13_en
10. European Commission, AI Factories policy page. https://digital-strategy.ec.europa.eu/en/policies/ai-factories
11. University of Bristol, "Isambard-AI launch", 2025-07. https://www.bristol.ac.uk/news/2025/july/isambard-launch.html
12. UK GOV, "AI Research Resource". https://www.gov.uk/government/publications/ai-research-resource
13. NVIDIA Newsroom, "HUMAIN and NVIDIA partnership", 2025-05-13. https://nvidianews.nvidia.com/news/humain-and-nvidia-announce-strategic-partnership-to-build-ai-factories-of-the-future-in-saudi-arabia
14. PIF, HUMAIN portfolio page. https://www.pif.gov.sa/en/our-investments/our-portfolio/humain/
15. G42, "Global Tech Alliance Launches Stargate UAE". https://www.g42.ai/resources/news/global-tech-alliance-launches-stargate-uae
16. G42, "5GW UAE-US AI Campus". https://www.g42.ai/resources/news/g42-lead-consortium-us-partners-build-5gw-uae-us-ai-campus
17. IMDA Singapore, "Enterprise Compute Initiative", 2025-02. https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/sg-ramps-up-ai-push-to-turn-digital-ambition-into-real-world-impact
18. IMDA, AI overview. https://www.imda.gov.sg/about-imda/emerging-technologies-and-research/artificial-intelligence
19. NVIDIA IR, "South Korea AI Infrastructure", 2025-10. https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx
20. NVIDIA Newsroom 한국 파트너십. https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure

### L2 — 통신사·전문매체
21. 전자신문, "국가AI컴퓨팅센터 유찰 후폭풍", 2025-06-02. https://www.etnews.com/20250602000212
22. ZDNet Korea, "국가AI컴퓨팅센터 또 유찰", 2025-06-13. https://zdnet.co.kr/view/?no=20250613175042
23. ZDNet Korea, "3차 공모 조건 완화", 2025-08-12. https://zdnet.co.kr/view/?no=20250812095806
24. ZDNet Korea, "삼성SDS 단독 응찰", 2025-10-21. https://zdnet.co.kr/view/?no=20251021174137
25. ZDNet Korea, "2조원 GPU 확충 닻 올렸다", 2026-03-12. https://zdnet.co.kr/view/?no=20260312182846
26. 디일렉, "GPU 5만장 국가AI센터 재추진". https://www.thelec.kr/news/articleView.html?idxno=40465

### L3 — 종합지·경제지
27. 한국경제, "두번 유찰 국가 AI컴퓨팅센터 민간 참여 걸림돌 완화", 2025-08-11. https://www.hankyung.com/article/2025081141521
28. 파이낸셜뉴스, "삼성SDS 단독 입찰", 2025-10-21. https://www.fnnews.com/news/202510212132160636
29. 비즈한국, "2.5조 규모 국가 AI컴퓨팅센터, 아무도 응찰 안 한 결정적 이유". https://www.bizhankook.com/bk/article/30133
30. 비즈한국, "AI 데이터센터 특별법 국회 통과… '규제 없는 진흥' 괜찮을까". https://www.bizhankook.com/bk/article/32198
31. 서울경제(이보형), "AI 후폭풍 '에너지'…넛지 정책". https://www.sedaily.com/article/20042118
32. 아시아경제, "GPU 늘었는데 국가대표AI 모두 살릴 순 없나", 2025-11-21. https://www.asiae.co.kr/article/2025112107213208048
33. 아시아투데이, "국가 전력량 넘어 폭주하는 AI데이터센터", 2026-02-25. https://www.asiatoday.co.kr/kn/view.php?key=20260225010007633
34. 머니S, "허가 받아도 못 짓는다…님비 갈등", 2025-12-24. https://www.moneys.co.kr/article/2025122416275455769
35. 그린포스트코리아, "수도권 데이터센터 절반 지연·무산". https://www.greenpostkorea.co.kr/news/articleView.html?idxno=304741
36. 서울신문 글로벌 인사이트, "AI 데이터센터 확장 붐… 전력·물 지역 갈등", 2025-12-03. https://www.seoul.co.kr/news/international/insight-global/2025/12/03/20251203016001
37. e-focus, "데이터센터, 필수 인프라 vs 주민 반발 NIMBY". https://www.e-focus.co.kr/news/articleView.html?idxno=3001504
38. 전기신문 2026 신년기획, "AI 전력 전쟁이 시작됐다". https://www.electimes.com/news/articleView.html?idxno=363963
39. 뉴스프라임(이다연 칼럼), "AI 반도체 확보 논쟁과 초당적 협력". https://m.newsprime.co.kr/section_view.html?no=711077
40. MBC 뉴스데스크, "전파 신호등까지 등장한 데이터센터 갈등", 2025. https://imnews.imbc.com/replay/2025/nwdesk/article/6783597_36799.html
40-1. 서울경제 [기자의 눈], "AI판 국정자원 사태 막아야", 2025-10-21. https://www.sedaily.com/NewsView/2GZ9K28459
40-2. 서울경제, "예고된 실패…국가AI컴퓨팅센터 응찰 '0'", 2025-05-30. https://www.sedaily.com/NewsView/2GSZZY1YLK
40-3. 디지털데일리 [국가AI컴퓨팅센터 점검 ⑤], "사업자는 최소 2045년까지, 정부는 언제든 청산 가능?", 2025-03-24. https://m.ddaily.co.kr/page/view/2025032413492939867
40-4. 경향신문, "AI산업 집적화 필요한데 오히려 분산", 2025-10-23. https://www.khan.co.kr/article/202510231440001
40-5. 전자신문/ZDNet/아시아경제, 국가AI컴퓨팅센터 협약 체결 보도, 2026-05-11 (industry 산출물 경유). 컨소시엄 9개사 / 4,000억 출자 / 지분 30·29·26·4·3·1%.
40-6. 한국경제, 솔라시도 데이터센터파크 1GW MoU(삼성E&A·보성산업), 2023-08-24.
40-7. 디일렉, "재공모 시 정부 매수청구권 조항 제거", 2025-09. (industry 산출물 경유)
40-8. NVIDIA IR(APEC 2025-10-31), 한국 전체 GPU 26만장+ / $9.8B / Blackwell 13,000장 초기 배치. https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-South-Korea-Government-and-Industrial-Giants-Build-AI-Infrastructure-and-Ecosystem-to-Fuel-Korea-Innovation-Industries-and-Jobs/default.aspx
40-9. KED Global, 한국 GPU 보유 미·중에 이어 3위 진입 분석.
40-10. 전자신문, GPU 모델 다양성(NVIDIA Blackwell/H100/H200/B200/B300, AMD MI, 국산 NPU 탑재 가능), 2025-04-01.
40-11. 한국경제, 1엑사플롭스 목표(FP 정밀도 명시 없음 → BF16 추정), 2025-02-07.
40-12. 서울경제, 삼성SDS 이준희 대표 "2029년 개소" 발언, CES 2026(2026-01).
40-13. 과학기술정보통신부, AI 기본법 시행 안내. https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3185321
40-14. 법률신문, AI 기본법 분석. https://www.lawtimes.co.kr/LawFirm-NewsLetter/204816
40-15. 신&김 뉴스레터, AI 기본법 vs EU AI Act. https://www.shinkim.com/kor/media/newsletter/2666
40-16. 성균관법학(KCI) "AI 규제 입법의 문제점에 대한 검토 - EU AI Act와 한국의 AI기본법간 비교, 분석을 중심으로". https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003193769
40-17. 한국법제연구원, EU AI Act 특성과 쟁점. https://klri.re.kr/Platform/data/e8aec885-b0e8-4ac3-bf27-7a9d57be3f8b/99cfe817-e5dc-4074-933d-204e87aa235f
40-18. 국가미래연구원, EU AI Act 시사점. https://www.ifs.or.kr/bbs/board.php?bo_table=research&wr_id=10908
40-19. SPRi, EU AI Act 보고서. https://www.spri.kr/download/23545
40-20. 전기신문 칼럼, "엔비디아 GPU 26만장…기술 독립·효율 분배 과제". https://www.electimes.com/news/articleView.html?idxno=361388
40-21. 전자신문, APEC NVIDIA 파트너십 보도, 2025-10-31. https://www.etnews.com/20251031000349
40-22. NVIDIA Blog Korea, 한·NVIDIA AI 인프라 협력. https://blogs.nvidia.co.kr/blog/korea-ai-apec-ceo-summit/
40-23. The Korea Times, "Korea accepts 1st batch of Nvidia GPUs", 2025-12-01. https://www.koreatimes.co.kr/business/tech-science/20251201/korea-accepts-1st-batch-of-nvidia-gpus-under-large-scale-ai-infrastructure-plan
40-24. KMJournal, "GPU는 충분해졌는데 답은 아직". https://www.kmjournal.net/news/articleView.html?idxno=7043
40-25. 정책브리핑, "정부 확보 GPU 1만장 산·학·연에 푼다". https://www.korea.kr/news/policyNewsView.do?newsId=148956711
40-26. Artificial Intelligence News, "NVIDIA and South Korea align on sovereign AI at APEC". https://www.artificialintelligence-news.com/news/nvidia-and-south-korea-align-on-sovereign-ai-at-apec-summit/

### L4 — 해외 매체
41. CNN Business, "Stargate $500B AI investment", 2025-01-21. https://www.cnn.com/2025/01/21/tech/openai-oracle-softbank-trump-ai-investment
42. CNBC, "OpenAI's first Stargate Texas data center", 2025-09-23. https://www.cnbc.com/2025/09/23/openai-first-data-center-in-500-billion-stargate-project-up-in-texas.html
43. CNBC, "Saudi AI firm Humain billions into data centers", 2025-08-27. https://www.cnbc.com/2025/08/27/saudi-arabia-wants-to-be-worlds-third-largest-ai-provider-humain.html
44. CNBC, "Musk's xAI first customer for Nvidia-backed Saudi data center", 2025-11-19. https://www.cnbc.com/2025/11/19/musks-xai-will-be-customer-for-nvidia-data-center-in-saudi-arabia.html
45. The Decoder, "Stargate $500B reportedly stalls". https://the-decoder.com/stargates-500-billion-ai-infrastructure-project-reportedly-stalls-over-unresolved-disputes-between-openai-oracle-and-softbank/
46. Data Center Dynamics, "Saudi Arabian AI venture Humain buys 18,000 GB300". https://www.datacenterdynamics.com/en/news/saudi-arabian-ai-venture-humain-buys-18000-nvidia-gb300-chips-several-hundred-thousand-more-on-the-way/
47. Data Center Dynamics, "US-UAE 5GW AI data center campus". https://www.datacenterdynamics.com/en/news/us-and-uae-plan-to-build-5gw-ai-data-center-campus-run-by-g42-and-american-hyperscalers/
48. The National, "Stargate UAE Q3 2026 first phase", 2025-12-05. https://www.thenationalnews.com/business/2025/12/05/stargate-uaes-first-phase-to-be-completed-in-third-quarter-of-2026/
49. The National, "Khazna 1GW Stargate UAE", 2025-10-16. https://www.thenationalnews.com/business/2025/10/16/g42-unit-khazna-targets-full-build-out-of-1gw-stargate-uae-project-in-three-years/
50. Nikkei Asia, "Taiwan sovereign AI data center". (paywall, https://asia.nikkei.com/business/technology/taiwan-opens-sovereign-ai-data-center-with-nvidia-powered-supercomputer)
51. HPCwire, "Isambard-AI launched", 2025-07-17. https://www.hpcwire.com/2025/07/17/isambard-ai-the-uks-most-powerful-supercomputer-is-officially-launched/
52. The Quantum Insider, "Taiwan's NCHC NVIDIA supercomputer", 2025-05-20. https://thequantuminsider.com/2025/05/20/taiwans-nchc-to-launch-nvidia-powered-supercomputer-supporting-quantum-research/
53. Asia Times, "Inside Japan's struggle to build sovereign AI", 2025-09. https://asiatimes.com/2025/09/inside-japans-struggle-to-build-sovereign-ai/
54. NVIDIA Blog, "Korea AI APEC CEO Summit", 2025-10. https://blogs.nvidia.com/blog/korea-ai-apec-ceo-summit/
55. NVIDIA Blog, "Every country needs sovereign AI" (Huang at World Gov Summit). https://blogs.nvidia.com/blog/world-governments-summit/
56. NVIDIA Blog, "Japan ABCI 3.0 sovereign AI". https://blogs.nvidia.com/blog/abci-aist/
57. Digital Watch Observatory, "UAE AI megaproject US chip export concerns". https://dig.watch/updates/uae-ai-megaproject-faces-us-chip-export-concerns
58. New Lines Institute, "U.S.-UAE AI Cooperation Future Trajectories". https://newlinesinstitute.org/tech-econ-sov-sec/u-s-uae-ai-cooperation-future-trajectories/
59. William Fry, "Europe's €200B Digital Sovereignty Plan". https://www.williamfry.com/knowledge/europes-ai-ambitions-inside-the-eus-e200-billion-digital-sovereignty-plan/
60. ABI Research, "Huang's Sovereign AI Tour at VivaTech 2025". https://www.abiresearch.com/blog/jensen-huangs-global-sovereign-ai-tour-lands-in-paris-at-vivatech-2025-bringing-nvidia-gtc-and-renewed-optimism-for-the-ai-ecosystem

### L5 — 학술·전문 리포트
61. arXiv 2411.09134, "ABCI 3.0: Evolution of the leading AI infrastructure in Japan". https://arxiv.org/abs/2411.09134
62. KISDI Perspectives, "한국 AI 정책 현황 및 발전 방안", 2025-09 No.2. https://www.kisdi.re.kr/report/fileView.do?key=m2102058837181&arrMasterId=4334696&id=1875076
63. KISDI STAT Report, 2025-08. http://www.kisdi.re.kr/report/fileView.do?key=m2101113025790&arrMasterId=4333447&id=1872156
64. KISDI, "인공지능과 사이버보안". https://www.kisdi.re.kr/report/fileView.do?key=m2101113025377&arrMasterId=4333446&id=1873056
65. KISTEP, "AI로 인한 전력 수요의 폭발적 증가와 대응방안". https://www.kistep.re.kr/boardDownload.es?bid=0031&list_no=94190&seq=1
66. 한국IDC, "국내 데이터센터 전력 수요 2028년까지 연평균 11%". https://my.idc.com/getdoc.jsp?containerId=prAP53643725
67. GlobalICT(싱가포르 국가 보고서). http://globalict.kr/upload_file/kms/202509/48158108623827117.pdf
68. NCHC Taiwan, Supercomputer page. https://www.nchc.org.tw/Page?itemid=58&mid=109

### 시민사회 성명
69. 참여연대, "[성명] 기후위기·환경 부담 확대하는 'AI 데이터센터 특별법' 반대한다". https://peoplepower21.org/solidarity/2020404
70. 참여연대, "[성명] 기후부담 가중하는 화석연료 'AI 데이터센터 특별법안' 폐기하라". https://peoplepower21.org/solidarity/2020321
71. 녹색연합, "재생에너지·지산지소 원칙 없는 AI 데이터센터 특별법 반대 기자회견". https://www.greenkorea.org/activity/weather-change/climatechangeacction-climate-change/117403/
72. 녹색연합, "AI 핑계 핵발전 확대 시도, 데이터센터 특별법 즉각 폐기하라". https://www.greenkorea.org/activity/energy-conversion/nuclear/117877/
73. 한국NGO신문, "41개 시민사회단체 'AI 데이터센터 특별법 반대'". https://www.ngonews.kr/news/articleView.html?idxno=228274
74. 한국NGO신문, "기후·환경·시민사회단체, AI 데이터센터 특별법 추진 중단 촉구". https://www.ngonews.kr/news/articleView.html?idxno=227337
75. 그린피스 한국, 새 정부 기후위기 대응 촉구 성명, 2025. https://www.greenpeace.org/korea/press/34274/presidential-election_reactive_2025/

### 기타 / 산업계 가이드
76. 엑스디노드, "GPU 품귀 현상 2026 수급". https://www.xdnode.co.kr/insight/articles/gpu-shortage-2026-ai-procurement-strategy
77. 엑스디노드, "GPU 전쟁의 서막: 한국 정부 23.7조원". https://www.xdnode.co.kr/guide/?bmode=view&idx=168317204
78. KMJournal, "GPU는 쌓였는데 사람이 없다". https://www.kmjournal.net/news/articleView.html?idxno=7040

---

## 변경 이력
| 날짜 | 변경 내용 | 사유 |
|---|---|---|
| 2026-05-11 | 초기 작성 — 9개국 비교 + 시민사회 + 쟁점 5축 | 팀 출범 1차 라운드 |
| 2026-05-11 | §1 매트릭스에 한국 행 추가 / §2.8.5 한국 정치·거버넌스 맥락 신설 / §6.4.5 거버넌스·규제 동시성 쟁점 추가 / §7 시사점 #6·#7 추가 | policy 산출물 수신(2025-09 거버넌스 개편·AI 기본법 2026-01-22 시행·정권 3대 연속성) |
| 2026-05-11 | §4.3.5 심층 기명 칼럼·기자 논평 5건 신설(서울경제×2·디지털데일리·비즈한국·경향신문) / §6.1 사업성 쟁점 3건 추가(역마진·비대칭 리스크·DR 배점) / §8 출처 5건 추가 | press 산출물 수신 — 비판/심층 칼럼 5건 |
| 2026-05-11 | §1 매트릭스 한국 행 정밀화(9개사 컨소시엄·출자 구조·2026-05-11 협약·1 EF BF16 추정으로 1.4 EF 정정) / §2.8.5 입지(솔라시도 1GW·태양광 98MW+ESS 306MWh)·GPU 다양성·일정 추가 / §8 출처 8건 추가 | industry 산출물 수신 — 2026-05-11 협약 기준 한국 최신 확정 수치 |
| 2026-05-11 | §2.8.5 AI 기본법 vs EU AI Act 비교표(위험 분류·FLOPs 임계·규제 철학) / §3.3 학술논문·로펌 분석 신설(KCI 성균관법학·한국법제연구원·IFS·SPRi) / §4.3.6 NVIDIA 종속·공급망 단일화 비판 신설 / §8 출처 14건 추가 | press 2차 수신 — AI 기본법·APEC 26만장·전기신문 NVIDIA 종속 비판 |
