import { View, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

interface InputFieldProps {
  placehoder?: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  secureTextEntry?: boolean;
  onChange: (value: string) => void;
}

export default function InputField({
  placehoder,
  icon,
  secureTextEntry,
  onChange,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View
      className={`w-full flex flex-row items-center justify-between border px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-[#EA4C7C] shadow-md shadow-pink-400"
          : "border-slate-300"
      }`}
    >
      <FontAwesome
        name={icon}
        size={15}
        color={isFocused ? "#EA4C7C" : "#a0a0a0"}
      />
      <TextInput
        className={`text-sm font-sans border-none outline-none w-full ml-2 ${
          isFocused ? "text-black" : "text-[#a0a0a0]"
        }`}
        placeholder={isFocused ? "" : placehoder}
        secureTextEntry={secureTextEntry}
        onChangeText={(value) => onChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
