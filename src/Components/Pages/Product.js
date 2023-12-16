import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { LOAD_PRODUCT_BY_ID } from '../../GraphQL/Queries';

import { Box, Container, useMediaQuery } from '@mui/material';
import { ProductImg } from '../ui/Products/Product/ProductImg';
import { ProductDetail } from '../ui/Products/Product/ProductDetail';
import { SkeletonSingleProduct } from '../ui/Products/Skeleton/SkeletonSingleProduct';
import { RelatedProducts } from '../ui/Products/Product/RelatedProducts';

export const Product = () => {
  let { productId } = useParams(); 

  const isMdDevice = useMediaQuery('(max-width: 1000px)');

  const {loading,error,data}=useQuery(LOAD_PRODUCT_BY_ID,{
    variables:{
      'id':productId
    }})
  
  useEffect(() => {
    window.scrollTo({ top: 0,behavior: 'smooth'});
  }, [productId])

  const {title,description,price,quantity,categories,image}=data?.product ? data?.product.data.attributes : '';
  
  if(error){
    return (
      <></>
    )
  }

  return (
    <Container
      sx={{
        mt:'5vh',
        mb:'5vh'
      }}
    >
      {
      loading ?
      <SkeletonSingleProduct/>
      :
      <Box
      sx={{
        display:isMdDevice ? 'block' : 'grid',
        gridGap:'20px',
        gridTemplateColumns:'auto 1fr',
        justifyContent:'center'
      }}
    >
      <ProductImg
        mainImage={image}
      />
      <ProductDetail
        title={title}
        description={description}
        price={price}
        quantity={quantity}
        id={productId}
        image={image}
      />
     
    </Box>
      }
    <RelatedProducts 
      categories={categories?.data}
      prodId={productId}
      />
    </Container>
  );
};

