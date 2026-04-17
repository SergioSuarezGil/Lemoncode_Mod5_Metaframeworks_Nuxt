<template>
  <div class="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
    <div class="flex items-center gap-4">
      <div class="inline-flex items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-50 px-3 py-2 text-2xl font-bold text-primary-600">
        CR
      </div>
      <h1 class="text-3xl font-bold text-slate-800 md:text-4xl">{{ name }}</h1>
    </div>
    <p class="text-2xl font-bold text-secondary-600">{{ price }}€ / noche</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  price: number | string;
}>();
</script>
