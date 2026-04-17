<script setup lang="ts">
import { computed } from 'vue';
import { useAsyncData, useHead, useRoute } from 'nuxt/app';

import { useHousesApi } from '../../composables/useHousesApi';
import HouseDetails from '~/components/house/HouseDetails.vue';
import HouseHeader from '~/components/house/HouseHeader.vue';
import HouseReviews from '~/components/house/HouseReviews.vue';
import HouseReserveButton from '~/components/house/HouseReserveButton.vue';
import IconBack from '~/components/common/IconBack.vue';

const route = useRoute();
const id = computed(() => String(route.params.id));
const { getHouseById } = useHousesApi();

const {
  data: house,
  pending,
  error,
} = useAsyncData(
  () => `house-${id.value}`,
  () => getHouseById(id.value),
);

useHead(() => {
  const houseName = house.value?.name ?? 'Detalle de casa rural';

  return {
    title: `${houseName} | Casas rurales`,
  };
});
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
    <div class="mx-auto max-w-6xl">

    <Feedback
      v-if="pending || error || !house"
      :loading="pending"
      :error="!!error"
      :empty="!house"
      loading-text="Cargando detalle..."
      error-text="Error al cargar la casa."
      empty-text="Casa no encontrada."
    />

    <section v-else>
      <HouseHeader :name="house.name" :price="house.price" />

      <div class="mb-8 flex flex-col gap-6 md:flex-row">
        <NuxtImg
          :src="house.image"
          :alt="`Imagen de ${house.name}`"
          width="560"
          height="360"
          format="webp"
          class="h-80 w-full rounded-lg object-cover shadow-lg md:w-1/2"
        />

        <HouseDetails
          :main-details="[
            { label: 'Descripción', value: house.description },
            { label: 'Dirección', value: house.address },
            { label: 'Ubicación', value: `${house.city}, ${house.country}` },
          ]"
          :extra-details="[
            { label: 'Habitaciones', value: house.bedrooms },
            { label: 'Camas', value: house.beds },
            { label: 'Baños', value: house.bathrooms },
          ]"
        >
          <HouseReserveButton
            dialog-title="Confirmar reserva"
            :dialog-message="`¿Vas a reservar la casa rural ‘${house.name}’?`"
            accept-text="Aceptar"
            cancel-text="Cancelar"
            aria-label="Reservar esta casa rural"
          />
        </HouseDetails>
      </div>

      <HouseReviews :reviews="house.reviews" />
    </section>

      <NuxtLink
        to="/list"
        class="inline-flex items-center gap-2 font-bold text-primary-600 transition-colors hover:text-primary-700"
      >
        <IconBack /> Volver al listado
      </NuxtLink>
    </div>
  </main>
</template>
