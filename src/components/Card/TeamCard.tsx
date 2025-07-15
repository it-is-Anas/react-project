import { useEffect, useRef, useState } from "react";
import WidBlueBtn from "../Buttons/WidBlueBtn";
import WidGreenBtn from "../Buttons/WidGreenBtn";
import { useDispatch } from "react-redux";
import { removeTeam , setUpdatedId} from '../../Store/Slices/Teams';
import { setLoader } from "../../Store/Slices/System";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_API_URL;


interface props {
    id: number,
    name: string,
    createdAt: string,
    updatedAt?: string
    userFirstName: string,
    userLastName: string,
    project: string
};


export default function TeamCard({id,name,createdAt,userFirstName,userLastName,project}:props){

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    // const setUpdatedId = ()=> dispatch(setUpdatePorjectId(id));



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

    useEffect(()=>{
        if(toDelete){
            // setIdToDelete();
            const deleteTeam = async ()=>{
                try{
                    dispatch(setLoader(true));
                    const response = await axios.delete(BACK_URL+'/team/'+id,{
                        headers:{
                            Authorization: 'Bearer '+token,
                        }
                    });    
                    if(response.status === 200){
                        dispatch(removeTeam(id));
                    }

                    dispatch(setLoader(!true));
                }catch(err){
                    dispatch(setLoader(!true));
                    console.log(err);
                }
            };
            deleteTeam();
        }   
    },[toDelete]);


    const updateAction = ()=>{
        dispatch(setUpdatedId(id));
    };

    return (
        <>
            <div  onContextMenu={(e)=>{e.preventDefault();setOpenMenu(true);}} className=" relative w-[20em] auto rounded-[10px] p-[.5em] text-[12px]  bg-[var(--gray)] m-[.5em] font-[600]">
                <p className="font-[700] py-[1em] border-b border-black">Project Card</p>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">ID</p>
                    <p className="text-[var(--dark-blue)]">rtg-{id}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Team name</p>
                    <p className="text-[var(--dark-blue)]">{name}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Project name</p>
                    <p className="text-[var(--dark-blue)]">{project}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Leader</p>
                    <p className="text-[var(--dark-blue)]">{userFirstName} {userLastName}</p>
                </div>
                <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                    <p className="">Date</p>
                    <p className="text-[var(--dark-blue)]">{createdAt} </p>
                </div>
                <div className="w-[100%]  py-[.3em] flex items-center justify-between">
                    <WidGreenBtn label="view more" className="my-[0]" ></WidGreenBtn>
                </div>
                {
                    openMenu &&
                    <div ref={contextMenu} className="absolute top-1/2 left-1/2 w-[9em] rounded-[4px] bg-[var(--white)] rounded-[10px] shadow-[0px_0px_20px_1px_var(--dark-blue)]">
                        <WidBlueBtn onClick={updateAction} label="Edit" className="max-w-[80%] !m-[0] !my-[.5em] !mx-[auto]  opacity-80 hover:opacity-100" />
                        <WidBlueBtn onClick={()=>setDelete(true)} label="Delete" className="max-w-[80%] !m-[0] !my-[.5em] !mx-[auto]  opacity-80 hover:opacity-100" />
                    </div>
                }
            </div>
        </>
    );
}