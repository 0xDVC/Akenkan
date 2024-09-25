import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CheckboxProps extends TouchableOpacityProps {
    text: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, checked = false, onChange, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handlePress = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <TouchableOpacity
            className="flex-row items-center"
            onPress={handlePress}
            {...props}
        >
            <View className={`w-5 h-5 border-2 rounded ${isChecked ? 'bg-primary' : 'bg-white'} border-gray-300 justify-center items-center`}>
                {isChecked}
            </View>
            <Text className="ml-2 font-sreg text-lg">{text}</Text>
        </TouchableOpacity>
    );
};

export default Checkbox;
