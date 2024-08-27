import React from "react";
import { Button, FormContainer, Input } from "../../../components/atoms";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinValidationSchema } from "./signinFormValidation";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";

export const SigninForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signinValidationSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSignin = (data) => {
    dispatch(authenticateUser({ formValues: data, isSignin: true }))
      .unwrap()
      .then(()=>{
        navigate("/")
      })
      .catch(() => {});
  };

  return (
    <FormContainer>
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
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          );
        }}
      />
      <Controller
        type="password"
        name="password"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Button disabled={!isValid} onClick={handleSubmit(onSignin)}>
        sign in
      </Button>
    </FormContainer>
  );
};
