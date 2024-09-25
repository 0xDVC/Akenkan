import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import HciReadinLevelRadioGroup from "@/components/preference/HciReadinLevelRadioGroup";
import { Ionicons } from "@expo/vector-icons";
import HciText from "@/components/Hci/HciText";
import HciButton from "@/components/onboarding/HciButton";

export  interface readeingradioProps{
    emoji:string;
    text:string;
  }

const level = () => {

  
  const [selectedSpeed, setSelectedSpeed] = useState<string>();



  const readingSpead: readeingradioProps[] = [
   
   {emoji: "🐌",text:"very slow"},
    {emoji:"🚶🏻‍♂️" ,text:"slow"},
   {emoji:"🏃🏻‍♂️", text:"fast"},
   {emoji:"🚓",text:"very fast"}
  ];

  const finishGenre = () => {
    router.push("library");
  };

  return (
    <ScrollView className="h-full bg-white dark:bg-slate-700">
      <View className="justify-between h-full">
        <View className="gap-5">
          <View className="justify-center  p-5 gap-5 flex-row">
            <View className="rounded-full w-10 h-2  bg-amber-500"></View>
            <View className="rounded-full w-10 h-2  bg-amber-500"></View>
            <View className="rounded-full w-10 h-2  bg-gray-100 shadow"></View>
          </View>
          <View className="gap-2">
            <View>
              <HciText
                type="header"
                className="text-center text-4xl self-center"
              >
                Select reading level
              </HciText>
              <View className="px-2">
                <HciText type="title" className="text-lg text-center">
                  How fast would you like the
                  <Text className="text-amber-500"> HCI narator </Text> to read
                  a book
                </HciText>
                <View className="flex-row gap-2 items-center self-center ">
                  <Ionicons name="settings" color={ '#f59e0b'}/>
                  <HciText type="title" className=" text-center text-sm">
                    You can change this anytime from settings
                  </HciText>
                </View>
              </View>
            </View>

            <View className="p-10">
              {readingSpead.map((s, i) => (
                <>
                  <HciReadinLevelRadioGroup
                    key={s.text}
                    value={s}
                    isSelected={s.text === selectedSpeed}
                    setSelectedValue={setSelectedSpeed}
                  />
                </>
              ))}
            </View>
          </View>
        </View>

        <View className="p-5">
          <HciButton className="" onPress={() => finishGenre()}>
            Next to starting Theme
          </HciButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default level;
