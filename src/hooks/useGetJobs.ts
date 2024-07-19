import axios from "axios";
import {useInfiniteQuery} from '@tanstack/react-query'

export const useGetJobs = () => {
  const fetchJobs = async ({ pageParam = 1}: { pageParam: number }) => await axios.get('https://testapi.getlokalapp.com/common/jobs' , {
     params : {
      page : pageParam
     }
    }).then((res) => res.data);

  return useInfiniteQuery({
    queryKey : ["jobs"],
    queryFn : fetchJobs,
    getNextPageParam : (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1
  })

};