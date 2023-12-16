import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { dataText } from '../../../Core/core';

export const ShopFiltersSelect = (props) => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const searchParams = useMemo(()=>new URLSearchParams(search),[search]);
    
  const [filter, setFilter] = React.useState(dataText.defaultValueFilterShop);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(
      value
    );
  };
  
  useEffect(() => {
    if(!searchParams.get('select'))
      setFilter(dataText.defaultValueFilterShop);
  }, [searchParams,setFilter])
  

  useEffect(() => {
    if(filter!==dataText.defaultValueFilterShop){ 
      searchParams.set('select',filter);
      searchParams.set('page',1);
      navigate({search:searchParams.toString()});
    } else{
      searchParams.delete('select');
      navigate({search:searchParams.toString()});
    }
  }, [filter,navigate,setFilter])  

  return (
    <FormControl 
      size='small'
      >
      <Select
        displayEmpty
        value={filter}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>{dataText.defaultValueFilterShop}</span>;
          }
          return selected;
        }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {dataText.filterNames.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
