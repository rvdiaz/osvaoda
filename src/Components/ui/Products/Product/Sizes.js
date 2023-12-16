import { Box, Typography } from '@mui/material'
import React from 'react'
import { dataText, themePalette } from '../../../../Core/core';
import { RadioImage } from '../../Basic/RadioImage';

export const Sizes = (props) => {
    const {sizes,sizeActive,setsizeActive}=props;
    return (
      <Box>
          <Typography id="demo-customized-radios">{dataText.productDetailSize}:</Typography>
          <Box
          sx={{
            display:'flex',
            flexWrap:'wrap',
            mt:'10px'
          }}>
          {
          sizes.map((size,index)=>(
            <Box key={index}>
            {
              size.availability ?
            <RadioImage
              checked={sizeActive.name===size.name}
              setValue={setsizeActive}
              value={{
                name:size.name,
                aval:size.availability
              }}   
              name='size'
              colorChecked={themePalette.primary.main}
              color={themePalette.radioButtonDefault.main}
              type='text'
              styles={{
                padding:'8px',
                margin:'5px',
              }}
            />
            :
            <RadioImage
              disabled={true}
              checked={false}
              setValue={()=>{}}
              value={{
                name:size.name,
                aval:size.availability
              }}   
              name='color'
              colorChecked={themePalette.primary.main}
              color={themePalette.radioButtonDefault.main}
              type='text'
            />
         }
         </Box>
          ))
          }
         </Box>
      </Box>
    )
}
