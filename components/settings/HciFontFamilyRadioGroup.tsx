import React, { useMemo} from "react";
import { HciRadioGroup } from "./HciRadioGroup";
import { useTheme } from "@/hooks/theme/HciFontContext";

const HciFontFamilyRadioGroup = () => {
  const { fontFamily, setFontFamily } = useTheme();

  interface RadioButtonProps {
    value: string;
    label: string;
  }

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        label: "Satoshi",
        value: "Satoshi",
      },
      {
        label: "SatoshiMedium",
        value: "SatoshiMedium",
      },
      {
        label: "OsSatoshiLightwald",
        value: "SatoshiLight",
      },
      {
        label: "SatoshiItalic",
        value: "SatoshiItalic",
      },
      {
        label: "SatoshiBold",
        value: "SatoshiBold",
      },
      {
        label: "Alegreya",
        value: "Alegreya",
      },
      {
        label: "AlegreyaItalic",
        value: "AlegreyaItalic",
      },
      {
        label: "AlegreyaMedium",
        value: "AlegreyaMedium",
      },
      {
        label: "AlegreyaLight",
        value: "AlegreyaLight",
      },
      {
        label: "AlegreyaBold",
        value: "AlegreyaBold",
      },
    ],
    []
  );

  return (
    <>
      <HciRadioGroup
        valToCompare={fontFamily}
        onSwitch={setFontFamily}
        obJectToShow={radioButtons}
        isFontFamily
      />
      {/* <FontAwesome name="book" size={20} color={'white'}/> */}
      {/* <Ionicons name="adjust" size={20} color={'white'}/> */}
    </>
  );
};

export default HciFontFamilyRadioGroup;

// adjust; fonticons book
