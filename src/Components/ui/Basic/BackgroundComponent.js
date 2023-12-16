import { Box } from '@mui/material'
import React from 'react'

export const BackgroundComponent = (props) => {
  return (
    <Box
        {...props}
        sx={{
            ...props.styles,
            backgroundImage: `url(${props.src})`,
        }}
  >
    {props.children}
    </Box>
  )
}