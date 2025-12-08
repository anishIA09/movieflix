import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "./global.css";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar barStyle={"default"} />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="clips"
          options={{
            title: "Clips",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "My Profile",
            headerShown: false,
            popToTopOnBlur: true,
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
