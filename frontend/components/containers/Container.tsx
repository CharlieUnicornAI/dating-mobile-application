import { View } from "react-native";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full min-h-screen p-8 flex flex-col items-center justify-center relative">
      {children}
    </View>
  );
}
