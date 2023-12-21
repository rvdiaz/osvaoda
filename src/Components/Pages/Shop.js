import { Container, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import  makeEndPoint  from '../../helpers/makeEndPoint';
import { ProductGrid } from '../ui/Products/ProductGrid';
import { ProductPagination } from '../ui/Products/ProductPagination';
import { SkeletonGrid } from '../ui/Products/Skeleton/SkeletonGrid';
import { ShopFiltersSelect } from '../ui/ShopFilters/ShopFiltersSelect';
import { ShopFilterCheckbox } from '../ui/ShopFilters/ShopFilterCheckbox';
import { dataText } from '../../Core/core';

export const Shop = () => {
    const { search } = useLocation();
    const query = useCallback(new URLSearchParams(search),[search]);
    const isMdDevice = useMediaQuery('(min-width: 768px)');
    const endPoint=useMemo(()=>makeEndPoint(query,true),[query]);

    const [dataProd, setdataProd] = useState({});
    const [loading, setloading] = useState();
    const [error, seterror] = useState(false);

    const fetchData=useCallback(async()=>{
      try {
        setloading(true);
        const productContent=await axios(process.env.REACT_APP_API_USEQUERY_ADMIN + endPoint,
          {
              headers: {
                  Authorization:`Bearer ${process.env.REACT_APP_TOKEN_API_ADMIN}`
                },
              }
          );
          setdataProd({
            products:productContent?.data?.data,
            pagination:productContent?.data?.meta.pagination
          })
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
      }
  },[endPoint])
  
    useEffect(() => {
      fetchData();
    }, [fetchData])

    if(error){
      return (
        <>
        </>
      )
    }

      return (
    <Box>
      <Container sx={{
        mt:'5vh'
      }}>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          mb:'15px',
          padding:'10px',
          backgroundColor:'lessGray.main'
        }}>
          {dataProd?.pagination ? <Typography>{dataText.totalShopPage + ' ' +  dataProd.pagination.total}</Typography> : <Typography>{dataText.totalShopPage}</Typography>}
          <ShopFiltersSelect/>
        </Box>
        <Box sx={{
          display:'grid',
          gridTemplateColumns:isMdDevice ? '1fr 4fr' : '1fr',
          gridGap:'10px',
          mt:isMdDevice ? '5vh' : '2vh'
        }}>
          <ShopFilterCheckbox/>
          {
            loading ?
            <SkeletonGrid items={12}/>
            :
            dataProd.products?.length > 0 ?
            <ProductGrid products={dataProd.products}/>
            :
            <Container
              sx={{
                width:'100%',
                mt:'5vh',
                justifyContent:'center',
                minHeight:'40vh',
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
        </Box>
        <ProductPagination 
            pagination={dataProd.pagination}
        />
      </Container>
    </Box>
  )
}
