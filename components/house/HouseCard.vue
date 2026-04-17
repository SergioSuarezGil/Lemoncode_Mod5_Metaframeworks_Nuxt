<script setup lang="ts">
import type { House } from '../../types/house';

defineProps<{
  house: House;
}>();
</script>

<template>
  <NuxtLink :to="`/houses/${house.id}`" class="group block text-inherit no-underline">
    <article
      class="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
    >
      <NuxtImg
        :src="house.image"
        :alt="`Imagen de ${house.name}`"
        width="360"
        height="220"
        format="webp"
        class="h-56 w-full object-cover"
      />
      <div class="flex flex-col gap-2 p-4">
        <h2 class="text-lg font-semibold text-slate-800">{{ house.name }}</h2>
        <p class="text-sm text-primary-600">{{ house.location }}</p>
      </div>
    </article>
  </NuxtLink>
</template>
