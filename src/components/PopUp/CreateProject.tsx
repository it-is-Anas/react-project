import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
import TextFiled from "../Inputs/TextField";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";


interface props {
    pushOpen?: ((openPopUp: ()=>void)=>void) | null,
};


export default function CreateProjectPopUp({pushOpen = null }:props){
    const [opened,setOpened] = useState<boolean>(!false);
    
    const openPopUp = ()=> setOpened(true);
    const closePopUp = ()=> setOpened(false);

    useEffect(()=>{
        if(pushOpen){
            pushOpen(openPopUp);
        }
    },[pushOpen]);

    if(opened)
        return (
            <>  
                <WorkSpacePopUp closePopUp={closePopUp} >
                    <p className="p-[1em] font-[500] text-[var(--black)]">Create Project</p>
                    <InputFiled label="Project Name" placeHolader="new project" className="!items-center" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <TextFiled label="Project Description" placeHolader="new project" className="!items-center mb-[1em]" labelClassName="mr-[auto] ml-[3em] !font-[600]" inputClassName="bg-[var(--white)] w-[80%] m-h-[3em]" />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn label="Create" className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}