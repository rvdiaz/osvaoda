import { useQuery } from '@apollo/client';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { themePalette } from '../../../Core/core';
import { LOAD_HERO } from '../../../GraphQL/Queries';
import { BackgroundComponent } from '../Basic/BackgroundComponent';

export const Hero = () => {
  const {loading,error,data}=useQuery(LOAD_HERO);
  
  const image=data?.heroSection.data.attributes.hero.image.data.attributes;
  const title=data?.heroSection.data.attributes.hero.title;
  const description=data?.heroSection.data.attributes.hero.description;
  const buttons=data?.heroSection.data.attributes.hero.button;
  const isMdDevice = useMediaQuery('(min-width: 768px)');

  if(loading || error){
    return (
      <></>
    )
  }

  return (
    <BackgroundComponent 
      src={process.env.REACT_APP_API_USEQUERY + image?.url}
      style={{
        'height':isMdDevice ? '80vh':'50vh',
        'backgroundSize':'cover',
        'backgroundPosition': isMdDevice ? '10% top' : '80% top'
      }}
      >
      <Container sx={{
        height:'100%'
      }}>
        <Box sx={{
          height:'100%',
          textAlign:'left',
          width:isMdDevice ? 'auto':'100%',
          display:"flex",
          flexDirection:'column',
          alignItems:'start',
          justifyContent:'center'
        }}>
          <Typography
            variant="h2"
            sx={{
              color:'black',
              fontSize:isMdDevice ? '3rem' : '2rem',
              textShadow: '0 0 3px #d3c7c7, 0 0 5px #d3c7c7'
            }}
          >
            {title}
          </Typography>
          <Typography
            paragraph
            sx={{
              color:'white',
              textShadow: '0 0 3px #d3c7c7, 0 0 2px #d3c7c7'
            }}
          >
            {description}
          </Typography>
          <Box>
            {buttons && buttons.map((item,index)=>(
              <Button
                key={index}
                href={item.link}
                variant="contained"
                size="large"
                sx={{
                  marginTop:'15px',
                  color:"white",
                  borderRadius:'0',
                  boxShadow:'none',
                  "&:hover":{
                    backgroundColor:themePalette.primary.main,
                    boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
                  }
                }}
                >{item.name}</Button>
            ))}
          </Box>
        </Box>
      </Container>
        
      
    </BackgroundComponent>
  )
}
