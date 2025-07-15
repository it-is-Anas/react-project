import { createSlice } from '@reduxjs/toolkit';

import type { Team  } from '../../Types';


interface initialStateType {
    teams: Team[],
    updatedTeamId: number,
    deletedTeamId: number,
} ;

const initialState: initialStateType ={
        teams: [],
        updatedTeamId: -1,
        deletedTeamId: -1,
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
        }
    },
});

export const { setteams , addTeam } = counterSlice.actions;
export default counterSlice.reducer;
