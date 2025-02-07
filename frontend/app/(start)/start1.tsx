import { View, Text } from "react-native";
import InfiniteScalingView from "@/components/animation/InfiniteScalingView";
import { Image } from "expo-image";
import * as Progress from "react-native-progress";

const LogoImage = require("@/assets/images/logo.png");

export default function Start1() {
  return (
    <View className="min-h-screen relative w-full flex flex-col items-center justify-center">
      <View className="flex flex-col items-center justify-center gap-8">
        <InfiniteScalingView>
          <Image source={LogoImage} style={{ width: 50, height: 40 }} />
        </InfiniteScalingView>
        <Text className="text-pink-600 font-semibold text-lg font-sans">
          Charlie Unicorn AI Dating App
        </Text>
      </View>
      {/* Progress Bar Fixed to Bottom */}
      <View className="absolute bottom-20 w-full flex items-center">
        <Progress.CircleSnail color={["#EA4C7C"]} />
      </View>
    </View>
  );
}
