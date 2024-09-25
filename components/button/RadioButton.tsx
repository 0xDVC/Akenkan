import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface RadioButtonProps {
    label: string;
    value: string;
    selected: boolean;
    handleRadioButtonPress: (value: string) => void;
    color?: string;
    otherStyles?: string;
}

export default function RadioButton ({ label, value, selected, handleRadioButtonPress, otherStyles  }: RadioButtonProps) {
    
    const color = useThemeColor({}, 'primary'); 

    return (
        <TouchableOpacity
            className={`flex-row items-center justify-center space-x-2 ${otherStyles}`}
            onPress={() => handleRadioButtonPress(value)}
        >
            <View
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? '' : 'border-gray-400'}`}
                style={selected ? { borderColor: color } : {}}
            >
                {selected && <View className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />}
            </View>
            <Text className="font-sreg text-base text-black text-center">{label}</Text>
        </TouchableOpacity>
    );
};