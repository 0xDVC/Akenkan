import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, Platform } from 'react-native';
import FormField from "@/components/FormField";
import RadioButton from "@/components/button/RadioButton";
import Button from "@/components/button/Button";
import { validateEmail, validatePhoneNumber, validatePassword } from '@/lib/util/helper';
import { Link } from "expo-router";
import SocialLoginButton from '@/components/button/SocialLoginButton';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUp() {
    const [form, setForm] = useState({
        email: "",
        phoneNumber: "",
        name: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleRadioButtonPress = (value: string) => {
        setForm({ ...form, gender: value });
    };

    const handleChangeText = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    const handleSignUp = () => {
        const { email, phoneNumber, password, confirmPassword } = form;
        const isEmail = email.includes('@');

        const isEmailInput = isEmail && email.trim() !== '';
        const isPhoneInput = !isEmail && phoneNumber.trim() !== '';

        // if (isEmailInput) {
        //     if (!validateEmail(email)) {
        //         showModal('Please enter a valid email address.', 'error');
        //         return;
        //     }
        // } else if (isPhoneInput) {
        //     if (!validatePhoneNumber(phoneNumber)) {
        //         showModal('Please enter a valid phone number.', 'error');
        //         return;
        //     }
        // } else {
        //     showModal('Please enter a valid email address or phone number.', 'error');
        //     return;
        // }

        // if (!validatePassword(password)) {
        //     showModal('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.', 'error');
        //     return;
        // }

        // if (password !== confirmPassword) {
        //     showModal('Passwords do not match. Please make sure both passwords match.', 'error');
        //     return;
        // }

        // showModal('Sign up successful!', 'success');
    };


    const handleGoogleLogin = () => {
        // Handle Google login logic
        console.log('Google login pressed');
    };

    const handleAppleLogin = () => {
        // Handle Apple login logic
        console.log('Apple login pressed');
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handlePress = async () => {
        setIsSubmitting(true);
        handleSignUp();
        setIsSubmitting(false);
    };

    return (
        // <SafeAreaView className="h-full" style={{ backgroundColor: Colors.light.background }}>
            <ScrollView className='bg-background-light'>
                <View className="w-full px-4 my-6 justify-center h-full">
                    <Text className="font-abld text-center text-5xl mt-[15px]">
                        Sign Up
                    </Text>
                    <Text className="font-sreg text-center text-lg mt-4">
                        Create a new account quickly and easily to get started
                    </Text>
                    <FormField
                        title="Email or Phone Number"
                        icon="mail-outline"
                        placeholder=" Enter email or phone number"
                        value={form.email || form.phoneNumber}
                        handleChangeText={(text) => {
                            if (text.includes('@')) {
                                handleChangeText('email', text);
                            } else {
                                handleChangeText('phoneNumber', text);
                            }
                        }}
                        otherStyles="mt-4"
                    />

                    <FormField
                        title="Full Name"
                        icon="person-outline"
                        placeholder=" Enter full name"
                        value={form.name}
                        handleChangeText={(name) => handleChangeText('name', name)}
                        otherStyles="mt-4"
                    />
                    <Text className="text-gray-650 font-smed text-base mt-6">Gender</Text>
                    <View className="flex-row justify-start w-full mt-2">
                        <RadioButton
                            label="Male"
                            value="male"
                            selected={form.gender === 'male'}
                            handleRadioButtonPress={handleRadioButtonPress}
                            otherStyles="mt-2 mr-10"
                        />
                        <RadioButton
                            label="Female"
                            value="female"
                            selected={form.gender === 'female'}
                            handleRadioButtonPress={handleRadioButtonPress}
                            otherStyles="mt-2"
                        />
                    </View>

                    <View className="mt-14">
                        <Button
                            text="Sign Up"
                            onPress={handlePress}
                            loading={isSubmitting}
                            variant="primary"
                            size="large"
                            fullWidth
                        />
                    </View>

                <FontAwesome />
                {/* Divider with "or" */}
                <View className="flex-row items-center ">
                    <View className="flex-1 h-px bg-gray-300" />
                    <Text className="mx-4 text-gray-500 font-sreg text-xl">or</Text>
                    <View className="flex-1 h-px bg-gray-300" />
                </View>

                {/* Alternate login buttons */}
                <View className="flex-row justify-evenly mt-6">
                    { Platform.OS === 'android' ? (
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
                    <View className="mt-4 justify-center items-center">
                        <Text className="font-sreg text-lg">
                            Already have an account?{' '}
                            <Text className=''>
                                <Link href="/sign-in" className="text-lg text-primary">Sign In</Link>
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        // </SafeAreaView>
    );
}
