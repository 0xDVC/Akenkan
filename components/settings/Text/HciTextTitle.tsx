import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

const HciTextTitle: React.FC<TextProps> = ({ style, ...props }) => {
  const { fontSize, fontFamily } = useTheme();

  const font =
    fontSize === 16 ? "text-[12px]" : fontSize === 20 ? "text-sm" : "text-base";
  return (
    <Text
      style={[{ fontFamily }, style]}
      className={`text-gray-800 dark:text-gray-50 ${font} `}
      {...props}
    />
  );
};

export default HciTextTitle;
