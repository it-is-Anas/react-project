import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        updatedProjectId: -1,
        deletedProjectId: -1,
    },
    reducers: {
        pullProjects(state,context){
            state.projects = context.payload;
        },createProject(state,context){
            state.projects.push(context.payload);
        },setUpdatePorjectId(state,context){
            state.updatedProjectId = context.payload;
        },updateExisitProject(state,context){
            state.projects = state.projects.map(project=>{
                if(project.id === context.payload.id){
                    return context.payload;
                }
                return project;
            });
            state.updatedProjectId = -1;
        },setProjectIdToDelete(state,context){
            state.deletedProjectId = context.payload;
        },removeProject(state){
            state.projects  = state.projects.filter(project=>project.id !== state.deletedProjectId);
            state.deletedProjectId = -1;
        }
    },
});

export const { pullProjects , setUpdatePorjectId  , createProject  , updateExisitProject , setProjectIdToDelete ,removeProject } = counterSlice.actions;
export default counterSlice.reducer;
