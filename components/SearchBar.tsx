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
      router.push({ pathname: '/search', params: { searchQuery: search } });
    }
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <View className={`w-full ${otherStyle}`}>
      <View className="w-full flex-row items-center border border-gray-200 rounded-lg">
        <Ionicons name="search" size={24} color="gray" className="ml-2" />
        <TextInput
          className="flex-1 py-2 px-4 text-base"
          placeholder={placeholder}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearchSubmit} // Trigger search on submit
          autoCorrect={false}
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