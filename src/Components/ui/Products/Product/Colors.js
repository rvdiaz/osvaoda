import { Box, Typography } from '@mui/material'
import React from 'react'
import { RadioImage } from '../../Basic/RadioImage';
import { useDispatch, useSelector } from 'react-redux';
import { activeColorAction } from '../../../../Slices/ActiveProductColor';
import { dataText, themePalette } from '../../../../Core/core';

export const Colors = (props) => {
  const {color}=props;

  const colorActive=useSelector(state=>state.activeColor.activeColor);
  const dispatch=useDispatch();

  const handleChangeColor=(value)=>{
    dispatch(activeColorAction.updateColor(value));
  }

  return (
    <Box
    sx={{
      mt:'10px'
    }}>
        <Typography id="demo-customized-radios">{dataText.productDetailColor}:</Typography>
        <Box
        sx={{
          display:'flex',
          flexWrap:'wrap',
          gap:'15px',
          padding:'10px 0'
        }}>
        {
        color.map((col,index)=>(
        /*   col.image?.data ? */
         <Box key={index}>
         {
          col.availability ?
          <RadioImage
            checked={colorActive.name===col.name}
            setValue={handleChangeColor}
            value={col}   
            name='color'
            colorChecked={themePalette.primary.main}
            color={themePalette.radioButtonDefault.main}
            type='text'
          />:
          <RadioImage
            disabled={true}
            checked={false}
            setValue={()=>{}}
            value={col}   
            name='color'
            colorChecked={themePalette.primary.main}
            color={themePalette.radioButtonDefault.main}
            type='text'
            />
         }
         
         </Box>
       /*   :
         '' */
        ))
        }
       </Box>
    </Box>
  )
}
