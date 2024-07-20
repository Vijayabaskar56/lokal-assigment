import { FlashList } from '@shopify/flash-list';
import { H2, Spinner, View } from 'tamagui';

import { useGetJobs } from '@/hooks/useGetJobs';
import { storage, useBookMark } from '@/store/bookmark-store';
import { RefreshControl, ToastAndroid } from 'react-native';
import { KeyExtractor, renderLoader, renderItem } from '@/utils/utils';


export default function BookMarkScreen() {
  const { data, isLoading, error, refetch, hasNextPage, isRefetching , fetchNextPage, isFetching } = useGetJobs();

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

  if (error) {
    ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
  }

  return (
    (CurrentJob?.length ?? 0) > 0 ?
      <FlashList
        data={CurrentJob}
        indicatorStyle='white'
        renderItem={renderItem}
        keyExtractor={KeyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        onRefresh={refetch}
        refreshControl={<RefreshControl refreshing={isRefetching} colors={["#ffb700"]} progressBackgroundColor="transparent" onRefresh={refetch} />}
        refreshing={isFetching || isRefetching}
        ListFooterComponent={() => renderLoader(isFetching , isRefetching)}
        estimatedItemSize={200}
      /> : <View flex={1} alignItems="center" justifyContent="center">
        <H2>Add Book Marks to Find Your Book Marks Here</H2>
      </View>
  );
}