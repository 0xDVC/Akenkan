import React from 'react';
import { Stack } from "expo-router";


export default function ProfileLayout() {
    return (
        <Stack>

            <Stack.Screen
                name="profile-info"
                options={{
                    headerShown: false
                }}
            />

        </Stack>
    );
}