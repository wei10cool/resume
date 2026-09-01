<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const projects = ref([])
const loadError = ref('')
const isLoading = ref(true)
const { app: { baseURL } } = useRuntimeConfig()

const getProjectAssetPath = (folder, fileName) => {
  return `${baseURL}projects/${encodeURIComponent(folder)}/images/${encodeURIComponent(fileName)}`
}

const loadProjects = async () => {
  try {
    const { default: DOMPurify } = await import('dompurify')
    const foldersResponse = await fetch(`${baseURL}projects/index.json`)

    if (!foldersResponse.ok) {
      throw new Error('無法讀取專案清單')
    }

    const projectFolders = await foldersResponse.json()
    const projectData = await Promise.all(projectFolders.map(async ({ folder, images }) => {
      const response = await fetch(`${baseURL}projects/${encodeURIComponent(folder)}/desc.txt`)

      if (!response.ok) {
        throw new Error(`無法讀取 ${folder} 的 desc.txt`)
      }

      const description = await response.json()

      return {
        folder,
        ...description,
        title: description.title || folder,
        description: DOMPurify.sanitize(description.description || ''),
        role: DOMPurify.sanitize(description.role || ''),
        result: DOMPurify.sanitize(description.result || ''),
        images: images.map(fileName => getProjectAssetPath(folder, fileName))
      }
    }))

    projects.value = projectData
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : '讀取專案資料時發生錯誤'
  } finally {
    isLoading.value = false
  }
}

//function
//取得圖片尺寸的工具函式，PhotoSwipe 需要知道圖片的寬高才能正確顯示
const getImageSize = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      resolve({
        w: img.naturalWidth,
        h: img.naturalHeight
      })
    }

    img.onerror = reject
  })
}

const imageSizes = reactive(new Map())
let lightbox

//Vue lifecycle 畫面「已經渲染完成」才執行
onMounted(async () => {
  await loadProjects()

  const imageSources = projects.value.flatMap(project => project.images)

  await Promise.all(imageSources.map(async (src) => {
    if (!imageSizes.has(src)) {
      try {
        imageSizes.set(src, await getImageSize(src))
      } catch {
        imageSizes.set(src, { w: 1920, h: 1080 })
      }
    }
  }))

  if (projects.value.length) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '.project-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()
  }
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = undefined
})
</script>

<template>
  <section id="projects" class="pb-20">
    <!-- Title -->
    <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
      <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600" aria-hidden="true">
        <Icon name="heroicons:rocket-launch" class="h-6 w-6" />
      </span>

      <span>專案作品</span>
    </h2>


    <!-- Project list -->
    <p class="mb-8 max-w-2xl text-slate-500">把需求拆解成清楚的流程，將複雜的資料與操作整理成團隊和使用者都能理解的體驗。</p>

    <p v-if="loadError" class="rounded-lg bg-red-50 p-4 text-sm text-red-600">
      {{ loadError }}
    </p>

    <div v-else-if="isLoading" class="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-slate-500" role="status" aria-live="polite">
      <Icon name="heroicons:arrow-path" class="mr-3 h-5 w-5 animate-spin" aria-hidden="true" />
      <span>專案資料載入中...</span>
    </div>

    <div v-else-if="projects.length" class="space-y-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
        <!-- 左側圖片 -->
        <div class="h-56 w-full bg-slate-100 md:h-auto md:min-h-64 md:w-1/3">
          <div class="project-gallery h-full">
            <a
              :href="project.images[0]"
              :data-pswp-width="imageSizes.get(project.images[0])?.w"
              :data-pswp-height="imageSizes.get(project.images[0])?.h">
              <img
                :src="project.images[0]"
                :alt="`${project.title} 專案畫面`"
                class="h-full w-full cursor-pointer object-cover transition hover:scale-105">
            </a>

            <!-- 隱藏其他圖片 -->
            <a
              v-for="(img, idx) in project.images.slice(1)"
              :key="idx" :href="img"
              :data-pswp-width="imageSizes.get(img)?.w"
              :data-pswp-height="imageSizes.get(img)?.h"
              class="hidden" />
          </div>
        </div>

        <!-- 右側內容 -->
        <div class="w-full space-y-3 p-6 md:w-2/3 md:p-8">
          <!-- title -->
          <h3 class="text-2xl font-bold text-slate-800">
            {{ project.title }}
          </h3>

          <!-- description -->
          <!-- description 已在讀取 desc.txt 時經過 DOMPurify 清理。 -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-slate-400" v-html="project.description" />

          <dl class="space-y-2 text-sm">
            <div class="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-x-3">
              <dt class="font-semibold text-slate-700">負責內容</dt>
              <!-- role 已在讀取 desc.txt 時經過 DOMPurify 清理。 -->
              <!-- eslint-disable-next-line vue/no-v-html -->
              <dd class="min-w-0 wrap-break-word text-slate-500" v-html="project.role" />
            </div>
            <div class="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-x-3">
              <dt class="font-semibold text-slate-700">專案成果</dt>
              <!-- result 已在讀取 desc.txt 時經過 DOMPurify 清理。 -->
              <!-- eslint-disable-next-line vue/no-v-html -->
              <dd class="min-w-0 wrap-break-word text-slate-500" v-html="project.result" />
            </div>
          </dl>

          <!-- tools tags -->
          <div class="flex flex-wrap gap-2 pt-2">
            <UBadge
              v-for="tool in project.tools"
              :key="tool"
              color="gray"
              variant="subtle"
              class="text-xs hover:scale-110 transition border">
              {{ tool }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
      目前沒有可顯示的專案。
    </p>
  </section>
</template>