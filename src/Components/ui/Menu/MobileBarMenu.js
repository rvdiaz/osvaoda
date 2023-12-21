import { Box, Button, IconButton, useMediaQuery } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from '@apollo/client';
import { LOAD_HEADER } from '../../../GraphQL/Queries';
import { IconMenu } from '../Basic/IconMenu';
import { Image } from '../Basic/Image';
import { Link } from 'react-router-dom';

export const MobileBarMenu = (props) => {
    const {handleDrawerToggle}=props;
    const {loading,error,data}=useQuery(LOAD_HEADER);
    const logo=data?.headerSection.data.attributes.header.lightLogo;
    const isMdDevice = useMediaQuery('(min-width: 768px)');

if(error || loading){
    return (<></>);
}

  return (
     <Box
        sx={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        alignItems:'center',
        width:'100%',
        padding:'10px 0'
        }}
        >
        <IconButton
            onClick={handleDrawerToggle}
            sx={{ 
            display: isMdDevice && 'none',
            color:'white',
            width:'fit-content'
        }}
        >
            <MenuIcon />
        </IconButton>
        {logo && 
        <Button 
            component={Link}
            to='/'>
        <Image
            src={logo.image.data.attributes.url} 
            alt={logo.image.data.attributes.alternativeText}
            sx={{
                maxWidth:'80px',
                margin:'0 auto'
            }}
        />
        </Button>
        }
        <IconMenu/>
    </Box>
  )
}
