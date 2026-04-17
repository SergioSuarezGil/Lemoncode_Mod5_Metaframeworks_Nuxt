<script setup lang="ts">
import { computed, ref } from 'vue';
import type { House } from '../../types/house';
import HouseCard from '../house/HouseCard.vue';
import SearchInput from './SearchInput.vue';
import { normalizeString } from '../../utils/normalizeString';

const props = defineProps<{ houses: House[] }>();
const query = ref('');

const filteredHouses = computed(() => {
  const sanitizedQuery = normalizeString(query.value.trim());
  if (!sanitizedQuery) {
    return props.houses;
  }

  return props.houses.filter((house) => {
    const houseName = normalizeString(house.name);
    const houseLocation = normalizeString(house.location);
    return houseName.includes(sanitizedQuery) || houseLocation.includes(sanitizedQuery);
  });
});

defineExpose({
  filteredHouses,
});
</script>

<template>
  <section class="flex flex-col gap-6">
    <SearchInput
      v-model="query"
      type="text"
      name="search"
      placeholder="Buscar por nombre o ubicación..."
      :aria-label="'Buscar casas rurales'"
    />

    <p v-if="filteredHouses.length === 0" class="text-center py-8 text-slate-500">
      No hay casas para ese filtro.
    </p>

    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <HouseCard v-for="house in filteredHouses" :key="house.id" :house="house" />
    </div>
  </section>
</template>
