import React from "react";
import { MMKV, useMMKVString } from 'react-native-mmkv'


export const storage = new MMKV()

export const bookMark = storage.contains('bookmark')

export const BookMarkContext = React.createContext<any>(null);

export const useBookMark = () => {
  const context = React.useContext(BookMarkContext);
  if (!context) {
    throw new Error('useBookMark must be used within a BookMarkProvider');
  }
  return context;
};

export const BookMarkProvider = (props: React.PropsWithChildren) => {
  const [bookmark, setBookmark] = React.useState([]);

  return (<BookMarkContext.Provider value={{ bookmark, setBookmark }} {...props} >
    {props.children}
  </BookMarkContext.Provider>
  )
};