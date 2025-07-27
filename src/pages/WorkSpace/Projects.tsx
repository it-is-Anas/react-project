import { useEffect } from "react";
import ProjectCard from "../../components/Card/ProjectCard";
import axios  from "axios";
import { useDispatch, useSelector } from "react-redux";
import { pullProjects  } from "../../Store/Slices/Projects";
import type { RootState } from "../../Store/main";
import type { Project } from '../../Types';
import { setLoader } from "../../Store/Slices/System";

export default function Projects (){

    const dispatch = useDispatch();
    const setProjects = (projects:[])=>{
        dispatch(pullProjects(projects));
    };
    
    const projects =  useSelector((state: RootState) => state.project.projects);
    

    
    useEffect(()=>{
        if(projects){
            const backUrl = import.meta.env.VITE_API_URL+'/project';
            const token = localStorage.getItem('token');
            const pullProject = async ()=>{
                try{
                    dispatch(setLoader(true));
                    const response = await axios.get(backUrl,{
                        headers:{
                            Authorization: 'Bearer '+ token ,
                        }
                    });
                    if(response.status === 200){
                        setProjects(response.data);
                    }
                    dispatch(setLoader(false));
                }catch(err: unknown){
                    dispatch(setLoader(false));
                    console.log(err);
                }
            };
            pullProject();
        }
    },[]);



    return (
        <>
            <div className="w-[100%] h-[100%]"  >
                <p className="font-[600] text-[var(--drak-blue)] py-[.5em] px-[1.5em]">Your Pojects</p>
                <div className="w-[100%] max-h-[calc(100%-2.5em)] justify-items-center  grid grid-cols-[repeat(auto-fill,minmax(16em,1fr))] gap-4 p-4 overflow-y-scroll"  >
                    {
                        projects.map((project:Project)=><ProjectCard key={project.id} id={project.id} name={project.name} project_status={project.project_status} createdAt={project.createdAt} updatedAt={project.updatedAt} userFirstName={project.owner?project.owner.firstName:''} userLastName={project.owner?project.owner.lastName:''} />)
                    }
                </div>
            </div>
        </>
    );
} 