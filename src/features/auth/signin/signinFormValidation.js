import * as yup from "yup";

export const signinValidationSchema = yup.object({
    email:yup.string().required().email("invalid email format"),
    password:yup.string().required()
    .min(7,"Password must be at least 7 characters")
    .max(50,"Password must be at most 50 characters"),

})