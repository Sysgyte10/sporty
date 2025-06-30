import { colors } from "@src/resources/color/color";

export const useCustomButton = () => {
  const getButtonColor = (
    purple?: boolean,
    black?: boolean,
    lightGrey?: boolean,
    darkGrey?: boolean,
    white?: boolean,
    danger?: boolean
  ) => {
    if (purple) {
      return colors?.purple;
    } else if (black) {
      return colors.black;
    } else if (lightGrey) {
      return colors.lightGrey;
    } else if (darkGrey) {
      return colors.darkGrey;
    } else if (white) {
      return colors.white;
    } else if (danger) {
      return colors.danger;
    }
  };

  return {
    getButtonColor,
  };
};
