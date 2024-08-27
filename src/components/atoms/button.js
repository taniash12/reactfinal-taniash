import React from 'react'
import { Button as MUIbutton } from '@mui/material'

export const Button = ({onClick, children, disabled}) => {
  return (
    <MUIbutton onClick={onClick} disabled={disabled}>
      {children}
    </MUIbutton>
  )
}
