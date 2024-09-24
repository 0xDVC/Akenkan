import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';


export default function TabLayout() {
  const light = useThemeColor({}, 'primary'); 
  const dark = useThemeColor({}, 'primary'); 
  const bg = useThemeColor({}, 'background'); 


  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: light,
          tabBarInactiveTintColor: dark,
          tabBarStyle: {
            height: 60,
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
