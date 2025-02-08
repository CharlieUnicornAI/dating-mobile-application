import { View, Text, StyleSheet } from "react-native";
import Container from "@/components/containers/Container";
import Logo from "@/components/common/Logo";
import FooterContainer from "@/components/containers/FooterContainer";
import { useState } from "react";
import { Link } from "expo-router";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignupWithEmailClick = () => {};

  const handleSignupWithGoogleClick = () => {};

  return (
    <Container>
      <Logo />
      <View className="flex flex-col items-center justify-center gap-2 mt-10 w-full px-4">
        <Text className="text-black font-semibold font-sans text-xl">
          Signup to Continue
        </Text>
        <Text className="text-gray-400 font-sans text-sm">
          Please register to continue
        </Text>
        <InputField
          placehoder="Jhon@example.com"
          icon="envelope"
          onChange={setEmail}
        />
        <InputField
          placehoder="Password"
          icon="key"
          secureTextEntry={true}
          onChange={setPassword}
        />
        <View className="h-2" />
        <Button
          type="default"
          icon="paper-plane"
          iconPosition="left"
          label="Signup with Email"
          onClick={handleSignupWithEmailClick}
        />
        <Button
          type="outline"
          icon="google"
          iconPosition="left"
          label="Signup with Google"
          onClick={handleSignupWithEmailClick}
        />
        <Text className="text-gray-400 font-sans text-xs mt-1">
          Do you have already account?
        </Text>
        <Text className="text-gray-400 font-sans text-xs">
          If so, please login{" "}
          <Link href="/auth/signin" className="text-[#EA4C7C] underline">
            here
          </Link>
        </Text>
      </View>
      <FooterContainer bottom={10}>
        <Text className="text-sm block text-center font-sans">
          I accept all the
        </Text>
        <View className="w-full flex flex-row items-center justify-center gap-2">
          <Text className="text-[#EA4C7C] font-sans text-sm">
            Terms & Conditions
          </Text>
          <Text className="text-black font-sans text-sm">&</Text>
          <Text className="text-[#EA4C7C] font-sans text-sm">
            Privacy Policy
          </Text>
        </View>
      </FooterContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
  },
});
