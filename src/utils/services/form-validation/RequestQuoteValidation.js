import * as yup from "yup";

export const requestQuoteSchemaValidation = yup.object({
  firstName: yup
    .string()
    .min(3, "First name must be at least 3 characters.")
    .required("First name is required."),
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters.")
    .required("Last name is required."),
  mobile: yup
    .string()
    .matches(/^\+?[1-9]\d{9,14}$/, "Must be a valid phone number with at least 10 digits.")
    .required("Mobile number is required."),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Email is required."),
  location: yup.string().required("Location is required."),
  reasonOfInquiry: yup.string().required("Reason of inquiry is required."),
  message: yup.string().required("Message is required."),
});