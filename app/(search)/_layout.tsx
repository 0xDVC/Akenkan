import React from "react";
import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "flip" }}>
      <Stack.Screen options={{ headerShown: false }} name="search" />
    </Stack>
  );
}
