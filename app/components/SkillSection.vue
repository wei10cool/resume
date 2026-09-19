<script setup>
const skills = {
  JavaScript: {
    icon: 'logos:javascript',
    level: '熟悉',
    description:
      '熟悉 JavaScript 語法與特性，並能搭配 ESLint 進行程式碼品質與規範檢查。實際應用於<span style="color:#0284c7;">養殖專家系統</span>與<span style="color:#0284c7;">IoT 水質監控平台</span>開發。'
  },

  Vue: {
    icon: 'logos:vue',
    level: '熟悉',
    description:
      '熟悉 Vue 2 元件化開發，具備響應式資料處理、元件拆分與 API 串接經驗；具備 Vue 3 基礎，並有使用 Composition API 開發小型專案的經驗。主要應用於<span class="text-sky-600">養殖專家系統(Vue 2)</span>開發，負責功能開發、介面製作與系統功能整合。'
  },

  Nuxt: {
    icon: 'logos:nuxt-icon',
    level: '熟悉',
    description:
      '主要使用 Nuxt 2 進行前端系統開發，具備頁面架構、元件化開發、路由管理與 API 串接經驗；另具備 Nuxt 4 基礎，並有實際開發經驗。主要應用於<span class="text-sky-600">養殖專家系統(Nuxt 2)</span>，負責功能開發、介面製作與系統功能整合。'
  },

  React: {
    icon: 'logos:react',
    level: '了解',
    description:
      '具備 React 基礎開發能力，曾透過相關課程學習(Hahow)並實作小型網頁專案，了解元件化開發與基本狀態管理，並持續累積 React 開發經驗。'
  },

  '.NET': {
    icon: 'logos:dotnet',
    level: '熟悉',
    description:
      '熟悉使用 Visual Studio 進行 .NET 應用程式開發，能進行 API 設計、資料串接、桌面應用程式開發及背景服務處理：<ul class="list-disc space-y-1 pl-6"> <li><span class="text-sky-600">ASP.NET Core Web API</span>：養殖專家系統 API 串接</li> <li><span class="text-sky-600">Web Service</span>：醫院內各式 API 介接（醫病共享決策、檢查排程系統、TPMI 精準醫療管理平台）</li> <li><span class="text-sky-600">WinForms</span>：DICOM 影像擷取、自動下載程式整合、IoT 水質監控平台</li> <li><span class="text-sky-600">Windows Service</span>：IoT 水質監控平台本機數據上傳</li> </ul>'
  },

  Docker: {
    icon: 'logos:docker-icon',
    level: '了解',
    description:
      '了解 Docker 容器化技術，具備 API 建置、映像建立與部署的實務經驗。將 .NET Core Web API 建立為 Docker Image，部署至 Google Cloud VM（Ubuntu）環境進行<span class="text-sky-600">服務部署</span>，完成 API 服務部署後提供前端網頁進行串接。'
  },

  MySQL: {
    icon: 'logos:mysql',
    level: '熟悉',
    description:
      '熟悉 MySQL 與 SQL 語法，具備關聯式資料庫設計與實務操作經驗，能進行資料表規劃、CRUD、JOIN 多表查詢、條件篩選、子查詢及資料彙整；並具備索引、View 的基礎應用，能針對 SQL 查詢與資料庫結構進行<span class="text-sky-600">基本效能調整</span>，並配合後端 API 完成資料存取與整合。'
  },

  PostgreSQL: {
    icon: 'logos:postgresql',
    level: '了解',
    description:
      '了解 PostgreSQL 關聯式資料庫與 SQL 語法，具備基本資料表操作、資料查詢與 API 資料存取經驗。實務上因應企業成本考量導入 PostgreSQL，主要應用於<span class="text-sky-600">養殖專家系統</span>，配合後端 API 進行系統資料存取與整合。'
  },

  Oracle: {
    icon: 'logos:oracle',
    level: '熟悉',
    description:
      '熟悉 Oracle 資料庫與 SQL 語法，具備資料表設計、複雜 SQL 查詢、多表關聯及資料維護經驗；深入使用 <span class="text-sky-600">Oracle Procedure</span> 進行資料處理與業務邏輯開發，並具備 <span class="text-sky-600">Table Partition</span>(資料分區管理)、<span class="text-sky-600">Flashback</span>(資料復原與歷史資料查詢) 等功能的實務經驗；曾透過 SQL Hint、索引及 SQL 語法調整進行查詢<span class="text-sky-600">效能調校與優化</span>，主要應用於醫院相關系統開發與維護。'
  },

  'Node.js': {
    icon: 'logos:nodejs-icon',
    level: '熟悉',
    description:
      '具備 Node.js 後端開發與 API 串接經驗，並應用於<span class="text-sky-600">IoT 水質監控平台</span>的設備資料處理、系統整合與服務開發。'
  },

  'REST API': {
    icon: 'mdi:api',
    level: '熟悉',
    description:
      '具備 REST API 設計與串接經驗，能依系統需求規劃 API 介面、處理請求參數與回傳資料，並整合前端、後端及資料庫，實際應用於<span class="text-sky-600">養殖專家系統</span>與其他系統開發，完成資料存取與跨系統整合。'
  },
  WebService: {
    icon: 'mdi:web',
    level: '熟悉',
    description: '具備 WebService 介接與系統整合經驗，能依不同系統需求進行服務介接、資料交換與格式處理，實際應用於<span class="text-sky-600">醫病共享決策</span>、<span class="text-sky-600">檢查排程系統</span>及<span class="text-sky-600">TPMI 精準醫療管理平台</span>等專案，完成跨系統資料整合與服務串接。'
  },

  MSSQL: {
    icon: 'devicon:microsoftsqlserver',
    level: '了解',
    description:
      '了解 Microsoft SQL Server 與 SQL 語法，具備資料表操作、資料查詢及基本資料維護經驗，能配合後端應用程式進行資料存取與整合。'
  },

  'Node-RED': {
    icon: 'devicon:nodered',
    level: '了解',
    description:
      '具備 Node-RED 流程式開發與設備資料串接經驗，實際應用於<span class="text-sky-600">IoT 水質監控平台</span>與<span class="text-sky-600">養殖專家系統</span>，進行設備資料蒐集、流程處理與系統整合。'
  },

Linux: {
  icon: 'logos:linux-tux',
  level: '了解',
  description:
    '具備 Linux（Ubuntu）環境操作與服務部署經驗，能配合 Docker 建置與部署後端 API 服務，並進行基本的環境設定與服務管理。'
},

'Google Cloud VM': {
  icon: 'logos:google-cloud',
  level: '了解',
  description:
    '具備 Google Cloud VM 實務部署經驗，將 Docker 化的<span class="text-sky-600">.NET Core Web API</span>部署至 Ubuntu VM 環境，完成後端服務建置並提供前端系統串接。'
}

}

