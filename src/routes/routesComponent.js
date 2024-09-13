import React from "react";
import { useRoutes } from "react-router-dom";
import { HomePage, SigninPage, SignupPage } from "../pages";
import { Header } from "../components/header/header";
import { ProductFormPage } from "../pages/productFormPage";
import { ProtectedRoute } from "./protectedRoute";
import { UseUser } from "../hooks";
import { isUserAdmin } from "../helpers/utils";

const RoutesComponent = () => {
    const {userData} =UseUser();
  return (
    <div>
      <Header />
      {useRoutes([
        { path: "/signin", element: <SigninPage /> },
        { path: "/signup", element: <SignupPage /> },
        { path: "/", element: <HomePage /> },
        {
          path: "/products/new",
          element: (
            <ProtectedRoute hasAccess={isUserAdmin(userData)}>
              <ProductFormPage />
            </ProtectedRoute>
          ),
        },
        {
            path: "/products/:id/edit",
            element: (
                <ProtectedRoute hasAccess={isUserAdmin(userData)}>
                  <ProductFormPage />
                </ProtectedRoute>
              ),
        }
      ])}
    </div>
  );
};

export default RoutesComponent;
