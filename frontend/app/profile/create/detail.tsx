import CreateProfileContainer from "@/components/containers/CreateProfileContainer";
import ScreenTransition from "@/components/animation/ScreenTransition";
import { Pressable, View } from "react-native";
import InputField from "@/components/common/InputField";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ImageSelectModal from "@/components/modals/ImageSelectModal";
import FooterContainer from "@/components/containers/FooterContainer";
import Button from "@/components/common/Button";

export default function Detail() {
  const [visible, setVisible] = useState<boolean>(false);
  const [fullname, setFullname] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnClick = async () => {};

  return (
    <ScreenTransition animationKey={0} direction="enter">
      <CreateProfileContainer
        title="Edit Personal Details"
        subtitle="Please edit your personal details"
      >
        <View className="absolute top-32">
          <Pressable
            className={`flex w-[200px] h-[200px] items-center justify-center rounded-full border  transition-all duration-100 ease-in-out ${
              isFocused
                ? "bg-gray-100 border-[#EA4C7C] shadow-md shadow-pink-400"
                : "bg-white border-slate-300"
            }`}
            onPointerEnter={() => setIsFocused(true)}
            onPointerLeave={() => setIsFocused(false)}
            onPress={() => setVisible(true)}
          >
            <FontAwesome
              name="user"
              size={100}
              color={isFocused ? "#EA4C7C" : "black"}
            />
          </Pressable>
        </View>
        <View className="flex gap-4 w-full">
          <InputField
            placehoder="Full Name"
            icon="user"
            onChange={setFullname}
          />
          <InputField
            placehoder="Date of birth"
            icon="calendar"
            onChange={setFullname}
          />
          <InputField
            placehoder="Phone number"
            icon="phone"
            onChange={setFullname}
          />
        </View>
        <FooterContainer bottom={10}>
          <Button
            type="default"
            label="Continue"
            icon="caret-right"
            iconPosition="right"
            onClick={handleOnClick}
          />
        </FooterContainer>
      </CreateProfileContainer>
      <ImageSelectModal visible={visible} onClose={() => setVisible(false)} />
    </ScreenTransition>
  );
}
