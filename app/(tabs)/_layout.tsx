import { AddIcon, Icon, StarIcon } from '@/components/ui/icon';
import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>   <Icon as={StarIcon} className={`w-4 h-4`} style={{ color: color }} />
          ,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add Memo',
          tabBarIcon: ({ color }) =>   <Icon as={AddIcon} className={`w-4 h-4`} style={{ color: color }}  />
          ,
        }}
      />
    </Tabs>
  );
}
