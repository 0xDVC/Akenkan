import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";
import HciText from "../Hci/HciText";


interface RadioButtonProps {
  value: string|number;
  label: "light" | "system default" | string;
}

interface RadioGroupProps {
  onSwitch: (val: any) => void;
  obJectToShow: RadioButtonProps[];
  valToCompare?: string | number;
  isFontFamily?: true;
  containerStyle?: string;
  valueStyle?:string;
}

export const HciRadioGroup: React.FC<RadioGroupProps> = ({
  onSwitch,
  obJectToShow,
  valToCompare,
  isFontFamily = false,
  containerStyle,
  valueStyle,
}) => {
  const { colorScheme } = useColorScheme();
  const { fontFamily } = useTheme();

  const [selectedValue, setselectedValue] = useState(valToCompare);

  return (
    <View>
      <View className={"gap-2 " + containerStyle}>
        {obJectToShow.map((t, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={i}
            className={"flex-row gap-2 items-center"}
            onPress={() => {
              onSwitch(t["value"]);
             setselectedValue(t["value"]) ;
            }}
          >
            <View
              className="rounded-full  p-1 border"
              style={{
                borderColor:
                  selectedValue == t["value"]
                    ? colorScheme === "light"
                      ? "#f59e0b"
                      : "#f59e0b"
                    : colorScheme === "light"
                    ? "#d1d5db"
                    : "#6b7280",
              }}
            >
              <View
                className="h-4 rounded-full text-gray-00 bg-amber-500 aspect-square "
                style={{
                  backgroundColor:
                    selectedValue == t["value"] ? "#f59e0b" : "transparent",
                }}
              />
            </View>

            <HciText
              style={{
                fontFamily: isFontFamily
                  ? t["value"].toString()
                  : fontFamily.toString(),
              }}
              className={
                "text-gray-400 text-normal dark:text-gray-300  " +
                valueStyle
              }
            >
              {t["label"]}
            </HciText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
