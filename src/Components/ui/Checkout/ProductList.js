import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { dataText, themePalette } from '../../../Core/core';

export const ProductList = (props) => {
    const {products}=props;
    const isMdDevice = useMediaQuery('(max-width: 768px)');
  return (
    <List 
        sx={{ 
            width: '100%'
        }}>
        {
        products.map((prod,index)=>(
            <Box
            key={index}
            sx={{
            mt:'10px'
            }}
            >
            <Divider/>
            <ListItem
                alignItems="center"
                sx={{
                display:'grid',
                gridTemplateColumns:'1fr 2fr'
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
                    src={prod.firstImage.url} 
                    variant="square"
                    sx={{
                    width: 100, 
                    height: 100,
                    
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
                        flexDirection:isMdDevice ? 'column' : 'row'
                    }}
                    >
                        <Box>
                        <Box>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                                {dataText.quantityCheckout}:
                            </Typography>
                            <Typography component='span'>{' '+prod.quantity}</Typography>
                        </Box>
                        </Box>
                        <Box>
                            <Typography
                            sx={{ 
                                display: 'inline',
                                fontSize:'18px'
                            }}
                            component="span"
                            variant="body2"
                            color={themePalette.primary.main}
                            >
                                {dataText.currencyMoney}
                                {prod.price}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </ListItem>
        </Box>
        ))
        }
  </List>
  )
}
