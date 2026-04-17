import { housesService } from '../services/houses.service';

import { useRuntimeConfig } from 'nuxt/app';

export const useHousesApi = () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBaseUrl;

  const getHouses = async () => housesService.getAll(baseUrl);
  const getHouseById = async (id: string) => housesService.getById(baseUrl, id);

  return {
    getHouses,
    getHouseById,
  };
};
