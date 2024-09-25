import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

const HciTextDescription: React.FC<TextProps> = ({ style, ...props }) => {
  const { fontSize, fontFamily } = useTheme();

  const font=fontSize===16 ?"text-[10px]":"text-xs"
  return (
    <Text
      style={[{fontFamily }, style]}
      className={`text-gray-600 dark:text-gray-300 ${font} `}
      {...props}
    />
  );
};
    //   style={[{ fontSize, fontFamily }, style]}

export default HciTextDescription;
