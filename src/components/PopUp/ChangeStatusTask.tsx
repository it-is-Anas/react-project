import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";
import SelectorFiled from "../Inputs/SelectorFiled";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/main";
import { setUsers } from "../../Store/Slices/Users";
import { addNewTask, setStateTask, setTaskPopUp, updateExsist } from "../../Store/Slices/Task";
import { setLoader, setMessage } from "../../Store/Slices/System";
import type { Task  }from '../../Types';
const BACK_URL = import.meta.env.VITE_API_URL;


export default function ChangeTaskStatePopUp(){

    const dispatch = useDispatch();
    const openLoader = ()=>dispatch(setLoader(true));
    const closeLoader = ()=>dispatch(setLoader(false));

    const msg = (message: string)=>{
        dispatch(setMessage(message));
    };

    const taskId =  useSelector((state:RootState)=> state.task.stateTask);
    const opened = taskId !== -1; 
    const setOpened = (id:number)=> dispatch(setStateTask(id));
    

    const [task,setTask] = useState<string>('');
    const [assignedTo ,setAssignedTo] = useState<string|number>(-1);
    const users = useSelector((state:RootState)=>state.users.users);
    const [projectUsers,setProjectUsers] =  useState<{label:string,id:number}[]> ([]);

    useEffect(()=>{
        if(users){
            const options = users.map(ele=>({label: ele.firstName+ ' '+ ele.lastName , id: ele.id}));
            setProjectUsers(options);
        }
    },[users]);

    const priorityOptions = [{label:'imp',id:0},{label:'not imp',id:1},{label:'very imp',id:2},];
    const [priority,setPriority] = useState<string|number>(0);
    

    const projectId = useParams().id;

    const closeAction = ()=>{
        setOpened(-1);
        setPriority(0);
        setAssignedTo(-1);
        setTask('');
    };

    const tasks = useSelector((state:RootState)=>state.task.tasks);
    let editTask:Task ;
    if(taskId !==-1){
        const temp =  tasks.filter(task => task.id === taskId);
        editTask = temp[0];
    }

    const [save,setSave] = useState<boolean>(false);
    useEffect(()=>{
        if(save){
            const createTask = async ()=>{
                openLoader();
                try{
                    const reponse = await axios.patch(BACK_URL+'/task/'+editTask.id,{
                        priority: priorityOptions[+priority]['label']
                    },{
                        headers:{
                            Authorization: 'Bearer '+localStorage.getItem('token') 
                        }
                    });
                    if(reponse.status === 200){
                        dispatch(updateExsist(reponse.data));
                    }
                    }catch(err){
                        if(err.status === 403){
                            msg('access deny, you don\'t have the permesion to this project')
                        }
                    }finally{
                        closeLoader();
                    }
                };
            createTask();
            closeAction();
            setSave(false);
        }
    },[save]);




    if(opened)
        return (
            <>  
                <WorkSpacePopUp closePopUp={closeAction} >
                    <p className="p-[1em] font-[500] text-[var(--black)]">Update State of  Task !</p>
                    <InputFiled  value={task} onChange={setTask} label="The Task" placeHolader="Do Somthing ..." className="!items-center hidden" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <SelectorFiled value={assignedTo} onChange={setAssignedTo} key={'selectUser'} label="Assigne To"  options={projectUsers} className='hidden' labelClassName="mr-[auto] ml-[3em]" />
                    <SelectorFiled value={priority} onChange={setPriority} key={'PriorityUser'} label="Priority"  options={priorityOptions} labelClassName="mr-[auto] ml-[3em]" />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn  click={closeAction} label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn click={()=>setSave(true)}  label="Create" className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}