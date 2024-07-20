import axios from "axios";
import { useInfiniteQuery } from '@tanstack/react-query'
import { useBookMark } from "@/store/bookmark-store";


export const useGetJobs = () => {
  const {isConnected} = useBookMark();

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
    initialPageParam: 1,
    enabled: isConnected
  })

};