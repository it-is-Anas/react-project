import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";
import SelectorFiled from "../Inputs/SelectorFiled";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/main";
import { setUpdatePorjectId } from "../../Store/Slices/Projects";
import axios from "axios";
import { updateExisitProject } from '../../Store/Slices/Projects';

interface props {
    pushOpen?: ((openPopUp: (projectId:number,projectName: string,projectStatus: string)=>void)=>void) | null,
    message?:(message:string)=>void,
    openLoader?:()=>void,
    closeLoader?:()=>void,    
};


export default function UpdateProjectPopUp({pushOpen = null ,message=()=>console.log('didn\'t initailized!'),openLoader=()=>console.log('default open Loader') ,closeLoader=()=>console.log('default close loader ')}:props){

    useEffect(()=>{
        if(pushOpen){
            pushOpen(openPopUp);
        }
    },[pushOpen]);

    const [projectName,setProjectName] = useState<string>('');    
    // const [projectDesc,setProjectDesc] = useState<string>('');

    const seletorOptions = ['done','in process','in queue']; 
    const [status,setStatus] = useState<string>(seletorOptions[2]);   


    const [saveProject,setSaveProject] = useState<boolean>(false);
    const save = ()=> {
        setSaveProject(true);
    };

    const cancelAction = ()=>{
        setProjectName('');
        setStatus(seletorOptions[2]);
        closePopUp();
    };

    const [opened,setOpened] = useState<boolean>(false);
    
    const openPopUp = (projectId:number,projectName: string,projectStatus: string)=> {
        setProjectName(projectName);
        setStatus(projectStatus);
        setOpened(true);
    };

    const dispatch = useDispatch();
    const setUpdatedId = ()=> dispatch(setUpdatePorjectId(-1));

    const closePopUp = ()=> {
        setOpened(false);
        setUpdatedId();
    };


    const projectId = useSelector((state:RootState)=>state.project.updatedProjectId);
    const projects = useSelector((state:RootState)=>state.project.projects);

    useEffect(()=>{
        const project = projects.filter(proj=>proj.id===projectId);
        if(projectId && project.length){
            openPopUp(projectId,project[0].name,project[0].project_status);
        }
    },[projectId]);


    const updateProjects = (project)=>{
        dispatch(updateExisitProject(project));
    };

    useEffect(()=>{
        if(saveProject){
            const backUrl = import.meta.env.VITE_API_URL+'/project/'+projectId;
            const createProject = async()=>{
                openLoader();
                const token = localStorage.getItem('token');
                try{
                    const response = await axios.patch(backUrl,{
                        name: projectName,
                        project_status: status
                    },{
                        headers:{
                            Authorization: 'Bearer '+ token,
                        }
                    });
                    if(response.status === 200){
                        message('Project Updated Succesfully!');
                        updateProjects(response.data);
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
                    <p className="p-[1em] font-[500] text-[var(--black)]">Update Project</p>
                    <InputFiled value={projectName} onChange={setProjectName} label="Project Name" placeHolader="new project" className="!items-center" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <SelectorFiled label="Status" value={status} onChange={setStatus} labelClassName="mr-[auto] ml-[3em]" options={seletorOptions} />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn click={cancelAction} label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn click= {save} label="Save" className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}