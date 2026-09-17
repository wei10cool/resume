<script setup>
const props = defineProps({
    skill: {
        type: Object,
        default: null
    }
//   title: {
//     type: String,
//     default: '詳細資訊'
//   },
//   message: {
//     type: String,
//     default: ''
//   }
})

const open = defineModel('open', {
  type: Boolean,
  default: false
})
</script>

<template>
  <UModal v-model:open="open">
     <template #content>
      <UCard v-if="skill">
        <!-- Header -->
        <template #header>
          <div class="flex items-center gap-3">
            <Icon
              :name="skill.icon"
              class="h-6 w-6"
            />

            <div>
              <h3 class="text-lg font-semibold">
                {{ skill.name }}
              </h3>
            </div>
          </div>
        </template>

        <!-- Content -->
        <div class="space-y-4">
          <div>
            <div class="text-sm text-slate-500">
              熟悉程度
            </div>

            <div class="text-slate-700">
              {{ skill.level }}
            </div>
          </div>

          <div v-if="skill.description">
            <div class="text-sm text-slate-500">
              說明
            </div>

            <div class="leading-6 text-slate-600" v-html="skill.description" />
          </div>
        </div>

        <!-- Footer -->
        <template #footer>
          <div class="flex justify-end">
            <UButton @click="open = false">
              關閉
            </UButton>
          </div>
        </template>
      </UCard>
    </template>
  </UModal>
</template>