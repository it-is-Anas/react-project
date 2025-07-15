import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";
import SelectorFiled from "../Inputs/SelectorFiled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/main";
import { pullProjects } from "../../Store/Slices/Projects";
import { addTeam, setUpdatedId, updateExisitTeam } from "../../Store/Slices/Teams";
const BACK_URL = import.meta.env.VITE_API_URL;


interface props {
    pushOpen?: ((openPopUp: ()=>void)=>void) | null,
    message?:(message:string)=>void,
    openLoader?:()=>void,
    closeLoader?:()=>void,    
};


export default function CreateTeamPopUp({pushOpen = null,message=()=>console.log('default message aciton'), openLoader=()=>console.log('default open loader'),closeLoader=()=>console.log('default close loader') }:props){
    const token = localStorage.getItem('token');    
    const dispatch = useDispatch();

    

    const projectToSelect = useSelector((state:RootState)=> state.project.projects);
    

    const [opened,setOpened] = useState<boolean>(false);
    
    const openPopUp = ()=> setOpened(true);
    const closePopUp = ()=> {setOpened(false);dispatch(setUpdatedId(-1));};

    useEffect(()=>{
        if(pushOpen){
            pushOpen(openPopUp);
        }
    },[pushOpen]);

    const [teamProject,setTeamProject] = useState<string>('');    

    const [projectOptions,setProjectOptions] = useState<string[]>([]);
    const [selectedProjectName,setSelectedProjectName] = useState<string>('');

    useEffect(()=>{
        if(projectToSelect.length){
            const arr: string[] = projectToSelect.map(ele=>ele.name);
            setProjectOptions(arr);
        }
    },[projectToSelect]);


    useEffect(()=>{
        const fetchProjects = async ()=>{
            try{
                openLoader();
                const response = await axios.get(BACK_URL+'/project',{
                    headers:{
                        Authorization: 'Bearer '+ token,
                    }
                });
                if(response.status){
                    dispatch(pullProjects(response.data));
                }
                closeLoader();
            }catch(err:unknown){
                closeLoader();
                console.log(err);
            };
        };
        if(!projectToSelect.length)
            fetchProjects();
    },[]);


    const cancelAction = ()=>{
        setTeamProject('');
        setSelectedProjectName('');
        closePopUp();
    };

    const [save,setSave] = useState<boolean>(false);
    useEffect(()=>{
        if(save && projectToSelect.length && updateTeamId === -1){
            const projectId = projectToSelect.filter(ele=> ele.name === selectedProjectName)[0].id;
            const createTeam = async ()=>{
                try{
                    openLoader();
                    const response = await axios.post(BACK_URL+'/team',{
                        name: teamProject,
                        project_id: projectId
                    },{
                        headers:{
                            Authorization: 'Bearer '+ token,
                        }
                    });
                    if(response.status === 201){
                        dispatch(addTeam(response.data));
                    }
                    closeLoader();
                }catch(err:unknown){
                    closeLoader();
                    console.log(err);
                };
            };
            createTeam();
            setSave(false);
            cancelAction();
        }else if(save && projectToSelect.length && updateTeamId !== -1){
            const projectId = projectToSelect.filter(ele=> ele.name === selectedProjectName)[0].id;
            const createTeam = async ()=>{
                try{
                    openLoader();
                    const response = await axios.patch(BACK_URL+'/team/'+updateTeamId,{
                        name: teamProject,
                        project_id: projectId
                    },{
                        headers:{
                            Authorization: 'Bearer '+ token,
                        }
                    });
                    if(response.status === 200){
                        dispatch(updateExisitTeam(response.data));
                    }
                    closeLoader();
                }catch(err:unknown){
                    closeLoader();
                    console.log(err);
                };
            };
            createTeam();
            setSave(false);
            cancelAction();
        }
    },[save]);


    const teams = useSelector((state:RootState)=>state.team.teams);
    const updateTeamId = useSelector((state:RootState)=>state.team.updatedTeamId);
    
    useEffect(()=>{
        if(updateTeamId !== -1){
            const updatedTeam = (teams.filter(element=>element.id === updateTeamId))[0];
            setTeamProject(updatedTeam.name);
            setSelectedProjectName(updatedTeam.project.name);
            openPopUp();
            //  afer update or close pop up
        }
    },[updateTeamId]);
    

    if(opened)
        return (
            <>  
                <WorkSpacePopUp closePopUp={closePopUp} >
                    <p className="p-[1em] font-[500] text-[var(--black)]">Create Team</p>
                    <InputFiled value={teamProject} onChange={setTeamProject} label="Team Name" placeHolader="new project" className="!items-center" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <SelectorFiled  key={'selectProject'} value={selectedProjectName} onChange={setSelectedProjectName} label="Project name"  options={projectOptions} labelClassName="mr-[auto] ml-[3em]" />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn click={()=>setSave(true)} label={updateTeamId!==-1?"Save":"Create"} className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}