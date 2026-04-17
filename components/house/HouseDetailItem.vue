<template>
  <div>
    <h2 class="mb-2 text-xl font-bold text-slate-800">{{ label }}</h2>
    <p class="text-slate-600">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
}>()
</script>
