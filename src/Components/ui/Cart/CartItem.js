import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Divider, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../Slices/CartSlice';
import { dataText, themePalette } from '../../../Core/core';

export const CartItem = (props) => {
    const {prod}=props;
    const dispatch=useDispatch();

    console.log(prod);

    const isMdDevice = useMediaQuery('(max-width: 1000px)');

    const handleAddQuantity=()=>{
        dispatch(cartActions.addProductQuantity({
            id:prod.id
        }));
    }
    const handleReduceQuantity=()=>{
        console.log(prod.id);
        if(prod.quantity-1===0)
            dispatch(cartActions.deleteProduct({
                id:prod.id
            }))
        else
            dispatch(cartActions.reduceProductQuantity({
                id:prod.id
            }));
    }

  return (
<Box
    sx={{
    mt:'10px'
    }}
    >
    <ListItem 
        alignItems="center"
        sx={{
        display:'grid',
        gridTemplateColumns:'1fr 2fr',
        gap: '10px'
        }}
        >
        <ListItemAvatar
        sx={{
            mt:0,
            mr:2,
            display:'flex',
            justifyContent:'center'
        }}
        >
        <Avatar 
            alt={prod.firstImage.alt} 
            src={process.env.REACT_APP_API_USEQUERY + prod.firstImage.url} 
            variant="square"
            sx={{
            width: 100, 
            height: 100
            }}
            />
        </ListItemAvatar>
        <Box>
        <ListItemText
            primary={prod.title}
        />
        <Box
        sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:isMdDevice ? 'start' : 'flex-end',
            flexDirection:isMdDevice ? 'column' : 'row',
        }}
        >
            <Box
                sx={{
                    marginLeft:isMdDevice ? 'auto' : '0'
                }}
            >
                <Typography 
                    component='span'
                    sx={{
                        color: themePalette.primary.main,
                        fontSize:isMdDevice ? '18px':'28px',
                        fontWeight:'700'
                    }}
                >
                        {' '+dataText.currencyMoney+prod.price}
                </Typography>
            </Box>
            <ButtonGroup 
            size='small' 
            aria-label="small outlined button group"
            sx={{
                mt:'5px',
                height:'fit-content',
                marginLeft:isMdDevice ? 'auto' : '0'
            }}
            >
            <Button
                onClick={handleAddQuantity}
            >+</Button>
            <Button disabled>{prod.quantity}</Button>
            <Button 
                onClick={handleReduceQuantity}
            >-</Button>
            </ButtonGroup>
        </Box>
        </Box>
    </ListItem>
    <Divider/>
</Box>
  )
}
