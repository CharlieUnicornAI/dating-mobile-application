import CreateProfileContainer from "@/components/containers/CreateProfileContainer";
import ScreenTransition from "@/components/animation/ScreenTransition";
import { View } from "react-native";
import InputField from "@/components/common/InputField";
import { useState } from "react";

export default function Detail() {
  const [fullname, setFullname] = useState<string>("");

  return (
    <ScreenTransition animationKey={0} direction="enter">
      <CreateProfileContainer
        title="Edit Personal Details"
        subtitle="Please edit your personal details"
      >
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
        </View>
      </CreateProfileContainer>
    </ScreenTransition>
  );
}
