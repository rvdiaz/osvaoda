import { Close } from '@mui/icons-material';
import { Button, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {  NavLink } from 'react-router-dom';
import { themePalette } from '../../../Core/core';

export const DrawerMenu = (props) => {
    const {mobileOpen,handleDrawerToggle,navItems}=props;

    const drawer = (
      <Box>
        <Box
          sx={{
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          bgcolor="dark.main"
        >
          <Typography
            color="secondary.main"
          >
            Menu
          </Typography>
          <IconButton
            color="secondary"
            onClick={handleDrawerToggle}
          >
            <Close/>
          </IconButton>
        </Box>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <List
            disablePadding
          >
            {navItems && navItems.map((item) => (
              <ListItem 
                key={item.title} 
                disablePadding
              >
                <ListItemButton 
                  color=''
                  sx={{ 
                    textAlign: 'center'
                  }}>
                  <Button 
                    to={`/${item.title}`}
                    component={NavLink}
                    sx={{
                      color: themePalette.dark.main
                    }}
                    >
                      {item.title}
                    </Button>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      );

  return (
    <Box 
      component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
        }}
      >
        {drawer}
      </Drawer>
  </Box>
  )
}
