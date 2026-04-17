<script setup lang="ts">
import { useHousesApi } from '../composables/useHousesApi';
import { useAsyncData } from 'nuxt/app';
import HouseList from '~/components/list/HouseList.vue';
import HouseListHeader from '~/components/house/HouseListHeader.vue';
import Feedback from '~/components/common/Feedback.vue';

const { getHouses } = useHousesApi();

const { data: houses, pending, error } = useAsyncData('houses-list', () => getHouses());
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
    <div class="mx-auto max-w-6xl">
      <HouseListHeader title="Casas Rurales" />

      <Feedback
        :loading="pending"
        :error="!!error"
        :empty="!houses || houses.length === 0"
        loading-text="Cargando casas rurales..."
        error-text="No se pudieron cargar las casas."
        empty-text="No hay casas disponibles."
      />

      <HouseList v-if="houses && houses.length > 0" :houses="houses" />
    </div>
  </main>
</template>
