/* =========================================================
 * National AI Data Center — Data Module
 * 출처: _workspace/01~04_*.md
 * ========================================================= */

window.SKAI_DATA = {

  /* ---------- TIMELINE ---------- */
  timeline: [
    {date:"2024-09-26", tag:"MAJOR", title:"최초 공식화", body:"국가AI위원회 출범식·1차 회의 — 「국가 AI 전략 정책방향」 + 4대 AI 플래그십 심의·의결. 골자 \"최대 2조 원·GPU 15배\".", cls:"go major"},
    {date:"2024-11-27", tag:"GO",    title:"첫 사업비·연도 명시", body:"「AI 혁신 생태계 조기구축 방안」 — 민관 4조 원(2030 누계).", cls:"go"},
    {date:"2025-01-22", tag:"MAJOR", title:"SPC 실행계획",   body:"2조 원, 공공 51%, 11월 서비스, 2027 개소 발표.", cls:"go major"},
    {date:"2025-02-17", tag:"NOTE",  title:"권한대행 발언",   body:"\"광대역 통신망의 IT 강국화에 비견되는 AI 인프라.\"", cls:""},
    {date:"2025-02-20", tag:"GO",    title:"제3차 국가AI위",  body:"GPU 1.8만 장(2026 상반기), 국산 NPU 50% 목표.", cls:"go"},
    {date:"2025-05-30", tag:"FAIL",  title:"1차 공모 유찰",   body:"응찰 0건. 서울경제 \"예고된 실패\" 헤드라인.", cls:"fail"},
    {date:"2025-06-13", tag:"FAIL",  title:"2차 공모 유찰",   body:"\"GPU 3만개 사업, 맡겠다는 사업자가 없다\"(경향).", cls:"fail"},
    {date:"2025-09-02", tag:"NOTE",  title:"국가AI전략위 개편", body:"이재명 정부, 대통령이 위원장.", cls:""},
    {date:"2025-09-08", tag:"WARN",  title:"재추진 실행계획",  body:"공공 30%↓, 매수청구권 삭제, 국산NPU 의무 폐지, GPU 5만 장.", cls:"warn"},
    {date:"2025-10-21", tag:"GO",    title:"삼성SDS 단독 응찰", body:"\"삼수 끝에\". 광주·해남 입지 논쟁 격화.", cls:"go"},
    {date:"2025-10-31", tag:"MAJOR", title:"NVIDIA 26만 장",   body:"APEC, $9.8B 공급 약속. 정부분 5만 장.", cls:"go major"},
    {date:"2025-12-12", tag:"NOTE",  title:"2026 업무계획",    body:"AI 예산 10조 원, 2030 GPU 26만 장(민간 포함).", cls:""},
    {date:"2026-03-10", tag:"MAJOR", title:"우선협상자 선정",  body:"삼성SDS 컨소, 입지 해남 솔라시도, 2028 완공.", cls:"go major"},
    {date:"2026-01-22", tag:"GO",    title:"AI 기본법 시행",  body:"EU 다음 세계 2번째 포괄 AI 법.", cls:"go"},
    {date:"2026-04-14", tag:"GO",    title:"AIDC 특별법 과방위", body:"통합 인허가 · 비수도권 계통영향평가 면제.", cls:"go"},
    {date:"2026-05-07", tag:"MAJOR", title:"AIDC 특별법 통과", body:"본회의 통과(6개 법안 병합), 2027-02 시행.", cls:"go major"},
    {date:"2026-05-11", tag:"FINAL", title:"최종 사업자 확정", body:"실시협약 체결. 공공 29% / 민간 71% / 초기 4,000억.", cls:"go major"},
  ],

  /* ---------- SPC SHARES (final 2026-05) ---------- */
  spcShares: [
    {name:"삼성SDS",            value:30, color:"#22ddee"},
    {name:"공공(정부 등)",        value:29, color:"#7a5cff"},
    {name:"네이버클라우드",        value:26, color:"#b366ff"},
    {name:"카카오",              value:4,  color:"#ff9966"},
    {name:"삼성물산",            value:4,  color:"#ff5d8f"},
    {name:"삼성전자",            value:3,  color:"#ffd357"},
    {name:"클러쉬(Clush)",       value:3,  color:"#3ad29f"},
    {name:"KT",                value:1,  color:"#ff8855"},
  ],

  /* ---------- NUMBER WATCH ---------- */
  watch: {
    cost: {
      label: "총사업비 (KRW)",
      rows: [
        {when:"2024-11-27", what:"민관 4조 (2030 누계)",     val:"4조원",       pct:100, tag:"init",   note:"AI 혁신 생태계 조기구축 방안"},
        {when:"2025-01-22", what:"SPC 실행계획",            val:"2조원",       pct:50,  tag:"init",   note:"정책금융 저리대출 2.5조 별도"},
        {when:"2025-02 →",  what:"한경 보도",                 val:"2조 5,000억", pct:62.5,tag:"news",   note:"한국경제 후속 단신"},
        {when:"2025-10 →",  what:"뉴스1 (해남)",              val:"2조 9,000억", pct:72.5,tag:"news",   note:"5만장 확장 포함 추정"},
        {when:"2026-05-11", what:"협약 체결",               val:"2조 5,000억", pct:62.5,tag:"final",  note:"전자신문·ZDNet 보도 기준"},
      ]
    },
    gpu: {
      label: "GPU 수량",
      rows: [
        {when:"2025-02-17", what:"권한대행 (H100급)",       val:"1만 장",    pct:20, tag:"init",  note:"연내 확보"},
        {when:"2025-02-20", what:"제3차 국가AI위",          val:"1.8만 장",  pct:36, tag:"init",  note:"2026 상반기"},
        {when:"2025-09-08", what:"재추진 실행계획 (장기)",   val:"5만 장",    pct:100,tag:"revise",note:"2030년 목표"},
        {when:"2025-10-31", what:"NVIDIA 정부분 (APEC)",   val:"5만 장",    pct:100,tag:"news", note:"Blackwell, 26만장 中 정부분"},
        {when:"2025-12-12", what:"2030 누계 (민간 포함)",    val:"26만 장",   pct:100,tag:"news", note:"민간 포함 전체"},
        {when:"2026-05-11", what:"1단계 협약",              val:"1만 5,000장", pct:30, tag:"final",note:"2028년까지 (H100 환산)"},
      ]
    },
    schedule: {
      label: "개소 일정",
      rows: [
        {when:"2025-01-22", what:"실행계획 발표",          val:"2027 개소",      pct:55, tag:"init",  note:"+ 11월 서비스 조기개시"},
        {when:"2025-02-17", what:"권한대행 발언",          val:"2025 개소",      pct:0,  tag:"news", note:"정치적 발언, 실현 안됨"},
        {when:"2026-01 CES",what:"삼성SDS 이준희 대표",     val:"2029 개소",      pct:90, tag:"news", note:"\"7월 착공\""},
        {when:"2026-03-10", what:"우선협상자 선정",        val:"2028 완공",      pct:80, tag:"revise",note:"1년 슬립"},
        {when:"2026-05-11", what:"협약 체결",             val:"2028 1단계 / 2030 최종", pct:100, tag:"final", note:"착공 2026 Q3"},
      ]
    },
    share: {
      label: "공공 지분 (SPC)",
      rows: [
        {when:"2025-01-22", what:"실행계획 발표",       val:"51%",     pct:100, tag:"init",  note:"공공 주도"},
        {when:"2025-09-08", what:"재추진 실행계획",     val:"30% 미만", pct:58,  tag:"revise", note:"민간 70%↑ 요구"},
        {when:"2026-05-11", what:"협약 체결",         val:"29%",     pct:56.8,tag:"final",  note:"단독 2대주주"},
      ]
    }
  },

  /* ---------- WORLD MATRIX ---------- */
  world: [
    {
      flag:"🇰🇷", name:"한국",    prog:"국가 AI컴퓨팅 센터",
      scale:"2.5조 원 · GPU 5만 장",
      power:"500MW(2030 추정) · 1GW 파크",
      ops:"민관 SPC (공공 29% / 민간 71%)",
      goal:"AI 3대 강국 · 2030",
      vs:"이 표의 기준점 — 상업·공공 두 목표를 한 SPC에 통합한 독자 설계",
      kr:true
    },
    {
      flag:"🇺🇸", name:"미국 Stargate", prog:"OpenAI + SoftBank + Oracle",
      scale:"$500B (4년) · 7~10GW",
      power:"멀티 GW · 텍사스/뉴멕시코/오하이오",
      ops:"100% 민간 · 정부는 인허가/전력만",
      goal:"미국 내 AI 우위 유지",
      vs:"한국 공공주도와 정반대 — 자본 100% 민간"
    },
    {
      flag:"🇺🇸", name:"미국 NAIRR", prog:"NSF + 28개 민간 파트너",
      scale:"NAIRR-OC 최대 $35M/5년",
      power:"학계 공동활용",
      ops:"NSF + 14개 연방기관",
      goal:"학계·공공 연구자 AI 접근권",
      vs:"한국은 상업+공공을 한 SPC에 통합. 미국은 두 트랙 분리."
    },
    {
      flag:"🇪🇺", name:"EU AI Factory",  prog:"EuroHPC JU",
      scale:"€800M (Digital Europe) · 19+13 거점",
      power:"국가별 매칭",
      ops:"회원국 컨소시엄 다거점",
      goal:"€200B 디지털 주권 플랜",
      vs:"단일 거점(해남) 집중 vs EU 분산 매칭형"
    },
    {
      flag:"🇯🇵", name:"일본 ABCI 3.0",  prog:"AIST / METI",
      scale:"360억엔 · H200 6,128장 · FP16 6.22 EF",
      power:"공공 R&D 인프라",
      ops:"100% 공공 (AIST)",
      goal:"학·산 공동 활용, 국산 LLM",
      vs:"100% 공공 R&D 모델 — 한국 민관 SPC와 대조"
    },
    {
      flag:"🇬🇧", name:"영국 Isambard-AI", prog:"BriCS · AIRR",
      scale:"£225M · GH200 5,400장 · 216 PFLOPS",
      power:"100% 무탄소 전력 · Green500 4위",
      ops:"Bristol Univ 공공 연구 인프라",
      goal:"공공 연구 우선 + 친환경 명시",
      vs:"한국 LNG PPA 허용 특별법과 정책 방향 정반대"
    },
    {
      flag:"🇸🇦", name:"사우디 HUMAIN", prog:"PIF (국부펀드)",
      scale:"5년 500MW · GB300 1.8만→60만 장",
      power:"500MW (5년)",
      ops:"100% 정부 자본 (PIF 자회사)",
      goal:"\"세계 3위 AI 공급자\" (Tareq Amin)",
      vs:"한국과 정반대 — 정부 100% · 첫 고객 xAI"
    },
    {
      flag:"🇦🇪", name:"UAE Stargate", prog:"G42 + OpenAI/Oracle/NVIDIA",
      scale:"5GW (1차 1GW) · GB300 3.5만 장",
      power:"5GW · 200MW 1차(2026 Q3 가동)",
      ops:"G42 시공 + OpenAI 운영 + US RTE 프레임",
      goal:"미국 동맹 sovereign compute 거점",
      vs:"GPU 수출통제(美 BIS) 변수 노출 — 한국도 동일 압력"
    },
    {
      flag:"🇹🇼", name:"대만 NCHC", prog:"NSTC",
      scale:"480 PFLOPS (2029 목표)",
      power:"공공 슈퍼컴 단계 확장",
      ops:"NSTC 공공",
      goal:"\"AI Island 2029\" · TAIDE LLM",
      vs:"명확한 숫자 목표(480 PF, 2029) + 자국 LLM"
    },
    {
      flag:"🇸🇬", name:"싱가포르 IMDA", prog:"IMDA",
      scale:"5년 S$1B+ (AI 컴퓨팅 S$500M)",
      power:"파트너십 클라우드 활용",
      ops:"자체 메가센터 미보유 + 글로벌 CSP 파트너",
      goal:"기업 도입 가속",
      vs:"자체 인프라 없이도 산업 성과 — 한국과 정반대 전략"
    }
  ],

  /* ---------- MEDIA SPECTRUM ---------- */
  spectrum: [
    {name:"서울경제",      x:8,  y:20, cls:"crit", tag:"\"예고된 실패\""},
    {name:"디지털데일리",   x:10, y:55, cls:"crit", tag:"[점검]①~⑤"},
    {name:"비즈한국",      x:12, y:80, cls:"crit", tag:"심층 분석"},
    {name:"디일렉",        x:18, y:35, cls:"crit", tag:"정책 변경 단독"},
    {name:"한국경제",      x:24, y:65, cls:"crit", tag:"\"길 잃은\" · 연속성 의문"},
    {name:"경향신문",      x:30, y:25, cls:"mid",  tag:"광주 반발·논쟁"},
    {name:"이데일리",      x:35, y:50, cls:"mid",  tag:"\"출발부터 삐끗\""},
    {name:"디지털타임스",   x:38, y:78, cls:"mid",  tag:"\"새 정부 검토\""},
    {name:"블로터",        x:42, y:35, cls:"mid",  tag:"\"추경 빨간불\""},
    {name:"ZDNet",         x:50, y:55, cls:"mid",  tag:"절차 단신"},
    {name:"전자신문",      x:53, y:25, cls:"mid",  tag:"시계열 전반"},
    {name:"뉴시스",        x:58, y:78, cls:"mid",  tag:"지역(전남) 중심"},
    {name:"뉴스1",         x:62, y:60, cls:"mid",  tag:"단신 신속"},
    {name:"서울신문",      x:68, y:30, cls:"pro",  tag:"지자체 시각"},
    {name:"헤럴드경제",     x:74, y:55, cls:"pro",  tag:"발표 전재"},
    {name:"아주경제",      x:78, y:78, cls:"pro",  tag:"단신 전재"},
    {name:"머니투데이",     x:82, y:30, cls:"pro",  tag:"\"AI 고속도로 심장부\""},
    {name:"아시아경제",     x:86, y:55, cls:"pro",  tag:"\"최종 확정\""},
    {name:"정책브리핑",     x:92, y:78, cls:"pro",  tag:"정부 공식 채널"},
    {name:"인공지능신문",   x:95, y:35, cls:"pro",  tag:"보도자료 전재"},
  ],

  /* ---------- ISSUES (5 PILLARS) ---------- */
  issues: [
    {n:"01", title:"사업성·운영 모델",
     text:"공공 51% + 매수청구권으로 시작했던 SPC는 응찰 0건으로 두 번 유찰됐다. \"상업 수익 + 공공 연구 접근권\"을 한 SPC에 묶은 설계가 시장과 충돌한 결과.",
     quote:"GPU를 비싸게 사서 싸게 공급해야 해 수지타산이 안 맞는다.", who:"업계 관계자 · 서울경제 2025-05-30"},
    {n:"02", title:"GPU 수급·수출통제",
     text:"NVIDIA 26만 장 공급 약속은 美 BIS 통제 품목. 사우디·UAE 모두 별도 승인·RTE 프레임을 거쳤다. 한국 5만 장도 같은 통과의례가 필요하다.",
     quote:"최첨단 AI 반도체는 미국 수출통제 하의 전략 무기 — GPU 5만 장은 실현 불가능한 공약이다.", who:"나경원 의원 · 아시아경제 2025-11-21"},
    {n:"03", title:"전력·환경 (산업 전반)",
     text:"국내 데이터센터 전력 수요 4,461MW(2025) → 6,175MW(2028). 시민사회 41개 단체의 반대는 본 사업 단일이 아닌 <b>AIDC 특별법(전체 AI 데이터센터 산업 진흥법)</b> 자체를 겨냥. 본 사업은 해남 솔라시도 인근 태양광 98MW+ESS 306MWh로 RE100 잠재.",
     quote:"LNG 직접 PPA 허용은 화석연료 의존을 확대하고 에너지 공공성을 약화시킨다.", who:"참여연대 · AIDC 특별법 반대 · 2025"},
    {n:"04", title:"데이터 주권 vs 클라우드 종속",
     text:"\"sovereign AI\" 담론은 NVIDIA CEO가 주도하는 글로벌 캠페인. 영업 동기를 포함한다는 비판도 존재. 자체 인프라 vs 클라우드 파트너십(싱가포르) 사이에서 한국은 자체 인프라를 택했다.",
     quote:"가속 컴퓨팅 인프라는 전력망·광대역만큼 필수가 됐다.", who:"Jensen Huang · NVIDIA APEC 2025-10"},
    {n:"05", title:"형평성·접근권",
     text:"미국 NAIRR는 학계·중소기업 트랙을 별도로 분리했다. 한국은 한 SPC에 통합 — 중소·스타트업 자원은 정부 선발 방식 의존. \"선택과 집중\"이 형평성을 해친다는 산업계 반발.",
     quote:"GPU는 쌓였는데 사람이 없다.", who:"KMJournal · 2026"},
    {n:"06", title:"위험·기간 비대칭",
     text:"민간 사업자는 2045년까지 약 20년간 운영 의무를 지지만 정부는 정책 변화 시 임의 청산이 가능한 구조. 디지털데일리 [점검] 시리즈가 가장 날카롭게 지적한 핵심 비판.",
     quote:"서비스 개시부터 2045년까지 사업계획을 내야 하는데 그때까지 공공의 AI 수요가 보장되느냐고 물으면 정부는 확답을 못 한다.", who:"업계 관계자 · 디지털데일리 2025-03-24"},
  ],

  /* ---------- VOICES ---------- */
  voices: [
    { stance:"pro", who:"임문영 · 국가AI전략위원회 부위원장", when:"2025-11",
      quote:"엑사원 등 한국 AI 모델 평가에서 미국·중국에 이어 3위에 올랐다.",
      note:"정부 측 자신감 표명. 직위로 기명. (Daum 뉴스)" },
    { stance:"con", who:"나경원 의원 · 국민의힘", when:"2025-11-21",
      quote:"GPU 5만 장 확보는 미국의 엄격한 수출 통제 하에 있는 전략 무기로, 실현 불가능한 공약이다.",
      note:"수출통제 변수의 정치적 가시화. (아시아경제)" },
    { stance:"con", who:"이준석 의원 · 개혁신당", when:"2025-11-21",
      quote:"정부가 자금을 투입해 GPU 자원을 직접 배분하는 것은 자율성과 효율성을 해칠 수 있는 중앙집중형 구조다.",
      note:"국가 주도 vs 시장 자율 — 운영 모델 논쟁. (아시아경제)" },
    { stance:"mid", who:"이다연 칼럼 · 뉴스프라임", when:"2025",
      quote:"AI 반도체 확보를 정쟁화하지 말고 초당적 협력이 필요하다.",
      note:"국가 안보 자산으로서의 GPU 인식 확산 권고." },
    { stance:"mid", who:"이보형 객원논설위원 · 서울경제", when:"2025",
      quote:"AI 후폭풍 — 에너지 측면에 넛지 정책을 도입할 때.",
      note:"전력·환경 측면의 정책 도구 제언." },
    { stance:"ext", who:"Jensen Huang · NVIDIA CEO", when:"2025-10-31 APEC",
      quote:"Korea's leadership in technology and manufacturing positions it at the heart of the AI industrial revolution.",
      note:"이해상충 명시 — NVIDIA는 GPU 공급자, sovereign AI 담론은 영업 동기 포함." },
    { stance:"ext", who:"Tareq Amin · HUMAIN CEO", when:"2025-08-27",
      quote:"Our ambition is very clear. We want to be the third-largest AI provider in the world.",
      note:"사우디와 한국 모두 \"세계 3강\" 목표 — 동일 목표·정반대 모델. (CNBC)" },
    { stance:"con", who:"참여연대 (시민사회 41개 단체)", when:"2025",
      quote:"전력계통영향평가 면제는 대규모 전력 수요 시설에 대한 사전 통제 장치를 무력화한다.",
      note:"※ 대상은 본 사업이 아닌 AIDC 특별법(전체 AI 데이터센터 산업 진흥법) 자체. 녹색연합·그린피스 한국 공동 행동." },
    { stance:"mid", who:"KISDI Perspectives", when:"2025-09",
      quote:"AI 인프라 고도화로 R&D 생태계 구축이 정책 과제다.",
      note:"한국 2024 AI 투자 46→27억$ 감소(STAT Report 2025-08)와 함께 읽힐 필요." },
  ]

};
