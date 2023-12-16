import { Box, Slider, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { dataText } from '../../../Core/core';

function valuetext(value) {
  return `${value}°C`;
}

const limits=dataText.filterPriceRange;

export const PriceSlideFilter = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = useMemo(()=>new URLSearchParams(search),[search]);

  const [value, setValue] = useState(limits);
  const [extremes, setExtremes] = useState([
    {
      value: limits[0],
      label: limits[0],
    },
    {
      value: limits[1],
      label: limits[1],
    }
  ]);

  useEffect(() => {
   setExtremes([
    {
      value: limits[0],
      label: `${value[0]}`
    },
    {
      value: limits[1],
      label: `${value[1]}`
    }
   ])
  }, [value,setExtremes])

  useEffect(() => {
    if(!searchParams.get('minPrice') || !searchParams.get('maxPrice') )
      setValue(limits)
  }, [search])
  
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const handleRange=(event,newValue)=>{
    searchParams.set('minPrice',newValue[0]);
    searchParams.set('maxPrice',newValue[1]);
    searchParams.set('page',1);
    navigate({search:searchParams.toString()});
  }

  return (
  <Box sx={{
    textAlign:'center'
  }}>
    <Typography>{dataText.priceRangeTitle}</Typography>
    {
      extremes &&
      <Slider
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      onChangeCommitted={handleRange}
      getAriaValueText={valuetext}
      min={limits[0]}
      max={limits[1]}
      marks={extremes}
      sx={{
        width:'90%'
      }}
    />
    }
  </Box>
  )
}
