import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { dataText, themePalette } from '../../../Core/core';
import { LOAD_CATEGORIES_FOR_SLIDER } from '../../../GraphQL/Queries';
import { HeroCategory } from './HeroCategory';
import { SliderMenu } from './SliderMenu';

export const CategoriesSlider = () => {
 const {loading,error,data}=useQuery(LOAD_CATEGORIES_FOR_SLIDER);
 const sliders=data?.categoriesSlider.data?.attributes.categories.data;
 const isMdDevice = useMediaQuery('(max-width: 1100px)');

 if(loading || error){
  return (
    <></>
  )
}

return (
  <Box>
  {sliders && sliders.map((slides,index)=>( 
    <Box
      mt={index=== 0 ? '5vh':'5vh'}
      sx={{
        padding:'0 5%'
      }}
    >
      <Box
      mb='2vh'
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <Box
            sx={{
              width:'40px',
              height:'2px',
              backgroundColor:'primary.main',
              marginRight:'5px'
            }}
        >
        </Box>
        <Typography
              variant='h5'
              sx={{
                textTransform:'uppercase',
                color:'primary.main',
                fontWeight:'600'
              }}
          >
              {slides.attributes.title}
          </Typography>
          <Box
          sx={{
            width:'40px',
            height:'2px',
            backgroundColor:'primary.main',
            marginLeft:'5px'
          }}
      ></Box>
      </Box>
      <Box 
        key={index}
        sx={{
          display:'grid',
          alignItems: 'center',
          gridTemplateColumns:!isMdDevice ? (!(index % 2) ? '3fr 1fr' : '1fr 3fr') : '1fr'
        }}
        >
        <HeroCategory 
          url={process.env.REACT_APP_API_USEQUERY + slides.attributes.image.data[0]?.attributes.url}
          styles={{
            'gridArea':!isMdDevice && !(index % 2) && '1 / 2'
          }} 
        />
        <SliderMenu 
          slides={slides.attributes.products} />
      </Box>
    </Box>
    ))}
  </Box>
  )
}
