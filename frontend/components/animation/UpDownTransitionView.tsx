import React from "react";
import { View, Easing } from "react-native";
import { MotiView } from "moti";

export default function UpDownTransitionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotiView
      from={{ translateY: -10 }} // Move 10px up
      animate={{ translateY: 10 }} // Move 10px down
      transition={{
        type: "timing",
        duration: 1000, // Smooth duration
        easing: Easing.inOut(Easing.quad), // ✅ Correct easing function
        loop: true, // Infinite animation
        repeatReverse: true, // Reverse each time
      }}
      className="flex justify-center items-center"
    >
      {children}
    </MotiView>
  );
}
