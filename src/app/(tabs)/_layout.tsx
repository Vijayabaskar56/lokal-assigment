import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { accentColor } from '@/utils/utils';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: accentColor,
        headerShown: true,
        tabBarVisibilityAnimationConfig: {
          show: {
            animation: "spring",
            config: {
              delay: 100,
              isInteraction: true,
            }
          },
          hide: {
            animation: "timing",
            config: {
              duration: 200,
            },
          },
        },
        tabBarStyle: {
          borderTopWidth: 2,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarItemStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
        tabBarLabelStyle: {
          fontFamily: "Inter",
          fontSize: 12,
          fontWeight: "500",
          backgroundColor: "transparent",
        },
      }}
      >
      <Tabs.Screen
        name="(jobs)"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="book-marks"
        options={{
          title: 'BookMarks',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bookmark' : 'bookmark-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
