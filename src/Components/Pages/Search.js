import { useQuery } from '@apollo/client';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_BY_CATEGORY } from '../../GraphQL/Queries';
import { ProductGrid } from '../ui/Products/ProductGrid';
import { dataText } from '../../Core/core';

export const Search = () => {
    const { search } = useLocation();
    const query= React.useMemo(() => new URLSearchParams(search), [search]);
    const category=query.get('categoryId');
    const input=query.get('input');
    const [products, setproducts] = useState();

    const dataFetch={
        query:category === 'Categorias' ? SEARCH_PRODUCTS : SEARCH_PRODUCTS_BY_CATEGORY,
        variables:category === 'Categorias' ? { search:input } : { search:input,categoryId:category }
      }
     
      const { data, error } = useQuery(dataFetch.query, {
        variables:dataFetch.variables
      });

      useEffect(() => {
        if (category === 'Categorias'){
          if(data?.products)
            setproducts(data?.products.data);
        }
        else
        if(data?.category)
          setproducts(data?.category.data?.attributes.products.data);
      }, [setproducts,data])

    if(error){
      return (
        <>Error</>
      )
    }

  return (
    <Container sx={{
        mt:'5vh',
        minHeight: '45vh'
    }}>
    {products &&
     products.length > 0
        ? 
        <ProductGrid products={products}/>
        :
        <Box sx={{
            minHeight:'40vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Typography
                variant="h4"
                gutterBottom
            >
             {dataText.notFound}
            </Typography>
        </Box>
}
   </Container>
  )
}
