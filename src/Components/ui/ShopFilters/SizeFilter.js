import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { themePalette } from '../../../Core/core';


export const SizeFilter = () => {

  const sizes=dataText.sizeFilter;
 
  const [selected, setselected] = useState('');

  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = useMemo(()=>new URLSearchParams(search),[search]);

  const handleChecked=(event)=>{
    setselected(event.target.value);
  }

useEffect(() => {
    if(selected!==''){
      searchParams.set('sizes',selected);
      navigate({search:searchParams.toString()});
    }else {
      searchParams.delete('sizes');
      navigate({search:searchParams.toString()});
    }
}, [selected]);

useEffect(()=>{
  if(!searchParams.get('sizes'))
    setselected('');
},[search])

return (
  <Box sx={{
      mt:'10px',
      width: '100%'
  }}>
      <Typography>{dataText.sizeFiltertitle}</Typography>
      <FormControl 
        variant="standard" 
        sx={{  
          minWidth: 100,
          width: '100%',
          '& .MuiSelect-select:focus':{
            backgroundColor:'transparent'
          }
        }}>
        <Select
          id="size-filter"
          value={selected}
          onChange={handleChecked}
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            sizes.map((size)=>(
                <MenuItem
                    key={size}
                    value={size}
                >
                  {size}
                </MenuItem>
            ))
            }
        </Select>
      </FormControl>
  </Box>
)
}
