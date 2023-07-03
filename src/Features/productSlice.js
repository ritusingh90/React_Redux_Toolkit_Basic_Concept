import { createSlice } from "@reduxjs/toolkit";

import {FeatureData} from '../Data/ProductData'
import {SellingData} from '../Data/sellingProductData'
import { AllProductData } from './../Data/allProductData';


const initProducts = [...FeatureData, ...SellingData, ...AllProductData]
const initialState = {
    FeatureData: initProducts,
    total: 0,
    CartData: [],
    WishList: []
  };


export const productSlice = createSlice({
    name: 'cart',
    initialState,
   
    reducers: {
        
        addProduct: (state, action)=> {
            const ItemIndex = state.CartData.findIndex((item) => item.id === action.payload.id); 
           
            state.total = state.total + action.payload.price;
            if(ItemIndex >= 0){
                state.CartData[ItemIndex].qnty += 1
                
            }else {
                let tempProductItem = { ...action.payload, qnty: 1 };
                state.CartData.push(tempProductItem);
                // localStorage.setItem("cartItems", JSON.stringify(state.CartData));
            }
        },

        wishListProduct: (state, action)=> {
            const ItemIndex = state.FeatureData.findIndex((item) => item.id === action.payload.id);
            console.log("Checking State", action.payload)
            state.WishList.push(action.payload)
        },

        resetCart: (state, action) => {
            state.CartData = [];
            state.total = 0;
        },

        resetWishList: (state, action) => {
            state.WishList = [];
            state.total = 0;
        },

        deleteItem: (state, action)=>{
            const ItemIndex = state.CartData.filter((e) => e.id !== action.payload)
            state.CartData = ItemIndex
        },

        removeProduct: (state, action) => {
            const ItemIndex_desc = state.CartData.findIndex((item) => item.id === action.payload.id);
            state.total = state.total - action.payload.price;
            if(state.CartData[ItemIndex_desc].qnty >= 1) {
                const dltiteams = state.CartData[ItemIndex_desc].qnty -= 1

            }else if(state.CartData[ItemIndex_desc].qnty === 1){
               const data = state.CartData.filter((e)=>e.id !== action.payload)
            }
        },

        deleteWishlist: (state, action)=>{
            const ItemIndex = state.WishList.filter((e) => e.id !== action.payload)
            state.WishList = ItemIndex
        }
    }
});

export const {addProduct, wishListProduct, resetCart, deleteItem, deleteWishlist, resetWishList, removeProduct} = productSlice.actions;

export default productSlice.reducer;