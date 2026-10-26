
<template>
  <footer
    id="contact"
    class="relative w-full bg-slate-900 text-white px-6 py-16"
  >
    <!-- 頁尾內容容器 -->
    <div class="w-full max-w-6xl mx-auto">

      <!-- 職涯總結 -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-4"
      >
        <div class="max-w-2xl">
          <span v-if="false"
            class="inline-block mb-4 text-xs font-bold tracking-[0.18em] text-sky-300"
          >
            LET'S CONNECT
          </span>

          <h3
            class="text-xl sm:text-xl font-bold leading-relaxed tracking-wide mb-5"
          >
            讓好的想法，慢慢成為現實。
          </h3>

          <p class=" max-w-xl text-sm sm:text-base leading-8 text-slate-300">
            期待有機會交流技術經驗，分享彼此的實務觀點。
          </p>
        </div>

        <!-- 聯絡按鈕：請替換成自己的 Email -->
        <a v-if="false"
          href="mailto:your-email@example.com"
          class="inline-flex shrink-0 items-center justify-center gap-4
                 min-h-12 px-6 py-3 border border-sky-300 rounded-lg
                 text-sm font-semibold text-white
                 transition-all duration-300
                 hover:bg-sky-300 hover:text-slate-900
                 hover:-translate-y-1 hover:shadow-lg
                 focus-visible:outline-2 focus-visible:outline-offset-4
                 focus-visible:outline-sky-300"
        >
          <span>與我聯絡</span>
          <span
            aria-hidden="true"
            class="text-lg transition-transform duration-300
                   group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </div>

      <!-- 頁尾資訊 -->
      <!-- 頁尾資訊 -->
<div
  class="flex flex-row justify-between items-center gap-4
         border-t border-white/15"
>
  <p class="text-xs leading-relaxed text-slate-300">
    © {{ currentYear }}
  </p>

  <button
    type="button"
    aria-label="返回頁首"
    @click="scrollToTop"
    class="inline-flex shrink-0 items-center gap-3
           py-2 text-xs tracking-widest text-slate-300
           transition-colors duration-200
           hover:text-sky-300
           focus-visible:outline-2 focus-visible:outline-offset-4
           focus-visible:outline-sky-300"
  >
    <span>BACK TO TOP</span>
    <span aria-hidden="true" class="text-lg">↑</span>
  </button>
</div>

    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
