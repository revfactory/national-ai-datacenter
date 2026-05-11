---
name: national-ai-datacenter-research
description: "국가AI데이터센터(National AI Data Center) 관련 정책·언론보도·산업기술·국제비교를 4명 리서처 에이전트 팀으로 동시 조사하고 종합 보고서를 생성하는 오케스트레이터 스킬. 트리거: '국가AI데이터센터', '국가 AI 데이터센터', 'AI 인프라 정책 조사', 'AI 컴퓨팅 센터', '국가형 AI 인프라', '언론 보도자료 정리', 'AI 데이터센터 보도 정리', '관련 보도자료 정리'. 후속 작업: 재실행, 업데이트, 보완, 수정, 부분 재실행, '정책 부분만 다시', '최신 보도 추가', '이전 결과 개선', '특정 시기 보강' 등 요청 시에도 반드시 이 스킬을 사용. 단순 단일 질문(예: '국가AI데이터센터가 뭐야?')은 이 스킬을 트리거하지 않고 직접 답변."
---

# National AI Data Center Research Orchestrator

국가AI데이터센터에 대한 종합 조사 보고서를 생성하는 통합 스킬. 4명 리서처 에이전트 팀이 정책/언론/산업기술/국제맥락을 병렬 조사하고 통합한다.

## 실행 모드: 에이전트 팀 (팬아웃/팬인)

## 에이전트 구성

| 팀원 | 에이전트 타입 | 역할 | 스킬 | 출력 |
|------|-------------|------|------|------|
| policy-researcher | general-purpose | 정부 정책·공식 발표·법령·예산 | web-research | `_workspace/01_policy_official.md` |
| press-researcher | general-purpose | 언론 보도·시계열·매체별 논조 | web-research | `_workspace/02_press_coverage.md` |
| industry-tech-researcher | general-purpose | 인프라 사양·참여 기업·산업 영향 | web-research | `_workspace/03_industry_tech.md` |
| context-researcher | general-purpose | 국제 비교·전문가 분석·쟁점 | web-research | `_workspace/04_context_global.md` |
| (리더 = 오케스트레이터) | — | 통합 보고서 생성 | — | `국가AI데이터센터_종합보고서.md` |

> 모든 Agent 호출 시 `model: "opus"` 명시. 빌트인 `general-purpose` 타입을 사용하되 에이전트 정의 파일을 통해 역할과 통신 프로토콜을 부여한다.

## 워크플로우

### Phase 0: 컨텍스트 확인 (후속 작업 지원)

작업 시작 시 다음을 확인하여 실행 모드를 결정한다:

1. 작업 디렉토리 하위의 `_workspace/` 존재 여부
2. 분기:
   - **미존재** → **초기 실행**. Phase 1로 진행
   - **존재 + 사용자가 "부분 수정/업데이트/보완" 요청** → **부분 재실행**
     - 수정 대상 에이전트만 재호출
     - 이전 산출물 경로를 에이전트 프롬프트에 포함 → 에이전트가 Read 후 보강
     - 다른 에이전트의 산출물은 그대로 보존
   - **존재 + 새 입력/완전 새 실행 요청** → **새 실행**
     - 기존 `_workspace/`를 `_workspace_{YYYYMMDD_HHMMSS}/`로 mv 후 새 `_workspace/` 생성
3. 결정된 모드와 영향 받는 에이전트를 사용자에게 한 줄 보고 후 진행

### Phase 1: 준비

1. 사용자 입력 분석:
   - 조사 범위 (전체 / 정책 중심 / 보도 중심 / 산업 중심 / 국제 비교 중심)
   - 시기 범위 (특별 지정이 없으면 정부 첫 공식 발표 이후 ~ 현재)
   - 출력 위치 (특별 지정이 없으면 작업 디렉토리)
2. `_workspace/` 디렉토리 생성 (초기 실행 시) 또는 보관 후 재생성 (새 실행 시)
3. `_workspace/00_input/brief.md`에 분석된 입력 요약 저장

### Phase 2: 팀 구성

