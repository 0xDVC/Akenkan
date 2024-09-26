import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

interface EmptyStateProps {
    title: string;
    subtitle: string;
    icon: keyof typeof Ionicons.glyphMap;
}

export default function EmptyState({ title, subtitle, icon }: EmptyStateProps) {
    const color = useThemeColor({}, 'primary');

    return (
        <View className="inline-flexjustify-center items-center px-4">
            <Ionicons name={icon} style={{color, opacity: 0.5}} size={60} />
            <Text className="font-sreg p-8 text-xl text-center text-opacity-20 text-primary-light">{title}</Text>
            <Text className="font-smed text-2xl text-center text-opacity-15 text-primary-light" >{subtitle}</Text>
        </View>
    );
}