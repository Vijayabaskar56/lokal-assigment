// Definition: Helper functions and constants
import JobCard from "@/components/JobCard";
import { storage } from "@/store/bookmark-store";
import { Spinner } from "tamagui";

export const accentColor = "#ffb700";
export const tintColorDark = '#fff';


export const renderItem = ({ item }: any) => <JobCard item={item} />
export const KeyExtractor = (_: any, index: number) => index.toString();


export const renderLoader = (isFetching: Boolean, isRefetching?: Boolean): React.ReactNode => {
  if (isFetching && !isRefetching) {
    return <Spinner size="large" color="$accentColor" />
  }
  return null;
};