import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';

interface OTPInputProps {
    value: string;
    onChange: (otp: string) => void;
}

const OTPEntry: React.FC<OTPInputProps> = ({ value, onChange }) => {
    const inputs = useRef<Array<TextInput | null>>([]);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);

    useEffect(() => {
        if (inputs.current[0]) {
            inputs.current[0].focus();
        }
    }, []);

    const handleChange = (text: string, index: number) => {
        const newValue = value.split('');
        newValue[index] = text;
        onChange(newValue.join(''));

        if (text && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (key: string, index: number) => {
        if (key === 'Backspace' && !value[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View className="flex-row justify-evenly space-x-2">
            {[...Array(6)].map((_, index) => (
                <TouchableWithoutFeedback key={index} onPress={() => inputs.current[index]?.focus()}>
                    <View className="w-12 h-12 border-2 border-gray-600 rounded-lg justify-center items-center">
                        <TextInput
                            ref={(ref) => (inputs.current[index] = ref)}
                            className="text-center text-lg font-sblk"
                            keyboardType="numeric"
                            maxLength={1}
                            value={value[index] || ''}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(key, index)}
                            onFocus={() => setFocusedIndex(index)}
                        />
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
};

export default OTPEntry;
