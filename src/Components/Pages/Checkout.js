import { Box, Container,useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CheckoutForm } from '../ui/Checkout/CheckoutForm'
import { LOAD_LOGO } from '../../GraphQL/Queries'
import { useQuery } from '@apollo/client'
import { Image } from '../ui/Basic/Image'
import { OrderSumary } from '../ui/Checkout/OrderSumary';

export const Checkout = () => {
    const isMdDevice = useMediaQuery('(min-width: 768px)');
    const {loading,error,data}=useQuery(LOAD_LOGO);
    const logo=data?.headerSection.data.attributes.header.darkLogo;

    useEffect(() => {
        window.scrollTo({ top: 0 });
      },[])

  return (
    <Container>
        <Box
            sx={{
                mt:'5vh',
                display:'flex',
                justifyContent:'center'
            }}
        >
            {(!loading && !error) && logo && 
            <Link 
             to='/'>
                <Image 
                src={logo.image.data.attributes.url} 
                alt={logo.image.data.attributes.alternativeText}
                sx={{
                    maxWidth:'100px'
                }}
                />
            </Link>
            }
        </Box>
        <Box
         sx={{
            display:'grid',
            gridTemplateColumns:isMdDevice ? '1fr 1fr' : '1fr',
            height:'100%'
        }}
        >
            <Box>
                <CheckoutForm/>
            </Box>
            <OrderSumary/>
        </Box>
    </Container>
  )
}