const skillGroups = [
  {
    title: '前端開發',
    description: '建構可維護的前端架構與使用者介面',
    capabilities: ['元件化開發', 'RWD 響應式設計', 'REST API 串接'],
    names: ['JavaScript', 'Vue', 'Nuxt', 'React']
  },
  {
    title: '後端與應用程式',
    description: '開發後端服務、API 與應用程式，串接不同系統與服務',
    capabilities: ['API 設計與開發', '系統服務整合', '應用程式開發'],
    names: ['.NET','Node.js','REST API','WebService']
  },
  {
    title:'資料庫',
    description: '建構穩定且高效的資料儲存與查詢機制',
    capabilities: ['資料表設計','資料庫正規化', 'SQL 查詢與資料處理', 'SQL 與資料庫效能調校'],
    names:['Oracle','PostgreSQL', 'MySQL','MSSQL']
  },
  {
    title: '部署與系統整合',
    description: '整合設備、服務與部署環境，完成系統從開發到上線',
    capabilities: ['容器化部署', 'Linux／雲端環境部署', '設備與系統整合'],
    names: ['Docker', 'Node-RED', 'Linux', 'Google Cloud VM']
  }
]

const dialogOpen = ref(false);
const selectedSkill = ref(null);

const showCapability = (skillName)=>{
  const skill = {
    name: skillName,
    ...skills[skillName]
  }
  selectedSkill.value = skill;
  dialogOpen.value = true;
}
</script>
<template>
  <section id="skills" class="py-20">
    <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
      <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600" aria-hidden="true">
        <Icon name="heroicons:rocket-launch" class="h-6 w-6" />
      </span>

      <span>技能</span>
    </h2>

    <p class="mb-8 max-w-2xl text-slate-500">從前端介面、後端服務、資料庫到系統部署，具備完整的系統開發與整合經驗，能依需求串接不同系統、設備與服務，完成從開發到部署的整體流程。</p>

    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="group in skillGroups" :key="group.title" class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <h3 class="text-lg font-bold text-slate-800">{{ group.title }}</h3>
        <p class="mt-2 min-h-10 text-sm leading-5 text-slate-500">{{ group.description }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-600">
          <li v-for="capability in group.capabilities" :key="capability" class="flex items-center gap-2">
            <Icon name="heroicons:check-circle" class="h-4 w-4 text-blue-500" />
            {{ capability }}
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-2">
          <template v-for="name in group.names">
            <UBadge v-if="skills[name]" :key="name" @click="showCapability(name)" variant="outline"
              class="flex cursor-pointer items-center gap-2 border-slate-200 px-3 py-2 text-slate-700">
              <Icon :name="skills[name].icon" class="h-4 w-4" />
              {{ name }}
              <span class="text-xs text-slate-400">
                {{ skills[name].level }}
              </span>
            </UBadge>
          </template>
        </div>
      </article>
    </div>
  </section>

  <!-- 對話視窗 -->
    <MessageDialog
      v-model:open="dialogOpen"
      :skill="selectedSkill"
    />
</template>