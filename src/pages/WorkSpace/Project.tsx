import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/main";

import type { Project }  from '../../Types';
import TaskCard from "../../components/Card/TaskCard";
import { useEffect } from "react";
import axios from "axios";
import { setTasks } from "../../Store/Slices/Task";
import { useParams } from "react-router-dom";
import { timeAgo } from "../../Helpers/Time";
const BACK_URL = import.meta.env.VITE_API_URL;


export default function Project(){
    // let { id } = useParams();
    // id = id ? id : +1;
    const dispatch = useDispatch();

    const projectId = useParams().id;

    const tasks = useSelector((state:RootState)=>state.task.tasks);
    const notImpTasks = tasks.filter(ele=>ele.priority === 'not imp');
    const impTasks = tasks.filter(ele=>ele.priority === 'imp');
    const veryImpTasks = tasks.filter(ele=>ele.priority === 'very imp');
    
    useEffect(()=>{
        const pullTasks = async ()=>{
            const response = await axios.get(BACK_URL+'/task/'+projectId,{
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token'),
                }
            });
            if(response.status === 200){
                dispatch(setTasks(response.data));
            }
        };
        if(!tasks.length){
            pullTasks();
        }
    },[]);



    const project: (Project| null) = useSelector((state: RootState)=> state.project.project);

    return (
        <>
            <div className=" p-[.4em] w-[100%] h-[4em] bg-[var(--gray)] flex justify-start items-center">
                <div className="">
                    <p className="font-[700]">{ project?.name }</p>
                    <p className="font-[500] text-[.8em] text-[var(--light-blue)]">{ project?.project_status }</p>
                </div>
                <p className="mt-[auto] ml-[auto] font-[500] text-[.7em] ">{project? timeAgo(project.createdAt):'' }</p>
            </div>
            <div className="w-[100%] h-[calc(100vh-4em)] grid grid-cols-12">
                <div className="col-[1/5] py-[.4em] px-[.2em] overflow-y-scroll ">
                    <div className="w-[100%] flex justify-between  ">
                        <p className="font-[600] text-[.9em]">Very Important :</p>
                    </div>

                    {
                        veryImpTasks.map(task=> <TaskCard id={task.id} task={task.task} createdAt={task.createdAt} project={task.project} key={'task '+task.id} assignedTo={task.assignedTo} accepted={task.accepted} updatedAt={task.updatedAt} priority={task.priority}  />)
                    }
                </div>
                <div className="col-[5/9] py-[.4em] px-[.2em] overflow-y-scroll ">
                    <div className="w-[100%] flex justify-between  ">
                        <p className="font-[600] text-[.9em]">Important :</p>
                    </div>

                    {
                        impTasks.map(task=> <TaskCard id={task.id} task={task.task} createdAt={task.createdAt} project={task.project} key={'task '+task.id} assignedTo={task.assignedTo} accepted={task.accepted} updatedAt={task.updatedAt} priority={task.priority}  />)
                    }
                </div>
                <div className="col-[9/13] py-[.4em] px-[.2em] overflow-y-scroll ">
                    <div className="w-[100%] flex justify-between  ">
                        <p className="font-[600] text-[.9em]">Not Important :</p>
                    </div>

                    {
                        notImpTasks.map(task=> <TaskCard id={task.id} task={task.task} createdAt={task.createdAt} project={task.project} key={'task '+task.id} assignedTo={task.assignedTo} accepted={task.accepted} updatedAt={task.updatedAt} priority={task.priority}  />)
                    }
                </div>
            </div>
        </>
    );
}