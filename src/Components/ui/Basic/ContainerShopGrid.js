import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

export const ContainerShopGrid = (props) => {
    const isMdDevice = useMediaQuery('(max-width: 768px)');
  return (
    <Box
        sx={{
            display:'grid',
            gridTemplateColumns:isMdDevice?'repeat(2, 1fr)':'repeat(4, 1fr)',
            gridGap:'2vh'
        }}
    >
        {props.children}
    </Box>
  )
}
