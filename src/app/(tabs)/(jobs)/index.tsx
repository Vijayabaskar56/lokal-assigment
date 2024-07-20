import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'tamagui';
import { RefreshControl, ToastAndroid } from 'react-native';

import { useGetJobs } from '@/hooks/useGetJobs';
import { KeyExtractor, renderLoader, renderItem } from '@/utils/utils';
import { useBookMark } from '@/store/bookmark-store';
import { router } from 'expo-router';



export default function HomeScreen() {
  const {isConnected} = useBookMark();

  const { data, isLoading, error, refetch, hasNextPage, isFetching, isRefetching, fetchNextPage } = useGetJobs();
  const dataArr = !error && data?.pages?.map(page => page?.results).flat() || [];

  const onEndReached = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }

  if (error) {
    if(isConnected) {
      ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
    }
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
    /> : !isConnected ?
    (<View flex={1} justifyContent='center' alignItems='center'>
      <Text textAlign='center'>Your are Offline, Please Return to Online to View the Bookmakrs</Text>
    </View>) : (<View flex={1} justifyContent='center' alignItems='center'>
      <Text textAlign='center'>Something Went Wrong</Text>
    </View>)
}
