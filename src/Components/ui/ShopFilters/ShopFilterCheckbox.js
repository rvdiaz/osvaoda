import { Box, Button, useMediaQuery } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { dataText, themePalette } from '../../../Core/core';
import { ColorsFilter } from './ColorsFilter';
import { PriceSlideFilter } from './PriceSlideFilter';
import { SizeFilter } from './SizeFilter';

export const ShopFilterCheckbox = () => {
  const isMdDevice = useMediaQuery('(min-width: 768px)');

  const navigate = useNavigate();
  const {search} = useLocation();
  const searchParams = useMemo(()=>new URLSearchParams(search),[search]);

  const [available, setavailable] = useState(true);

  const handleClearFilters=()=>{
    setavailable(true);
    searchParams.delete('select');
    searchParams.delete('minPrice');
    searchParams.delete('maxPrice');
    searchParams.delete('sizes');
    searchParams.delete('color');
    searchParams.set('page',1);
    navigate({search:searchParams.toString()});
  }

  useEffect(() => {
    if(searchParams.get('minPrice') || searchParams.get('select') || searchParams.get('maxPrice') || searchParams.get('sizes') || searchParams.get('color'))
      setavailable(false);
    else
      setavailable(true);
  }, [searchParams])
  

  return (
    <Box>
      <PriceSlideFilter/>
      <Box sx={{
        display: isMdDevice ? 'block' : 'flex',
        justifyContent: 'center',
        gridGap:'20px'
      }}>
        {dataText.sizeFilter.length!=0 && <SizeFilter/>}
        {dataText.colorsFilter.length!=0 && <ColorsFilter/>}
      </Box>
      <Button
        variant="contained"
        disabled={available}
        onClick={handleClearFilters}
        size="large"
        sx={{
          display: isMdDevice ? 'inline-block' : 'block',
          margin:isMdDevice ? '10px 0' : '15px auto',
          color:"white",
          borderRadius:'0',
          boxShadow:'none',
          textAlign:'center',
          "&:hover":{
            backgroundColor:themePalette.primary.main,
            boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
          }
        }}
        >{dataText.resetFilters}
      </Button>
    </Box>
  )
}
