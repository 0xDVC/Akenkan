import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import SearchBookCard from '@/components/SearchBookCard'
import booksData from '../../assets/books.json'


const search = () => {

  interface BookItem {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    pageCount: number;
    categories: string[];
    thumbnail: string; // Only the image file name
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookItem[]>(booksData);

   const handleSearch = (query: string) => {
     setSearchQuery(query);

     if (query.trim() === "") {
       setFilteredBooks(booksData); // Reset to the full list if search query is empty
     } else {
       const filteredData = booksData.filter((book) => {
         const queryLowerCase = query.toLowerCase();
         return (
           book.title.toLowerCase().includes(queryLowerCase) ||
           book.authors.some((author) =>
             author.toLowerCase().includes(queryLowerCase)
           ) ||
           book.categories.some((category) =>
             category.toLowerCase().includes(queryLowerCase)
           )
         );
       });
       setFilteredBooks(filteredData);
     }
   };
  
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
          onChangeText={handleSearch}
          //   onSubmitEditing={() => onSearchBook()}
        />
      </View>
      <View className="px-5 pb-20">
        <FlatList
          data={filteredBooks}
          // keyExtractor={(item) => item.valueOf()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={SearchBookCard}
        />
      </View>
    </View>
  );
}

export default search