import type { RootState } from "../../Store/main";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../Store/Slices/System";

export default function AppMessage(){

    const dispatch = useDispatch();
    const [opened,setOpened] = useState<boolean>(false);
    
    const message = useSelector((state: RootState) => state.system.message);


    useEffect(()=>{
        if(!opened && message.length){
            setOpened(true);
            setTimeout(() => {
                setOpened(false);
                dispatch(setMessage(''));
            }, 2000 );
        }
    },[message]);

    
    if(opened)
        return (
            <p className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gray)] px-[1.24em] py-[.5em] rounded-[5px] font-[600] ">{ message }</p>
        );
    return null;
}