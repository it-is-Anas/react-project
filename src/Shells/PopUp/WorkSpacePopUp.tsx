import type React from "react";

interface props {
    children: React.ReactNode,
    closePopUp?: ()=>void
};
export default function WorkSpacePopUp({children,closePopUp=()=>console.log('default action')}:props){

    
    return (
        <>
            <div onClick={closePopUp} className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[var(--light-green)] opacity-30 index-1000 "  ></div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[var(--gray)] rounded-[10px] w-[25em] h-[auto] shadow-[0_0_14px_0_var(--dark-blue)] max-[768px]:w-[80%]" >
                {children}
            </div>
        </>
        
    );
}