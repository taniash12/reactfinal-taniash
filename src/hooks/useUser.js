import React from 'react'
import { useSelector } from 'react-redux'

export const UseUser = () => {
 const loading = useSelector((state) => state.user.loading);

 const userData = useSelector((state) => state.user.userData);

 const error = useSelector((state) => state.user.error);

 return{
    loading,
    userData,
    error,
 };
};
