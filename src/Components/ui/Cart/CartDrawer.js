import { Box, Button, Divider, IconButton, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotalProducts } from '../../../helpers/getTotalCart';
import CloseIcon from '@mui/icons-material/Close';
import { uiDrawerAction } from '../../../Slices/uiCartDrawer';
import { CartList } from './CartList';
import { Link } from 'react-router-dom';
import { dataText, themePalette } from '../../../Core/core';

export const CartDrawer = () => {
    const isMdDevice = useMediaQuery('(min-width: 768px)');
    const {products}=useSelector(state=>state.cart);
    const dispatch=useDispatch();

  const handleClose=()=>{
    dispatch(uiDrawerAction.toggle());
  }
  return (
    <>
      <Box
      sx={{
          width:isMdDevice ? '450px':'300px',
          padding:'20px',
          height:'85%',
          overflow:'auto'
      }}
      >
        <Box>

          <Box
            mb='10px'
            sx={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}
          >
            <Typography
              sx={{
                fontWeight:700,
                fontSize:'20px',
                textAlign:'center',
                textTransform:'uppercase'
              }}
            >
              {dataText.cartTitle}
            </Typography>
            <IconButton
              color='dark'
              onClick={handleClose}
            >
              <CloseIcon/>
            </IconButton>
          </Box>
          <Divider/>
        </Box>
        {
          products.length > 0 ?
          <CartList products={products}/>
          :
          <Box sx={{
            height:'100%',
            display:'grid',
            placeItems:'center'
          }}>
          <Typography
          >
            {dataText.cartEmpty}
          </Typography>
          </Box>
        }
      
      </Box>
      <Divider/>
      <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          height: 'calc(15% - 80px)',
          padding:'20px'
        }}
      >
        <Typography
          sx={{
            mt:'10px',
            fontSize:'20px'
          }}
        >
          {dataText.cartTotalText}: ${getTotalProducts(products).totalPrice}
        </Typography>
        <Button
        disabled={products.length == 0}
        component={Link}
        to="/checkout"
        variant="contained"
        size="large"
        onClick={handleClose}
        sx={{
          color:"white",
          borderRadius:'0',
          boxShadow:'none',
          "&:hover":{
            backgroundColor:themePalette.primary.main,
            boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
          }
        }}
        >{dataText.cartCheckoutButton}
        </Button>
      </Box>
    </>
  )
}
