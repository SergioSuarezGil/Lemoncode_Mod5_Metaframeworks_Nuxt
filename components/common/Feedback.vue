<template>
  <div v-if="loading" class="text-center py-12 text-slate-600">
    {{ loadingText }}
  </div>
  <div v-else-if="error" class="text-center py-12 text-red-500">
    {{ errorText }}
  </div>
  <div v-else-if="empty" class="text-center py-12 text-slate-600">
    {{ emptyText }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean;
  error?: boolean;
  empty?: boolean;
  loadingText?: string;
  errorText?: string;
  emptyText?: string;
}>();
</script>
