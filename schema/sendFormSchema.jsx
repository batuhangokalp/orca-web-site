import * as Yup from "yup";

export const sendFormSchema = Yup.object({
  fullName: Yup
    .string()
    .required("First name is required.")
    .min(4, "First name must be at least 4 characters."),
  businessName: Yup
    .string()
    .min(4, "First name must be at least 4 characters."),

  email: Yup
    .string()
    .required("Email is required.")
    .email("Email is invalid."),

    message: Yup
    .string()
    .required("Message is required.")
    .min(10, "First name must be at least 10 characters."),
});
