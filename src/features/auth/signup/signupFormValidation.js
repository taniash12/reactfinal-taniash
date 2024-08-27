import * as yup from "yup";

export const signupValidationSchema = yup.object({
    firstName:yup.string().required()
    .min(3,"First name must include at least 3 characters")
    .max(50,"First name must includes at most 50 characters"),
    lastName:yup.string().required()
    .min(3,"First name must include at least 3 characters")
    .max(50,"First name must includes at most 50 characters"),
    email:yup.string().required().email("invalid email adresse"),
    password:yup.string().required()
    .min(7,"Password must be at least 7 characters")
    .max(50,"Password must be at most 50 characters"),
})