// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface TabBarIconProps {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  name: string;
  focused: boolean;
}

export function TabBarIcon({ icon, name, focused }: TabBarIconProps) {
  const color = useThemeColor({}, 'primary'); 

  return (
      <View className="items-center justify-center">
        <Ionicons
          name={icon}
          size={28}
          color={color}
          className="mb-1"
        />

        <Text className={`text-sm text-center ${focused ? 'font-sbld' : 'font-sreg'}`} style={{ color }}>
          {name}
        </Text>
        
      </View>
  );
}
