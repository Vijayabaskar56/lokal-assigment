import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'tamagui';
import { RefreshControl, ToastAndroid } from 'react-native';

import { useGetJobs } from '@/hooks/useGetJobs';
import { KeyExtractor, renderLoader, renderItem } from '@/utils/utils';



export default function HomeScreen() {
  const { data, isLoading, error, refetch, hasNextPage, isFetching, isRefetching, fetchNextPage } = useGetJobs();

  if (error) {
    ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
  }

  const dataArr = !error && data?.pages?.map(page => page?.results).flat() || [];

  const onEndReached = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }

  if (error) {
    ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
  }

  return !error ?
    <FlashList
      data={dataArr}
      renderItem={renderItem}
      keyExtractor={KeyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      onRefresh={refetch}
      refreshControl={<RefreshControl refreshing={isRefetching} colors={["#ffb700"]} progressBackgroundColor="transparent" onRefresh={refetch} />}
      refreshing={isFetching || isRefetching}
      ListFooterComponent={() => renderLoader(isFetching, isRefetching)}
      estimatedItemSize={200}
    /> : (<View>
      <Text>Something Went Wrong</Text>
    </View>
    )
}
