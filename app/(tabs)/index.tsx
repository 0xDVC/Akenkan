import SearchBar from "@/components/SearchBar";
import { View, Text, ScrollView, ActivityIndicator, FlatList, Image, TouchableOpacity } from "react-native";
import BookCard from "@/components/Bookcard";
import useBooksByCategory from "@/hooks/useBooksByCategory";
import { useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [category, setCategory] = useState<string>("fiction"); // Default category
  const { books, loading, error } = useBooksByCategory(category); // Fetch books by category

  const handleSearch = (query: string) => {
    setCategory(query); // Update the category based on search
  };

  return (
    <>
      <ScrollView className="flex-1 bg-background-light dark:bg-slate-900">
        <View className="w-full px-4 flex items-start justify-start">
          {/* <Text className="dark:text-slate-50 font-amed text-4xl text-left pt-11">Discover</Text> */}

          <View className="flex-row w-full justify-between items-center">
            <Text className="dark:text-slate-50 font-amed text-center text-4xl pt-11">
              Discover
            </Text>
            <TouchableOpacity onPress={() => console.log("Button tapped")}>
              <Link className="pt-10" href="/sign-in">
                <Ionicons name="person-circle" size={45} color="#64748b" />
              </Link>
            </TouchableOpacity>
            {/* <View className='pt-10'>
              <Image
                source={icon} // Use the imported image
                className="w-14 h-14" // Tailwind classes for width and height
              />
            </View> */}
          </View>
          <View className="w-1/5 h-1 bg-primary mt-2 pb-1 rounded-sm mb-8" />
          <SearchBar
            placeholder="Type category to search"
            // onSearch={handleSearch} // Pass the handleSearch function
          />

          <Text className="dark:text-slate-50 font-amed text-2xl text-left pt-7">
            Daily Picks
          </Text>
          <Text className="dark:text-slate-50 font-areg text-base text-left">
            Books Selected at Random
          </Text>

          {loading && <ActivityIndicator size="large" color="#A3633A" />}
          {error && <Text>{error}</Text>}

          <FlatList
            data={books}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <BookCard
                thumbnail={item.imageLinks?.thumbnail || ""}
                title={item.title}
                author={item.authors?.join(", ") || "Unknown Author"}
                genre={item.categories?.join(", ") || "Unknown Genre"}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
          />

          <Text className="dark:text-slate-50 font-amed text-2xl text-left pt-7">
            Collections for You
          </Text>
          <Text className="dark:text-slate-50 font-areg text-base text-left">
            Books Selected based on your Preferrences
          </Text>

          {loading && <ActivityIndicator size="large" color="#A3633A" />}
          {error && <Text>{error}</Text>}

          <FlatList
            data={books}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <BookCard
                thumbnail={item.imageLinks?.thumbnail || ""}
                title={item.title}
                author={item.authors?.join(", ") || "Unknown Author"}
                genre={item.categories?.join(", ") || "Unknown Genre"}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
          />
        </View>
      </ScrollView>
    </>
  );
}