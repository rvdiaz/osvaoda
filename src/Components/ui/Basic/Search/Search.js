import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InputSearch } from './InputSearch';
import { InputSearchButton } from './InputSearchButton';
import { SelectInput } from './SelectInput';

export const Search = () => {
  const isMdDevice = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const [categoryActive, setcategoryActive] = useState('All Categories');
  const [searchInput, setsearchInput] = useState('');

  const handleSubmit=()=>{
    if(searchInput !== '') {
      navigate(`/search?categoryId=${categoryActive}&input=${searchInput}`);
    }
  }

    return (
        <Box
          sx={{
            display:'flex',
            mb:isMdDevice &&'2vh'
          }}
        >
          <SelectInput
            categoryActive={categoryActive}
            setcategoryActive={setcategoryActive}
          />
          <InputSearch
            categoryActive={categoryActive}
            searchInput={searchInput}
            setsearchInput={setsearchInput}
            handleSubmit={handleSubmit}
          />
          <InputSearchButton
           categoryActive={categoryActive}
           searchInput={searchInput}
           handleSubmit={handleSubmit}
          />
        </Box>
      )
}
