import { Box, Skeleton, useMediaQuery } from '@mui/material'
import React from 'react'

export const SkeletonSingleProduct = () => {
    const isMdDevice = useMediaQuery('(max-width: 1000px)');
  return (
    <Box
    sx={{
      display:'grid',
      gridGap:'20px',
      gridTemplateColumns:isMdDevice ? '1fr' : '1fr 1fr'
    }}
  >
    <Skeleton 
        variant="rectangular" 
        height={'50vh'}
        sx={{
             width:isMdDevice ? '60%' : 'auto',
             margin:isMdDevice ? '0 auto' : '0'
        }}
        />
    <Box>
        <Skeleton />
        <Box
            sx={{
                display:'flex',
                gridGap:'10px',
                mt:'2vh'
            }}
        >
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
        </Box>
        <Skeleton 
            width="60%" 
            sx={{
                mt:'2vh'
            }}    
        />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Box
            sx={{
                display:'flex',
                gridGap:'10px',
                mt:'2vh'
            }}
        >
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
            <Skeleton 
                variant="circular"
                width={25}
                height={25}    
            ></Skeleton>
        </Box>
        <Skeleton 
            width="60%" 
            sx={{
                mt:'2vh'
            }}    
        />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
    </Box>
  </Box>
  )
}
