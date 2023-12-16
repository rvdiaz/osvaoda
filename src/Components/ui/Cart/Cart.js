import {  Drawer } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiDrawerAction } from '../../../Slices/uiCartDrawer';
import { CartDrawer } from './CartDrawer';

export const Cart = () => {
  const open=useSelector(state=>state.cartdrawer.open)
  const dispatch=useDispatch();

  const handleClose=()=>{
    dispatch(uiDrawerAction.toggle());
  }

  return (
    <React.Fragment key='right'>
      <Drawer
        anchor='right'
        open={open}
        onClose={handleClose}
      >
      <CartDrawer/>
      </Drawer>
  </React.Fragment>
  )
}
