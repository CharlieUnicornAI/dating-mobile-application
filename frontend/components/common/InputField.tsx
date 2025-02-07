import { useState } from "react";
import { View, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

interface InputProps {
  className?: string;
  type: "text" | "password";
  placeholder?: string;
  icon?: FontAwesomeName;
  value?: string;
  onChange: (value: string) => void;
}

export default function InputFiled({
  className,
  type,
  placeholder,
  icon,
  value,
  onChange,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`w-full flex flex-row items-center px-3 py-2 rounded-lg border ${
        isFocused
          ? "border-[#EA4C7C] shadow-md shadow-[#EA4C7C] transition-all ease-in-out duration-300"
          : "border-slate-300"
      } ${className}`}
    >
      {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={isFocused ? "#EA4C7C" : "#A0A0A0"}
        />
      )}
      <TextInput
        className={`flex-1 text-sm ${
          isFocused ? "text-black" : "text-[#A0A0A0]"
        } ml-2 outline-none border-none`}
        placeholder={isFocused ? "" : placeholder}
        value={value}
        secureTextEntry={type === "password"}
        onChangeText={(value: string) => onChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </View>
  );
}
