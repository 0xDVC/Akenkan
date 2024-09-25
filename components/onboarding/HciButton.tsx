import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import HciText from "../Hci/HciText";


interface otherProps{
  className?:string;
  title?:string;
  loading?:boolean;
}

const HciButton: React.FC<TouchableOpacityProps & otherProps> = ({loading=false,title,className="",...props }) => {

  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.5}
      {...props}
      className={
        "self-center w-full  justify-center shadow flex-row rounded-xl p-2 bg-primary " +
        (loading && " opacity-50 " + className)
      }
    >
        {loading && <ActivityIndicator color={"white"} size={25} />}

        {title ? (
          <HciText className="font-bold text-center  text-white text-xl">{title}</HciText>
        ) : (
          <HciText className="font-bold text-center text-white text-xl">{props.children}</HciText>
        )}
    </TouchableOpacity>
  );
};

export default HciButton;
