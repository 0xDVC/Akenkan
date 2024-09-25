import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { HciRadioGroup } from "./HciRadioGroup";
import { useColorScheme } from "nativewind";
import { useTheme } from "@/hooks/theme/HciFontContext";
import { useFonts } from "expo-font";

const HciFontSizeRadioGroup = () => {
  const { fontSize,setFontSize} = useTheme();




  interface RadioButtonProps {
    value: number;
    label: string;
  }

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        label: "small",
        value: 16,
      },
      {
        label: "medium",
        value: 20,
      },
      {
        label: "large",
        value: 24,
      },
    ],
    []
  );

  return (
    <>
      <HciRadioGroup
        valToCompare={fontSize}
        onSwitch={setFontSize}
        obJectToShow={radioButtons}
      />
    </>
  );
};

export default HciFontSizeRadioGroup;
