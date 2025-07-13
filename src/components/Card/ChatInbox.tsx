import profilePicture from '../../assets/SystemeVector/profile.png';
export default function ChatInbox(){
    return (
        <div className="w-[90%] h-[3.5em] bg-[var(--gray)] my-[.5em] mx-[auto] rounded-[5px] px-[.3em] py-[.3em] cursor-pointer flex justify-start items-center ">
            <img src={profilePicture} alt="" className="w-[2.6em]" />
            <div className="w-[calc(100%-2.6em)] h-[100%] px-[.5em] py-[.25em]  rounded-[5px]  flex flex-col justify-between items-start  ">
                <div className="w-[100%] h-[50%] flex items-center justify-start ">
                    <p className="font-[600] text-[.9em]  w-[70%]">Nazly Ardam</p>
                    <p className="text-[.4em] font-[600] w-[30%] h-[100%] flex justify-end items-center p-[.3em]">5 minute ago</p>
                </div>
                <p className="w-[100%]  text-[.5em] font-[600] ">Khayalon mein tere, khoi hu ... </p>
            </div>  
        </div>
    );
}