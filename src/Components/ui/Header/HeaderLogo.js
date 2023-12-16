import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { IconMenu } from '../Basic/IconMenu'
import { Image } from '../Basic/Image'
import { Search } from '../Basic/Search/Search'

export const HeaderLogo = ({darkLogo}) => {
  return (
    <Box
      sx={{
        display:'grid',
        gridTemplateColumns:'1fr 2fr 1fr',
        alignItems:'center',
        padding:'20px 0'
      }}
    >
      {
      darkLogo && 
      <Link 
        to='/'>
        <Image 
          src={process.env.REACT_APP_API_USEQUERY+darkLogo.image.data.attributes.url} 
          alt={darkLogo.image.data.attributes.alternativeText}
          sx={{
            maxWidth:'110px'
          }}
        />
      </Link>
      }
      <Search/>
      <IconMenu/>
    </Box>
  )
}
