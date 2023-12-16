import { Button, Box, TextField, Typography, useMediaQuery, CircularProgress, Alert } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { validateForm } from '../../../helpers/validateForm';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { dataText, themePalette } from '../../../Core/core';
import { useSelector } from 'react-redux';
import { SAVE_ORDER } from '../../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

export const CheckoutForm = () => {
    const isMdDevice = useMediaQuery('(max-width: 768px)');
    const orderProducts=useSelector(state=>state.cart);
    const navigate = useNavigate();
    const [saveOrder,{data,loading,error}]=useMutation(SAVE_ORDER);

    useEffect(() => {
     if(data){
      handleResetFields();
      navigate('/confirmation');
     }
    }, [data])
    

    const [inputForm, setinputForm] = useState({
          name:{
            value:'',
            error:false,
            errorMessage:''
          },
          phone:{
            value:'',
            error:false,
            errorMessage:''
          },
          address:{
            value:'',
            error:false,
            errorMessage:''
          }
        })

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(handleFormError()){
          const arrayProducts=orderProducts.products.map((prod)=>{
            return {
              "product":prod.id,
              "variation":{
                "quantity":prod.quantity
              }
            }
          }
          )
          saveOrder(
            {
              variables:{
                name:inputForm.name.value,
                address:inputForm.address.value,
                phone:inputForm.phone.value,
                arrayProducts:arrayProducts
              }
            }
          )
      }
    }
    
    const handleResetFields=()=>{
    setinputForm({
        name:{
        value:'',
        error:false,
        errorMessage:''
        },
        phone:{
        value:'',
        error:false,
        errorMessage:''
        },
        address:{
        value:'',
        error:false,
        errorMessage:''
        }
    })
    }

    const handlechangeform=(e)=>{
    setinputForm({
        ...inputForm,
        [e.target.name]:{
        ...[e.target.name],
        value:e.target.value
        }
    })
    }  

    const handleFormError=()=>{
        return validateForm(inputForm,setinputForm);
    }  

    const formMobile={
        display: 'flex',
        flexDirection:'column',
        width:'100%',
        margin:'3vh auto',
        gridGap:'0.5vh'
      }

    const formDesktop={
        display:'flex',
        flexDirection: 'column',
        gridGap:'1vh',
        margin:'3vh auto'
    }  

  return (
    <Container
        sx={{
            mt:'5vh'
        }}
    >
      <Typography
            variant='h3'
            sx={{
                textTransform:'uppercase',
                fontWeight:'600',
                textAlign:'center',
                fontSize:!isMdDevice ? '33px' : '24px',
                marginBottom:'1vh'
            }}
        >
            {dataText.checkoutFormTitle}
        </Typography>
      <Box
      sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      }}
      >
      </Box>
      <Box
        noValidate
        onSubmit={handleSubmit}
        component="form"
        sx={isMdDevice ? formMobile : formDesktop}
      >
        <TextField
        error={inputForm['name'].error}
        helperText={inputForm['name'].error ? inputForm['name'].errorMessage : ' '}
        required={true}
        name='name'
        label={dataText.nameFieldContactForm}
        type='text'
        color='dark'
        size={isMdDevice ? 'small' : 'medium'}
        value={inputForm['name'].value}
        onChange={handlechangeform}
          />
        <TextField
        error={inputForm['phone'].error}
        helperText={inputForm['phone'].error ? inputForm['phone'].errorMessage : ' '}
        required={true}
        name='phone'
        label={dataText.phoneFieldContactForm}
        color='dark'
        type='tel'
        size={isMdDevice ? 'small' : 'medium'}
        value={inputForm['phone'].value}
        onChange={handlechangeform}
          />
        <TextField
        error={inputForm['address'].error}
        helperText={inputForm['address'].error ? inputForm['address'].errorMessage : ' '}
        required={true}
        color='dark'
        name='address'
        label={dataText.phoneFieldContactForm}
        type='text'
        size={isMdDevice ? 'small' : 'medium'}
        value={inputForm['address'].value}
        onChange={handlechangeform}
        />
        <Box
          sx={{
            width:'100%',
            gridColumnStart:1,
            gridColumnEnd:3,
            display: 'flex',
            justifyContent:'space-between'
          }}
        >
           <Button
            component={Link}
            to='/shop'
            variant="text"
            size={isMdDevice ? "small" : "large"}
            sx={{
                marginTop:'15px',
                color:"dark.main",
                borderRadius:'0',
                boxShadow:'none',
                borderColor:'dark.main',
                "&:hover":{
                    borderColor:"dark.main",
                    boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
                }
            }}
            startIcon={<KeyboardBackspaceIcon />}
        >
          {dataText.checkoutReturnButton}</Button>
          <Button
              type='submit'
              variant="contained"
              size={isMdDevice ? "small" : "large"}
              disabled={loading}
              sx={{
                marginTop:'15px',
                color:"white",
                borderRadius:'0',
                boxShadow:'none',
                minWidth:'150px',
              "&:hover":{
                  backgroundColor:themePalette.primary.main,
                  boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
              },
              "&:disabled":{
                backgroundColor:themePalette.primary.main,
                boxShadow:'0px 2px 4px -1px rgb(255 242 242 / 20%), 0px 4px 5px 0px rgb(221 214 214 / 14%), 0px 1px 10px 0px rgb(210 180 180 / 12%);'
            }
              }}
          >
            {loading 
              ? 
              <CircularProgress 
              color="secondary"
              sx={{
                width: '25px !important',
                height:'25px !important'
              }}
              />
              :
              dataText.checkoutSendFormButton
            }
          </Button>
        </Box>
       {error && <Alert severity="error">{dataText.checkoutErrorMessage}</Alert>} 
      </Box>
    </Container>
  )
}
