import { Box, Typography } from '@mui/material'
import React from 'react'

export const RadioImage = (props) => {
  const {img,value,name,colorChecked,borderRadius,styles,type,checked,setValue,disabled=false}=props;

  const handleCheck=(e)=>{
    if(type==='text')
      setValue(value);
    else 
      setValue(img);
  } 
  return (
    <Box
    sx={{
      '[type=radio]':{ 
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      },
      '[type=radio] + img':{
        cursor: 'pointer',
        borderRadius:{borderRadius},
        ...styles
      },
      '[type=radio] + .typeRadio':{
        cursor: 'pointer',
        borderRadius:{borderRadius},
        padding:'8px',
        margin:'5px',
        minWidth:'20px',
        textAlign:'center',
        border:'1px solid',
        borderColor:'lessDark.main',
        ...styles
      },
      '[type=radio]:disabled + .typeRadio ':{
        color: 'solidDark.main',
        border: `1px solid`,
        opacity:'12%',
        cursor:'default',
        textDecoration:'line-through'
      },
      '[type=radio]:hover + img':{
        outline: `1px solid ${colorChecked}`
      },
      '[type=radio]:checked + img':{
        outline: `1px solid ${colorChecked}`
      },
      '[type=radio]:not([disabled]):hover + .typeRadio':{
        border: `1px solid ${colorChecked}`
      },
      '[type=radio]:checked + .typeRadio':{
        backgroundColor: `${colorChecked}`,
        color:'#FFF'
      }
    }}
    >
    <label
    >
      <input 
        disabled={disabled}
        type="radio" 
        name={name}
        value={value.name} 
        checked={checked}
        onChange={handleCheck}
      />
      {
        type==='text'
        ?
          <Typography
          className='typeRadio'
          >{value.name}</Typography>
        :      
        <img 
          src={img.url}
          alt={img?.alternativeText}
      />
      }
  </label>
  </Box>
  )
}
