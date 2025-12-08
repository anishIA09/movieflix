import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Clips = () => {
  const insets = useSafeAreaInsets();
  console.log("insets", insets);

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
      className="flex-1 bg-yellow-500 items-center justify-center"
    >
      <Text>Clips</Text>
    </View>
  );
};

export default Clips;
