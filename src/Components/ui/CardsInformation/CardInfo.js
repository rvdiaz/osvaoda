import { Icon, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getIconByName } from '../../../helpers/getIconByName';

export const CardInfo = (props) => {
    const {title,subtitle,iconName,index}=props;
    const isMdDevice = useMediaQuery('(max-width: 768px)');
  return (
    <Box
        sx={{
            borderLeft:(index!==0 && !isMdDevice) && 'none',
            margin:'0 auto',
            width:'100%',
            display:'flex',
            justifyContent:isMdDevice ? 'start' : 'center',
            alignItems:'center',
            padding:'3vh 10px'
        }}
    >
        {getIconByName(iconName,'primary',{height:'40px',width:'40px'})}
        <Box
         sx={{
            marginLeft:'20px',
            display:'flex',
            flexDirection:'column'
        }}
        >
            <Typography 
                variant='h6'
            >
                {title}
            </Typography>
            <Typography 
                sx={{
                    fontSize: '14px'
                }}>
            {subtitle}
            </Typography>
        </Box>
    </Box>
  )
}
