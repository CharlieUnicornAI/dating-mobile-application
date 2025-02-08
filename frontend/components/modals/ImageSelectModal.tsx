import { View } from "react-native";
import { useState } from "react";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import ModalContainer from "../containers/ModalContainer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import UpDownTransitionContainer from "../animation/UpDownTransitionView";
import * as ImagePicker from "expo-image-picker";
import AvatarGroup from "../common/AvatarGroup";
import * as Progress from "react-native-progress";

export default function ImageSelectModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageGroup, setSelectedImageGroup] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCameraClick = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleLibraryClick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      selectionLimit: 4,
      allowsEditing: true,
      quality: 4,
    });
    setLoading(true);

    if (!result.canceled) {
      setSelectedImage(result.assets[result.assets.length - 1].uri);
      const uris = result.assets.map((asset) => asset.uri);
      setSelectedImageGroup([...selectedImageGroup, ...uris]);
    }
    setLoading(false);
  };

  const handleSaveClick = async () => {};

  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <View className="w-full flex flex-col items-center justify-center h-[80vh] gap-10 relative bg-white">
        <View className="w-full flex items-center justify-center absolute top-10">
          {selectedImage ? (
            <Avatar imgSource={selectedImage} size={200} />
          ) : (
            <UpDownTransitionContainer>
              <Avatar size={150}>
                <FontAwesome name="user" size={60} color="#EA4C7C" />
              </Avatar>
            </UpDownTransitionContainer>
          )}
        </View>
        <View>
          <AvatarGroup avatars={selectedImageGroup} />
        </View>
        <View className="w-full flex flex-col items-center justify-center gap-2 absolute bottom-0">
          <Button
            type="default"
            label="Camera"
            icon="camera"
            iconPosition="right"
            onClick={handleCameraClick}
          />
          <Button
            type="outline"
            label="Library"
            icon="folder"
            iconPosition="right"
            onClick={handleLibraryClick}
          />
          <View className="w-full grid grid-cols-2 gap-4">
            <Button
              type="default"
              label="Save"
              icon="save"
              iconPosition="right"
              loading={loading}
              onClick={handleSaveClick}
              disabled={!selectedImage}
            />
            <Button
              type="outline"
              label="Dismiss"
              icon="times"
              iconPosition="right"
              onClick={onClose}
            />
          </View>
        </View>
      </View>
    </ModalContainer>
  );
}
