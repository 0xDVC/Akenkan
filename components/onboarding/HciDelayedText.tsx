import React, { useState, useEffect, useRef } from "react";
import { View, Animated, TextProps } from "react-native";

interface otherProps {
  text: string;
  delay: number;
  fadeInDuration:number;
}


const HciDelayedText:React.FC<TextProps & otherProps> = ({ text='nothing', delay = 60000, fadeInDuration = 1000,...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: fadeInDuration,
        useNativeDriver: true,
      }).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, fadeAnim, fadeInDuration]);

  if (!isVisible) {
    return null;
  }

  return (
    <View  className="items-center justify-center">
      <Animated.Text style={[{ opacity: fadeAnim }]} {...props}>
        {text}
      </Animated.Text>
    </View>
  );
};


export default HciDelayedText;
