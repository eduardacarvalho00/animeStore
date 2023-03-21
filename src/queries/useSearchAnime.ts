import { useQuery } from '@tanstack/react-query';
import { api } from '../api/axiosInstance';

interface ListAnimeProps{
  data:{
    id: number,
    attributes:{
      canonicalTitle: string;
      ageRatingGuide: string;
      averageRating: number;
      description: string;
      endDate: string;
      startDate: string;
      showType: string;
      status: string;
      coverImage:{
        tiny: string;
      }
      posterImage:{
        small: string;
        large: string;
      }
      titles:{
        ja_jp: string;
      }
    }
  }[]
}

export const useSearchAnime = (nameAnime : string) => {
  return useQuery(
    ['searchAnime', { name: nameAnime }],
    async () => {
      const { data } = await api.get<ListAnimeProps>(`anime?filter[text]=${nameAnime}`);
      return data;
    },
  );
};
