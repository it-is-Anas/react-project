import { useDispatch } from 'react-redux';
import { timeAgo } from '../../Helpers/Time';
import type { Task } from '../../Types';
import BlueBtn from '../Buttons/BlueBtn';
import { setStateTask } from '../../Store/Slices/Task';
const BACK_URL = import.meta.env.VITE_API_URL;


interface Props extends Task {
    type?: string,
};

export default function TaskCard({id,task,project,assignedTo,priority,accepted,createdAt,updatedAt,type='',done=false}:Props){
    const dispatch = useDispatch();
    const openChangeStatePopUp = () => dispatch(setStateTask(id));
    
    
    return (
        <div className="w-[90%] mx-[auto] rounded-[5px] my-[.5em] p-[.9em] bg-[var(--gray)] text-[var(--dark-blue)] ">
            <div className="flex  justify-between  items-center ">
                {/* <p className="">accepted</p> */}
                <p className="text-[.8em] font-[600]">task-ref-{id}</p>
                <p className="text-[.8em] font-[600]">{ timeAgo(createdAt) }</p>
            </div>
            <p className="font-[500]"> { assignedTo?.firstName +' '+ assignedTo?.lastName }</p>
            <p className="font-[500]"> { project?.name } </p>
            <p className="font-[600] py-[10px] px-[10px] w-[100%] text-[1.1em] ">{task}</p>
            { !type.length && 
                <div className="w-[100%]  flex justify-end items-center"> 
                    <BlueBtn click={openChangeStatePopUp} className='text-[12px] border border-[2px] border-[var(--light-blue)] py-[0.2em]' label='Priority Status' />
                </div>
            }
            { (type === 'mine' && !accepted) &&  
                <div className="w-[100%]  flex justify-end items-center"> 
                    <BlueBtn click={openChangeStatePopUp} className='text-[12px] border border-[2px] border-[var(--light-green)] bg-[var(--white)] !text-[var(--light-green)] py-[0.2em]' label='Deny' />
                    <BlueBtn click={openChangeStatePopUp} className='text-[12px] border border-[2px] border-[var(--light-green)] bg-[var(--light-green)] py-[0.2em]' label='Accept' />
                </div>
            }
            { (type === 'mine' && accepted && !done) &&  
                <div className="w-[100%]  flex justify-end items-center"> 
                    {/* <BlueBtn click={openChangeStatePopUp} className='text-[12px] border border-[2px] border-[var(--light-green)] bg-[var(--white)] !text-[var(--light-green)] py-[0.2em]' label='Deny' /> */}
                    <BlueBtn click={openChangeStatePopUp} className='text-[12px] border border-[2px] border-[var(--light-green)] bg-[var(--light-blue)] py-[0.2em]' label='Done' />
                </div>
            }

        </div>
    ); 
} 