import React from 'react'
import { useSelector } from 'react-redux'

export const UseProduct = () => {
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);


  const homePageProducts = useSelector((state)=>state.product.homePageProducts);

  return {
    loading,
    error,
    homePageProducts,
}
}
