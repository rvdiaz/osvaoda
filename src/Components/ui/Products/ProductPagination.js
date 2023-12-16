import { Button, Container, Pagination, PaginationItem, Stack } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductPagination = (props) => {
    const {pagination}=props;
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

  const handleNewPage=(newPage)=>{
      if(!parseInt(searchParams.get('page')) || parseInt(searchParams.get('page'))!==newPage){
        searchParams.set('page',newPage);
        navigate({search:searchParams.toString()});
      }
  }

  return (
    (pagination?.pageCount && pagination.pageCount>1) ?
    <Container
    sx={{
        mt:'5vh',
        display:'flex',
        justifyContent:'center'
    }}>
        <Stack spacing={2}>
            <Pagination 
                count={pagination.pageCount} 
                size="small" 
                hidePrevButton 
                hideNextButton
                renderItem={(item) => {  
                  return (
                    <PaginationItem
                      component={Button}
                      {...item}
                      selected={parseInt(searchParams.get('page') || '1', 10)===item.page && true}
                      onClick={()=>handleNewPage(item.page)}
                    />
                  )}}
                />
        </Stack>
    </Container>
    : <></>
  )
}
