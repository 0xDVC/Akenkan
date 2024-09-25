import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { HciRadioGroup } from './HciRadioGroup'
import {useColorScheme} from 'nativewind'
import { useTheme } from '@/hooks/theme/HciFontContext'


const HciColorThemeRadioGroup = () => {
    
const {setColorScheme}= useColorScheme();
  const { setCurrentColorTheme, currentColorTheme } = useTheme();


const onChangeColorScheme = (theme: "light" | "dark" | "system") => {
  setCurrentColorTheme(theme);
  setColorScheme(theme);
};

interface RadioButtonProps {
  value: "light" | "system" | "dark";
  label: "light" | "system default" | "dark";
}

const radioButtons: RadioButtonProps[] = useMemo(
  () => [
    {
      label: "light",
      value: "light",
    },
    {
      label: "dark",
      value: "dark",
    },
    {
      label: "system default",
      value: "system",
    },
  ],
  []
);

  return (
    <>
      <HciRadioGroup
        valToCompare={currentColorTheme}
        onSwitch={onChangeColorScheme}
        obJectToShow={radioButtons}
      />
    </>
  );
}

export default HciColorThemeRadioGroup;