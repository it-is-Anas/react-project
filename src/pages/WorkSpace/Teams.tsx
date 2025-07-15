import { useEffect } from "react";
import TeamCard from "../../components/Card/TeamCard";
import type { RootState } from "../../Store/main";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setteams } from "../../Store/Slices/Teams";
import type { Team } from '../../Types';
const backUrl = import.meta.env.VITE_API_URL;


export default function Teams (){ 
    const token = localStorage.getItem('token');
    const teams:Team[] = useSelector((state:RootState)=>state.team.teams);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(!teams.length){
            const pullTeams = async ()=>{
                try{
                    const response = await axios.get(backUrl+'/team',{
                        headers:{
                            Authorization: 'Bearer '+ token,
                        }
                    });
                    if(response.status === 200){
                        dispatch(setteams(response.data));
                    }
                }catch(err){
                    console.log(err);
                };
            }; 
            pullTeams();
        }
    },[]);

    return (
    <>
        <h1 className="font-[600] text-[var(--drak-blue)] py-[.5em] px-[1.5em]" >Teams</h1>
        <div className="w-[100%] max-h-[calc(100%-2.5em)] justify-items-center  grid grid-cols-[repeat(auto-fill,minmax(16em,1fr))] gap-4 p-4 overflow-y-scroll"  >
            {
                teams.map(team =><TeamCard key={team.id} id={team.id} name={team.name} createdAt={team.createdAt} updatedAt={team.updatedAt} userFirstName={team.leader?team.leader.firstName:''} userLastName={team.leader?team.leader.lastName:''} />)
            }
        </div>
    </>
    );
}