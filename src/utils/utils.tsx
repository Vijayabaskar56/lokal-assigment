/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import JobCard from "@/components/JobCard";
import { Spinner } from "tamagui";

export const accentColor = "#ffb700";
export const tintColorDark = '#fff';


export const renderItem = ({ item }: any) => <JobCard item={item} />
export const KeyExtractor = (_: any, index: number) => index.toString();


export const renderFooter = (isFetching : Boolean) : React.ReactNode => {
  if (isFetching) {
    return <Spinner size="large" color="$accentColor" />
  }
  return null;
};