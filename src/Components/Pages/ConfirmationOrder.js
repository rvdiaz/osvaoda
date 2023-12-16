import { Box, Button, Card, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Slices/CartSlice';
import HomeIcon from '@mui/icons-material/Home';
import { dataText, themePalette } from '../../Core/core';

export const ConfirmationOrder = () => {
  const isMdDevice = useMediaQuery('(min-width: 768px)');
  const disapatch=useDispatch();

  useEffect(() => {
   disapatch(cartActions.resetProducts());
  }, [])
  
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh'
    }}>
      <Card
        sx={{ 
          padding:'40px 20px',
          margin:'20px'
         }}
      >
        <Typography
            sx={{
              display:'flex',
              alignItems:'center',
              flexDirection:'column',
              gridGap:'10px',
              mb:'20px',
              fontSize:'25px',
              textAlign:'center'
            }}
            >
            <DoneOutlineIcon 
              sx={{ fontSize: 40 }} 
              color='primary'
              />
            {dataText.confirmationPageMessage}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gridGap:'10px',
              justifyContent:'space-around',
              flexDirection:isMdDevice ? 'row' : 'column'            
            }}
          >
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              size="large"
              startIcon={<HomeIcon/>}
              sx={{
                minWidth:isMdDevice && '180px',
                color:"white",
                borderRadius:'0',
                boxShadow:'none',
                "&:hover":{
                  backgroundColor:themePalette.primary.main,
                  boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
                }
              }}
              >{dataText.confirmationPageReturnButton}
            </Button>
            <Button 
              variant="outlined" 
              color="green"
              size="large"
              component={Link}
              to={`https://wa.me/${dataText.numberWhatsapp}`}
              target='_blank'
              startIcon={<WhatsAppIcon />}
              sx={{
                minWidth:'180px'
              }}
              >
              {dataText.confirmationPageWhatsappButton}
            </Button>
          </Box>
      </Card>
       
    </Box>
  )
}
