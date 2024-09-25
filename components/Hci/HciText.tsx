import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

interface HciTextProps{
type?:'header'|'title'|'description'|'subtitle'
}

const HciText: React.FC<TextProps & HciTextProps> = ({type, style, ...props }) => {
  const { fontSize, fontFamily } = useTheme();

  const typeStyle =
    type == "header"
      ? "text-gray-600 font-black dark:text-gray-50 "
      : type == "title"
      ? " text-gray-500 font-extrabold text-2xl dark:text-gray-100 "
      : type == "subtitle"
      ? " text-gray-400  text-2xl dark:text-gray-200 "
      : " text-gray-400 text-normal  text-lg dark:text-gray-300 ";

  return (
    <Text
      style={[{ fontSize, fontFamily }, style]}
      {...props}
      className={"" + typeStyle}
    />
  );
};

export default HciText;