1. **팀 생성**:
   ```
   TeamCreate(
     team_name: "ai-datacenter-research-team",
     members: [
       {
         name: "policy",
         agent_type: "general-purpose",
         model: "opus",
         prompt: "당신은 .claude/agents/policy-researcher.md 의 정의를 따르는 정책 리서처입니다.
                  국가AI데이터센터 관련 정부 공식 정책·발표·예산·법령을 조사하고
                  _workspace/01_policy_official.md 에 저장하십시오.
                  web-research 스킬의 4대 원칙(인용·시간·다층·균형)을 반드시 준수하십시오."
       },
       {
         name: "press",
         agent_type: "general-purpose",
         model: "opus",
         prompt: "당신은 .claude/agents/press-researcher.md 의 정의를 따르는 언론 보도 리서처입니다.
                  종합지·경제지·IT 전문매체·통신사 보도를 시계열·매체별로 정리하고
                  _workspace/02_press_coverage.md 에 저장하십시오."
       },
       {
         name: "industry",
         agent_type: "general-purpose",
         model: "opus",
         prompt: "당신은 .claude/agents/industry-tech-researcher.md 의 정의를 따르는 산업·기술 리서처입니다.
                  인프라 사양·참여 기업·공급망·산업 영향을 조사하고
                  _workspace/03_industry_tech.md 에 저장하십시오."
       },
       {
         name: "context",
         agent_type: "general-purpose",
         model: "opus",
         prompt: "당신은 .claude/agents/context-researcher.md 의 정의를 따르는 맥락·국제 비교 리서처입니다.
                  미국 Stargate, EU AI Factory, 일본 GENIAC 등 국제 사례와 전문가 의견·쟁점을 정리하고
                  _workspace/04_context_global.md 에 저장하십시오."
       }
     ]
   )
   ```

2. **작업 등록**:
   ```
   TaskCreate(tasks: [
     { title: "정책·공식 채널 조사", description: "정부 부처 발표, 예산, 법령, 추진 일정", assignee: "policy" },
     { title: "언론 보도 정리",       description: "시계열·매체별 논조 비교", assignee: "press" },
     { title: "산업·기술 조사",        description: "인프라 사양, 참여 기업, 산업 영향", assignee: "industry" },
     { title: "국제 비교·맥락 조사",   description: "해외 사례, 전문가 분석, 쟁점", assignee: "context" }
   ])
   ```

### Phase 3: 병렬 조사 (자체 조율)

**실행 방식:** 팀원들이 자체 조율

- 4명 팀원이 공유 작업 목록에서 작업을 요청(claim)하고 독립적으로 수행
- 진행 중 발견한 교차 영역 정보는 `SendMessage`로 직접 공유:

**예상 통신 경로:**
```
policy ──→ press      : 공식 발표 일자/문서명 공유 (보도 시점 매칭)
policy ──→ industry   : 정부가 명시한 사양·운영 주체 공유
press  ──→ industry   : 기업 관련 보도 URL 공유
press  ──→ context    : 비판적 기명 칼럼·전문가 인터뷰 공유
industry ──→ context  : 인프라 수치 공유 (국제 비교 정밀화)
context ──→ industry  : 해외 유사 인프라 수치 공유
```

**상충 정보 처리:** 매체·발표 간 수치/일정 차이가 발견되면
- 양쪽 출처를 모두 기록 (삭제하지 않음)
- 팀 채널에 알려 교차 검증

**리더 모니터링:**
- `TaskGet`으로 진행률 확인
- 팀원 유휴 알림 수신 시 진척 상태 점검
- 막힌 팀원에게 `SendMessage`로 조언 또는 검색 키워드 제공

### Phase 4: 통합 보고서 생성

1. 모든 팀원 작업 완료 대기 (`TaskGet` 으로 4개 작업 status=completed 확인)
2. 4개 산출물 Read:
   - `_workspace/01_policy_official.md`
   - `_workspace/02_press_coverage.md`
   - `_workspace/03_industry_tech.md`
   - `_workspace/04_context_global.md`
3. 종합 보고서 작성:

```markdown
# 국가AI데이터센터 종합 보고서

작성일: {YYYY-MM-DD}
조사 범위: {시기/주제}

## Executive Summary
- 정책 개요 (3~5줄)
- 인프라 규모 핵심 수치
- 보도 흐름 요약
- 국제 비교 요약
- 주요 쟁점

## 1. 정책·공식 발표 (출처: policy-researcher)
{01_policy_official.md 핵심 요약 + 인용. 상세는 부록 A 참조}

## 2. 언론 보도 흐름 (출처: press-researcher)
{시계열 타임라인, 매체별 논조 비교 요약}

## 3. 인프라 사양과 산업 영향 (출처: industry-tech-researcher)
{사양 표, 참여 기업 표, 산업 영향 요약}

## 4. 국제 비교와 전문가 분석 (출처: context-researcher)
{국제 비교 매트릭스, 쟁점 요약, 균형 시각}

## 5. 교차 분석 및 핵심 발견
- 정부 발표와 언론 보도의 일치/불일치 사항
- 정부와 기업 IR 간 수치 차이
- 국내 발표와 국제 사례 간 비교 시사점
- 매체 간 논조 차이가 두드러진 쟁점

## 6. 미해결 질문 및 추가 조사 필요 영역

## 7. 출처 통합 인덱스
(4개 분야 산출물의 출처 URL 전체 목록)

## 부록
- A. 정책·공식 발표 상세 (`_workspace/01_policy_official.md` 전체)
- B. 언론 보도 상세 (`_workspace/02_press_coverage.md` 전체)
- C. 산업·기술 상세 (`_workspace/03_industry_tech.md` 전체)
- D. 국제 비교·맥락 상세 (`_workspace/04_context_global.md` 전체)
```

