import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ButtonProps {
  type: "default" | "outline";
  label: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  onClick: () => void;
}

export default function Button({ type, label, icon, onClick }: ButtonProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Pressable
      className={`w-full p-2 rounded-md flex flex-row items-center justify-center gap-2 border border-[#EA4C7C] transition-all ease-in-out duration-300 ${
        (type === "default" && isFocused) || (type === "outline" && !isFocused)
          ? "bg-white"
          : (type === "default" && !isFocused) ||
            (type === "outline" && isFocused)
          ? "bg-[#EA4C7C]"
          : "bg-white"
      }`}
      onPointerEnter={() => setIsFocused(true)}
      onPointerLeave={() => setIsFocused(false)}
      onPress={onClick}
    >
      <FontAwesome
        name={icon}
        size={15}
        color={
          (type === "default" && isFocused) ||
          (type === "outline" && !isFocused)
            ? "#EA4C7C"
            : (type === "default" && !isFocused) ||
              (type === "outline" && isFocused)
            ? "white"
            : "#EA4C7C"
        }
      />
      <Text
        className={`text-sm font-sans transition-all ease-in-out duration-300 ${
          (type === "default" && isFocused) ||
          (type === "outline" && !isFocused)
            ? "text-[#EA4C7C]"
            : (type === "default" && !isFocused) ||
              (type === "outline" && isFocused)
            ? "text-white"
            : "text-white"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
