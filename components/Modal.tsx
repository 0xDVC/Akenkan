import { View, Text, Modal, ModalProps, TouchableOpacity, Pressable } from "react-native";
import React, { ReactNode } from "react";

interface extraProps {
  showModal: boolean;
  setModalVisible: (visible: boolean) => void;
  modalTitle: "font type" | "theme" | "font size"|undefined;
}

const SettingsModal: React.FC<ModalProps & extraProps> = ({
  showModal=false,
  modalTitle="Modal Title",
  setModalVisible,
  ...props
}) => {
  return (
    <Modal visible={showModal} transparent animationType="slide">
      <Pressable
        onPress={() => setModalVisible(false)}
        className="h-full items-center justify-center bg-[#00000020]"
      >
        <Pressable
          onPress={() => setModalVisible(true)}
          className=" bg-slate-50 dark:bg-gray-700 p-5 shadow-xl rounded-2xl gap-2 w-64"
        >
          <View>
            <Text className="text-slate">Chose {modalTitle}</Text>
          </View>
          <View>{props.children}</View>
          <View className="flex-row">
            <View className="flex-grow" />
            <TouchableOpacity className="" onPress={()=>setModalVisible(false)}>
              <Text className="text-right text-dark-sec-200 dark:text-amber-500">
                close
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SettingsModal;
