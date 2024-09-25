import { View, Text, TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { readeingradioProps } from "@/app/(preferences)/level";

interface otherProps {
  isSelected: boolean;
  value:readeingradioProps;
  setSelectedValue:(val:string)=>void;
}

const HciReadinLevelRadioGroup: React.FC<
  TouchableOpacityProps & otherProps
> = ({ isSelected, value , setSelectedValue }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedValue(value.text)}
      activeOpacity={0.6}
      style={{ borderColor: isSelected ? "#a3633a" : "#d1d5db" }}
      className="w-full border border-gray-300 p-1  my-2 px-2 rounded group  justify-center"
    >
      <View className="flex-row justify-between p-2 items-center">
        <View className="flex-row gap-2 items-center">
          <Text className="text-2xl">{value.emoji}</Text>
        </View>

        <View
          className="p-1 border-2  group-focus-within:opacity-10  w-6 aspect-square rounded-full justify-center items-center"
          style={{ borderColor: isSelected ? "#a3633a" : "#d1d5db" }}
        >
          <View
            className="h-3 aspect-square rounded-full"
            style={{ backgroundColor: isSelected ? "#a3633a" : "transparent" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HciReadinLevelRadioGroup;
