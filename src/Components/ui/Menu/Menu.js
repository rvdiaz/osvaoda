import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { DrawerMenu } from './DrawerMenu';
import { useState } from 'react';
import { LOAD_MAIN_MENU } from '../../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { BarMenu } from './BarMenu';

export const Menu = (props) => {
  const {loading,error,data}=useQuery(LOAD_MAIN_MENU);
  const navItems=data?.mainMenu.data ? data?.mainMenu.data.attributes.menu.item : null;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isMdDevice = useMediaQuery('(min-width: 768px)');

  const ref=useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  })
  

  if(loading || error){
    return (
      <></>
    )
  }

  return (
    navItems
    &&
    <Box 
      ref={ref}
      sx={{ 
        display: 'flex',
        position:!isMdDevice && 'sticky',
        top:'0',
        zIndex:'99'
        }}>
      <BarMenu
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
      <DrawerMenu 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle} 
        navItems={navItems}
      />
    </Box>
  );
}
