import { View, Text, TouchableOpacityProps } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HciText from "../Hci/HciText";

interface otherProps {
  title?: string;
  isSelected?: boolean;
}

const HciGenreBadge: React.FC<TouchableOpacityProps & otherProps> = ({
  title,
  isSelected,
  ...props
}) => {
  return (
    <TouchableOpacity className="p-1 relative" {...props}>
      <View
        className={`rounded-xl border-[0.5px] ${
          isSelected ? "border-primary" : "border-gray-400"
        } justify-center items-center p-1 border`}
      >
        <View
          className={`rounded-xl  ${
            isSelected ? "bg-primary " : ""
          } justify-center items-center px-3`}
        >
          <HciText
            type="title"
            className={`opacity-70 ${isSelected ? "text-white" : ""}`}
          >
            {title}
          </HciText>
        </View>
      </View>
      {/* {isSelected && (
        <View className="opacity-70 absolute top-0 right-1 p-1 items-center justify-center w-fit aspect-square">
          <FontAwesome name="check" color={"#78350f"} />
        </View>
      )} */}
    </TouchableOpacity>
  );
};

export default HciGenreBadge;
