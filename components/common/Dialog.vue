<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h3 v-if="title" class="text-xl font-bold mb-4 text-primary-700">{{ title }}</h3>
      <p v-if="message" class="mb-6 text-slate-700">{{ message }}</p>
      <slot v-else />
      <div class="flex justify-end gap-4 mt-4">
        <button
          v-if="cancelText"
          class="px-4 py-2 rounded font-bold bg-black text-white border-2 border-black hover:bg-gray-900 transition-colors"
          @click="$emit('cancel')"
        >
          {{ cancelText }}
        </button>
        <button
          v-if="acceptText"
          class="px-4 py-2 rounded font-bold text-black bg-white border-2 border-black hover:bg-gray-100 transition-colors"
          @click="$emit('accept')"
        >
          {{ acceptText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
  title?: string
  message?: string
  acceptText?: string
  cancelText?: string
}>()
defineEmits(['accept', 'cancel'])
</script>
