import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        products:[]
    },
    reducers:{
        addProduct(state,data){
            let found=false;
            state.products.forEach((prod)=>{
                if(prod.id===data.payload.id){
                    found=true;
                    prod.quantity=prod.quantity+1;
                    return;
                }
            })
            if(!found){
                state.products.push({
                   ...data.payload,
                    quantity:1
                });
            }
        },
        addProductQuantity(state,data){
            state.products.forEach((prod)=>{
                if(prod.id===data.payload.id){
                    prod.quantity+=1;
                    return;
                }
            })
        },
        reduceProductQuantity(state,data){
            state.products.forEach((prod)=>{
                if(prod.id===data.payload.id){
                    prod.quantity-=1;
                    return;
                }
            })
        },
        deleteProduct(state,data){
            const auxArray=[...state.products];
            const newArray=auxArray.filter(prod=>prod.id!==data.payload.id);
            state.products=newArray;
        },
        resetProducts(state){
            state.products=[];
        }
    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;