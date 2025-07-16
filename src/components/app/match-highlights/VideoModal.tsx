import { CustomButton } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useCallback, useState } from "react";
import { Alert, Modal, Platform, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface IVideoModalProps {
  videoId: string;
  visible: boolean;
  onCloseModal: () => void;
}

export const VideoModal: React.FC<IVideoModalProps> = ({
  videoId,
  visible,
  onCloseModal,
}) => {
  const [playing, setPlaying] = useState<boolean>(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        animationType='slide'
        onRequestClose={() => onCloseModal()}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            paddingHorizontal: moderateScale(10),
          }}>
          <View style={styles.ctaImgContainer}>
            <YoutubePlayer
              height={400}
              play={playing}
              videoId={videoId}
              onChangeState={onStateChange}
            />
          </View>
          <CustomButton
            title='X'
            textType='semi-bold'
            textSize={13}
            purple
            textWhite
            buttonType='Solid'
            onPress={() => onCloseModal()}
            btnStyle={styles.closeBtn}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaImgContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? DVH(24) : DVH(26),
    overflow: "hidden",
    backgroundColor: "#242222",
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  closeBtn: {
    width: Platform.OS === "ios" ? DVW(12) : DVW(13),
    height: Platform.OS === "ios" ? DVH(5.5) : DVH(6.5),
    borderRadius: moderateScale(100),
    marginVertical: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
