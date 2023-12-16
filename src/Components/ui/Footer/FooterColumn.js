import { Box } from '@mui/material'
import React from 'react'

export const FooterColumn = (props) => {
  return (
    <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'left'
        }}
    >{props.children}</Box>
  )
}
