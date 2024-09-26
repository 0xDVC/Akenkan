import { View, StyleSheet, Dimensions, Image, ViewProps, ImageSourcePropType } from "react-native";
import React from "react";
import Button from "@/components/onboarding/Button";

const { width } = Dimensions.get("window");

const onboarding_1: ImageSourcePropType = require("../../assets/images/icon.png");
const onboarding_2: ImageSourcePropType = require("../../assets/images/illustrations/illustration_1.png");
const onboarding_3: ImageSourcePropType = require("../../assets/images/illustrations/illustration_3.png");

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
          className="h-full w-96"
        />
      </View>
      <View className="h-32 justify-center">{props.children}</View>
      <View className="py-10">
        <Button className="w-40" onPress={() => onSnapTo("next")}>
          {onboardNumber !== 2 ? "Next" : "Get Started"}
        </Button>
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
