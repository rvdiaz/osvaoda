import { Badge, Fab, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalProducts } from '../../../helpers/getTotalCart';
import { uiDrawerAction } from '../../../Slices/uiCartDrawer';
import { useState } from 'react';
import { themePalette } from '../../../Core/core';

export const ActionFloatingButton = () => {
    const {products}=useSelector(state=>state.cart);
    const total=getTotalProducts(products);
    const dispatch=useDispatch();

    const isMdDevice = useMediaQuery('(max-width: 768px)');

    const handleOpencart=()=>{
        dispatch(uiDrawerAction.toggle());
    }
    const [showbutton, setshowbutton] = useState(false);

    const toggleButton=()=>{
            if(window.scrollY > 200){
                setshowbutton(true);
            }
            else
                setshowbutton(false);
        }
    
    useEffect(() => {
        window.addEventListener('scroll', toggleButton);
        return () => window.removeEventListener('scroll', toggleButton);
    }, [])
    
    

  return (
    <>
    {
    showbutton &&
    <Fab 
        color={isMdDevice ? "solidDark" : "primary"} 
        aria-label="add"
        sx={{
            position:'fixed',
            right:'10px',
            bottom:'10px',
            width:'60px',
            height:'60px',
            '&:hover':{
              backgroundColor: themePalette.dark.main
            }
        }}
        onClick={handleOpencart}
        >
        <Badge 
            badgeContent={total.totalProducts} 
            color={isMdDevice ? 'primary' : 'dark'}
            sx={{
              '& span':{
                color:'white'
              }
            }}
            >
          <ShoppingBagOutlinedIcon color='secondary' />
        </Badge>
    </Fab>
    }
    </>
  )
}
