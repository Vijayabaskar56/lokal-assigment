import { FlashList } from '@shopify/flash-list';
import { H2, View } from 'tamagui';

import { storage, useBookMark } from '@/store/bookmark-store';
import { KeyExtractor, renderItem } from '@/utils/utils';
import { useEffect } from 'react';


export default function BookMarkScreen() {
  const {bookmark , setBookmark} = useBookMark();
  let savedJobs: any[] = [];
  let bookMarkList = storage.getAllKeys()

  useEffect(() => {
    storage.getAllKeys().map(async (id) => {
      if (typeof id !== "number") {
        savedJobs.push(JSON.parse(storage.getString(id) as string));
      }
    })
  } , [bookmark])


  bookMarkList.map(async (id) => {
    if (typeof id !== "number") {
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
        <H2 textAlign='center'>Add Book Marks to Find Your Book Marks Here</H2>
      </View>
  );
}