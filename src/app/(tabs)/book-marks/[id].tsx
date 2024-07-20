import { useLocalSearchParams } from "expo-router";
import { storage, useBookMark } from "@/store/bookmark-store";


import JobDetails from "@/components/JobDetails";
import { useEffect } from "react";

const JobDetailsView = () => {
  const { id } = useLocalSearchParams();
  const {bookmark , setBookmark} = useBookMark();
  let savedJob: any[] = [];

  useEffect(() => {
    // sync with the storage
    storage.getAllKeys().map(async (id) => {
      if (typeof id !== "number") {
        savedJob.push(JSON.parse(storage.getString(id) as string));
      }
    })
  } , [bookmark])

  savedJob.push(JSON.parse(storage.getString(String(id || "")) as string));
  const job = savedJob && savedJob[0];


  return <JobDetails job={job} bookmark={bookmark} setBookmark={setBookmark} />
}

export default JobDetailsView;
