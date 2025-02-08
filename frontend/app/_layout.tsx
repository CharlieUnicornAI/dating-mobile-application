import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { View, Text } from "react-native";
import "../global.css";
import { enableLayoutAnimations } from "react-native-reanimated";
enableLayoutAnimations(false);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Render Auth Screens */}
      <Stack.Screen name="auth" />
      {/* Render Start Screens */}
      <Stack.Screen name="(start)" />
      {/* Render Not Found Screen */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
