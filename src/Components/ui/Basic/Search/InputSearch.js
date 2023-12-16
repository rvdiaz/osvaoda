import { useQuery } from '@apollo/client';
import { Autocomplete,Box,TextField, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataText } from '../../../../Core/core';
import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_BY_CATEGORY } from '../../../../GraphQL/Queries';

export const InputSearch = (props) => {
  const navigate = useNavigate();
  const {searchInput,setsearchInput,categoryActive,handleSubmit}=props;
  const [products, setproducts] = useState([]);

  const isMdDevice = useMediaQuery('(max-width: 768px)');
  
  const handleInputValue=(event,value)=>{
    navigate(`/productos/${value.id}`);
  }

  const dataFetch={
    query:categoryActive === 'All Categories' ? SEARCH_PRODUCTS : SEARCH_PRODUCTS_BY_CATEGORY,
    variables:categoryActive === 'All Categories' ? { search:searchInput } : { search:searchInput,categoryId:categoryActive }
  }
 
  const { data, refetch } = useQuery(dataFetch.query, {
    variables:dataFetch.variables,
    skip:searchInput.length < 2
  });
  
  useEffect(() => {
    if(searchInput.length > 2)
      refetch();
  }, [searchInput]) 

  useEffect(() => {
    if (categoryActive === 'All Categories'){
      if(data?.products)
        setproducts(data?.products.data);
    }
    else
    if(data?.category)
      setproducts(data?.category.data?.attributes.products.data);
  }, [data,setproducts])


  const handleChange=(event)=>{
    setsearchInput(event.target.value);
  }

  return (
    <Autocomplete
    freeSolo
    disableClearable
    options={products}
    getOptionLabel={(option) => option.attributes.title}
    renderOption={(props, option) => {
    return (
      <Box component="li" {...props}>
        {option.attributes.title}
      </Box>
    )}}
    onChange={handleInputValue}
    renderInput={(params) => (
      <TextField
        onChange={handleChange}
        value={searchInput}
        placeholder={dataText.searchPlaceholder}
        {...params}
        InputProps={{
          ...params.InputProps,
          onKeyDown: (e) => {
            if (e.key === 'Enter') {
              e.stopPropagation();
              handleSubmit();
            }
      }
        }}
        sx={{
          '& fieldset':{
            borderRadius:'0',
            borderLeft:'none'
          },
          '& .MuiInputBase-root:hover fieldset':{
            border:'1px solid #0000003b !important',
            borderLeft:'none !important'
          },
          '& .Mui-focused fieldset':{
            border:'1px solid #0000003b !important',
            borderLeft:'none !important'
          },
          "& input": {
            padding: isMdDevice && '0px !important'
        }
        }}
      />
    )}
    sx={{
      width:'100%',
      borderRadius:'0'
    }}
    />
  )
}
