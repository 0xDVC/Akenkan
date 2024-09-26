import React, { useState } from 'react'
import OTPEntry from "@/components/OTPEntry";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CountdownTimer from "@/components/Countdown";
import Button from "@/components/onboarding/Button";
import { router } from 'expo-router';


export default function Verify() {
    const [otp, setOtp] = useState('');
    const value = '050-989-4026';

    const handleVerification = () =>  {
        if(otp.length === 6)  {
            router.push('/(tabs)')
        }
    };

    return (
        // <SafeAreaView className="h-full" style={{ backgroundColor: Colors.light.background }}>
        <>   
            <ScrollView className='bg-background-light dark:bg-slate-900'>
                <View className="w-full px-4 justify-center h-full">
                    <Text className="dark:text-slate-50 font-abld text-5xl text-center mt-[70px]">We just sent you a 6-digit code</Text>

                    <Text className="dark:text-slate-200 font-sreg text-xl mt-4 mb-10 text-center">
                        Please enter the code we've sent to{' '}
                        <Text className="dark:text-slate-50 font-sreg text-md">{value}</Text>
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

                    <Button 
                        className='bg-primary mt-10 text-lg'
                        onPress={handleVerification}
                    >
                     Verify   
                    </Button>
                </View>
            </ScrollView>

            {/* <FeedbackModal
            visible={modalVisible}
            message={modalMessage}
            type={modalType}
            onClose={() => setModalVisible(false)}
          /> */}

        </> 
        // </SafeAreaView>

    );
}