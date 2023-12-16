import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { dataText } from '../../Core/core';
import { ContainerShopGrid } from '../ui/Basic/ContainerShopGrid';
import { ProductCard } from '../ui/Products/ProductCard';

export const Favorites = () => {
    const {favorites}=useSelector(state=>state.favorite);

    useEffect(() => {
      window.scrollTo({ top: 0});
    }, [])

  return (
    <>
    {favorites.length > 0 ?
    <Container
    sx={{
      mt:'5vh',
      minHeight:'45vh'
    }}
    >
      <ContainerShopGrid>
        {favorites.map((fav,index)=>(
          <ProductCard
              product={fav}
              key={index}
          /> 
        ))}
      </ContainerShopGrid>
    </Container>
    :
    <Container
      sx={{
        width:'100%',
        justifyContent:'center',
        minHeight:'50vh',
        display:'flex',
        alignItems:'center'
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        {dataText.notFound}
      </Typography>
    </Container>
  }
    </>
  )
}
