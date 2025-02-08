import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ButtonProps {
  type: "default" | "outline";
  label: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  iconPosition: "left" | "right";
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({
  type,
  label,
  icon,
  iconPosition,
  disabled,
  onClick,
}: ButtonProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Pressable
      className={`w-full h-12 rounded-md flex flex-row items-center justify-center gap-2 border border-[#EA4C7C] transition-all ease-in-out duration-300 ${
        disabled
          ? "bg-gray-300 text-[#a0a0a0] border-[#a0a0a0]"
          : (type === "default" && isFocused) ||
            (type === "outline" && !isFocused)
          ? "bg-white"
          : (type === "default" && !isFocused) ||
            (type === "outline" && isFocused)
          ? "bg-[#EA4C7C]"
          : "bg-white"
      }`}
      onPointerEnter={!disabled ? () => setIsFocused(true) : undefined}
      onPointerLeave={!disabled ? () => setIsFocused(false) : undefined}
      onPress={onClick}
      disabled={disabled}
    >
      {iconPosition === "left" && (
        <FontAwesome
          name={icon}
          size={15}
          color={
            disabled
              ? "#a0a0a0"
              : (type === "default" && isFocused) ||
                (type === "outline" && !isFocused)
              ? "#EA4C7C"
              : (type === "default" && !isFocused) ||
                (type === "outline" && isFocused)
              ? "white"
              : "#EA4C7C"
          }
        />
      )}
      <Text
        className={`text-sm font-sans transition-all ease-in-out duration-300 ${
          disabled
            ? "text-[#a0a0a0]"
            : (type === "default" && isFocused) ||
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
      {iconPosition === "right" && (
        <FontAwesome
          name={icon}
          size={15}
          color={
            disabled
              ? "#a0a0a0"
              : (type === "default" && isFocused) ||
                (type === "outline" && !isFocused)
              ? "#EA4C7C"
              : (type === "default" && !isFocused) ||
                (type === "outline" && isFocused)
              ? "white"
              : "#EA4C7C"
          }
        />
      )}
    </Pressable>
  );
}
