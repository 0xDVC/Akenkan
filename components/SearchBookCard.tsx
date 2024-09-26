import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'

interface cardProps {
    item:{
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  pageCount: number;
  categories: string[];
  thumbnail: string; }// URL path to the book's thumbnail image
}

const SearchBookCard = ({item}:cardProps) => {

  return (
    <TouchableOpacity activeOpacity={0.8} className="mb-2  flex-row gap-2 items-end">
      <View className="w-16 h-20  rounded-r-lg bg-red-200 border-l-4 border-l-primary">
        <Image source={{ uri: item.thumbnail }} />
      </View>
      <View className=''>
        <Text className="bold text-xl text-slate-900 dark:text-slate-50" numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text className="italic text-slate-700 dark:text-slate-500" numberOfLines={1} ellipsizeMode="tail">
          {item.subtitle}
        </Text>
        <Text className='text-primary' numberOfLines={1} ellipsizeMode="tail">By:{item.authors.join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SearchBookCard