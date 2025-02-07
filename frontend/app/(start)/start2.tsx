import { View, Dimensions, Text } from "react-native";
import { Image } from "expo-image";
import type { OptionGroupItemType } from "@/components/common/OptionGroup";
import OptionGroup from "@/components/common/OptionGroup";
import { useState } from "react";

const BackgroundImage = require("@/assets/images/start_step2_bg.png");

const initialOptions: OptionGroupItemType[] = [
  { key: "1", title: "Option 1", checked: false },
  { key: "2", title: "Option 2", checked: false },
  { key: "3", title: "Option 3", checked: false },
];

export default function Start2() {
  const [options, setOptions] = useState<OptionGroupItemType[]>(initialOptions);

  const handleSelect = (selectedKey: string) => {
    setOptions((prev) =>
      prev.map((item) => ({
        ...item,
        checked: item.key === selectedKey,
      }))
    );
  };

  return (
    <View className="flex flex-col items-center justify-center p-8 gap-10 relative min-h-screen">
      <Image
        source={BackgroundImage}
        style={{
          width: 304,
          height: 424,
          resizeMode: "contain",
          position: "absolute",
          top: 100,
        }}
      />
      <View className="rounded-lg px-4 py-6 bg-white w-[90%] mx-auto absolute bottom-5">
        <Text className="block text-center font-sans text-lg font-extrabold mb-4">
          Find your partner with us
        </Text>
        <OptionGroup items={options} onSelect={handleSelect} />
      </View>
    </View>
  );
}
