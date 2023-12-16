import { IconButton, useMediaQuery } from '@mui/material';
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const SampleArrow=(props)=>{
    const { className, style, onClick,icon } = props;
    const isMdDevice = useMediaQuery('(max-width: 768px)');
    return (
      <IconButton
        className={className}
        style={{ 
          ...style, 
          display:'flex',
          color:'black',
          left:isMdDevice && '0',
          right:isMdDevice && '0'
         }}
        onClick={onClick}
      >
        {icon==='left'? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
      </IconButton>
    );
  }
