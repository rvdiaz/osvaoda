import { Alert, Box, Button, Divider, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../Slices/CartSlice';
import { activeColorAction } from '../../../../Slices/ActiveProductColor';
import { dataText, themePalette } from '../../../../Core/core';

export const ProductDetail = (props) => {
    const {title,description,price,quantity,image,id}=props;

    const isMdDevice = useMediaQuery('(max-width: 768px)');
    
    const dispatch=useDispatch();

    const [alert, setalert] = useState(false);

    useEffect(() => {
      const time=setTimeout(() => {
        setalert(false);
      }, 2000);

      return () => {
        clearTimeout(time);
      }
    }, [alert,setalert])


  const handleaddCart=()=>{
    setalert(true);
    dispatch(cartActions.addProduct(
      {
        id,
        title,
        price,
        firstImage:image.data[0].attributes
      }
      ));
  }

return (
    <Box
    sx={{
        padding:'10px'
    }}
    >
        <Typography
        sx={{        
            fontSize:isMdDevice ? '18px':'20px'
        }}
        >
            {title}
        </Typography>
        <Typography
          sx={{
            color: themePalette.primary.main,
            fontSize:isMdDevice ? '18px':'28px',
            fontWeight:'700'
          }}
        >
          {dataText.currencyMoney}{price}
        </Typography>
        <Divider/>
        <Box
          sx={{
            mt:'20px'
          }}
        >
        {
          description?.length > 0
          &&
          <Box>
            <Typography id="demo-customized-radios">{dataText.productDetailDescription}:</Typography>
            <Typography
            sx={{ 
              mt:'10px',       
              fontSize:isMdDevice ? '12px':'14px',
              color:'#000'
          }}
          >
            {description}
          </Typography>
          </Box>
        }
        <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          mt:'15px'
        }}
        >
        <Button
            disabled={quantity <= 0}
            onClick={handleaddCart}
            variant="contained"
            size="large"
            sx={{
              color:"white",
              borderRadius:'0',
              boxShadow:'none',
              width: isMdDevice ? '100%' : 'auto',
              "&:hover":{
                backgroundColor:themePalette.primary.main,
                boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
              }
            }}
            >{quantity <= 0 ? dataText.productDetailOutofOrder : dataText.productDetailAddtoCart }
          </Button>
          {
          !isMdDevice && alert &&
          <Alert
            severity='success'
            sx={{
              padding:'2px 16px'
            }}
            >
          {dataText.productDetailAddedtoCart}
        </Alert>
        }
        </Box>
        </Box>
    </Box>
  )
}
