import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select, useMediaQuery } from '@mui/material'
import { useQuery } from '@apollo/client';
import { LOAD_MAIN_CATEGORIES } from '../../../../GraphQL/Queries';

export const SelectInput = (props) => {

const {categoryActive,setcategoryActive}=props;

const {data}=useQuery(LOAD_MAIN_CATEGORIES,{
  variables:{
    categoryType:'category'
  }
  });

const handleChange = (event) => {
  setcategoryActive(event.target.value);
};

const isMdDevice = useMediaQuery('(max-width: 768px)');
  return (
    <FormControl 
        variant='outlined'
        sx={{
            width:'250px'
        }}    
    >
    <Select
      sx={{
        borderRadius:'0',
        '& fieldset':{
          border:'1px solid #0000003b !important'
        },
        '& .MuiSelect-select':{
          padding:isMdDevice ? '9px':'16.5px 14px',
        }
      }}
      value={categoryActive}
      onChange={handleChange}
    >
      <MenuItem 
        value="Categorias"
        id=''
        >
          Categorias
      </MenuItem>
      {
        data?.categories && data.categories.data.map((cat)=>(
        <MenuItem 
          key={cat.id}
          value={cat.id}>
            {cat.attributes.title}
        </MenuItem>
        ))
      }
    </Select>
  </FormControl>
  )
}
