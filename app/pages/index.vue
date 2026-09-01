<template>
  <div class="bg-slate-50 text-slate-900">
    <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-5 py-3 shadow-lg shadow-slate-200/40 backdrop-blur-md">
        <a href="#top" class="font-black tracking-tight text-slate-900">JW<span class="text-blue-500">.</span></a>
        <div class="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <a href="#skills" class="transition hover:text-blue-600">技能</a>
          <a href="#projects" class="transition hover:text-blue-600">作品</a>
          <a href="#contact" class="transition hover:text-blue-600">聯絡</a>
        </div>
        <UButton to="#contact" size="sm" color="primary" trailing-icon="i-heroicons-arrow-up-right">合作邀請</UButton>
      </nav>
    </header>

    <HeroSection />
    <main class="mx-auto max-w-6xl px-6">
      <SkillSection />
      <ProjectSection />
      <section id="contact" class="mb-12 overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 text-white sm:px-12">
        <div class="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Let's build something</p>
            <h2 class="max-w-xl text-3xl font-black tracking-tight sm:text-4xl">有想一起解決的問題嗎？</h2>
            <p class="mt-3 max-w-lg text-slate-300">從產品想法、系統開發到既有功能優化，歡迎和我聊聊你的下一個專案。</p>
          </div>
          <UButton to="mailto:hello@example.com" size="xl" color="primary" icon="i-heroicons-envelope">hello@example.com</UButton>
        </div>
      </section>
    </main>
  </div>
</template>