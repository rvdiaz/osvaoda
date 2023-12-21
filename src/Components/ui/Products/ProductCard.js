import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isInArray } from '../../../helpers/isInArray';
import { favoriteActions } from '../../../Slices/FavoritesSlice';
import { Image } from '../Basic/Image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dataText, themePalette } from '../../../Core/core';

export const ProductCard = (props) => {
    const {product,width,height}=props;
    const slidesToShow=props?.slidesToShow;
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    const {favorites}=useSelector(state=>state.favorite);
    const dispatch=useDispatch();
    
    const [isFavorite, setisFavorite] = useState();
    
    useEffect(() => {
      setisFavorite(isInArray(favorites,product.id));
    }, [isFavorite,setisFavorite,product,favorites])
    
    const handlerFavorite=()=>{
      if(isFavorite)
        dispatch(favoriteActions.deleteFavorite({id:product.id}));
      else
        dispatch(favoriteActions.addFavorite({
          id:product.id,
          title:product.title,
          price:product.price,
          url:product.url
        }));
    }

  return (
    <Box>
      <Box
        sx={{
          padding:'0 10px',
          position:'relative'
        }}
      >
      <Link 
        to={`/productos/${product.id}`}
      >
      <Image
        src={product.url}
        sx={{ 
          height: height ?? '200px',
          objectFit:'cover',
          margin:'0 auto',
          width: width ?? ((slidesToShow <= 1 && !isMdDevice) ? '50%':'100%')
        }}
      />
      </Link>
      <Box 
      sx={{
        textAlign:'center',
        mt:isMdDevice ? '0' : '1vh'
      }}>
        <IconButton 
            aria-label="cart" 
            disableRipple
            color='secondary'
            onClick={handlerFavorite}
            sx={{
              position:'absolute',
              top:'5px',
              right:'15px',
              bgcolor:themePalette.primary.main,
              padding:isMdDevice ? '5px' : 'auto'
            }}
           >
            {
              isFavorite ?
              <FavoriteIcon />
              : <FavoriteBorderIcon/>
            }
        </IconButton>
        <Button
          component={Link}
          to={`/productos/${product.id}`}
          replace
          disableRipple
          disableFocusRipple
          sx={{
            color:'#252525',
            fontSize:isMdDevice ? '18px':'20px',
            textTransform:'capitalize',
            lineHeight:'1.5rem',
            '&:hover':{
              backgroundColor:'transparent'
            }
          }}
        >
          {product.title}
        </Button>
        <Typography
          sx={{
            color: themePalette.primary.main,
            fontSize:isMdDevice ? '18px':'24px',
            fontWeight:'700',
            lineHeight:'1rem',
            mt:'0.5vh'
          }}
        >
          {dataText.currencyMoney}{product.price}
        </Typography>
      </Box>
      </Box>
    </Box>
  )
}
