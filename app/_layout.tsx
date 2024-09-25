import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@/hooks/theme/HciFontContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const statusBarColor = useThemeColor({}, "statusBar");

  const [loaded, error] = useFonts({
    Satoshi: require("../assets/fonts/Satoshi/Satoshi-Regular.ttf"),
    SatoshiMedium: require("../assets/fonts/Satoshi/Satoshi-Medium.ttf"),
    SatoshiLight: require("../assets/fonts/Satoshi/Satoshi-Light.ttf"),
    SatoshiItalic: require("../assets/fonts/Satoshi/Satoshi-Italic.ttf"),
    SatoshiBold: require("../assets/fonts/Satoshi/Satoshi-Bold.ttf"),
    SatoshiBlack: require("../assets/fonts/Satoshi/Satoshi-Black.ttf"),
    Alegreya: require("../assets/fonts/Alegreya_Sans/AlegreyaSans-Regular.ttf"),
    AlegreyaItalic: require("../assets/fonts/Alegreya_Sans/AlegreyaSans-Italic.ttf"),
    AlegreyaMedium: require("../assets/fonts/Alegreya_Sans/AlegreyaSans-Medium.ttf"),
    AlegreyaLight: require("../assets/fonts/Alegreya_Sans/AlegreyaSans-Light.ttf"),
    AlegreyaBold: require("../assets/fonts/Alegreya_Sans/AlegreyaSans-Bold.ttf"),
  });

  if (Platform.OS === "android") {
    StatusBar.setBarStyle(
      colorScheme === "dark" ? "light-content" : "light-content"
    );
    StatusBar.setBackgroundColor(statusBarColor);
  }

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  useEffect(() => {
    if (error) throw error;

    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ThemeProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: statusBarColor,
        }}
      >
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={statusBarColor}
        />

        <Stack   screenOptions={{
            headerShown: false,
            animation: "ios"}}>
                    <Stack.Screen name="(onboarding)/index" />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(search)/[query]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
