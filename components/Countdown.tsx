import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

interface CountdownTimerProps {
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (sec: number): string => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <View className="p-4">
            <Text className="text-center text-lg text-gray-500">
                Resend Code in{' '}
                <Text className="font-abld text-2xl">{formatTime(seconds)}</Text>
            </Text>
        </View>
    );
};

export default CountdownTimer;
