import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-semibold">Profile</Text>
      <Link href={"/profile/settings"} className="underline text-purple-400">
        Take me to Setting
      </Link>
    </View>
  );
};

export default Profile;
