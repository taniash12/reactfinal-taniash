import React from 'react'
import { Input } from '../components/atoms/input'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
    const {t} = useTranslation();
  return (
    <div>
      <h1>{t("home")}</h1>
    </div>
  )
}
