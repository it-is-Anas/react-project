import { useEffect, useState } from "react";
import BlueBtn from "../Buttons/BlueBtn";
import InputFiled from "../Inputs/InputFiled";
import TextFiled from "../Inputs/TextField";
import WorkSpacePopUp from "../../Shells/PopUp/WorkSpacePopUp";
import SelectorFiled from "../Inputs/SelectorFiled";


interface props {
    pushOpen?: ((openPopUp: ()=>void)=>void) | null,
};


export default function CreateTeamPopUp({pushOpen = null }:props){
    const [opened,setOpened] = useState<boolean>(false);
    
    const openPopUp = ()=> setOpened(true);
    const closePopUp = ()=> setOpened(false);

    useEffect(()=>{
        if(pushOpen){
            pushOpen(openPopUp);
        }
    },[pushOpen]);

    const [teamProject,setTeamProject] = useState<string>('');    
    const [teamDesc,setTeamDesc] = useState<string>('');


    const projectOptions:string[] = ['frstProject','secProject','thirdProj'];
    const [selectedProjectName,setSelectedProjectName] = useState<string>('');
    // const usersOptions:string[] = ['Anas','Omar','Osama'];
    const [usersOptions,setUsersOptions] = useState<string[]>(['Anas','Omar','Osama']);
    const [selectedUsers,setSelectedUsers] = useState<string[]>([]);
    const updateSelectedUsers = (user:string)=>{
        setSelectedUsers(users=>[...users,user]);
        setUsersOptions(
            users=>{ 
                if(users.length === 1){
                    return [];
                }
                return users.filter(u=>u!=user)
            })
        };
    const removeUser = (user:string) => {
        setSelectedUsers(users => users.filter(ele=>ele!==user));
        setUsersOptions(users=>[...users,user]);
    };
    

    if(opened)
        return (
            <>  
                <WorkSpacePopUp closePopUp={closePopUp} >
                    <p className="p-[1em] font-[500] text-[var(--black)]">Create Team</p>
                    <InputFiled value={teamProject} onChange={setTeamProject} label="Team Name" placeHolader="new project" className="!items-center" labelClassName="mr-[auto] ml-[3em]" inputClassName="bg-[var(--white)] w-[80%]" />
                    <SelectorFiled  key={'selectProject'} value={selectedProjectName} onChange={setSelectedProjectName} label="Project name"  options={projectOptions} labelClassName="mr-[auto] ml-[3em]" />
                    {   
                        !!selectedUsers.length &&
                        <div className=" w-[100%] p-[.5em] px-[3em] flex justify-start itemes-center"> 
                            {selectedUsers.map((ele,index)=><p onClick={()=>removeUser(ele)} key={'chois'+index} className="p-[0.3em] mx-[5px] bg-[var(--light-green)] font-medium text-[0.8em] rounded-[4px] text-[var(--white)] cursor-pointer flex ">{ele } <div className=" w-[1em] flex justify-center items-center " ><span className="rotate-[-45deg] font-bold" >+</span></div></p>)}
                        </div>
                    }
                    <SelectorFiled  key={'selectUser'}  onChange={updateSelectedUsers} label="Team's users"  options={usersOptions} labelClassName="mr-[auto] ml-[3em]" />
                    <TextFiled value={teamDesc} onChange={setTeamDesc} label="Team Description" placeHolader="new project" className="!items-center mb-[1em]" labelClassName="mr-[auto] ml-[3em] !font-[600]" inputClassName="bg-[var(--white)] w-[80%] m-h-[3em]" />
                    <div className="w-[100%] h-[2em] my-[1em] mb-[1em] pr-[2.5em] flex justify-end items-center max-[768px]:justify-center max-[768px]:pr-[0]">
                        <BlueBtn label="Cancel" className="!m-[0] !mx-[.4em] py-[0] border border-[3px] !text-[var(--light-blue)] border-[var(--light-blue)] !bg-[var(--white)]" />
                        <BlueBtn label="Create" className="!m-[0] py-[0] border border-[3px] border-[var(--light-blue)]" />
                    </div>
                </WorkSpacePopUp>
            </>
        );
    return null;
}