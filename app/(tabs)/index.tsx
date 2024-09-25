import SearchBar from "@/components/SearchBar";
import { View, Text, ScrollView } from "react-native";
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleSearch = (search: string) => {
    // This function can be used to filter or fetch results based on the search input
    // For now, it returns an empty array to satisfy the expected return type
    return []; // Replace with actual search logic
  };

  return (
    <>
      <ScrollView className="flex-1 bg-background-light">
        <View className="w-full px-4 flex items-start justify-start">
          <Text className="font-areg text-4xl text-left pt-11">Discover</Text>
          <View className="w-1/5 h-1 bg-primary mt-2 pb-1 rounded-sm mb-8" />
          <SearchBar
            placeholder="Type title, author or keyword"
            onSearch={handleSearch} // Pass the handleSearch function
            renderItem={(item) => (
              <View>
                {/* Render your search result item here */}
              </View>
            )}
          />


        </View>
      </ScrollView>
    </>
  );
}