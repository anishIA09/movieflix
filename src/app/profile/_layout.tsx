import { Stack, usePathname } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  const pathname = usePathname();

  return (
    <Stack
      screenOptions={{
        animation: pathname.startsWith("/profile") ? "default" : "none",
      }}
    >
      <Stack.Screen
        name="profile"
        options={{
          title: "My Profile",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
