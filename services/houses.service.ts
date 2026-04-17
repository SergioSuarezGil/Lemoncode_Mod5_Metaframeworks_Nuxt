import type { House } from '../types/house';
import { parseHouse } from '../types/house.schema';

const buildUrl = (baseUrl: string, path: string): string => {
  return `${baseUrl.replace(/\/$/, '')}${path}`;
};

export const housesService = {
  async getAll(baseUrl: string): Promise<House[]> {
    const rawData = await $fetch<unknown>(buildUrl(baseUrl, '/api/houses'));

    if (!Array.isArray(rawData)) {
      return [];
    }

    return rawData.map((house) => parseHouse(house));
  },

  async getById(baseUrl: string, id: string): Promise<House | null> {
    const rawData = await $fetch<unknown>(buildUrl(baseUrl, `/api/houses/${id}`));

    if (!rawData || typeof rawData !== 'object') {
      return null;
    }

    return parseHouse(rawData);
  },
};
