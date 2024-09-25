import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import HciGenreBadge from "@/components/preference/HciGenreBadge";
import HciText from "@/components/Hci/HciText";
import HciButton from "@/components/onboarding/HciButton";

const genre = () => {
  const finishGenre = () => {
    router.push("level");
  };

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres: string[] = [
    "them",
    "some one",
    "something",
    "nothing to be",
    "stories",
    "ekos",
    "hci",
    "computer",
    "technology",
    "Agricultural science",
    "i don't know",
    "a lot",
    "can be typed",
  ];

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
      <View className="justify-around h-full bg-white dark:bg-slate-700">
        <View className="">
          <View className="justify-center p-5 gap-5 flex-row">
            <View className="rounded-full w-10 h-2 bg-amber-500"/>
            <Link href={"level"} asChild>
              <TouchableOpacity className="rounded-full w-10 h-2 bg-gray-100"></TouchableOpacity>
            </Link>
            <View className="rounded-full w-10 h-2 bg-gray-100 shadow"/>
          </View>

          <View className="gap-2">
            <View className="">
              <HciText
                type="header"
                className="font-pbold  text-center text-4xl mt-[35px]"
              >
                Select genres you are interested in
              </HciText>
              <View></View>
              <View className="px-5">
                <HciText type="title" className="opacity-70 text-center mt-4">
                  Select genres that resonate with you to recieve personal book
                  recommendations.
                </HciText>
              </View>
            </View>

              <View className="flex-row flex-wrap gap-x-1 gap-y-1 items-center justify-center">
                {genres.map((gen, i) => (
                  <HciGenreBadge
                    key={i}
                    title={gen}
                    isSelected={selectedGenres.includes(gen)}
                    onPress={() => toggleGenre(gen)}
                  />
                ))}
              </View>
          </View>
        </View>

        <View className="px-10">
          <TouchableOpacity>
            <HciButton className="" onPress={finishGenre}>
              Next to reading spead
            </HciButton>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default genre;
