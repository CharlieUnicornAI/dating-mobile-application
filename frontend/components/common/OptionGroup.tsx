import { View, Pressable, Text } from "react-native";

export type OptionGroupItemType = {
  key: string;
  title: string;
  checked: boolean;
};

interface OptionGroupProps {
  items: OptionGroupItemType[];
  onSelect: (key: string) => void;
}

export default function OptionGroup({ items, onSelect }: OptionGroupProps) {
  return (
    <View className="w-full flex flex-col items-center justify-center gap-2">
      {items.map((item, index) => (
        <Pressable
          key={index}
          className={`${
            !item.checked
              ? "bg-white border border-[#EA4C7C]"
              : "bg-[#EA4C7C] border-none"
          } flex items-center justify-center w-full rounded-lg h-14 transition-all duration-300 ease-in-out outline-none`}
          onPress={() => onSelect(item.key)}
        >
          <Text
            className={`${
              item.checked ? "text-white" : "text-black"
            } font-sans text-md`}
          >
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
