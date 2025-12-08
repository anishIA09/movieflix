import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Clips = () => {
  return (
    <SafeAreaView className="flex-1 bg-yellow-500" edges={["top"]}>
      <View className="flex-1 bg-yellow-500 items-center justify-center">
        <Text>Clips</Text>
      </View>
    </SafeAreaView>
  );
};

export default Clips;
