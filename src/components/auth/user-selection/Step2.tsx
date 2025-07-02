import { CustomText } from "@src/components/shared";
import React from "react";

interface IStep2Props {
  useFormProps: any;
}

export const Step2: React.FC<IStep2Props> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <>
      <CustomText type='semi-bold' size={17} white>
        Match Alerts
      </CustomText>
    </>
  );
};
