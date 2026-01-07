import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface IFormHeaderProps {
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  showBackBtn?: boolean;
  onPressBackBtn?: () => void;
}

export const FormHeader: React.FC<IFormHeaderProps> = ({
  title,
  description,
  style,
  showBackBtn,
  onPressBackBtn,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(5),
          marginLeft: moderateScale(-10),
        }}>
        {showBackBtn ? (
          <TouchableOpacity onPress={onPressBackBtn}>
            <MaterialIcons
              name='keyboard-arrow-left'
              size={moderateScale(30)}
              color={colors.white}
            />
          </TouchableOpacity>
        ) : null}
        <View>
          <CustomText type='bold' size={18} white>
            {title}
          </CustomText>
          <CustomText type='regular' size={12} lightGrey>
            {description}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(2),
    marginLeft: moderateScale(15),
  },
});
