import { View, Text, StyleSheet } from "react-native";
import Container from "@/components/containers/Container";
import Logo from "@/components/common/Logo";
import FooterContainer from "@/components/containers/FooterContainer";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";
import ScreenTransition from "@/components/animation/ScreenTransition";

export default function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSigninWithEmailClick = () => {
    console.log("navigate to profile gender");
    router.push("/profile/create/gender");
  };

  const handleSigninWithGoogleClick = () => {};

  return (
    <ScreenTransition animationKey={0} direction="enter">
      <Container>
        <Logo />
        <View className="flex flex-col items-center justify-center gap-2 mt-2 w-full px-4">
          <Text className="text-black font-semibold font-sans text-xl">
            Signin to Continue
          </Text>
          <Text className="text-gray-400 font-sans text-sm">
            Please login to continue
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
          <View className="h-1" />
          <Button
            type="default"
            icon="paper-plane"
            label="Signin with Email"
            iconPosition="left"
            onClick={handleSigninWithEmailClick}
          />
          <Button
            type="outline"
            icon="google"
            iconPosition="left"
            label="Signin with Google"
            onClick={handleSigninWithGoogleClick}
          />
          <Text className="text-gray-400 font-sans text-xs mt-1">
            Don't you have account?
          </Text>
          <Text className="text-gray-400 font-sans text-xs">
            If not, please register{" "}
            <Link href="/auth/signup" className="text-[#EA4C7C] underline">
              here
            </Link>
          </Text>
        </View>
        <FooterContainer bottom={10}>
          <Text className="text-xs block text-center font-sans">
            I accept all the
          </Text>
          <View className="w-full flex flex-row items-center justify-center gap-2">
            <Text className="text-[#EA4C7C] font-sans text-xs">
              Terms & Conditions
            </Text>
            <Text className="text-black font-sans text-xs">&</Text>
            <Text className="text-[#EA4C7C] font-sans text-xs">
              Privacy Policy
            </Text>
          </View>
        </FooterContainer>
      </Container>
    </ScreenTransition>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
  },
});
