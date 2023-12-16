import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalProducts } from '../../../helpers/getTotalCart';
import { ProductList } from './ProductList'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataText } from '../../../Core/core';

export const OrderSumary = () => {
    const {products}=useSelector(state=>state.cart);
    const total=getTotalProducts(products);
    const isMdDevice = useMediaQuery('(max-width: 768px)');

  return (
    <Box sx={{
        gridArea:isMdDevice ? '1' : 'auto'
   }}>
    <Accordion
        sx={{
            boxShadow:'none',
            borderBottom:isMdDevice && '1px solid',
            borderColor:'dark.main',
            borderRadius:'0 !important',
            mt:!isMdDevice ? '5vh !important' : 'auto',
            '& .Mui-expanded':{
                margin:!isMdDevice ? '0 !important' : 'auto'
            }
        }}
        defaultExpanded={!isMdDevice}
    >
        <AccordionSummary
            disabled={!isMdDevice}
            sx={{
               opacity:'1 !important',
               minHeight:!isMdDevice ? '0 !important' : 'auto'
            }}
        >
            <Box
        sx={{
            display:'flex',
            justifyContent:'space-between',
            mt:!isMdDevice ? '0' : '15px',
            width:'100%'
        }}
        >   
            <Box sx={{
                display:'flex',
                alignItems:'center'
            }}>
                <Typography
                sx={{
                    fontSize:isMdDevice ? '15px' : '20px',
                    mr:'5px',
                    color:'primary.main',
                    textTransform:'capitalize'
                }}
                >
                    {dataText.checkoutSummaryTitle}
                </Typography>
                {isMdDevice && <ExpandMoreIcon color='primary'/>}
            </Box>
            <Box sx={{
                display:'flex'
            }}>
                <Typography
                    sx={{
                        fontSize:isMdDevice ? '15px' : '20px',
                        mr:'5px',
                        textTransform:'capitalize'
                    }}
                >
                    {dataText.totalinCart}:
                </Typography>
                <Typography
                    sx={{
                        fontSize:isMdDevice ? '15px' : '20px',
                        fontWeight:800
                    }}
                >
                    {dataText.currencyMoney}{total.totalPrice}
                </Typography>
            </Box>
        </Box>
        </AccordionSummary>
        <AccordionDetails>
            <ProductList products={products}/>
        </AccordionDetails>
    </Accordion>
   </Box>
  )
}
