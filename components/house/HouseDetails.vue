<template>
  <article class="flex flex-col gap-4 md:w-1/2">
    <HouseDetailItem v-for="item in mainDetails" :key="item.label" :label="item.label" :value="item.value" />
    <div class="flex flex-col gap-2 rounded-lg bg-blue-50 p-4">
      <HouseDetailItem v-for="item in extraDetails" :key="item.label" :label="item.label" :value="item.value" />
    </div>
    <slot />
  </article>
</template>

<script setup lang="ts">
import HouseDetailItem from './HouseDetailItem.vue'

defineProps<{
  mainDetails: Array<{ label: string, value: string | number }>
  extraDetails: Array<{ label: string, value: string | number }>
}>()
</script>
