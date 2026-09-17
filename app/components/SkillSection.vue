<script setup>
const skills = {
  JavaScript: { icon: 'logos:javascript', level: '熟悉',
   description: '熟悉 JavaScript 語法與特性，並能搭配 ESLint 進行程式碼品質與規範檢查。實際應用於<span style="color:#0284c7;">養殖專家系統</span>與<span style="color:#0284c7;">IoT 水質監控平台</span>開發。' },
  Vue: { icon: 'logos:vue', level: '熟悉',description:'熟悉 Vue 2 元件化開發，具備響應式資料處理、元件拆分與 API 串接經驗；具備 Vue 3 基礎，並有使用 Composition API 開發小型專案的經驗。主要應用於<span class="text-sky-600">養殖專家系統(Vue2)</span>開發，負責功能開發、介面製作與系統功能整合。' },
  Nuxt: { icon: 'logos:nuxt-icon', level: '熟悉',description: '主要使用 Nuxt 2 進行前端系統開發，具備頁面架構、元件化開發、路由管理與 API 串接經驗；另具備 Nuxt 4 基礎，並有實際開發經驗。主要應用於<span class="text-sky-600">養殖專家系統(Nuxt 2)</span>，負責功能開發、介面製作與系統功能整合。' },
  React: { icon: 'logos:react', level: '了解',description: '具備 React 基礎開發能力，曾透過相關課程學習(Hahow)並實作小型網頁專案，了解元件化開發與基本狀態管理，並持續累積 React 開發經驗。' },
  NestJS: { icon: 'logos:nestjs', level: '熟悉' },
  '.NET': { icon: 'logos:dotnet', level: '了解' },
  Docker: { icon: 'logos:docker-icon', level: '了解' },
  MySQL: { icon: 'logos:mysql', level: '熟悉' },
  postgreSQL:{icon: 'logos:postgresql', level: '了解'},
  Oracle: { icon: 'logos:oracle', level: '熟悉' }
}

const skillGroups = [
  {
    title: '前端開發',
    description: '打造流暢且可維護的使用者介面',
    capabilities: ['元件化開發', 'RWD 響應式設計', 'REST API 串接'],
    names: ['JavaScript', 'Vue', 'Nuxt', 'React']
  },
  {
    title: '後端與資料',
    description: '設計穩定的 API 與資料服務',
    capabilities: ['API 設計', '資料庫建模', '權限與資料驗證'],
    names: ['.NET', 'MySQL','postgreSQL','Oracle']
  },
  {
    title: '部署與工具',
    description: '讓產品穩定交付、持續運行',
    capabilities: ['容器化部署', '開發環境管理', '服務穩定性維護'],
    names: ['Docker']
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

    <p class="mb-8 max-w-2xl text-slate-500">從介面體驗到伺服器部署，我習慣用完整的產品視角思考每一個技術選擇。</p>

    <div class="grid gap-4 md:grid-cols-3">
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