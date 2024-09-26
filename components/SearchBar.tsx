import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface SearchBarProps {
  placeholder: string;
  otherStyle?: string; 
}

export default function SearchBar({ placeholder, otherStyle }: SearchBarProps) {
  const [search, setSearch] = useState('');

  const handleSearchSubmit = () => {
    if (search) {
    //   router.push({ pathname: '/search', params: { searchQuery: search } });
    }
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <View className={`w-full ${otherStyle}`}>
      <View className=" flex-row justify-center dark:bg-slate-900 rounded-full px-4 items-center border border-primary dark:border-slate-700">
        <Ionicons name="search" size={24} color="gray" className="ml-2" />
        <TextInput
          className="h-10  text-center   text-base "
          placeholder={placeholder}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearchSubmit} // Trigger search on submit
          autoCorrect={false}
          onFocus={() => router.push("/search")}
          placeholderTextColor={"#64748b"}
        />

        {search.length > 0 && (
          <TouchableOpacity onPress={clearSearch} className="mr-2">
            <Ionicons name="close-circle" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}