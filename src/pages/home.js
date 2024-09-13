import React from 'react'
import { Input } from '../components/atoms/input'
import { useTranslation } from 'react-i18next'
import { UseProduct } from '../hooks';
import { Link } from '../components/atoms';

export const HomePage = () => {
    const {t} = useTranslation();
    const {HomePageProducts} = UseProduct();
  return (
    <div>
      <h1>{t("home")}</h1>
      <div>
        {HomePageProducts.map((item)=>{
            return <div key={item._id}> 
            <h1>{item.name}</h1>
            <Link to={`products/${item._id}/edit`}>edit</Link>
            </div>
        })}
      </div>
    </div>
  )
}
