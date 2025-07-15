import { createSlice } from '@reduxjs/toolkit';

import type { User } from '../../Types';


interface initialStateType {
    users: User[],
} ;

const initialState: initialStateType ={
        users: [],
    };
export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state,context){
            state.users = context.payload;
        },
    },
});

export const { setUsers  } = counterSlice.actions;
export default counterSlice.reducer;
