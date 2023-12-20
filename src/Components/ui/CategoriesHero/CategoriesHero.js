import { useQuery } from '@apollo/client';
import {  Container, useMediaQuery } from '@mui/material';

import React from 'react'
import { LOAD_MAIN_CATEGORIES } from '../../../GraphQL/Queries';
import { CategoryCard } from './CategoryCard';

export const CategoriesHero = () => {
  const categoryType='category';
  const {loading,error,data}=useQuery(LOAD_MAIN_CATEGORIES,{
    variables: { categoryType }
  });
  const categories=data?.categories.data;
  const isMdDevice = useMediaQuery('(min-width: 768px)');

  if(loading || error){
    return (
      <></>
    )
  }

  return (
    <Container
      disableGutters
      sx={{
        display:'grid',
        gridTemplateColumns:isMdDevice?"1fr 1fr 1fr":'1fr',
        gridGap:'15px',
        marginTop:'5vh',
        padding:'0 5%'
      }}
    >
      {
        categories && categories.map((category)=>(
          <CategoryCard
            key={category.id}
            id={category.id}
            src={process.env.REACT_APP_API_USEQUERY + category.attributes.image.data[0].attributes.url}
            title={category.attributes.title}
          />
          ))
      }
    </Container>
  )
}
