import { useQuery } from '@apollo/client'
import { Box, Container, useMediaQuery } from '@mui/material';
import React from 'react'
import { LOAD_HEADER } from '../../../GraphQL/Queries'
import { Search } from '../Basic/Search/Search';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTop } from './HeaderTop';

export const Header = () => {

  const {loading,error,data}=useQuery(LOAD_HEADER);
  const darkLogo=data?.headerSection.data!=null ? data?.headerSection.data.attributes.header.darkLogo : null;
  const submenu=data?.headerSection.data!=null ? data?.headerSection.data.attributes.header.submenu: null;
  const isMdDevice = useMediaQuery('(min-width: 768px)');

  if(loading || error){
    return (
      <></>
    )
  }

  return (
    submenu ?
    <Container>
      {submenu && <HeaderTop submenu={submenu} loading={loading}/>}
      {(isMdDevice && darkLogo) && 
      <HeaderLogo 
        darkLogo={darkLogo} 
        loading={loading}
      />}
      {!isMdDevice && <Search/>}
    </Container>
    : 
    <Box></Box>
  )
}
