import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { useGetJobs } from '@/hooks/useGetJobs';
import { View } from 'tamagui';
import { FlatList } from 'react-native';
import JobCard from '@/components/JobCard';


const HEADER_HEIGHT = 250;

export default function HomeScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  const {data , isLoading , error  , refetch , hasNextPage , fetchNextPage} = useGetJobs();
  console.log(data);
  const dataArr = data?.pages?.map(page => page.results).flat();
  // console.log(dataArr);

  const KeyExtractor = (_ : any, index: number) => index.toString();

  const onEndReached = () => {
    if(hasNextPage && !isLoading){
      fetchNextPage();
  }
}

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View flex={1}>
      <FlatList
        data={dataArr}
        renderItem={JobCard}
        keyExtractor={KeyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={.5}
        />
        </View>
    </Animated.ScrollView>
  );
}
