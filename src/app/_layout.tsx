import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider } from 'tamagui';
import { useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

import { tamaguiConfig } from '../../tamagui.config'
import { BookMarkProvider } from '@/store/bookmark-store';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  // tamaguiconfig
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  // react-query
  const queryClient = new QueryClient();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <SafeAreaProvider style={{ flex: 1 }}>
          <BookMarkProvider>
            <StatusBar style="auto" translucent={true} />
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </BookMarkProvider>
          </SafeAreaProvider>
        </TamaguiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
