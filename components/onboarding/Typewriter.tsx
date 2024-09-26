import React, { useState, useEffect } from "react";
import { TextProps } from "react-native";
import { View, Text } from "react-native";

interface otherProps{
  text:string;
  speed?:number;
}

const TypewriterText:React.FC<TextProps & otherProps>= ({ text, speed = 100,...props}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
     return   clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <View className="">
      <Text {...props} >{displayedText}</Text>
    </View>
  );
};


export default TypewriterText;
