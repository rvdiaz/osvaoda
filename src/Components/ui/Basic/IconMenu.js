import { Badge, Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getTotalProducts } from '../../../helpers/getTotalCart';
import { useDispatch, useSelector } from 'react-redux';
import { uiDrawerAction } from '../../../Slices/uiCartDrawer';
import { Link } from 'react-router-dom';

export const IconMenu = () => {
  const isMdDevice = useMediaQuery('(min-width: 768px)');

  const cart=useSelector(state=>state.cart);
  const {favorites}=useSelector(state=>state.favorite);

  const [totalCart, settotalCart] = useState({
    totalPrice:0,
    totalProducts:0
  });

  const dispatch=useDispatch();

  const handlerDrawerOpen=()=>{
    dispatch(uiDrawerAction.toggle());
  }

  useEffect(() => {
    settotalCart(getTotalProducts(cart.products));
  }, [cart,settotalCart])

  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      gridGap:'5px',
      marginLeft:'auto',
      gridArea:'1 / 3'
    }}>
      <IconButton 
        aria-label="cart" 
        color={isMdDevice ? 'dark' : 'secondary'}
        component={Link}
        to="/favorites"
        >
          <Badge 
            badgeContent={favorites.length} 
            color={isMdDevice ? 'primary' : 'dark'}
            sx={{
              '& span':{
                color:isMdDevice && 'white'
              }
            }}
            >
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>
      <IconButton 
        aria-label="cart" 
        color={isMdDevice ? 'dark' : 'secondary'}
        onClick={handlerDrawerOpen}
        >
          <Badge 
            badgeContent={totalCart.totalProducts} 
            color={isMdDevice ? 'primary' : 'dark'}
            sx={{
              '& span':{
                color:isMdDevice && 'white'
              }
            }}
            >
          <ShoppingBagOutlinedIcon />
        </Badge>
      </IconButton>
      {(totalCart.totalPrice > 0 && isMdDevice)&& 
      <Typography
        sx={{
          fontWeight:'bold',
          color:!isMdDevice && 'white'
        }}
      >
       ${totalCart.totalPrice}
      </Typography>}
    </Box>
  )
}
