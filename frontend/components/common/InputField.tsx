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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 6,
        borderColor: isFocused ? "#EA4C7C" : "#a0a0a0",
      }}
    >
      <FontAwesome
        name={icon}
        size={15}
        color={isFocused ? "#EA4C7C" : "#a0a0a0"}
      />
      <TextInput
        style={{
          flex: 1,
          marginLeft: 8,
          fontSize: 12,
          fontFamily: "Montserrat",
          color: isFocused ? "black" : "#a0a0a0",
          borderWidth: 0,
          outlineColor: "white",
        }}
        placeholder={isFocused ? "" : placehoder}
        placeholderTextColor="#a0a0a0"
        secureTextEntry={secureTextEntry}
        cursorColor="black"
        onChangeText={(value) => onChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
