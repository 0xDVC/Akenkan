import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabLayout() {
  const activeColor = useThemeColor({}, 'primary'); // Color for active tab
  const inactiveColor = useThemeColor({}, 'text'); // Color for inactive tab

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: activeColor, // Set active tab color
          tabBarInactiveTintColor: inactiveColor, // Set inactive tab color
          tabBarStyle: {
            height: 90,
          },
        }}>
        
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                icon="book"
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
                icon="library"
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
