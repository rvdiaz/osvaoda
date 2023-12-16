import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { ProductsSlider } from './ProductsSlider';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SliderMenu = (props) => {
  const isMdDevice = useMediaQuery('(max-width: 1100px)');
  const {slides}=props;
 

  return (
    <Box
      sx={{
        display:'flex',
        justifyContent:'start',
        alignItems:'center',
        flexDirection:'column',
        marginTop:isMdDevice && '2vh',
        "& .MuiTab-root.Mui-selected": {
          color: '#000'
        }
      }}
    >
      <ProductsSlider 
        value={slides} 
        index={0}
        iden={slides.data[0].id}
        />
    </Box>
  )
}
