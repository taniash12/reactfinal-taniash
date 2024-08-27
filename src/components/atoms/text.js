import { Typography } from '@mui/material'
import React, { Children } from 'react'

export const Text = ({variant ="body1", children}) => {
  return (
    <Typography variant={variant}>
        {children}
    </Typography>
  )
}
