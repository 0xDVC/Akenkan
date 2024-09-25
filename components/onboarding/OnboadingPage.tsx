import { View, StyleSheet, Dimensions, Image, ViewProps } from "react-native";
import React from "react";
import HciButton from "./HciButton";

const { width } = Dimensions.get("window");

const onboarding_1 = require("../../assets/images/onboarding/welcome.png");
const onboarding_2 = require("../../assets/images/onboarding/search.png");
const onboarding_3 = require("../../assets/images/onboarding/shelves.png");

const PageImgs = [
  { src: onboarding_1 },
  { src: onboarding_2 },
  { src: onboarding_3 },
];

type otherProps = {
  onSnapTo?: (to: "next" | "prev") => void;
  onboardNumber?: number;
}; 
        
const OnBoardingPage: React.FC<ViewProps & otherProps> = ({
  onSnapTo,
  onboardNumber,
  ...props
}: {
  onboardNumber: number;
  children?: React.ReactNode;
}) => {
  return (
    <View
      style={[styles.card]}
      className="justify-center items-center "
      {...props}
    >
      <View className=" h-1/2 px-5">
        <Image
          source={PageImgs[onboardNumber].src}
          resizeMode="center"
          width={width}
          className="h-full aspect-square max-w-full "
        />
      </View>
      <View className="h-32 justify-center">{props.children}</View>
      <View className="py-10">
        <HciButton className="w-40" onPress={() => onSnapTo("next")}>
          {onboardNumber !== 2 ? "Next" : "Get Started"}
        </HciButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width,
    height: "100%",
  },
});

export default OnBoardingPage;
