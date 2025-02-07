import { View, Text } from "react-native";
import Container from "@/components/containers/Container";
import Logo from "@/components/common/Logo";
import FooterContainer from "@/components/containers/FooterContainer";
import InputFiled from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function Signup() {
  const handleEmailChange = (value: string) => {};

  return (
    <Container>
      <Logo />
      <View className="flex flex-col items-center justify-center gap-2 mt-10 w-full px-4">
        <Text className="text-black font-semibold font-sans text-xl">
          Signup to Continue
        </Text>
        <Text className="text-gray-500 font-sans text-sm">
          Please register to continue
        </Text>
        <InputFiled
          className="mt-8"
          type="text"
          placeholder="Jhon@example.com"
          value=""
          icon="envelope"
          onChange={handleEmailChange}
        />
        <InputFiled
          type="password"
          placeholder="Password"
          value=""
          icon="key"
          onChange={handleEmailChange}
        />
        <Button
          type="default"
          icon="paper-plane-sharp"
          title="Signup with Email"
          className="mt-1"
        />
        <Button
          type="outline"
          icon="logo-google"
          title="Signup with Google"
          className="mt-1"
        />
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
