import { createSlice } from '@reduxjs/toolkit';

import type { Task } from '../../Types';


interface initialStateType {
    taskPopUp: boolean,
    tasks: Task[],
    stateTask: number,
} ;

const initialState: initialStateType ={
    taskPopUp: false,
    tasks: [],
    stateTask: -1,
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
        },setStateTask(state,{payload}){
            state.stateTask = payload;
        },updateExsist(state,{ payload }){
            state.tasks = state.tasks.map(task => {
                if(task.id === payload.id){
                    return payload;
                }
                return task;
            });
        }
    },
});

export const { setTaskPopUp , setTasks , addNewTask , setStateTask , updateExsist } = counterSlice.actions;
export default counterSlice.reducer;
