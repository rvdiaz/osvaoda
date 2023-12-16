import { createSlice } from "@reduxjs/toolkit"

const uiCartDrawerSlice=createSlice({
    name:'cartDrawer',
    initialState:{
        open:false
    },
    reducers:{
        toggle(state){
            state.open=!state.open
        }
    }
})

export const uiDrawerAction=uiCartDrawerSlice.actions;
export default uiCartDrawerSlice;