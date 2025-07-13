import profilePicture from '../../assets/SystemeVector/profile.png';

export default function ChatHeader(){
    return (
        <header className="w-[100%] h-[5em] bg-[var(--gray)] flex items-center justify-start">
            <img src={profilePicture} alt="" className="w-[3.6em] " />
            <div className="w-[calc(100%-3.6em)] h-[100%] ">
                <p className="font-[600] text-[1.3em] p-[.5em]">Maria Sharapova</p>
                <p className="font-[600] text-[.8em] px-[.7em]">Online</p>
            </div>
        </header> 
    )
};