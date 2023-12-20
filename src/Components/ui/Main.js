import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Checkout } from '../Pages/Checkout'
import { ConfirmationOrder } from '../Pages/ConfirmationOrder'
import { Contact } from '../Pages/Contact'
import { Favorites } from '../Pages/Favorites'
import { Home } from '../Pages/Home'
import { Product } from '../Pages/Product'
import { Search } from '../Pages/Search'
import { Shop } from '../Pages/Shop'
import { ActionFloatingButton } from './ActionFloatingButton/ActionFloatingButton'
import { Cart } from './Cart/Cart'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Menu } from './Menu/Menu'

const { io } = require('socket.io-client');
// URL to your strapi instance
const SERVER_URL = process.env.REACT_APP_API_USEQUERY;

export const Main = () => {
    const {pathname} = useLocation();
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    const socket = io(SERVER_URL);

    socket.on('connect', () => {
        socket.on('order:create', (data) => {
            console.log('order created!');
            console.log(data);
        });
    });

    return (
    <Box>
        {
            pathname !== '/checkout' && pathname !== '/confirmation' &&
            <Box>
                <Header/>
                <Menu/>
            </Box>
        }
        <Routes>
            <Route path='*' element={<Home />}/>
            <Route path='productos' element={<Shop/>}/>
            <Route path='favorites' element={<Favorites/>}/>
            <Route path='contacto' element={<Contact/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='confirmation' element={<ConfirmationOrder/>}/>
            <Route path='productos/:productId' element={<Product/>}/>
        </Routes>
        {
            pathname !== '/checkout' && pathname !== '/confirmation' &&
            <Box>
                 <Footer/>
                 <Cart/>
            </Box>
        }
        { isMdDevice && <ActionFloatingButton/> }
    </Box>
  )
}
