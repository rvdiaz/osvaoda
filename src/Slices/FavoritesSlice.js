import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice=createSlice({
    name:'favorite',
    initialState:{
        favorites:[]
    },
    reducers:{
        addFavorite(state,data){
            let found=false;
            state.favorites.forEach((prod)=>{
                if(prod.id===data.payload.id){
                    found=true;
                    return;
                }
            })
            if(!found){
                state.favorites.push({
                   ...data.payload
                });
            }
        },
        deleteFavorite(state,data){
            const auxArray=[...state.favorites];
            const newArray=auxArray.filter(prod=>prod.id!==data.payload.id);
            state.favorites=newArray;
        }
    }
})

export const favoriteActions=favoritesSlice.actions;
export default favoritesSlice;