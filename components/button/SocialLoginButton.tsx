import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from '@/hooks/useThemeColor';

interface SocialLoginButtonProps {
    provider: 'google' | 'apple';
    onPress: () => void;
}

export default function SocialLoginButton ({ provider, onPress }: SocialLoginButtonProps) {
    const iconName = provider === 'google' ? 'logo-google' : 'logo-apple';
    const color = useThemeColor({}, 'primary'); 

    return (
        <TouchableOpacity
            className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-md"
            onPress={onPress}
        >
            <Ionicons name={iconName} size={60} color={color} />
        </TouchableOpacity>
    );
};