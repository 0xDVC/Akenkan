import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FormFieldProps extends TextInputProps {
    title: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
    placeholder?: string;
    otherStyles?: string;
    handleChangeText: (text: string) => void;
}

export default function FormField({ title, icon, placeholder, otherStyles, handleChangeText, ...props }: FormFieldProps) {
    const [isSecure, setIsSecure] = useState(props.secureTextEntry || false);

    const toggleSecureEntry = () => {
        setIsSecure(prev => !prev);
    };

    return (
        <View className={`relative space-y-2 ${otherStyles}`}>
            {/* {title && (
                <Text className="dark:text-slate-50 text-gray-650 font-sreg">
                    {title}
                </Text>
            )} */}
            <View className="flex-row items-center border border-gray-300 rounded-md p-4">
                {icon && (
                    <Ionicons
                        name={icon}
                        size={20}
                        color="gray"
                        className="mr-2"
                    />
                )}
                <TextInput
                    className="flex-1 ml-2 font-sreg text-lg text-slate-900 dark:text-slate-50"
                    placeholder={placeholder}
                    placeholderTextColor="gray"
                    onChangeText={handleChangeText}
                    secureTextEntry={isSecure}
                    {...props}
                />
                {props.secureTextEntry && (
                    <TouchableOpacity
                        onPress={toggleSecureEntry}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        <Ionicons
                            name={isSecure ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color="gray"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
