import { View, Text, ScrollView, Image } from "react-native";

interface Book {
    title: string;
    authors?: string[];
    imageLinks?: {
        thumbnail?: string;
    };
    categories?: string[];
    description?: string;
}

interface BookDescriptionProps {
    book: Book; 
}

export default function BookDescription({ book }: BookDescriptionProps) {
    return (
        <ScrollView className="flex-1 bg-background-light p-4">
            <View className="flex-row justify-end">
                <Image
                    source={{ uri: book.imageLinks?.thumbnail }}
                    className="w-32 h-48 object-cover rounded-lg" // Adjust size as needed
                />
            </View>
            <View className="mt-4 items-center"> {/* Center the content */}
                <Text className="text-2xl font-bold text-center">{book.title}</Text>
                <Text className="text-lg text-gray-600 text-center mt-2">{book.authors?.join(', ')}</Text>
                <Text className="text-base text-gray-500 text-center mt-1">{book.categories?.join(', ')}</Text>
                <Text className="text-base mt-4">{book.description}</Text>
            </View>
        </ScrollView>
    );
}