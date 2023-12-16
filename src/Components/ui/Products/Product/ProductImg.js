import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Image } from '../../Basic/Image'
import  notAvailableImage from '../../../../Assets/No-Image-Product.png';
import { RadioImage } from '../../Basic/RadioImage';
import { ContactSupportOutlined } from '@mui/icons-material';

export const ProductImg = (props) => {
    const {mainImage}=props;

    const isMdDevice = useMediaQuery('(max-width: 1000px)');

    const [activeImage, setactiveImage] = useState(
      {
        url: mainImage.data[0].attributes.url,
        id: mainImage.data[0].id,
        alt: mainImage.data[0].attributes.alternativeText
      }
    );

    useEffect(() => {
      setactiveImage({
        url: mainImage.data[0].attributes.url,
        id: mainImage.data[0].id,
        alt: mainImage.data[0].attributes.alternativeText
      })
    })
    

  return (
    <Box
    sx={{
      display:isMdDevice ? 'flex' : 'grid',
      flexDirection:isMdDevice ? 'column-reverse' : 'row',
      alignItems: isMdDevice ? 'center' : 'start',
      gridGap:'5px',
      justifyContent:'center',
      gridTemplateColumns:'auto 1fr'
    }}
  >
    <Box 
    sx={{
        display:isMdDevice ? 'flex' : 'grid',
        gridTemplateColumns:'1fr',
        alignItems: 'start',
        justifyContent:'center',
        gridGap:'0px',
      /*   height:isMdDevice ? 'fit-content' : '70vh', */
        overflow:'auto',
        width:'100%',
        gridAutoRows:'max-content'
    }}>
      {
        mainImage.data && mainImage.data.map((img,index)=>{
    
        return (
        img.attributes &&
        <RadioImage
          key={index}
          value={index} 
          setValue={setactiveImage}  
          name='imagePreview'
          colorChecked='#e7ac2c'
          color='#e5e5e5'
          checked={activeImage.id === img.id}
          img={{
            url:img.attributes.url,
            id: img.id,
            alt:img.attributes.alternativeText
          }}
          styles={{
            height:'52px',
            width:'40px',
            padding:'2px',
            margin:'5px'
          }}
        />
        )
      }
        )
      }
    </Box>
    <Box>
        {activeImage.url!=='' ?
          <Image
            src={process.env.REACT_APP_API_USEQUERY +  activeImage.url}
            alt={activeImage?.alternativeText}
            sx={{
              height:isMdDevice ? '40vh' : '50vh',
              width: "100%",
              maxWidth:isMdDevice ? '100%' : '40vw'
            }}
          />
          :
          mainImage ?
          <Image
            src={process.env.REACT_APP_API_USEQUERY + mainImage.data[0].attributes.url}
            alt={mainImage.data[0].attributes.alternativeText}
            sx={{
              height:isMdDevice ? '40vh' : '50vh',
              width: "100%",
              maxWidth:isMdDevice ? '100%' : '40vw'
            }}
          />
          :
          <Image
            src={notAvailableImage}
            sx={{
              height:isMdDevice ? '40vh' : '50vh',
              width: "100%",
              maxWidth:isMdDevice ? '100%' : '40vw'
            }}
        />
        } 
      
    </Box>
  </Box>
  )
}
