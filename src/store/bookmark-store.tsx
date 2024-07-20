import { router, usePathname } from "expo-router";
import React, { useEffect } from "react";
import { MMKV } from 'react-native-mmkv'
import * as NetInfo from '@react-native-community/netinfo';
import { ToastAndroid } from "react-native";



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
  const [bookmark, setBookmark] = React.useState<number[]>();
  const [isConnected, setIsConnected] = React.useState<boolean | null>(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) {
        // Pseudo-code: Check if the current route is not "/book-marks" before navigating
        ToastAndroid.show("No Internet Connection", ToastAndroid.BOTTOM);
      }

    });
    return () => {
      unsubscribe();
    }
  }, []);
  console.log(isConnected, "isConnected" );



  useEffect(() => {
    if (!bookMark) {
      setBookmark(storage.getAllKeys().map(Number))
    }
  }, [])

  return (<BookMarkContext.Provider value={{ bookmark, setBookmark  , isConnected }} {...props} >
    {props.children}
  </BookMarkContext.Provider>
  )
};