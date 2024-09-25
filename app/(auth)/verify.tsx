import React, { useState } from 'react'
import OTPEntry from "@/components/OTPEntry";
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import CountdownTimer from "@/components/Countdown";
import Button from "@/components/button/Button";

export default function Verify() {
    const [otp, setOtp] = useState('');
    const value = '+233-509894026';
    return (
        // <SafeAreaView className="h-full" style={{ backgroundColor: Colors.light.background }}>
            <ScrollView className='bg-background-light'>
                <View className="w-full px-4 justify-center h-full">
                    <Text className="font-abld text-5xl text-center mt-[70px]">We just sent you a 6-digit code</Text>

                    <Text className="font-sreg text-xl mt-4 mb-10 text-center">
                        Please enter the code we've sent to{' '}
                        <Text className="font-sreg text-md">{value}</Text>
                    </Text>

                    <OTPEntry
                        value={otp}
                        onChange={setOtp}>
                    </OTPEntry>

                    <CountdownTimer initialSeconds={30} />
                    <View className="mt-[35px]">
                        <TouchableOpacity>
                            <Text className='font-sreg text-primary text-lg text-center'>Didn't receive the code?</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </ScrollView>


        // </SafeAreaView>

    );
}