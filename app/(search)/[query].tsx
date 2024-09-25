import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface SearchResult {
  id: string;
  title: string;
}

export default function SearchQueryPage() {
  const { query } = useLocalSearchParams(); 
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState(query || ''); 

  const performSearch = async (query: string): Promise<SearchResult[]> => {
    return [
      { id: '1', title: `Result for ${query} - 1` },
      { id: '2', title: `Result for ${query} - 2` },
    ];
  };

  useEffect(() => {
    if (searchQuery) {
      const fetchResults = async () => {
        const searchResults = await performSearch(searchQuery as string);
        setResults(searchResults);
      };
      fetchResults();
    }
  }, [searchQuery]); 

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold">Search Results for  "{searchQuery}"</Text>

      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 border-b border-gray-200">
              <Text>{item.title}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No results found.</Text>
      )}
    </View>
  );
}