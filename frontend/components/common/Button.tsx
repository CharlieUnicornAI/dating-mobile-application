import { Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type IoniconName = keyof typeof Ionicons.glyphMap;

interface ButtonProps {
  className?: string;
  title?: string;
  icon?: IoniconName;
  type: "default" | "outline";
}

export default function Button({ className, title, icon, type }: ButtonProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isDefault = type === "default";

  // Background color logic
  const bgColor = isFocused
    ? isDefault
      ? "bg-white"
      : "bg-[#EA4C7C]" // When focused and NOT default → bg-[#EA4C7C]
    : isDefault
    ? "bg-[#EA4C7C]"
    : "bg-white"; // When not focused and NOT default → bg-white

  // Text & Icon color logic
  const textColor = isFocused
    ? isDefault
      ? "text-[#EA4C7C]"
      : "text-white" // When focused and NOT default → text-white
    : isDefault
    ? "text-white"
    : "text-[#EA4C7C]"; // When not focused and NOT default → text-[#EA4C7C]

  const iconColor = isFocused
    ? isDefault
      ? "#EA4C7C"
      : "#FFFFFF" // When focused and NOT default → White icon
    : isDefault
    ? "#FFFFFF"
    : "#EA4C7C"; // When not focused and NOT default → #EA4C7C

  const borderColor = "border border-[#EA4C7C]";

  return (
    <Pressable
      className={twMerge(
        "w-full p-2 flex flex-row items-center justify-center gap-4 rounded-lg transition-all ease-in-out duration-300",
        bgColor,
        borderColor,
        className
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {icon && <Ionicons name={icon} size={20} color={iconColor} />}
      {title && (
        <Text className={twMerge("font-sans text-sm", textColor)}>{title}</Text>
      )}
    </Pressable>
  );
}