4. 최종 산출물 저장: `국가AI데이터센터_종합보고서_{YYYYMMDD}.md`
5. 상충 데이터는 출처 병기로 모두 기록 (삭제하지 않음)

### Phase 5: 정리

1. 팀원들에게 종료 메시지 (`SendMessage`)
2. `TeamDelete` 로 팀 정리
3. `_workspace/` 보존 (사후 검증·감사 추적용)
4. 사용자 보고:
   - 최종 산출물 경로
   - 4개 분야 핵심 발견 1~2줄씩
   - 미해결 질문 / 추가 조사 권고 사항
   - **피드백 요청**: "결과에서 개선할 부분이나 추가 조사가 필요한 영역이 있나요?"

## 데이터 흐름

```
[리더] ─ TeamCreate ─→ [policy] ←SendMessage→ [press]
                          │                       │
                          ↓                       ↓
                  01_policy_official.md  02_press_coverage.md
                          │                       │
                          ↕  SendMessage  ↕
                          ↓                       ↓
                       [industry] ←SendMessage→ [context]
                          │                       │
                          ↓                       ↓
                  03_industry_tech.md   04_context_global.md
                          │                       │
                          └─────── Read ──────────┘
                                   ↓
                          [리더: 통합 보고서 생성]
                                   ↓
                  국가AI데이터센터_종합보고서_{YYYYMMDD}.md
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 팀원 1명이 정보 부족으로 미완 | 해당 영역을 "정보 부족" 명시 + 다른 팀원의 관련 자료로 부분 보완. 보고서에 누락 영역 명시 |
| 팀원 1명 실패/중지 | 1회 재시도. 재실패 시 부분 결과만 수집, 누락 명시 후 진행 |
| 팀원 2명 이상 실패 | 사용자에게 알리고 진행 여부 확인 |
| 출처 간 수치 충돌 | 양쪽 출처 모두 기록. 차이를 "교차 분석" 섹션에 명시 |
| WebSearch 결과 부족 | web-research 스킬의 다층 출처 가이드에 따라 site: 한정 검색 추가 시도 |
| 영문 자료 번역 시 의미 손실 | 원문 1문장 + 한국어 의역 병기 (web-research 규칙) |
| 타임아웃 | 현재까지 수집된 부분 결과로 통합. 미완료 영역 명시 |
| 팀원 간 데이터 충돌 | 출처를 명시한 채 모두 기록. 삭제하지 않음 |

## 테스트 시나리오

### 정상 흐름
1. 사용자: "국가AI데이터센터에 대해 조사하고 정리해줘"
2. Phase 0: `_workspace/` 없음 → 초기 실행
3. Phase 1: 입력 분석 (범위: 전체) → `_workspace/00_input/brief.md` 생성
4. Phase 2: 4명 팀 구성 + 4개 작업 등록
5. Phase 3: 4명 병렬 조사, 상호 SendMessage로 정보 공유
6. Phase 4: 4개 산출물 통합 → 종합 보고서 생성
7. Phase 5: 팀 정리, 결과 보고
8. 예상 결과: `국가AI데이터센터_종합보고서_{YYYYMMDD}.md` 생성 (Executive Summary + 5개 본문 섹션 + 부록 A~D + 통합 출처 인덱스)

### 후속 작업 흐름
1. 사용자: "최근 보도만 추가로 보완해줘"
2. Phase 0: `_workspace/` 존재 + 부분 수정 요청 → **부분 재실행**
3. press-researcher만 재호출 (이전 산출물 경로를 프롬프트에 포함)
4. press가 시계열 마지막 시점 이후 기사만 추가
5. Phase 4: 갱신된 `02_press_coverage.md`를 포함하여 종합 보고서 재생성
6. 보고서 변경 이력 섹션에 갱신일·변경 요약 추가

### 에러 흐름
1. Phase 3에서 context가 영문 자료 접근 부족으로 미완
2. 리더가 유휴 알림 수신
3. `SendMessage`로 상태 확인 → 검색 키워드 보강(예: "GENIAC Japan AI infrastructure", "EuroHPC AI Factory")
4. 재시도 실패 시 context의 "국제 비교" 영역만 "추가 자료 확보 필요"로 표기
5. Phase 4에서 부분 결과로 통합. 보고서에 "국제 비교 영역 일부 미수집" 명시
6. 사용자에게 누락 영역과 보강 가능성 안내
