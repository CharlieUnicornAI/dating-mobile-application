import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import InfiniteScalingView from "../animation/InfiniteScalingView";

const LogoImage = require("@/assets/images/logo.png");

export default function Logo() {
  return (
    <View className="flex flex-col items-center justify-center gap-8">
      <InfiniteScalingView>
        <Image source={LogoImage} style={styles.logoImage} />
      </InfiniteScalingView>
      <Text className="text-pink-600 font-semibold text-lg font-sans">
        Charlie Unicorn AI Dating App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 50,
    height: 40,
  },
});
