import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Platform } from "react-native";
import FormField from "@/components/FormField";
import { validateEmail, validatePhoneNumber } from "@/lib/util/helper";
import FeedbackModal from "@/components/FeedbackModal";
import { Link, router } from "expo-router";
import Checkbox from "@/components/Checkbox";
import SocialLoginButton from "@/components/button/SocialLoginButton";
import { FontAwesome } from "@expo/vector-icons";
import Button from "@/components/onboarding/Button";

export default function SignIn() {
    const [form, setForm] = React.useState({
        email: "",
        phoneNumber: "",
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState("");
    const [modalType, setModalType] = React.useState<"success" | "error">(
        "error"
    );

    const handleChangeText = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    const showModal = (message: string, type: "success" | "error") => {
        setModalMessage(message);
        setModalType(type);
        setModalVisible(true);
    };

    const handleSignIn = () => {
        const { email, phoneNumber } = form;
        const isEmail = email.includes("@");

        const isEmailInput = isEmail && email.trim() !== "";
        const isPhoneInput = !isEmail && phoneNumber.trim() !== "";

        if (isEmailInput) {
            if (!validateEmail(email)) {
                showModal("Please enter a valid email address.", "error");
                return;
            }
        } else if (isPhoneInput) {
            if (!validatePhoneNumber(phoneNumber)) {
                showModal("Please enter a valid phone number.", "error");
                return;
            }
        } else {
            showModal("Please enter a valid email address or phone number.", "error");
            return;
        }

        showModal("Sign in successful!", "success");

        setTimeout(() => router.push("/verify"), 1000);
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handlePress = async () => {
        setIsSubmitting(true);
        setTimeout(() => {
            handleSignIn();
            setIsSubmitting(false);
        }, 2000);
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic
        console.log("Google login pressed");
    };

    const handleAppleLogin = () => {
        // Handle Apple login logic
        console.log("Apple login pressed");
    };

    return (
        <>
            <ScrollView className="bg-white dark:bg-slate-700">
                <View className="w-full px-4 my-6 justify-center h-full">
                    <Text
                        className="text-center font-abld text-5xl mt-[35px]"
                    >
                        Sign In
                    </Text>
                    <Text className="font-sreg text-2xl text-center mt-4">
                        Welcome Back!
                    </Text>

                    <FormField
                        title="Email or Phone Number"
                        icon="mail"
                        value={form.email || form.phoneNumber}
                        placeholder="Enter Email or Phone Number"
                        handleChangeText={(text) => {
                            if (text.includes("@")) {
                                handleChangeText("email", text);
                            } else {
                                handleChangeText("phoneNumber", text);
                            }
                        }}
                        otherStyles="mt-4"
                    />

                    <View className="justify-start mt-4 pl-4">
                        <Checkbox
                            text="Remember me"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </View>

                    <View className="mt-10">
                        <Button onPress={handlePress} loading={isSubmitting}>
                            Login
                        </Button>
                    </View>
                    <FontAwesome />
                    {/* Divider with "or" */}
                    <View className="flex-row items-center mt-10">
                        <View className="flex-1 h-px bg-gray-500" />
                        <Text className="mx-4 font-smed text-xl">or</Text>
                        <View className="flex-1 h-px bg-gray-500" />
                    </View>

                    {/* Alternate login buttons */}
                    <View className="flex-row justify-evenly mt-6">
                        {Platform.OS === 'android' ? (
                            <SocialLoginButton
                                provider="google"
                                onPress={handleGoogleLogin}
                            />
                        ) : (
                            <SocialLoginButton
                                provider="apple"
                                onPress={handleAppleLogin}
                            />
                        )}
                    </View>

                    <View className="mt-16 justify-center items-center">
                        <View className="flex-row gap-2 items-center">
                            <Text className="text-lg font-smed"> Don't have an account?</Text>
                            <Link href="/sign-up" asChild>
                                <Text className="text-amber-700 text-lg font-sabld dark:text-amber-300">
                                    Sign Up
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <FeedbackModal
                visible={modalVisible}
                message={modalMessage}
                type={modalType}
                onClose={() => setModalVisible(false)}
            />
        </>
    );
}
