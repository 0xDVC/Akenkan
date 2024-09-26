import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from 'nativewind';
import { Platform } from 'react-native';

export default function TabLayout() {
  const activeColor = useThemeColor({}, 'primary'); // Color for active tab
  const inactiveColor = useThemeColor({}, 'text'); // Color for inactive tab

    const { colorScheme } = useColorScheme();
    let tabColor = colorScheme === "light" ? "#f3f4f6" : "#0f172a";

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: activeColor, // Set active tab color
          tabBarInactiveTintColor: inactiveColor, // Set inactive tab color
          tabBarStyle: {
            height: Platform.OS === "android" ? 60 : 90,
            backgroundColor: tabColor,
            borderTopColor: '#ffffff30',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                icon={focused ? "book" : "book-outline"}
                name="Discover"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                icon={focused ? "library" : "library-outline"}
                name="Library"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
