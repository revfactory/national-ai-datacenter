---
name: web-research
description: "한국어/영어 웹에서 출처 기반 리서치를 수행하는 공통 스킬. 정부 발표·언론 기사·학술 자료·기업 IR을 체계적으로 검색하고, 모든 사실에 인용·URL·발행일을 병기하는 인용 위주(citation-first) 방법론을 강제한다. 국가AI데이터센터·정책 조사·시계열 정리·매체 비교 등 출처 추적이 핵심인 모든 리서치 작업에 반드시 이 스킬을 사용할 것."
---

# Web Research — 출처 기반 리서치 공통 스킬

리서처 에이전트들이 공통으로 따르는 웹 리서치 방법론. 인용·검증·시간 표기·균형의 4원칙을 강제한다.

## 4대 원칙

### 1. Citation-first (인용 위주)
- **모든 사실 진술에는 출처를 병기한다**. 출처 없는 단언은 작성하지 않는다
- 인용 형식: `한 줄 사실. (출처: 매체/문서명, YYYY-MM-DD, URL)`
- 핵심 진술은 원문 1문장을 따옴표로 직접 인용

### 2. 시간 표기 정밀성
- 모든 사건·발표·기사에 발행일(가능하면 YYYY-MM-DD)을 기록
- 발표일과 보도일을 구분 (예: "정부 발표 2024-03-15, 한국경제 보도 2024-03-16")
- 시기별 변화가 있는 수치(예산·GPU 수량 등)는 시계열로 모두 기록

### 3. 출처 다층화
한 가지 매체에 의존하지 말고 다음 계층을 모두 시도한다:

| 계층 | 종류 | 예시 |
|------|------|------|
| **L1: 1차 출처** | 정부·기업 공식 발표, 법령, IR 자료, 공시 | korea.kr, msit.go.kr, 기업 newsroom, DART 공시 |
| **L2: 통신사·전문매체** | 연합뉴스, 뉴시스, 전자신문, 디지털타임스 | yna.co.kr, etnews.com |
| **L3: 종합지·경제지** | 조선/중앙/동아/한겨레/한경/매경 | chosun.com, mk.co.kr |
| **L4: 해외 매체** | Reuters, Bloomberg, FT, MIT Tech Review | reuters.com 등 |
| **L5: 학술·전문 리포트** | KAIST·KISDI·OECD·IEA 리포트, arXiv | kisdi.re.kr, oecd.org |

수치·핵심 사실은 가능한 한 L1, 보도 흐름은 L2~L3, 비교/맥락은 L4~L5를 활용한다.

### 4. 균형성
- 찬성/반대/중립 시각을 함께 수집한다. 한쪽 입장만 인용하지 않는다
- 동일 사실에 대한 매체 간 수치/해석 차이는 모두 기록하고 차이를 명시한다
- 광고성·PR성 콘텐츠는 "보도자료 전재", "기업 주장"으로 마킹한다

## 검색 패턴 가이드

### 기본 검색 절차

1. **정부 공식 채널 우선 검색**
   - WebSearch: `"국가AI데이터센터" site:korea.kr OR site:msit.go.kr OR site:nia.or.kr OR site:nipa.kr`
   - 발견된 문서명·발표일을 기록한 뒤 다음 단계로 확장

2. **시기별 키워드 변형**
   - 동의어 사용: "국가AI데이터센터", "국가 AI 데이터센터", "AI 컴퓨팅 센터", "AI 인프라", "공공 AI 데이터센터", "AI 슈퍼컴퓨팅 센터"
   - 영문 검색: "National AI Data Center Korea", "Korea AI infrastructure", "Korea sovereign AI"
   - 시기 한정: 발표 추정 시점 ±3개월

3. **매체 분산 검색**
   - 종합지: `site:chosun.com OR site:hani.co.kr OR site:donga.com OR site:khan.co.kr OR site:joongang.co.kr`
   - 경제지: `site:mk.co.kr OR site:hankyung.com OR site:sedaily.com OR site:fnnews.com`
   - IT 전문지: `site:etnews.com OR site:dt.co.kr OR site:zdnet.co.kr OR site:inews24.com OR site:bloter.net`

4. **기업·기술 출처**
   - 기업 newsroom: `site:samsung.com/newsroom OR site:nvidia.com/blog OR site:kt.com/news`
   - IR/공시: DART(dart.fss.or.kr), 분기 실적 발표 자료

5. **국제 비교 출처**
   - Stargate, NAIRR, AI Factory, GENIAC, ABCI 등 프로그램명으로 검색
   - 영문: `"National AI infrastructure" Japan OR EU OR UK OR Saudi`

### WebFetch 활용
- 검색 결과의 핵심 기사·발표문은 WebFetch로 본문 확보 후 인용
- 본문에서 핵심 문장은 그대로 따옴표 인용, 의역은 금지
- WebFetch 실패 시 검색 결과의 스니펫만으로 채우지 말고 다른 출처로 보강

## 출력 표기 규칙

### 사실 인용 형식
```markdown
- 정부는 2026년까지 H100 환산 8,000장 규모의 GPU를 도입할 계획이다.
  (출처: 과학기술정보통신부 보도자료, 2024-04-15, https://www.msit.go.kr/.../press/12345.html)
```

### 매체 간 차이 표기
```markdown
- 총 사업비 규모는 매체별로 다음과 같이 보도되었다:
  - 한국경제 (2024-05-02): 약 1조 8천억 원 (URL)
  - 전자신문 (2024-05-03): 1조 2천억 원 ~ 2조 원 사이로 추정 (URL)
  - 정부 공식 발표 (2024-04-15): 구체 액수 미공개 (URL)
```

### 추정·미확정 표기
```markdown
- GPU 수량: **추정** 약 10,000장 (전자신문 2024-05-12 보도 / 정부 공식 발표 없음)
- 운영 주체: **검토 단계** — 컨소시엄 구성 협의 중 (정부 발표, 2024-04-15)
```

### 출처 목록 (문서 하단 필수)
모든 산출 문서 마지막에 인용된 모든 URL을 목록화한다:
```markdown
## 출처 목록
1. 과학기술정보통신부, "국가 AI 컴퓨팅 인프라 추진계획", 2024-04-15. https://...
2. 한국경제, "정부, AI 데이터센터 1.8조 투입", 2024-05-02. https://...
...
```

## 금지 사항

- 출처 없는 단언 ("업계에서는", "알려진 바에 따르면" 같은 무출처 표현)
- 한 가지 매체에 의존한 결론
- 광고성 기사를 일반 보도로 표기
- 영문 자료의 의역만 제시하고 원문을 누락
- 검색 실패를 추측으로 메우는 행위

## 팀 작업과의 연계

- 발견한 사실 중 다른 리서처의 영역과 교차하는 것은 즉시 `SendMessage`로 공유
- 동일 사실의 출처가 매체별로 다르면 팀 채널에 알리고 교차 검증
- 산출물에는 다른 리서처의 분담 영역과 중복되는 내용을 깊게 다루지 않는다. 대신 `→ {agent-name} 참조` 포인터를 남긴다
