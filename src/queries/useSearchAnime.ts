import { useQuery } from '@tanstack/react-query';
import { api } from '../api/axiosInstance';

export const useSearchAnime = (nameAnime : string) => {
  return useQuery(
    ['searchAnime', { name: nameAnime }],
    async () => {
      const { data } = await api.get(`anime?filter[text]=${nameAnime}`);
      console.log(data);
      
      return data;
    },
  );
};
