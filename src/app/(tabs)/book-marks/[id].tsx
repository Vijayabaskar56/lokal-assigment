import { useLocalSearchParams } from "expo-router";
import { storage, useBookMark } from "@/store/bookmark-store";


import { useGetJobs } from "@/hooks/useGetJobs";
import JobDetails from "@/components/JobDetails";
import Loader from "@/components/Loader";

const JobDetailsView = () => {
  const { id } = useLocalSearchParams();
  const {bookmark , setBookmark} = useBookMark();
  let savedJob: any[] = [];

  savedJob.push(JSON.parse(storage.getString(String(id || "")) as string));
  const job = savedJob && savedJob[0];

  return <JobDetails job={job} bookmark={bookmark} setBookmark={setBookmark} />
}

export default JobDetailsView;
