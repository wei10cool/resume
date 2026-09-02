<script setup>
import { computed, onMounted, ref } from 'vue'

const { app: { baseURL } } = useRuntimeConfig()

const intro = ref({
  hiText: '',
  name: '',
  subtitle: '',
  stats: [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' }
  ]
})
const isReady = ref(false)
const avatar = ref(`${baseURL}avatar.png`)

const pickIntroValue = (values, fallback = '') => {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }

  return fallback
}

const resolveHeadshot = async () => {
  const candidates = ['Headshot.png', 'Headshot.jpg', 'Headshot.jpeg']

  for (const fileName of candidates) {
    const filePath = `${baseURL}intro/images/${fileName}`

    try {
      const response = await fetch(filePath, { method: 'HEAD' })
      if (response.ok) {
        avatar.value = filePath
        return
      }
    } catch {
      // ignore and continue to next candidate
    }
  }

  avatar.value = `${baseURL}avatar.png`
}

const loadIntro = async () => {
  try {
    const response = await fetch(`${baseURL}intro/desc.txt`)

    if (!response.ok) {
      return
    }

    const text = await response.text()
    const data = JSON.parse(text)

    const stats = Array.isArray(data.stats) && data.stats.length
      ? data.stats.map((item) => ({
          value: String(item?.value ?? ''),
          label: String(item?.label ?? '')
        })).filter((item) => item.value || item.label)
      : [
          { value: '', label: '' },
          { value: '', label: '' },
          { value: '', label: '' }
        ]

    intro.value = {
      hiText: pickIntroValue([data.hiText, data.hi, data.greeting, '']),
      name: pickIntroValue([data.name, data.fullName, data.displayName, '']),
      subtitle: pickIntroValue([
        data.subtitle,
        data.summary,
        data.description,
        ''
      ]),
      stats
    }
  } catch {
    // Keep default values when the intro JSON file is missing or invalid.
  } finally {
    isReady.value = true
    await resolveHeadshot()
  }
}

onMounted(() => {
  loadIntro()
})

const typingWidth = computed(() => `${Math.max(intro.value.name.length, 5)}ch`)
const typingSteps = computed(() => Math.max(intro.value.name.length, 5))
</script>

<template>
  <section
    
    id="top"
    class="min-h-screen relative flex flex-col justify-center items-center bg-slate-950 text-white px-6 overflow-hidden rounded-b-[4rem]"
  >
    <!-- 背景光暈 -->
    <div class="absolute inset-0 from-blue-900/20 to-transparent pointer-events-none" />
    <div v-if="isReady" class="relative z-10 flex flex-col items-center pb-20 text-center">
      <!-- Avatar -->
      <div class="opacity-0 animate-fade-in-up mt-7">
        <img
          :src="avatar"
          class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl object-cover"
          alt="Headshot"
        >
      </div>

      <!-- Hi text -->
      <h1 class="text-4xl font-bold mt-6 opacity-0 animate-fade-in-up animation-delay-200">
        {{ intro.hiText }}
      </h1>

      <!-- Name (typing effect) -->
      <h2
        class="text-5xl font-black text-blue-400 mt-2 overflow-hidden whitespace-nowrap border-r-2 border-blue-400 animate-typing"
        :style="{ '--typing-width': typingWidth, '--typing-steps': typingSteps }">
        {{ intro.name }}
      </h2>

      <!-- Subtitle -->
      <p
        class="mt-4 max-w-xl text-center text-lg leading-8 text-slate-300 opacity-0 animate-fade-in-up animation-delay-500">
        {{ intro.subtitle }}
      </p>

      <div
        class="mt-8 grid w-full max-w-lg grid-cols-3 gap-3 border-y border-white/10 py-5 text-center opacity-0 animate-fade-in-up animation-delay-500">
        <div v-for="stat in intro.stats" :key="stat.label">
          <strong class="block text-2xl font-black text-white">{{ stat.value }}</strong>
          <span class="text-xl text-slate-400">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span class="text-xs text-slate-400">Scroll</span>

        <div class="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center mt-1">
          <div class="w-1 h-2 bg-slate-400 rounded-full animate-scroll" />
        </div>
      </div>
    </div>

    <div v-else class="relative z-10 flex min-h-105 items-center justify-center text-center">
      <div class="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-sm">
        <span class="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-transparent" aria-hidden="true" />
        <span>載入資料中...</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease forwards;
}

/* delay */
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-500 {
  animation-delay: 0.5s;
}
.animation-delay-700 {
  animation-delay: 0.7s;
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: var(--typing-width, 5ch);
  }
}

.animate-typing {
  width: 0;
  animation: typing 2.5s steps(var(--typing-steps, 14)) forwards;
}

/* scroll indicator */
@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll 1.2s infinite;
}
</style>