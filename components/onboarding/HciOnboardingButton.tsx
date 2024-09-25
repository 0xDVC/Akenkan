import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface otherProps {
  className?: string;
  title: string;
}

const HciOnboardingButton: React.FC<TouchableOpacityProps & otherProps> = ({
  className = "",
  title = "",
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...props}
      className={"self-center rounded-md p-2 px-4 bg-light-900" + className}
    >
      {title && <Text className="text-white font-bold text-xl">{title}</Text>}
    </TouchableOpacity>
  );
};

export default HciOnboardingButton;
