import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { View, Text } from "react-native";

// Import your global CSS file
import "../global.css";

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
      {/* Render Start Screens */}
      <Stack.Screen name="(start)" />
      {/* Render Auth Screens */}
      <Stack.Screen name="(auth)" />
      {/* Render Main Tabs */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
