import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
// import TextFiled from "../Inputs/TextField";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createProject } from "../../Store/Slices/Projects";

import type { Project } from '../../Types';

interface props {
    pushOpen?: ((openPopUp: ()=>void)=>void) | null,
    message?:(message:string)=>void,
    openLoader?:()=>void,
    closeLoader?:()=>void,    
};


export default function CreateProjectPopUp({pushOpen = null ,message=()=>console.log('didn\'t initailized!'),openLoader=()=>console.log('default open Loader') ,closeLoader=()=>console.log('default close loader ')}:props){


    const [opened,setOpened] = useState<boolean>(false);
    
    const openPopUp = ()=> setOpened(true);
    const closePopUp = ()=> setOpened(false);

    useEffect(()=>{
        if(pushOpen){
            pushOpen(openPopUp);
        }
    },[pushOpen]);

    const [projectName,setProjectName] = useState<string>('');    

    const [saveProject,setSaveProject] = useState<boolean>(false);
    const save = ()=> {
        setSaveProject(true);
    };

    const cancelAction = ()=>{
        setProjectName('');
        closePopUp();
    };

    const dispatch = useDispatch();


    const addNewProject = (project: Project) : void => {
        dispatch(createProject(project));
    };


    useEffect(()=>{
        if(saveProject){
            const backUrl = import.meta.env.VITE_API_URL+'/project';
            const createProject = async()=>{
                openLoader();
                const token = localStorage.getItem('token');
                try{
                    const response = await axios.post(backUrl,{
                        name: projectName,
                    },
                    {
                        headers:{
                            Authorization: 'Bearer '+token
                        }
                    });
                    if(response.status === 201){
                        message('Project created Succesfully!');
                        addNewProject(response.data);
                    }
                    closeLoader();
                    cancelAction();
                }catch(err){
                    console.log(err);
                    closeLoader();
                    cancelAction();
                };
            };
            createProject();
            setSaveProject(false);
        }
    },[saveProject]);

    

    if(opened)
        return (
            <>  
                <WorkSpacePopUp closePopUp={closePopUp} >
                    <p className="p-[1em] font-[500] text-[var(--black)]">Create Project</p>
                    <InputFiled value={projectName} onChange={setProjectName} label="Project Name" placeHolader="new project" className="!items-center" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn click={cancelAction} label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn click= {save} label="Create" className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}