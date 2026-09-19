<script setup>
const experiences = [
    {
        "company": "XX科技股份有限公司",
        "location": "台北市內湖區",
        "title": "資深工程師",
        "management": "管理職",
        "period": "2021 / 06 - 在職",
        "summary": "負責系統架構規劃、系統開發、跨系統整合與產品功能優化，涵蓋前端、後端、資料庫、API 串接及系統部署，並依實際需求進行系統設計與功能開發。",
        "achievements": [
            "主導系統架構規劃與開發，整合前端、後端 API、資料庫及 IoT 設備服務。[Vue2、Node.js、.NET、Node-RED、MySQL / PostgreSQL、Docker]",
            "優化Node-RED設備控制與系統穩定性[Node.js、Node-RED、SQLite]",
            "開發API、Service及資料庫架構[.Net、WebService]",
            "統籌團隊進度與專案如期交付"
        ]
    },
    {
        "company": "XX醫院",
        "location": "台北市大安區",
        "title": "CRC資訊人員",
        "management": "",
        "period": "2020 / 05 - 2021 / 05",
        "summary": "負責臨床試驗資訊系統開發與維護，協助醫療資料管理及臨床試驗作業流程資訊化。",
        "achievements": [
            "維護臨床試驗電子病歷閱覽授權管理系統[C#、WebForm]",
            "維護臨床試驗電子病歷查詢系統[C#、WebForm]",
            "開發TPMI案件管理系統，提升案件管理效率[C#、MVC、Vue、Vuetify]"
        ]
    },
    {
        "company": "XX醫院",
        "location": "台北市文山區",
        "title": "程式設計師",
        "management": "",
        "period": "2018 / 03 - 2020 / 04",
        "summary": "負責醫院資訊系統開發與維護，具備跨系統 API、WebService、資料庫及醫療設備資料整合經驗，並參與排程、影像處理與臨床作業流程資訊化。",
        "achievements": [
            "檢查排程[C#,MVC,DevExtreme]",
            "放射排程[C#,MVC,DevExtreme]",
            "Dicom影像擷取[C#,winForm]",
            "整合自動下載程式[C#,winForm]",
            "院內各式API介接[C#,WebServices]",
            "醫院各項指標[ORACLE,MSSQL]",
            "SDM醫病共享決策[C#,MVC]",
            "健檢系統[C#,winForm]"
        ]
    },
    {
        "company": "XX大學",
        "location": "台北市信義區",
        "title": "專案經理",
        "management": "",
        "period": "2015 / 08 - 2018 / 02",
        "summary": "負責各項經營指標程式開發與維護，校務研究SAS視覺化分析，協助臨床資料校正與分析，並提供各項數據視覺化呈現。",
        "achievements": [
            "經營指標日報標警程式與指標數據校正[Oracle]",
            "多個App後台 WebService建構[WebService]",
            "臨床資料庫規劃(oracle)與sas系統管理(Linux)",
            "SAS統計分析校務、臨床數據[SAS]",
            "SAS相關授權與設定控管，如SMC、EG、VA等",
            "以SAS分析數據並提供視覺化介面呈現(IR)",
            "協助iOS手機程式開發[Swift]",
            "協助Android手機程式開發[Android Studio]",
        ]
    },
    {
        "company": "XX技術學院",
        "location": "宜蘭縣",
        "title": "資訊人員",
        "management": "",
        "period": "2013 / 01 - 2015 / 07",
        "summary": "",
        "achievements": [
            "C# .Net Framework 4.5 網頁程式開發",
            "C# .net 應用程式開發",
            "其他電腦資訊問題排解、單位事務協助"
        ]
    },
    {
        "company": "XX附設醫院",
        "location": "宜蘭縣",
        "title": "資訊維護員",
        "management": "",
        "period": "2012 / 08 - 2012 / 12",
        "summary": "",
        "achievements": [
            "C#.Net Framework 4.5程式開發-醫療資訊系統(HIS2)"
        ]
    },
    {
        "company": "XX資訊股份有限公司",
        "location": "台北市信義區",
        "title": "程式設計師",
        "management": "",
        "period": "2012 / 02 - 2012 / 06",
        "summary": "",
        "achievements": [
            "C#.Net，MVC架構，網頁程式維護"
        ]
    },
]
</script>

<template>
  <section id="experience" class="py-20">
    <h2 class="mb-6 flex items-center gap-3 text-3xl font-bold">
      <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600" aria-hidden="true">
        <Icon name="heroicons:briefcase" class="h-6 w-6" />
      </span>
      <span>工作經歷</span>
    </h2>

    <p class="mb-8 max-w-2xl text-slate-500 [text-wrap:pretty]">
      從產品導向的前端開發到系統整合與流程優化，我習慣站在使用者與業務需求的角度思考每一個功能。
    </p>
    <div class="relative ml-2 pl-6 before:absolute before:bottom-0 before:left-[11px] before:top-0 before:w-px before:bg-slate-200 md:ml-4">
      <article
        v-for="item in experiences"
        :key="item.company"
        class="relative pb-8 last:pb-0"
      >
        <span class="absolute -left-[1.7rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-500 shadow-sm" aria-hidden="true"></span>

        <div class="pt-1">
          <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{{ item.period }}</p>
              <h3 class="mt-2 flex flex-wrap items-center gap-2 text-2xl font-bold text-slate-800">
                <span>{{ item.title }}</span>
                <span
                  v-if="item.management"
                  class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-blue-700 uppercase"
                >
                  {{ item.management }}
                </span>
              </h3>
              <p class="mt-1 text-lg font-medium text-slate-600">
                {{ item.company }}
                <span class="text-sm font-normal text-slate-500">· {{ item.location }}</span>
              </p>
            </div>
          </div>

          <div class="mt-4 text-slate-600" v-html="item.summary"></div>

          <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <li v-for="achievement in item.achievements" :key="achievement" class="flex gap-3">
              <Icon name="heroicons:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
<div class="border-y border-slate-100 py-6">
  <div class="flex flex-col items-center text-center">

    <div class="flex max-w-4xl flex-wrap justify-center gap-2">
      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        系統架構規劃
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        前後端開發
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        REST API／Web Service
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        資料庫設計與 SQL
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        IoT／設備整合
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        Docker／Linux 部署
      </span>

      <span
        class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
      >
        系統維運
      </span>
    </div>
  </div>
</div>

  </section>
</template>
