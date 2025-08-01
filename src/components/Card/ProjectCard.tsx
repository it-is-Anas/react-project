import React, { useEffect, useRef, useState } from "react";
import WidBlueBtn from "../Buttons/WidBlueBtn";
import WidGreenBtn from "../Buttons/WidGreenBtn";
import { useDispatch } from "react-redux";
import { setProject, setProjectIdToDelete, setUpdatePorjectId } from "../../Store/Slices/Projects";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../Helpers/Time";

interface props {
    id: number,
    name: string,
    project_status: string,
    createdAt: string,
    updatedAt?: string
    userFirstName: string,
    userLastName: string,
};


export default function ProjectCard({id,name,project_status,createdAt,userFirstName,userLastName}:props){

    const dispatch = useDispatch();
    const setUpdatedId = ()=> dispatch(setUpdatePorjectId(id));



    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const contextMenu = useRef<HTMLDivElement | null>(null);

    const clickOutSide = (event: MouseEvent) => {
    const target = event.target as Node;
        if (
            contextMenu.current &&
            !(contextMenu.current.contains(target) || contextMenu.current === target)
        ) {
            setOpenMenu(false);
        }
    };


    useEffect(()=>{
        document.addEventListener('click',clickOutSide);
        return ()=>document.removeEventListener('click',clickOutSide);
    },[]);


    const [toDelete,setDelete] = useState<boolean>(false);   

    const setIdToDelete = ()=>dispatch(setProjectIdToDelete(id));

    useEffect(()=>{ 
        if(toDelete){
            setIdToDelete();
        }   
    },[toDelete]);

    
    const navigate = useNavigate();
    const clickHandler = ()=>{
        dispatch(setProject(id));
        navigate('/work-space/projects/'+id);
    };

    return (
        <>
            <div   onContextMenu={(e)=>{e.preventDefault();setOpenMenu(true);}} className=" relative w-[20em] auto rounded-[10px] p-[.5em] text-[12px]  bg-[var(--gray)] m-[.5em] font-[600]">
                <p className="font-[700] py-[1em] border-b border-black">Project Card</p>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">ID</p>
                    <p className="text-[var(--dark-blue)]">rtg-{id}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Project name</p>
                    <p className="text-[var(--dark-blue)]">{name}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Project Status</p>
                    <p className="text-[var(--dark-blue)]">{project_status}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Date</p>
                    <p className="text-[var(--dark-blue)]">{timeAgo(createdAt)} </p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Doer</p>
                    <p className="text-[var(--dark-blue)]">{userFirstName} {userLastName}</p>
                </div>
                <div className="w-[100%]  py-[.3em]  flex items-center justify-between">
                    <WidGreenBtn click={clickHandler} label="view more" className="my-[0] !bg-[var(--light-blue)]" ></WidGreenBtn>
                </div>
                {
                    openMenu &&
                    <div ref={contextMenu} className="absolute top-1/2 left-1/2 w-[9em] rounded-[4px] bg-[var(--white)] rounded-[10px] shadow-[0px_0px_20px_1px_var(--dark-blue)]">
                        <WidBlueBtn onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{e.stopPropagation();setUpdatedId();}} label="Edit" className="max-w-[80%] !m-[0] !my-[.5em] !mx-[auto]  opacity-80 hover:opacity-100" />
                        <WidBlueBtn onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{e.stopPropagation();setDelete(true);}} label="Delete" className="max-w-[80%] !m-[0] !my-[.5em] !mx-[auto]  opacity-80 hover:opacity-100" />
                    </div>
                }
            </div>
        </>
    );
}