import { createSlice } from "@reduxjs/toolkit";

const ActiveProductColor =createSlice({
    name:'product_image_color',
    initialState:{
        activeColor:{
            name:'',
            availability:false
        }
    },
    reducers:{
        updateColor(state,data){
            state.activeColor=data.payload
        }
    }
})

export default ActiveProductColor;

export const activeColorAction=ActiveProductColor.actions;