import { windowHeight, windowWidth } from "./Dimensions";

export const DVH = (percentage: number) => {
  return (percentage / 100) * windowHeight;
};

export const DVW = (percentage: number) => {
  return (percentage / 100) * windowWidth;
};
