<template>
  <header class="mb-8 flex items-center gap-4">
    <div class="inline-flex items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-50 px-3 py-2 text-2xl font-bold text-primary-600">
      CR
    </div>
    <h1 class="text-4xl font-bold text-slate-800 md:text-5xl">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
