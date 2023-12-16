import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { themePalette } from '../../../../Core/core';

export const InputSearchButton = (props) => {
  const {handleSubmit}=props;

  return (
    <IconButton 
        aria-label="delete"
        sx={{
            border:"none",
            borderRadius:'0',
            backgroundColor:themePalette.primary.main,
            fontSize:'20px',
            padding:'0 15px',
            color:'white',
            '&:hover': {
              backgroundColor: themePalette.primary.main,
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: themePalette.primary.main,
            }
        }}
        onClick={handleSubmit}
    >
    <SearchIcon />
  </IconButton>
  )
}
