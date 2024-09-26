import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import SearchBookCard from '@/components/SearchBookCard'
import booksData from '../../assets/books.json'


const search = () => {
  
  return (
    <View className="bg-amber-50 dark:bg-slate-700 h-full  ">
      <View className="p-2 flex-row items-center mb-5 gap-2">
        <TouchableOpacity
          activeOpacity={0.6}
          className="bg-[#b4541340] rounded-lg aspect-square p-2 "
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" color={"#fff"} size={25} />
        </TouchableOpacity>
        <TextInput
          className="h-10 flex-1 text-center text-slate-800 dark:text-slate-200 dark:bg-slate-900 rounded-full px-4 text-base border border-primary "
          placeholder="Search"
          placeholderTextColor="#1e293b"
          autoFocus
          //   onSubmitEditing={() => onSearchBook()}
        />
      </View>
      <View className="px-5 pb-20">
        <FlatList
          data={booksData}
          // keyExtractor={(item) => item.valueOf()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={SearchBookCard}
        />
      </View>
    </View>
  );
}

export default search