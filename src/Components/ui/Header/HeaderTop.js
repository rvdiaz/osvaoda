
import { Link, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { getIconByName } from '../../../helpers/getIconByName';
export const HeaderTop = ({submenu}) => {

  const isMdDevice = useMediaQuery('(min-width: 768px)');

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: isMdDevice ? 'space-between' : 'center',
        alignItems: 'center',
        padding: isMdDevice ? '10px 0': '5px 0'
      }}
    >
        {submenu && submenu.map((itemMenu,count)=>{
            return (
            <Box 
              key={count} 
              sx={{
                display:'flex',
                flexWrap:'wrap'
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
                        color:'black'
                      }}
                      >
                        {
                          subItem.iconOnly 
                          ?
                          getIconByName(subItem.iconName)
                          :
                          <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            margin:isMdDevice &&'5px'
                            
                          }}>
                          {getIconByName(subItem.iconName)}
                          {isMdDevice && <Typography 
                            sx={{
                              marginLeft:'5px',
                              color:'#4f4e4e'
                            }}
                          >{subItem.name}</Typography>
                          }
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
  )
}
