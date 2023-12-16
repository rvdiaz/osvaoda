import React, { useEffect, useState } from 'react'
import { Alert,Box, Button, Container, Fade, TextField, Typography, useMediaQuery } from '@mui/material';
import { sendForm } from '../../../helpers/sendForm';
import { validateForm } from '../../../helpers/validateForm';
import { dataText } from '../../../Core/core';

export const ContactForm = () => {
    const isMdDevice = useMediaQuery('(max-width: 768px)');

    const [alert, setalert] = useState({
        show: false,
        message:'Sended Successfully',
        type:'success'
      })
      
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
          email:{
            value:'',
            error:false,
            errorMessage:''
          },
          message:{
            value:'',
            error:false,
            errorMessage:''
          }
        })

      useEffect(() => {
        const time=setTimeout(() => {
          setalert({
            show:false,
            message:'',
            type:''
          })
        }, 4000);
  
        return () => {
          clearTimeout(time);
        }
      }, [alert,setalert])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(handleFormError()){
            const res=await sendForm(inputForm);
            if(res?.status!==200){
              setalert({
                show:true,
                message:"Error connecting to the server",
                type:'error'
            })
            }else
            setalert({
              show:true,
              message:'I will contact you soon',
              type:'success'
            })
          handleResetFields();
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
        email:{
        value:'',
        error:false,
        errorMessage:''
        },
        website:{
        value:'',
        error:false,
        errorMessage:''
        },
        message:{
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
        width:'700px',
        flexDirection: 'column',
        gridGap:'2vh',
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
            {dataText.contactTitle}
        </Typography>
      <Box
      sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      }}
      >
          <Box
              sx={{
                  width:'20px',
                  height:'2px',
                  backgroundColor:'dark.main',
                  marginRight:'5px'
              }}
          >
          </Box>
          <Typography
                variant='h5'
                sx={{
                    textTransform:'uppercase',
                    color:'dark.main',
                    fontWeight:'600',
                    fontSize:isMdDevice ? '20px' : '16px',
                }}
            >
                {dataText.contactLabel}
            </Typography>
          <Box
          sx={{
              width:'20px',
              height:'2px',
              backgroundColor:'dark.main',
              marginLeft:'5px'
          }}
      ></Box>
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
        color='dark'
        type='text'
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
        error={inputForm['email'].error}
        helperText={inputForm['email'].error ? inputForm['email'].errorMessage : ' '}
        required={true}
        color='dark'
        name='email'
        label={dataText.emailFieldContactForm}
        type='email'
        size={isMdDevice ? 'small' : 'medium'}
        value={inputForm['email'].value}
        onChange={handlechangeform}
        />
        <TextField
        helperText=' '
        required={false}
        color='dark'
        multiline
        minRows={4}
        maxRows={4}
        name={'message'}
        label={dataText.messageFieldContactForm}
        type='textarea'
        value={inputForm['message'].value}
        onChange={handlechangeform}
        sx={{
            textTransform:'capitalize',
            gridColumnStart:'1',
            gridColumnEnd:'3'
        }}
          />
        <Box
          sx={{
            width:'100%',
            gridColumnStart:1,
            gridColumnEnd:3,
            display:isMdDevice ? 'block' : 'flex',
            justifyContent:'space-between'
          }}
        >
        <Button
          type='submit'
          disableRipple
          size={isMdDevice ? 'medium' : 'large'}
          sx={{
            color:'dark.main',
            border:'1px solid',
            borderColor:'dark.main',
            width:'auto',
            textAlign:'end',
            fontWeight:'600',
            '&:hover':{
              border:'1px solid',
              borderColor:'dark.main',
              color:'dark.main',
              backgroundColor:'transparent'
            }
          }}
        >
            {dataText.contactButton}
        </Button>
        {
          alert.show &&
          <Alert 
          variant='outlined'
          severity={alert.type}
          sx={{
            marginTop:isMdDevice ? '10px' : '0',
            padding:'2px 16px'
          }}
          >
          {alert.message}
        </Alert>
        }
        </Box>
      </Box>
    </Container>
  )
}
