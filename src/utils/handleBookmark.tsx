import { storage } from "@/store/bookmark-store";

export const handleBookmark = (setBookmark: any, item: any) => {
  setBookmark((prev: any) => {
    const isIdPresent = prev?.includes(item?.id);

    const updatedArray = isIdPresent
      ? prev.filter((id: any) => id !== item?.id) //
      : [...prev, item?.id]; // Add the ID

    return updatedArray;
  })

  if (storage.contains(`${item?.id}`)) {
    storage.delete(`${item?.id}`);
  } else {
    storage.set(`${item?.id}`, JSON.stringify(item));
  }
}
