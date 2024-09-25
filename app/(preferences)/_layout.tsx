import { Link, router, Stack } from "expo-router";
import { Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function RootLayout() {

  const {colorScheme}=useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        animation: "ios",
        headerBackButtonMenuEnabled: false,
        headerTitle: "",
        headerStyle: { backgroundColor: colorScheme=='dark'? "#334155":"white" },
        headerRight: () => (
          <>
            <Link href={"library"} asChild>
              <TouchableOpacity activeOpacity={0.5} className="">
                <Text className="text-amber-500 text-lg ">Skip</Text>
              </TouchableOpacity>
            </Link>
          </>
        ),
        headerLeft: () => (
          <>
            <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
              <Ionicons name="arrow-back" color="#f59e0b" size={20} />
            </TouchableOpacity>
          </>
        ),
      }}
    >
      <Stack.Screen name="genre" options={{}} />
      <Stack.Screen name="level" />
    </Stack>
  );
}
