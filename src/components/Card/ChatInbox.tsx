import { useEffect } from 'react';
import profilePicture from '../../assets/SystemeVector/profile.png';
import axios from 'axios';

const BACK_URL = import.meta.env.VITE_API_URL;

interface props{
    name: string,
    imgSrc: string, 
    msg: string,
    createdAt: string,
};


export default function ChatInbox({name='' , imgSrc='' , msg='',createdAt=new Date().toDateString()}:props){
    function timeAgo(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);

        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 },
        ];

        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
            }
        }

        return 'just now';
    }

    useEffect(()=>{
        const chatTo = async ()=>{
            try{
                const response = await axios.get(BACK_URL+'/msg/my-chat'+);
            }catch(err){
                console.log(err);
            }
        };
    },[]);

    return (
        <div className="w-[90%] h-[3.5em] bg-[var(--gray)] my-[.5em] mx-[auto] rounded-[5px] px-[.3em] py-[.3em] cursor-pointer flex justify-start items-center ">
            {
                imgSrc ?
                <img src={profilePicture} alt="" className="w-[2.6em]" />
                :
                <img src={profilePicture} alt="" className="w-[2.6em]" />
            }
            <div className="w-[calc(100%-2.6em)] h-[100%] px-[.5em] py-[.25em]  rounded-[5px]  flex flex-col justify-between items-start  ">
                <div className="w-[100%] h-[50%] flex items-center justify-start ">
                    <p className="font-[600] text-[.9em]  w-[70%]">{ name }</p>
                    <p className="text-[.5em] font-[600] w-[30%] h-[100%] flex justify-end items-center p-[.3em]">{timeAgo(createdAt)}</p>
                </div>
                <p className="w-[100%]  text-[.5em] font-[600] "> { msg.length >= 30 ? msg.slice(0,27) + ' ...' : msg } </p>
            </div>  
        </div>
    );
}