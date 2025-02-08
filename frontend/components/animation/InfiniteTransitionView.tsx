import React from "react";
import { View, Text, Dimensions } from "react-native";
import { MotiView } from "moti";

const { width } = Dimensions.get("window");

export default function InfiniteTransitionView({
  labels,
}: {
  labels: string[];
}) {
  return (
    <View style={{ overflow: "hidden", height: 50 }}>
      {labels.map((label, index) => (
        <MotiView
          key={index}
          from={{ translateX: width }}
          animate={{ translateX: -width }}
          transition={{
            type: "timing",
            duration: 10000,
            delay: index * 4000,
            loop: true,
            repeatReverse: false,
          }}
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Text className="font-sans text-center text-[#EA4C7C] text-lg font-semibold">
            {label}
          </Text>
        </MotiView>
      ))}
    </View>
  );
}
