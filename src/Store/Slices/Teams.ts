import { createSlice } from '@reduxjs/toolkit';

import type { Team  } from '../../Types';


interface initialStateType {
    teams: Team[],
    updatedTeamId: number,
} ;

const initialState: initialStateType ={
        teams: [],
        updatedTeamId: -1,
    };
export const counterSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setteams(state,context){
            state.teams = context.payload;
        },
        addTeam(state,context){
            state.teams.push(context.payload);
        },removeTeam(state,context){
            state.teams = state.teams.filter( ele=>ele.id !== context.payload );
        },setUpdatedId(state,context){
            state.updatedTeamId = context.payload;
        },updateExisitTeam(state,context){
            state.teams = state.teams.map(ele=>{
                if(ele.id === context.payload.id){
                    return context.payload;
                }
                return ele;
            });
        }
    },
});

export const { setteams , addTeam , removeTeam , setUpdatedId,updateExisitTeam} = counterSlice.actions;
export default counterSlice.reducer;
