import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface BookCardProps {
    thumbnail: string;
    title: string;
    author: string;
    genre: string;
}

export default function BookCard({ thumbnail, title, author, genre }: BookCardProps) {
    return (
        <TouchableOpacity>

            <View className="w-60 h-[460] mr-3 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                <View className="flex-3 h-3/4 object-cover">
                    <Image source={{ uri: thumbnail }} className="w-full h-full" />
                </View>
                <View className="flex-2 p-4">
                    <Text className="text-lg font-abld" numberOfLines={1}>{title}</Text>
                    <Text className="text-sm text-gray-600" numberOfLines={1}>{author}</Text>
                    <View className="bg-gray-200 rounded-md px-2 py-1 mt-1 self-start">
                        <Text className="text-xs font-abld text-gray-800">{genre}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}