import { useEffect } from "react";
import TaskCard from "../../components/Card/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/main";
import axios from "axios";
import { setMyTasks } from "../../Store/Slices/Task";
const BACK_URL = import.meta.env.VITE_API_URL;


export default function Tasks(){
    const dispatch = useDispatch();

    // 
    const tasks = useSelector((state:RootState)=> state.task.myTask);
    useEffect(()=>{
        const pullMyTasks = async ()=>{
            try{
                const response = await axios.get(BACK_URL+'/task/mine',{
                    headers: {
                        Authorization: 'Bearer '+localStorage.getItem('token'),
                    }
                });
                if(response.status === 200){
                    console.log(response.data);
                    dispatch(setMyTasks(response.data));
                }
            }catch(err){
                console.log(err);
            }finally{
                console.log('finaly');
            };
        };
        pullMyTasks();
    },[]);

    return(
        <div className="w-[100%] h-[100%] ">
            <div className="w-[100%] h-[4em] bg-[var(--gray)] flex justify-start items-center">
                <p className="text-[1.2em] font-[600]">Your Tasks :</p>
            </div>
            <div className="w-[100%] h-[calc(100%-4em)] grid [grid-template-columns:repeat(auto-fill,_minmax(300px,_1fr))] gap-4 justify-items-center items-start content-start overflow-y-scroll">
                {
                    tasks.map(task => <TaskCard type="mine" id={task.id} task={task.task} createdAt={task.createdAt} project={task.project} key={'task '+task.id} assignedTo={task.assignedTo} accepted={task.accepted} updatedAt={task.updatedAt} done={task.done} priority={task.priority}  />)
                }
            </div>
        </div>  
    );
}