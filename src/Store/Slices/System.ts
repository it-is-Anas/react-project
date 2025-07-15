import { createSlice } from '@reduxjs/toolkit';

import type { User } from '../../Types';


interface initialStateType {
    loader: boolean,
    message: string,
} ;

const initialState: initialStateType ={
        loader: false,
        message: '',
    };
export const counterSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setLoader(state,{payload}){
            state.loader = payload;
        },setMessage(state,context){
            state.message = context.payload;
        }
    },
});

export const { setMessage , setLoader  } = counterSlice.actions;
export default counterSlice.reducer;
