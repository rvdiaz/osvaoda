import { useQuery } from '@apollo/client';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { dataText, themePalette } from '../../../Core/core';
import { LOAD_FOOTER_INFO } from '../../../GraphQL/Queries';
import { getIconByName } from '../../../helpers/getIconByName';
import { FooterColumn } from './FooterColumn';

export const Footer = () => {
  const isMdDevice = useMediaQuery('(min-width: 768px)');
  const {data,loading,error}=useQuery(LOAD_FOOTER_INFO);

  const categories=data?.categories.data;
  
  const headerSection=data?.headerSection;
  const submenu=headerSection?.data.attributes.header.submenu;
  
  const mainMenu=data?.mainMenu;
  const navItems=mainMenu?.data.attributes.menu.item;

  if(loading || error){
    return (
      <></>
    )
  }

  return (
    <Box
      mt='30px'
      sx={{
        backgroundColor: isMdDevice ? themePalette.solidDark.main : themePalette.primary.main,
        minHeight:'20vh'
      }}
    >
      <Container
      sx={{
        display:'grid',
        gridTemplateColumns:isMdDevice ? '1fr 1fr 1fr' : '1fr',
        gridGap:'20px',
        padding:'24px'
      }}
      >
        <FooterColumn>
        {navItems && navItems.map((item,index) => (
            <Button 
              to={item.title ==='home'?'/':`/${item.title}`}
              key={index} 
              component={Link}
              sx={{ 
                color: '#fff'
              }}
              >
              {item.title}
            </Button>
          ))}
        </FooterColumn>
        <FooterColumn>
        {categories && categories.map((item,index) => (
            <Button 
              to={`/productos?categoryId=${item.id}`}
              key={index} 
              component={Link}
              sx={{ 
                color: '#fff'
              }}
              >
              {item.attributes.title}
            </Button>
          ))}
        </FooterColumn>
        <FooterColumn>
          <Box >
              {submenu && submenu.map((itemMenu,count)=>{
                  return (
                  <Box 
                    key={count} 
                    sx={{
                      textAlign: 'center'
                    }}
                    >
                  {itemMenu && itemMenu.links.map((subItem,index)=>{
                      return (
                          <Link 
                            key={index} 
                            href={subItem.link} 
                            target={subItem.newTab ? '_blank' : ''}
                            underline='none'
                            variant='text'
                            sx={{
                              margin:'0 5px',
                              color:'#FFF'
                            }}
                            >
                              {
                                subItem.iconOnly 
                                ?
                                getIconByName(subItem.iconName,'#FFF',{color:'#FFF',padding:'0 10px'})
                                :
                                <Box sx={{
                                  display:'flex',
                                  alignItems:'center',
                                  justifyContent:'center',
                                  margin:isMdDevice &&'5px',
                                  mb:'15px'
                                }}>
                                {getIconByName(subItem.iconName,'#FFF',{color:'#FFF'})}
                                 <Typography 
                                  sx={{
                                    marginLeft:'5px',
                                    color:'#FFF'
                                  }}
                                >{subItem.name}</Typography>
                                </Box>
                              }
                          </Link>
                      )
                  })
                  }
                  </Box>
                  )  
          })}
          </Box>
        </FooterColumn>
      </Container>
      <Typography
        color='secondary'
        sx={{
          textAlign:'center',
          fontSize:'12px'
        }}
      >
        {dataText.footerBottom1}
          <Button 
            component={Link}
            to='https://robevaldes.com'
            variant='text'
            sx={{
              color:isMdDevice ? 'primary.main' : 'solidDark.main',
              textAlign:'center',
              fontSize:'12px',
              textTransform:'capitalize',
              padding:'4px'
            }}
            > Roberto Valdes </Button> 
        {dataText.footerBottom2}
      </Typography>
    </Box>
  )
}
