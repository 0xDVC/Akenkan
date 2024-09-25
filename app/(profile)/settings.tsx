import { View, TouchableOpacity, Switch, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { useTheme } from "@/hooks/theme/HciFontContext";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

import HciColorThemeRadioGroup from "@/components/settings/HciColorThemeRadioGroup";
import HciFontSizeRadioGroup from "@/components/settings/HciFontSizeRadioGroup";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HciFontFamilyRadioGroup from "@/components/settings/HciFontFamilyRadioGroup";
import HciTextDescription from "@/components/settings/Text/HciTextDescription";
import HciTextTitle from "@/components/settings/Text/HciTextTitle";
import { router } from "expo-router";
import HciText from "@/components/Hci/HciText";
import HciSettingsModal from "@/components/Hci/HciModal";

const SettingsPage = () => {
  const { colorScheme } = useColorScheme();
  const { fontFamily, fontSize, currentColorTheme } = useTheme();

  const [showThemeModal, setShowThemeModal] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [settingType, setSettingType] = useState<
    "font type" | "font size" | "theme"
  >();

  const iconColor = colorScheme === "light" ? "#64748b" : "#e5e7eb";

  const onSettingsClose = () => {
    router.back();
  };
  const showToast = (mes: string) => {
    ToastAndroid.showWithGravity(mes, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const onSetFocus = () => {
    if (isAwake) {
      deactivateKeepAwake();
      setIsAwake(false);
      showToast("awake off");
      console.log("screen will go off now after set time");
    } else {
      activateKeepAwakeAsync();
      showToast("awake on");

      setIsAwake(true);
    }
  };

  const onShowSettingsModal = (
    modalTitle: "font type" | "font size" | "theme"
  ) => {
    setSettingType(modalTitle);
    setShowThemeModal(true);
  };

  return (
    <View className=" h-full p-4 pt-0 dark:bg-slate-900">
      {/* TitleBar  👳🏻‍♂️ */}
      {/* TODO WILL HAVE TO CHANGE THE UI WITH MR FIIFI🦸🏻‍♂️ */}
      <View className="p-4 flex-row border-b border-b-[#64748b] mb-2">
        <TouchableOpacity
          className="items-center justify-center"
          onPress={() => onSettingsClose()}
        >
          <Ionicons name="arrow-back" color={iconColor} size={25} />
        </TouchableOpacity>
        <View></View>
        <View className="w-full">
          <HciText className="text-center">Settings</HciText>
        </View>
      </View>
      {/* End of settings title bar */}

      {/* Reading Settings */}
      <View>
        
      </View>
      {/* Ending of ReadingSettings */}

      {/* Display Settings */}
      <View>
        <HciSettingsModal
          showModal={showThemeModal}
          modalTitle={settingType}
          setModalVisible={setShowThemeModal}
        >
          {settingType == "theme" ? (
            <HciColorThemeRadioGroup />
          ) : settingType == "font size" ? (
            <HciFontSizeRadioGroup />
          ) : (
            <HciFontFamilyRadioGroup />
          )}
        </HciSettingsModal>

        <View>
          <HciTextTitle>Display</HciTextTitle>
          <View className="gap-2">
            <TouchableOpacity
              onPress={() => onShowSettingsModal("theme")}
              className="flex-row gap-2"
            >
              <View className="p-2 text-gray-200">
                <FontAwesome color={iconColor} name="adjust" size={20} />
              </View>
              <View>
                <HciTextTitle>Theme</HciTextTitle>
                <HciTextDescription>{currentColorTheme}</HciTextDescription>
              </View>
            </TouchableOpacity>
            <View className="flex-row gap-2">
              <View className="p-2">
                <Ionicons
                  name="eye"
                  color={iconColor}
                  className="bg-slate-500 "
                  size={20}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => onSetFocus()}
                className="flex-row flex-1"
              >
                <View>
                  <HciTextTitle>Saty awake </HciTextTitle>
                  <HciTextDescription>
                    Let screen stay awake as you read
                  </HciTextDescription>
                </View>
                <View className="absolute right-2">
                  <Switch
                    thumbColor={iconColor}
                    className=""
                    trackColor={{ true: "#f59e0b", false: "#f59e0b80" }}
                    onChange={() => onSetFocus()}
                    value={isAwake}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <HciTextTitle>Font</HciTextTitle>
          <View className="gap-2">
            <TouchableOpacity
              onPress={() => onShowSettingsModal("font size")}
              className="flex-row gap-2"
            >
              <View className="p-2">
                <Ionicons
                  name="text"
                  color={iconColor}
                  className="bg-slate-500"
                  size={20}
                />
              </View>
              <View>
                <HciTextTitle>Font Size</HciTextTitle>
                <HciTextDescription>{fontSize}</HciTextDescription>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onShowSettingsModal("font type")}
              className="flex-row gap-2"
            >
              <View className="p-2">
                <FontAwesome
                  name="font"
                  color={iconColor}
                  className="bg-slate-500"
                  size={20}
                />
              </View>
              <View>
                <HciTextTitle>Font Family</HciTextTitle>
                <HciTextDescription>{fontFamily}</HciTextDescription>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsPage;
