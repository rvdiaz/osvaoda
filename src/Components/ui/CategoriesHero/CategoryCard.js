import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { themePalette } from '../../../Core/core';
import {BackgroundComponent} from '../Basic/BackgroundComponent';

export const CategoryCard = (props) => {
    const {src,id,title}=props;
  return (
    <BackgroundComponent 
        src={src}
        styles={{
            position:'relative',
            height:'30vh',
            backgroundSize:'cover',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            "&::before":{
                content: '""',
                display: 'block',
                width: '85%',
                height: '40%',
                position:"absolute",
                backgroundColor: 'transparent',
                border: '13px solid #fff',
                opacity:'0.3',
                transition: 'all 0.3s',
                transform: 'scale(0)'
            },
            "&:hover::before":{
                transform:'scale(1)'
            }
        }}
    >
       <Button
        component={Link}
        to={`/productos?categoryId=${id}`}
        variant="contained"
        size="large"
        sx={{
            color: themePalette.secondary.main,
            borderRadius:'0',
            boxShadow:'none',
            backgroundColor: themePalette.primary.main,
            fontWeight:'600',
            fontSize:'20px',
            textTransform:'capitalize',
            "&:hover":{
            backgroundColor:themePalette.secondary.main,
            color: themePalette.primary.main,
            boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
            }
        }}
        >{title}</Button>
    </BackgroundComponent>
  )
}
