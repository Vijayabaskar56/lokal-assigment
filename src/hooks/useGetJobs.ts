import axios from "axios";
import { useInfiniteQuery } from '@tanstack/react-query'


export const useGetJobs = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL as string;
  const fetchJobs = async ({ pageParam = 1 }: { pageParam: number }) => await axios.get(apiUrl, {
    params: {
      page: pageParam
    }
  }).then((res) => res.data).catch((err) => {
    throw new Error(err);
  });

  return useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.length === 0) return undefined;
      return allPages?.length + 1;
    },
    initialPageParam: 1
  })

};