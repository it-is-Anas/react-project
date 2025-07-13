import profilePicture from '../../assets/SystemeVector/profile.png';

interface props{
    send?:boolean
};

export default function ChatMessage({send=false}: props){
    if(send)
        return  (
                <div className="w-[80%] ml-[auto] mr-[1em]  py-[1em] px-[.5em] grid grid-cols-[1fr_3em] justify-items-center ">
                    
                    <div className="flex flex-col flex-center items-enter">
                        <p className="my-[auto] bg-[var(--chat-gray)] text-[var(--black)] font-[400] p-[10px] rounded-[5px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur natus similique accusantium sit quis facere, nemo voluptas consectetur cum minima eligendi totam, iure quia soluta iusto, adipisci itaque eum.
                        </p>
                        <p className="mr-[auto] font-[600] text-[.8em]">April 10,2025, 2:13 PM</p>
                    </div>
                    <div className="">
                        <img src={profilePicture} alt="" className="w-[2.6em] " />
                    </div>
                </div>
        );
    return  (
            <div className="w-[80%] mr-[auto] ml-[1em]  py-[1em] px-[.5em] grid grid-cols-[3em_1fr] justify-items-center ">
                <div className="">
                    <img src={profilePicture} alt="" className="w-[2.6em] " />
                </div>
                <div className="flex flex-col flex-center items-enter">
                    <p className="my-[auto] bg-[var(--chat-green)] text-[var(--white)] font-[400] p-[10px] rounded-[5px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur natus similique accusantium sit quis facere, nemo voluptas consectetur cum minima eligendi totam, iure quia soluta iusto, adipisci itaque eum.
                    </p>
                    <p className="ml-[auto] font-[600] text-[.8em]">April 10,2025, 2:13 PM</p>
                </div>
            </div>
    );
}