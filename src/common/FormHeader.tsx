import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IFormHeaderProps {
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
}

export const FormHeader: React.FC<IFormHeaderProps> = ({
  title,
  description,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <CustomText type='bold' size={18} white>
        {title}
      </CustomText>
      <CustomText type='regular' size={12} lightGrey>
        {description}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(2),
  },
});
