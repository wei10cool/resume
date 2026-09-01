<template>
  <section
    id="top"
    class="min-h-screen relative flex flex-col justify-center items-center bg-slate-950 text-white px-6 overflow-hidden rounded-b-[4rem]"
  >
    <!-- 背景光暈 -->
    <div class="absolute inset-0 from-blue-900/20 to-transparent pointer-events-none" />

    <!-- Avatar -->
    <div class="opacity-0 animate-fade-in-up">
      <img
        src="/avatar.png"
        class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl"
      >
    </div>

    <!-- Hi text -->
    <h1 class="text-4xl font-bold mt-6 opacity-0 animate-fade-in-up animation-delay-200">
      Hi, I'm
    </h1>

    <!-- Name (typing effect) -->
    <h2
      class="text-5xl font-black text-blue-400 mt-2 overflow-hidden whitespace-nowrap border-r-2 border-blue-400 animate-typing"
    >
      AWei
    </h2>

    <!-- Subtitle -->
    <p class="mt-4 max-w-xl text-center text-lg leading-8 text-slate-300 opacity-0 animate-fade-in-up animation-delay-500">
      專注於產品架構設計與系統開發，從需求、設計到落地，打造可靠、好用且真正解決問題的數位產品。
    </p>

    <div class="mt-8 grid w-full max-w-lg grid-cols-3 gap-3 border-y border-white/10 py-5 text-center opacity-0 animate-fade-in-up animation-delay-500">
      <div><strong class="block text-2xl font-black text-white">10+</strong><span class="text-xl text-slate-400">年系統開發經驗</span></div>
      <div><strong class="block text-2xl font-black text-white">全端</strong><span class="text-xl text-slate-400">產品與系統開發</span></div>
      <div><strong class="block text-2xl font-black text-white">100%</strong><span class="text-xl text-slate-400">持續精進與產品優化</span></div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 flex flex-col items-center animate-bounce">
      <span class="text-xs text-slate-400">Scroll</span>

      <div class="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center mt-1">
        <div class="w-1 h-2 bg-slate-400 rounded-full animate-scroll" />
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
    width: 14ch;
  }
}

.animate-typing {
  width: 0;
  animation: typing 2.5s steps(14) forwards;
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