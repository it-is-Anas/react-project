import { Outlet, useLocation, useParams } from "react-router-dom";

import IconBtn from "../components/Buttons/IconBtn";
import HeaderLogo from "../components/Logo/HeaderLogo";

import projectIcon from '../assets/SystemeVector/projects.png';
import teamIcon from '../assets/SystemeVector/teams.png';

import mobileMenu from '../assets/SystemeVector/mobileMenu.png';


import React, { useEffect, useRef, useState } from "react";


import WidGreenBtn from "../components/Buttons/WidGreenBtn";
import CreateProjectPopUp from "../components/PopUp/CreateProject";
import CreateTeamPopUp from "../components/PopUp/CreateTeam";
import AppMessage from "../components/AppMessage/AppMessage";
import AppLoader from "../components/Loader/AppLoader";
import UpdateProjectPopUp from "../components/PopUp/UpdateProject";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Store/main";
import axios from "axios";
import { removeProject } from "../Store/Slices/Projects";
import { setMessage , setLoader } from "../Store/Slices/System";
import CreateTaskPopUp from "../components/PopUp/CreateTask";
import { setTaskPopUp } from "../Store/Slices/Task";
import ChangeTaskStatePopUp from "../components/PopUp/ChangeStatusTask";


export default function WorkSpace(){
    
    const dispatch = useDispatch();
    const message = (message:string)=>{
        dispatch(setMessage(message));
    };


    const openLoader = ()=>{
        dispatch(setLoader(true));
    };
    const closeLoader = ()=>{
        dispatch(setLoader(false));
    };


    const [openMobileMenu,setOpenMobileMenu] = useState<boolean>(false);
    const openCls = openMobileMenu?'!translate-x-[0]':null;

    const openCreateProjectPopUpFun = useRef<(()=>void)|null>(null);
    const setCreateProjectOpenPopUp = (func: ()=>void )=>{
        openCreateProjectPopUpFun.current = func; 
    };
    const openCreateProjectPopUp = ()=>{
        if(openCreateProjectPopUpFun.current){
            openCreateProjectPopUpFun.current();
        }
    };
    




    const openCreateTeamPopUpFun = useRef<(()=>void)|null>(null);
    const setCreateTeamOpenPopUp = (func: ()=>void )=>{
        openCreateTeamPopUpFun.current = func; 
    };
    const openCreateTeamPopUp = ()=>{
        if(openCreateTeamPopUpFun.current){
            openCreateTeamPopUpFun.current();
        }
    }; 
    

    const location = useLocation();
    const { id } = useParams();    
    let createBtn:React.ReactNode  ;
    if(location.pathname === '/work-space/projects'){
        createBtn = <WidGreenBtn click={openCreateProjectPopUp} label="+ Add New Project" className='mx-[auto] w-[90%] !bg-[var(--light-green)] !font-[700] py-[1em] text-[11px]'  />;
    }else if(location.pathname === '/work-space/projects/'+id){
        createBtn = <WidGreenBtn click={()=> dispatch(setTaskPopUp(true))} label="+ Create New Task" className='mx-[auto] w-[90%] !bg-[var(--light-green)] !font-[700] py-[1em] text-[11px]'  />;
    }
    else if(location.pathname === '/work-space/teams'){
        createBtn = <WidGreenBtn click={openCreateTeamPopUp} label="+ Add New Team" className='mx-[auto] w-[90%] !bg-[var(--light-green)] !font-[700] py-[1em] text-[11px] '  />;
    }

    const removeDeletedProject = ()=> dispatch(removeProject());
    const deleteId = useSelector(((state:RootState) => state.project.deletedProjectId));
    
    useEffect(()=>{
        if(deleteId !== -1){
            const backUrl = import.meta.env.VITE_API_URL+'/project/'+deleteId;
            const createProject = async()=>{
                openLoader();
                const token = localStorage.getItem('token');
                try{
                    const response = await axios.delete(backUrl,{
                        headers:{
                            Authorization: 'Bearer '+ token,
                        }
                    });
                    if(response.status === 200){
                        message('Project Updated Succesfully!');
                        removeDeletedProject();
                    }
                    closeLoader();
                }catch(err){
                    console.log(err);
                    closeLoader();
                };
            };
            createProject();
            // setSaveProject(false);
        }
    },[deleteId]);

    return (
        <>
        <div className="w-[100dvw] h-[100dvh] max-w-[100dvw] max-h-[100dvh] grid grid-cols-12  max-[768px]:hidden">
            <aside className="col-[1/4] bg-[var(--gray)] grid grid-rows-[repeat(auto-fill,3.25em)] items-center p-[1em]   ">
                <HeaderLogo />
                { createBtn }
                <IconBtn isLink={true} to='/work-space/projects' label="Projects" className=" mx-[auto] w-[90%] bg-[var(--white)] !text-[var(--dark-blue)] !justify-start !p-[.7em] text-[11px] " imgClassName='w-[1.3em] ml-[0]' icon={projectIcon} />
                <IconBtn isLink={true} to='/work-space/teams' label="Teams" className=" mx-[auto] w-[90%] bg-[var(--white)] !text-[var(--dark-blue)] !justify-start !p-[.7em] text-[11px] " imgClassName='w-[1.3em] ml-[0]' icon={teamIcon} />
            </aside>
            <div className="col-[4/13] h-[100dvh] ">
                <Outlet />
            </div>
        </div>
        <div className="w-[100dvw] min-h-[100dvh] grid grid-rows-[4em_1fr] overflow-y-hidden min-[768px]:hidden overflow-x-hidden  relative">
                <header className="bg-[var(--gray)] flex items-center justify-between px-[.3em]" >
                    <HeaderLogo className="ml-[.7em]" />
                    <img onClick={()=>setOpenMobileMenu(true)} src={mobileMenu} alt="" className="mr-[1em] w-[1.5em] pointer " />
                </header>
                <div className="h-[100%] ">
                    <Outlet />
                </div>
                <div  onClick={()=>setOpenMobileMenu(false)} className={"absolute w-[100vw] h-[100vh] "+(openMobileMenu?null:'hidden')}></div>
                <aside onClick={()=>setOpenMobileMenu(false)} className={"bg-[var(--gray)] grid grid-rows-10 items-center p-[1em]  absolute w-[80vw] h-[100vh] bg-[green] right-0 top-0 transition-all duration-1000 ease-in translate-x-[100%]  "+openCls}>
                    <HeaderLogo />
                    { createBtn }
                    <span onClick={()=>setOpenMobileMenu(false)} >
                        <IconBtn isLink={true} to='/work-space/projects' label="Projects" className=" mx-[auto] w-[90%] bg-[var(--white)] !text-[var(--dark-blue)] !justify-start !p-[.7em] text-[11px]" imgClassName='w-[1.3em] ml-[0]' icon={projectIcon} />
                    </span>
                    <span onClick={()=>setOpenMobileMenu(false)} >
                        <IconBtn isLink={true} to='/work-space/teams' label="Teams" className=" mx-[auto] w-[90%] bg-[var(--white)] !text-[var(--dark-blue)] !justify-start !p-[.7em] text-[11px]" imgClassName='w-[1.3em] ml-[0]' icon={teamIcon} />
                    </span>
                </aside>
            </div>
            <AppMessage />
            <AppLoader  />
            <CreateProjectPopUp message={message} openLoader={openLoader} closeLoader={closeLoader} pushOpen={setCreateProjectOpenPopUp} />
            <UpdateProjectPopUp  message={message} openLoader={openLoader} closeLoader={closeLoader}  />
            <CreateTeamPopUp message={message} openLoader={openLoader} closeLoader={closeLoader} pushOpen={setCreateTeamOpenPopUp} />
            <CreateTaskPopUp />
            <ChangeTaskStatePopUp />
        </>
    );
}


