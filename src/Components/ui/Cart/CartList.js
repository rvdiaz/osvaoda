import { List } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem';

export const CartList = (props) => {
    const {products}=props;
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
        products.map((prod,index)=>(
        <CartItem
            prod={prod}
            key={index}
        />
        ))
        }
  </List>
  )
}
