import { Box, useMediaQuery } from '@mui/material';
import React, { useId } from 'react'
import Slider from "react-slick";
import { ProductCard } from '../Products/ProductCard';
import { SampleArrow } from './SampleArrow';


export const ProductsSlider = (props) => {
    const { iden, value, index, ...other } = props;

    const idAux=useId();

    const isLgDevice = useMediaQuery('(min-width: 1200px)');
    const isMdDevice = useMediaQuery('(max-width: 768px)');

  let slidesToShow=1;
  if(value.data.length===2){
    if(!isLgDevice)
      slidesToShow=1;
    else
      slidesToShow=2;
  }
  if(value.data.length>2){
    if(!isLgDevice)
      slidesToShow=1;
    else
      slidesToShow=3;
  }
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: isMdDevice ? 1 : 2,
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
      <Box
        sx={{
          width: isMdDevice ? '80vw' : '60vw',
        }}
      >
          <Slider 
          {...settings}
          style={{
            display:'flex',
            alignItems:'center'
          }}
          >
          {
            value.data && value.data.map((prod)=>{
              return (
                <ProductCard  
                 height={isMdDevice ? '300px' : '300px'}
                  key={idAux+prod.id}
                  product={{
                    id:prod.id,
                    url:prod.attributes.image.data[0]?.attributes.url,
                    title:prod.attributes.title,
                    price:prod.attributes.price
                  }}
                  slidesToShow={slidesToShow}
                  />
              )})
          }
          </Slider>
        </Box>
    )
}
