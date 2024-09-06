import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidationSchema } from "./signupFormValidation";
import { Button, FormContainer, Input } from "../../../components/atoms";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SignupForm = () => {
    const {t} = useTranslation();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupValidationSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignup = (data) => {
    dispatch(authenticateUser({ formValues: data }))
      .unwrap()
      .then(()=>{
        navigate("/");
      })
      .catch();
  };
  return (
    <FormContainer>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="first Name"
              error={Boolean(errors?.firstName?.message)}
              helperText={errors?.firstName?.message}
            />
          );
        }}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="last Name"
              error={Boolean(errors?.lastName?.message)}
              helperText={errors?.lastName?.message}
            />
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="email"
              error={Boolean(errors?.email?.message)}
              helperText={errors?.email?.message}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              type="password"
              name={name}
              onChange={onChange}
              label="password"
              error={Boolean(errors?.password?.message)}
              helperText={errors?.password?.message}
            />
          );
        }}
      />
      <Button disabled={!isValid} onClick={handleSubmit(onSignup)}>
        {t("signup")}
      </Button>
    </FormContainer>
  );
};
