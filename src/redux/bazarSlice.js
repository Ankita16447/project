import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData:[],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name:"bazar",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.productData = action.palyload;
        },
    },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;