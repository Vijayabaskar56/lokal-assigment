import { FlashList } from '@shopify/flash-list';
import { H2, Spinner, View } from 'tamagui';

import JobCard from '@/components/JobCard';

import { useGetJobs } from '@/hooks/useGetJobs';
import { storage } from '@/store/async-store';
import { ToastAndroid } from 'react-native';
import { KeyExtractor, renderFooter, renderItem } from '@/utils/utils';


export default function BookMarkScreen() {
  const { data, isLoading, error, refetch, hasNextPage, fetchNextPage, isFetching } = useGetJobs();

  let bookMarkList = storage.getAllKeys().map(Number);
  let CurrentJob: readonly any[] | null | undefined;
  if (!isLoading && data) {
    CurrentJob = data?.pages?.map(page => page.results).flat().filter(jobs => {
      return bookMarkList.includes(jobs.id);
    });
  }

  const onEndReached = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }



  if(error) {
    ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
  }


  return (
    (CurrentJob?.length ?? 0) > 0 ?
      <FlashList
        data={CurrentJob}
        renderItem={renderItem}
        keyExtractor={KeyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        onRefresh={refetch}

        // refreshing={isFetching || isLoading}
        ListFooterComponent={() => renderFooter(isFetching)}
        estimatedItemSize={200}
      /> : <View flex={1} alignItems="center" justifyContent="center">
      <H2>Add Book Marks to Find Your Book Marks Here</H2>
    </View>
    );
}