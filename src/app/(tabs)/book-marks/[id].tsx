import { useLocalSearchParams } from "expo-router";
import { storage, useBookMark } from "@/store/bookmark-store";


import { useGetJobs } from "@/hooks/useGetJobs";
import JobDetails from "@/components/JobDetails";
import Loader from "@/components/Loader";

const JobDetailsView = () => {
  const { id } = useLocalSearchParams();
  const {bookmark , setBookmark} = useBookMark();

  const { data, isLoading} = useGetJobs();
  let CurrentJob;
  if (!isLoading && data) {
    CurrentJob = data?.pages?.map(page => page.results).flat().filter(jobs => {
      return jobs.id === parseInt(id as string);
    });
  }
  const job = CurrentJob && CurrentJob[0];


  return isLoading
    ? <Loader />
    : <JobDetails job={job} bookmark={bookmark} setBookmark={setBookmark} />
}

export default JobDetailsView;
