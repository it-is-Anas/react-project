import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        id: '',
        firstName: '',
        lastName: '',
        imgSrc: '',
        updatedAt: '',
        email: '',
        createdAt: '',
        
    },
    reducers: {
        updateData(state,context){
            const { token , user } =context.payload;
            state.token = token;
            state.id = user.id;
            state.firstName = user.firstName;
            state.lastName = user.lastName;
            state.imgSrc = user.imgSrc;
            state.updatedAt = user.updatedAt;
            state.email = user.email;
            state.createdAt = user.createdAt;
            localStorage.setItem('token',state.token);
        }
    },
});

export const { updateData } = counterSlice.actions;
export default counterSlice.reducer;
