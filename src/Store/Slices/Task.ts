import { createSlice } from '@reduxjs/toolkit';

import type { Task } from '../../Types';


interface initialStateType {
    taskPopUp: boolean,
    tasks: Task[],
} ;

const initialState: initialStateType ={
    taskPopUp: false,
    tasks: []
};
export const counterSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTaskPopUp(state,{payload}){
            state.taskPopUp = payload;
        },
        setTasks(state,{ payload }){
            state.tasks = payload;
        },addNewTask(state, { payload }){
            state.tasks.push(payload);
        }
    },
});

export const { setTaskPopUp , setTasks , addNewTask } = counterSlice.actions;
export default counterSlice.reducer;
