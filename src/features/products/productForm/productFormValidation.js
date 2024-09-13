import * as yup from "yup";

export const productFromValidationSchema =yup.object({
    name:yup.string().required("Product name is required").min(3, "Product name should have at least 3 characters"),
    description:yup.string().required("Product description is required").min(3, "Product description should have at least 3 characters"),
    brand:yup.string().required("Product brand is required"),
    category:yup.string().required("Product category is required"),
    price:yup.number().min(1, "product price must be at least 1").required(),
    image:yup.string().required("Product image is required"),
});