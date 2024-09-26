import SearchBar from '@/components/SearchBar';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import EmptyState from '@/components/EmptyState';
// import { icon } from '@/assets/images/icon.png';


export default function Library() {
    const handleSearch = (search: string) => {
        // This function can be used to filter or fetch results based on the search input
        // For now, it returns an empty array to satisfy the expected return type
        return []; // Replace with actual search logic
    };

    return (
      <>
        <ScrollView className="flex-1 bg-background-light dark:bg-slate-900">
          <View className="w-full px-4 flex">
            <View className="flex-row justify-between items-center">
              <Text className="dark:text-slate-50 font-amed text-center text-4xl pt-11">
                Library
              </Text>
              <TouchableOpacity onPress={() => console.log("Button tapped")}>
                <Link className="pt-10" href="/profile-info">
                  <Ionicons name="settings" size={33} color="#64748b" />
                </Link>
              </TouchableOpacity>
            </View>

            <View className="w-1/5 h-1 bg-primary mt-2 pb-1 rounded-sm mb-8" />

            <SearchBar
              placeholder="Search for your bookmarks or downloads"
              // onSearch={handleSearch}
            />
            <View className="flex-1 justify-center items-center pt-32">
              <EmptyState
                title="Oops!"
                subtitle="Nothing to see here"
                icon="search"
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
}