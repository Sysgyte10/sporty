import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomText } from "@src/components/shared";
import { Feather } from "@expo/vector-icons";
import { CustomInput } from "@src/components/shared/input/CustomInput";

interface SearchFilterModalProps {
  visible: boolean;
  onClose: () => void;
  searchValue: string;
  onSearchChange: (text: string) => void;
  placeholder?: string;
  modalStyle?: StyleProp<ViewStyle>;
}

export const SearchFilterModal: React.FC<SearchFilterModalProps> = ({
  visible,
  onClose,
  searchValue,
  onSearchChange,
  placeholder = "Search fixtures...",
  modalStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, modalStyle]}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <CustomText size={16} type='bold' white>
              Search Fixtures
            </CustomText>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Feather name='x' size={moderateScale(24)} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Search Input */}
          <View style={styles.inputContainer}>
            <CustomInput
              title='Search fixtures'
              value={searchValue}
              onChangeText={onSearchChange}
              type='custom'
              placeholder='Search by fixture name or club'
              placeHolderTextColor={colors.lightGrey}
              keyboardType='email-address'
              showErrorText
              inputStyle={{
                color: colors.white,
              }}
              style={{
                backgroundColor: "transparent",
                borderWidth: moderateScale(0.5),
              }}
            />
          </View>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <CustomText size={14} type='bold' white>
              Done
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: colors.black,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(20),
    minHeight: DVH(40),
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(20),
    paddingBottom: moderateScale(15),
    borderBottomWidth: DVW(0.5),
  },
  closeBtn: {
    padding: moderateScale(8),
  },
  inputContainer: {
    marginVertical: moderateScale(20),
  },
  input: {
    color: colors.black,
  },
  doneButton: {
    backgroundColor: colors.purple,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
    marginTop: moderateScale(20),
  },
});
