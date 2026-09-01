<script setup>
const skills = {
  JavaScript: { icon: 'logos:javascript', level: '熟悉' },
  TypeScript: { icon: 'logos:typescript-icon', level: '熟悉' },
  Vue: { icon: 'logos:vue', level: '熟悉' },
  Nuxt: { icon: 'logos:nuxt-icon', level: '熟悉' },
  React: { icon: 'logos:react', level: '了解' },
  NestJS: { icon: 'logos:nestjs', level: '熟悉' },
  '.NET': { icon: 'logos:dotnet', level: '了解' },
  Docker: { icon: 'logos:docker-icon', level: '了解' },
  MySQL: { icon: 'logos:mysql', level: '熟悉' }
}

const skillGroups = [
  {
    title: '前端開發',
    description: '打造流暢且可維護的使用者介面',
    capabilities: ['元件化開發', 'RWD 響應式設計', 'REST API 串接'],
    names: ['JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'React']
  },
  {
    title: '後端與資料',
    description: '設計穩定的 API 與資料服務',
    capabilities: ['API 設計', '資料庫建模', '權限與資料驗證'],
    names: ['NestJS', '.NET', 'MySQL']
  },
  {
    title: '部署與工具',
    description: '讓產品穩定交付、持續運行',
    capabilities: ['容器化部署', '開發環境管理', '服務穩定性維護'],
    names: ['Docker']
  }
]
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
          <UBadge v-for="name in group.names" :key="name" variant="outline" class="flex items-center gap-2 border-slate-200 px-3 py-2 text-slate-700">
            <Icon :name="skills[name].icon" class="h-4 w-4" />
            {{ name }}
            <span class="text-xs text-slate-400">{{ skills[name].level }}</span>
          </UBadge>
        </div>
      </article>
    </div>
  </section>
</template>