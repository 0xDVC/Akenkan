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
        <View className="justify-center items-center px-4">
            <Ionicons name={icon} size={48} />
            <Text className="font-sreg text-sm text-gray-100">{title}</Text>
            <Text className="font-sblk text-xl text-center" style={{ color }}>{subtitle}</Text>
        </View>
    );
}