import { CustomText } from "@src/components/shared";
import React from "react";

interface IStep1Props {
  useFormProps: any;
}

export const Step1: React.FC<IStep1Props> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <>
      <CustomText type='semi-bold' size={17} white>
        All
      </CustomText>
    </>
  );
};
