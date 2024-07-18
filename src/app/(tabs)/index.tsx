import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { useGetJobs } from '@/hooks/useGetJobs';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { H1 } from 'tamagui';

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

  // const {data , isLoading , error  , refetch , hasNextPage , fetchNextPage} = useGetJobs();
  // console.log(data);
  // const dataArr = data?.pages?.map(page => page.results)
  // console.log(dataArr);



  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View style={{ backgroundColor: '#D0D0D0', width: 400, height: 400,  flex : 1}}>
        <H1>Hiii</H1>
        <View>
          <Image
            source={{ uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" }}
            style={styles.dummyImage}
            width={100}
            height={100}
          />
          <Text>Vacency Count</Text>
        <Text>Job Title</Text>
        <Text>Company Name</Text>
        <Text>Location</Text>
        <Text>Salary</Text>
        </View>
      </View>

    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  dummyImage: {
    bottom: 0,
    left: 0,
    height: 100,
    width: 100,
    position: 'absolute',
    backgroundColor: 'red',

  },
});
