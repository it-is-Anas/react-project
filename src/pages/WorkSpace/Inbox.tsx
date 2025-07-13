import ChatInbox from "../../components/Card/ChatInbox";
import ChatMessage from "../../components/Card/ChatMessage";
import ChatHeader from "../../components/Headers/ChatHeader";
import InboxHeader from "../../components/Headers/InboxHeader";
import InboxSearchBar from "../../components/SearchBar/InboxSearchBar";

import attachImg from '../../assets/SystemeVector/attach.png';
import planeImg from '../../assets/SystemeVector/plane.png';
// import profilePicture from '../../assets/SystemeVector/profile.png';


export default function Inbox (){
    return (
        <div className="w-[100%] h-[100%] grid grid-cols-12 max-[768px]:block max-[768px]:relative" >
            <div className="col-[1/5] flex flex-col justify-start items-center h-[100vh] max-[768px]:h-[calc(100vh-4em)]">
                <InboxHeader label="Chats" className="!text-[var(--dark-blue)]" />
                <InboxSearchBar  />
                <div className="w-[100%] h-[calc(100%-3em)] overflow-y-scroll">
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                    <ChatInbox />
                </div>
            </div>
            <div className="bg-[var(--white)] col-[5/13] max-[768px]:h-[calc(100vh-4em)]  max-[768px]:absolute  max-[768px]:top-0  max-[768px]:left-0 max-[768px]:hidden">
                <ChatHeader />
                <div className="w-[100%] h-[calc(100%-5em)] bg-[var(--white)] h-[calc(100%-9em)] max-[768px]:h-[calc(100vh-13em)] overflow-y-scroll">
                    <ChatMessage />
                    <ChatMessage send={true} />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage />
                    <ChatMessage send={true} />
                </div>
                <div className="w-[100%] h-[4em]  flex justify-start items-center px-[1em] bg-[var(--gray)]">
                    <img src={attachImg} alt="" className="w-[1.4em]" />
                    <input placeholder="type somthing" className="p-[.5em] rounded-[10px] mx-[auto] w-[calc(90%-2em)] border-none outline-none" type="text" />
                    <img src={planeImg} alt="" className="bg-[var(--light-blue)] p-[.5em] rounded-[50%] w-[2em]" />
                </div>
            </div>
        </div>
    );
}