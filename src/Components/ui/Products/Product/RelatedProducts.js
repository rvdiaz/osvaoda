import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React, { useMemo} from 'react'
import Slider from 'react-slick';
import { dataText } from '../../../../Core/core';
import { LOAD_PRODUCT_BY_ARRAY_CATEGORIES_ID } from '../../../../GraphQL/Queries';
import { SampleArrow } from '../../CategoriesSlider/SampleArrow';
import { ProductCard } from '../ProductCard';
import { SkeletonGrid } from '../Skeleton/SkeletonGrid';

export const RelatedProducts = (props) => {
    const {categories,prodId}=props;
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    const idArrays=useMemo(()=>{
        let arrayAux=[];
        categories?.length > 0 && categories.forEach(element => {
            arrayAux.push(element.id);
        });
        return arrayAux;
    },[categories])

    const {error,loading,data}=useQuery(LOAD_PRODUCT_BY_ARRAY_CATEGORIES_ID,{
        variables:{
            'arrayId':idArrays,
            'prodId':prodId
        }
    }
    )

    const products=data?.products.data;
    if(error || loading){
        return (
            <SkeletonGrid items={4}/>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isMdDevice ? 1 : products.length <= 4 ? products.length : 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 650,
        autoplaySpeed: 3000,
        cssEase: "linear",
        customPaging: i => (
        <Box
        className='custom-dots' 
        sx={{
            height:'7px',
            width:"7px",
            backgroundColor:'#80808057',
            borderRadius:'50%',
            margin:'0 auto',
            mt:'10px'
        }}>
        </Box>),
        nextArrow: 
        <SampleArrow icon={'left'}/>,
        prevArrow:  
        <SampleArrow icon={'right'}/>
      };

    return (
        <Container
        sx={{
            mt:'5vh',
            padding: '0 !important'
        }}
        >
            <Typography
            variant={ isMdDevice ? 'h5' : 'h4' }
            sx={{
                textAlign:'center'
            }}
            >
                {dataText.relatedProducts}
            </Typography>
            <Box
            sx={{
                mt:'4vh',
                '& .slick-dots li':{
                width:isMdDevice ? '20px':'30px'
                },
                '& .slick-slider':{
                    alignItems: 'center !important'
                },
                '& .slick-active .custom-dots':{
                width:isMdDevice ? '20px':'30px',
                borderRadius:'5px',
                backgroundColor:'#000'
                }
            }}
            >
            <Slider 
            {...settings}
            style={{
                display:'flex',
                alignItems:'start'
            }}
            >
            {
              products && products.map((prod)=>{
                return (
                    <ProductCard 
                    key={prod.id}
                    product={{
                        id:prod.id,
                        url:prod.attributes.image.data[0]?.attributes.url,
                        title:prod.attributes.title,
                        price:prod.attributes.price
                    }}
                    height={'300px'}
                    />
                )}) 
            }
            </Slider>
            </Box>
        </Container>
    )
}
