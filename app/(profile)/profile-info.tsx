import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"; // Only using Ionicons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Button from "@/components/button/Button";
import { Animated, Easing } from "react-native";
import { useState, useEffect, useRef } from "react";


export default function ProfileInformation() {
  const navigate  = useNavigation();
  const router = useRouter();

  // Static user data
  const userData = {
    username: "John_Doe",
    full_name: "John Doe",
    reading_level: "Intermediate",
    email: "johndoe@example.com",
    telephone: "1234567890",
    language: "english",
  };

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profile, setProfile] = useState(""); // Placeholder for profile image
  const [lang, setLang] = useState(userData.language);

  const Languages = [
    { label: "English", value: "English" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
  ];

  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate loading profile image
    setIsLoadingProfile(true);
    setTimeout(() => {
      setProfile("https://example.com/profile.jpg"); // Static image URL for testing
      setIsLoadingProfile(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotateStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <SafeAreaView className="h-full flex bg-primary-light justify-between">
      <View className="mt-8 flex-row justify-between items-center relative">
        <View className="absolute left-5 h-8 w-8 rounded-full flex-row justify-center items-center">
          <TouchableOpacity onPress={() => router.push('/(tabs)/library')}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl font-sbld text-white">Profile Information</Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-5 py-2 px-2">
        <View className="flex-1 h-38 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-lg "></View>
        </View>

        <View className="flex items-center justify-center">
          <View className="flex justify-center items-center w-28 h-28 border-4 border-white rounded-full">
            {isLoadingProfile ? (
              <Animated.View style={rotateStyle}>
                <FontAwesome5 name="spinner" size={24} color="white" />
              </Animated.View>
            ) : (
              <View>
                {profile ? (
                //   <Image
                //     source={{ uri: profile }}
                //     className="w-28 h-28 rounded-full"
                //   />
                <Ionicons name="person" size={80} color="white" /> 
                ) : (
                  <View className="flex-row justify-center items-center h-full w-full bg-blue-400 rounded-full">
                    <Text className="font-sbld text-white text-4xl">
                      {userData.username
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </Text>

                  </View>
                )}
              </View>
            )}
          </View>
          <Text className="font-smed text-xl text-white mt-3">{userData.username}</Text>
        </View>

        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-full "></View>
        </View>
      </View>

      <View className="items-center h-full bg-white rounded-t-3xl mt-2 pt-5">
        <ScrollView className="w-full flex">
          <View className="w-full h-20 flex-row px-2 justify-between gap-x-3 self-center">
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-300 rounded-md"
            //   onPress={() => navigate("user-books", { c_tab: 0 })}
            >
              <View>
                <Ionicons name="heart" size={24} color="red" />
              </View>
              <View>
                <Text className="text-md font-smed text-gray-500">Favorites</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-300 rounded-md"
            //   onPress={() => navigate("user-books", { c_tab: 1 })}
            >
              <View>
                <Ionicons name="book" size={24} color="orange" />
              </View>
              <View>
                <Text className="text-md font-smed text-gray-500">My books</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-300 rounded-lg"
            //   onPress={() => navigate("user-books", { c_tab: 2 })}
            >
              <View>
                <Ionicons name="calendar" size={24} color="pink" />
              </View>
              <View>
                <Text className="text-md font-smed text-gray-500">History</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="mx-4 mt-5">
            <View>
              <Text className="text-lg font-sbld">Profile Management</Text>
            </View>
            <View className="mt-5">
              <TouchableOpacity
                className="flex-row justify-between items-center border-b border-gray-400"
                // onPress={() => navigate("user-profile")}
              >
                <View className="flex-row items-center justify-center">
                  <View className="w-12 -mt-2">
                    <Ionicons name="person" size={28} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-lg font-smed text-gray-500">Profile Information</Text>
                  </View>
                </View>

                <View className="ml-0">
                  <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View className="mt-2">
              <View className="flex-row justify-between items-center border-b border-gray-400">
                <View className="flex-row items-center justify-center">
                  <View className="w-12 ">
                    <Ionicons name="language" size={24} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-lg font-smed text-gray-500">Language</Text>
                  </View>
                </View>

                <View className="flex-1 ml-20">
                  <Dropdown
                    data={Languages}
                    value={lang}
                    labelField={"value"}
                    valueField={"value"}
                    onChange={(item) => {
                      setLang(item.value);
                    }}
                  />
                </View>
              </View>
            </View>
            <View className="mt-2">
              <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-400">
                <View className="flex-row items-center justify-center">
                  <View className="w-12 ">
                    <Ionicons name="list" size={24} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-lg text-gray-500 font-smed">Reading Preference</Text>
                  </View>
                </View>

                <View className="ml-0">
                  <Ionicons name="chevron-forward" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-10 flex-row justify-center items-center ">
            <View className="w-44">
              <Button variant="primary" text="Logout" />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}