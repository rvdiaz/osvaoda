import { Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { BackgroundComponent } from '../Basic/BackgroundComponent';

export const HeroCategory = (props) => {
    const {url,styles}=props;
    const isMdDevice = useMediaQuery('(max-width: 1100px)');
  return (
    <BackgroundComponent 
        src={url}
        style={{
            ...styles,
            'height':isMdDevice ? '60vh':'70vh',
            'backgroundRepeat':'no-repeat',
            'backgroundPosition':isMdDevice ? 'bottom' : 'auto',
            'backgroundSize':"cover",
            'display':"flex",
            'justifyContent':"center",
            'alignItems':"center"
        }}
    >
    </BackgroundComponent>
  )
}
