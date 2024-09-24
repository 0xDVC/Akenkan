import { useColorScheme } from 'react-native';
import useColors  from '@/lib/util/useColors'; // Import the utility function

export function useThemeColor(
  props: { 
    light?: string; 
    dark?: string 
  },
  colorName: keyof ReturnType<typeof useColors>['light'] & keyof ReturnType<typeof useColors>['dark']
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  const tailwindColors = useColors();

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return tailwindColors[theme][colorName];
  }
}