import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TypewriterText from "@/components/onboarding/HciTypewiter";
import OnBoardingPage from "@/components/onboarding/OnboadingPage";
import HciDelayedText from "@/components/onboarding/HciDelayedText";
import { useColorScheme } from "nativewind";
import HciText from "@/components/Hci/HciText";

const { width } = Dimensions.get("window");
const data = ["#eef7f2", "#dceee5", "#cbe6d8"];

const Swiper2: React.FC = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { colorScheme } = useColorScheme();

  // const {completeOnboarding}=useAuth()

  const router = useRouter();

  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 52],
  });

  const inputRange = [0];
  const scaleOutputRange = [1];
  data.forEach((_, i) => {
    if (i !== 0) {
      inputRange.push((width * (2 * i - 1)) / 2, width * i);
      scaleOutputRange.push(2, 1);
    }
  });

  const scaleX = scrollValue.interpolate({
    inputRange,
    outputRange: scaleOutputRange,
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    setCurrentPage(Math.round(offsetX / width));
  };

  const handlePageChange = (direction: "next" | "prev") => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 0 && newPage < data.length) {
      setCurrentPage(newPage);
      scrollViewRef.current?.scrollTo({
        x: newPage * width,
        animated: true,
      });

      // router.push('')
    } else onSkipToLogIn();
  };

  const onSkipToLogIn = () => {
    router.push("sign-in");
    // completeOnboarding()
  };



  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
      >
        <OnBoardingPage onboardNumber={0} onSnapTo={handlePageChange}>
          <View className="px-8 gap-2">
            {/* <HciText
            type="header"
            className="font-pbold  text-center text-4xl mt-[35px]"
          >
            Sign In
          </HciText> */}
            <TypewriterText
              className="text-gray-600 text-center font-bold dark:text-gray-50 text-3xl self-center"
              text="Welcome to Hci Library"
            />
            <View className=" h-16">
              <HciDelayedText
                className="text-gray-400 text-lg  text-center "
                delay={2000}
                fadeInDuration={1000}
                text="Your scope of learning and research is never limited"
              />
            </View>
          </View>
        </OnBoardingPage>

        <OnBoardingPage onSnapTo={handlePageChange} onboardNumber={1}>
          {/* <TextToSpeach/> */}
          <View className="px-8">
            <HciText
              type="header"
              className="text-center  font-extrabold text-2xl self-center"
            >
              Search & Easily navigate through Genres
            </HciText>
            <Text className="text-gray-400 text-lg text-center">
              Easily search for books you love and keep them in your shelf
            </Text>
          </View>
        </OnBoardingPage>

        <OnBoardingPage onSnapTo={handlePageChange} onboardNumber={2}>
          <View className="px-8">
            <HciText
              type="header"
              className="text-center  font-extrabold text-2xl self-center"
            >
              Shelf storage & Customization
            </HciText>
            <Text className="text-gray-400 text-lg text-center">
              Convinience in keeping books and customization to your prefence
            </Text>
          </View>
        </OnBoardingPage>
      </ScrollView>

      <View className="flex-row justify-between absolute w-full top-0 p-8">
        <TouchableOpacity
          onPress={() => handlePageChange("prev")}
          disabled={currentPage === 0}
          style={{ opacity: currentPage === 0 ? 0.1 : 1 }}
        >
          <Ionicons name="arrow-back" color="#a3633a" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSkipToLogIn()}>
          <Text className="text-primary-light">Skip</Text>
        </TouchableOpacity>
      </View>

      <View
        className="self-center flex-row absolute gap-10  bottom-10"
        pointerEvents="none"
      >
        {data.map((_, index) => (
          <View
            key={index}
            className="w-3 aspect-square bg-gray-400 rounded-full"
          />
        ))}

        <Animated.View
          className="-left-[16px] rounded-full w-10 h-3 bg-primary-light absolute "
          style={[
            {
              transform: [{ translateX }, { scaleX }],
            },
          ]}
        />
      </View>
      {/* <FormFeedbackModal message="You've logged in" type="error" onClose={()=>{}}/> */}
    </View>
  );
};



export default Swiper2;
