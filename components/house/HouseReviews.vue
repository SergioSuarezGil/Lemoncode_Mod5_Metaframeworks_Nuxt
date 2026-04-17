<template>
  <section class="mb-8">
    <h2 class="mb-4 text-2xl font-bold text-slate-800">Reseñas</h2>
    <p v-if="!reviews || reviews.length === 0" class="text-slate-600">Sin reseñas todavía.</p>
    <template v-else>
      <div class="flex flex-col gap-4">
        <article
          v-for="review in reviews"
          :key="review.id"
          class="rounded-lg border-2 border-slate-200 bg-white p-4"
        >
          <p class="mb-2 text-sm font-bold text-slate-500">Fecha: {{ review.date }}</p>
          <p class="text-slate-700">
            <strong>{{ review.author }}:</strong>
            {{ review.comment }}
          </p>
        </article>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  reviews: Array<{
    id: string | number;
    date: string;
    author: string;
    comment: string;
  }>;
}>();
</script>
