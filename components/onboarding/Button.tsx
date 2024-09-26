import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";


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
        "self-center w-full justify-center shadow flex-row rounded-lg p-4 bg-primary " +
        (loading && " opacity-50 " + className)
      }
    >
        {loading && <ActivityIndicator className="pr-2 w-6" color={"white"} size={25} />}

        {title ? (
          <Text className="font-sbld text-center text-white text-xl">{title}</Text>
        ) : (
          <Text className="font-sbld text-center text-white text-xl">{props.children}</Text>
        )}
    </TouchableOpacity>
  );
};

export default HciButton;
