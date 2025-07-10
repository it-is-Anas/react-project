import { useEffect, useState } from "react";


interface props {
    pushLogic?:  ((logic: [() => void, () => void] ) => void);
}

export default function AppLoader({pushLogic}: props){
    const [opened,setOpened] = useState<boolean>(false);


    const open = ()=>{
        setOpened(true);
    };
    const close = ()=>{
        setOpened(false);
    };


    useEffect(()=>{
        if(pushLogic){
            pushLogic([open,close]);
        }
    },[pushLogic]);

    if(opened){
        return (
            <div className="out-loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]  flex justify-center items-center">
                <div className="loader"></div>
            </div>
        );
    }
    return null;
}

