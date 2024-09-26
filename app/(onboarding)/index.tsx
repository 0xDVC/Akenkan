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
import TypewriterText from "@/components/onboarding/Typewriter";
import OnBoardingPage from "@/components/onboarding/OnboardingPage";
import DelayedText from "@/components/onboarding/DelayedText";

const { width } = Dimensions.get("window");
const data = ["#eef7f2", "#dceee5", "#cbe6d8"];

const Swiper2: React.FC = () => {
    const scrollValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentPage, setCurrentPage] = useState(0);
    // const { colorScheme } = useColorScheme();

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

            router.push('/library')
        } else onSkipToSignUp();
    };

    const onSkipToSignUp = () => {
        router.replace("/sign-up");
        // completeOnboarding()
    };



    return (
        <View className="flex-1 bg-white dark:bg-background-dark">
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
                        <TypewriterText
                            className="text-primary text-center font-abld dark:text-gray-50 text-5xl self-center"
                            text="Welcome to Akenkan"
                        />
                        <View className=" h-16">
                            <DelayedText
                                className="text-gray-500 text-2xl font-amed text-center "
                                delay={2000}
                                fadeInDuration={1000}
                                text="Discover the Joy of Reading "
                            />
                        </View>
                    </View>
                </OnBoardingPage>

                <OnBoardingPage onSnapTo={handlePageChange} onboardNumber={1}>
                    {/* <TextToSpeach/> */}
                    <View className="px-8">
                        <Text className="text-primary text-center font-abld dark:text-gray-50 text-5xl self-center">
                            Easy to Use, Simple to Read
                        </Text>
                        <Text className="text-gray-500 text-2xl font-amed text-center">
                        Navigate through books with clear text and design, perfect for your comfort.
                        </Text>
                    </View>
                </OnBoardingPage>

                <OnBoardingPage onSnapTo={handlePageChange} onboardNumber={2}>
                    <View className="px-2">
                        <Text className="text-primary text-center font-abld dark:text-gray-50 text-5xl self-center">
                        Explore a World of Stories
                        </Text>
                        <Text className="text-gray-500 text-2xl font-amed text-center">
                        Explore books that match your interests 
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
                    <Ionicons name="arrow-back" color="#B45413" size={28} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSkipToSignUp()}>
                    <Text className="text-primary font-smed text-xl">Skip</Text>
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
                    className="-left-[16px] rounded-full w-10 h-3 bg-primary absolute "
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
