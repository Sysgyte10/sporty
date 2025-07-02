import * as yup from "yup";

export const userSelectionStep1ValidationSchema = yup.object().shape({
  pickedMatches: yup
    .array()
    .of(yup.string().required())
    .min(1, "You must pick at least one match")
    .required("This field is required"),
});

export const userSelectionStep2ValidationSchema = yup.object().shape({
  matchAlerts: yup
    .array()
    .of(yup.string().required())
    .min(1, "You must pick at least one match")
    .required("This field is required"),
});
