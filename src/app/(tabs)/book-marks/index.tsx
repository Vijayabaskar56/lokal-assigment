import { FlashList } from '@shopify/flash-list';
import { H2, View } from 'tamagui';

import { storage } from '@/store/bookmark-store';
import { KeyExtractor, renderItem } from '@/utils/utils';


export default function BookMarkScreen() {
  let bookMarkList = storage.getAllKeys()

  let savedJobs: any[] = [];

  bookMarkList.map(async (id) => {
    if (typeof id !== "number") {
      console.log(id , "store");
      savedJobs.push(JSON.parse(storage.getString(id) as string));
    }
  })

  return (
    (savedJobs?.length ?? 0) > 0 ?
      <FlashList
        data={savedJobs}
        renderItem={renderItem}
        keyExtractor={KeyExtractor}
        onEndReachedThreshold={0.1}
        estimatedItemSize={200}
      /> : <View flex={1} alignItems="center" justifyContent="center">
        <H2>Add Book Marks to Find Your Book Marks Here</H2>
      </View>
  );
}