import { timeAgo } from '../../Helpers/Time';
import type { Task } from '../../Types';

export default function TaskCard({id,task,project,assignedTo,priority,accepted,createdAt,updatedAt}:Task){
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
        </div>
    );
} 