import { AppBar, Button, ButtonGroup, Container, Toolbar, useMediaQuery } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { MobileBarMenu } from './MobileBarMenu';


export const BarMenu = (props) => {
    const {handleDrawerToggle,navItems}=props;
    const isMdDevice = useMediaQuery('(min-width: 768px)');
  return (
    <AppBar 
        component="nav"
        position='static'
        color={isMdDevice ? 'solidDark' : 'primary'}
    >
    <Container>
      <Toolbar
        disableGutters
        sx={{
          minHeight:'64px',
          justifyContent:'center'
        }}
      >
        {!isMdDevice && <MobileBarMenu handleDrawerToggle={handleDrawerToggle}/>}
        <ButtonGroup 
          color="solidDark"
          sx={{ 
            height:'100%',
            display: !isMdDevice && 'none',
            boxShadow:'none'
          }}>
          {navItems && navItems.map((item,index) => (
            <Button 
              to={item.title ==='home'?'/':`/${item.title}`}
              key={item.title} 
              component={NavLink}
              sx={{ 
                color: '#fff', 
                width:'150px',
                borderRadius:'0',
                boxShadow:'none',
                borderLeft:index === 0 && '1px solid #dddbdb33',
                borderRight:'1px solid #dddbdb33'
              }}
              >
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
      </Toolbar>
    </Container>
  </AppBar>
  )
}
