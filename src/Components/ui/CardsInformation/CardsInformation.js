import { useQuery } from '@apollo/client'
import {  Box, useMediaQuery } from '@mui/material';
import React from 'react'
import { LOAD_INFO_CARDS } from '../../../GraphQL/Queries'
import { CardInfo } from './CardInfo';

export const CardsInformation = () => {
    const {loading,error,data}=useQuery(LOAD_INFO_CARDS);
    const services=data?.infoService.data?.attributes.cards;
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    if(loading || error){
        return (
          <></>
        )
      }    

  return (
    <Box
        sx={{
            display:'grid',
            gridTemplateColumns:isMdDevice ? '1fr':'1fr 1fr 1fr',
            gridGap:isMdDevice && '10px',
            margin:'4vh auto',
            padding:'0 5%'
        }}
    >
        {services && services.map((serv,index)=>(
            <CardInfo
                key={index}
                index={index}
                title={serv.title}
                subtitle={serv.subtitle}
                iconName={serv.iconName}
            />
        ))}
    </Box>
  )
}
