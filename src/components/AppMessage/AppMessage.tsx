import { useEffect, useState } from "react";

interface props {
    pushLogic?: ((setMessage: (message: string)=>void)=>void),
};

export default function AppMessage({pushLogic}:props){
    const [opened,setOpened] = useState<boolean>(false);
    const [message,setMessage] = useState<string>('');
    
    
    function putMessage(newMessage:string){
        setMessage(newMessage);
    }   
    
    useEffect(()=>{
        if(message){
            setOpened(true);
            setTimeout(() => {
                setOpened(false);
                setMessage('');
            }, 2000);
        }
    },[message]);


    useEffect(()=>{
        if(pushLogic){
            pushLogic(putMessage);
        }
    },[pushLogic]);

    if(opened)
        return (
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gray)] px-[1.24em] py-[.5em] rounded-[5px] font-[600] ">{ message }</p>
        );
    return null;
}