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

export const userSelectionStep3ValidationSchema = yup.object().shape({
  pushNotifications: yup
    .array()
    .of(yup.string().required())
    .min(1, "You must pick at least one match")
    .required("This field is required"),
  news: yup
    .array()
    .of(yup.string().required())
    .min(1, "You must pick at least one match")
    .required("This field is required"),
});

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email address")
    .required("Email is required"),
  password: yup.string().required("password is required"),
});

export const signUpValidationSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  phone_number: yup.string().required("phone number is required"),
  email: yup
    .string()
    .email("invalid email address")
    .required("email is required"),
  password: yup.string().required("password is required"),
});
