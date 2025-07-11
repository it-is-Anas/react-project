import WidGreenBtn from "../Buttons/WidGreenBtn";

export default function ProjectCard(){
    return (
        <div className="w-[20em] auto rounded-[10px] p-[.5em] text-[12px]  bg-[var(--gray)] m-[.5em] font-[600]">
            <p className="font-[700] py-[1em] border-b border-black">Project Card</p>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="">ID</p>
                <p className="text-[var(--dark-blue)]">rtg-6556785i</p>
            </div>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="">Action</p>
                <p className="text-[var(--dark-blue)]">Yafouz Karousou</p>
            </div>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="">Doer</p>
                <p className="text-[var(--dark-blue)]">You</p>
            </div>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="">Date</p>
                <p className="text-[var(--dark-blue)]">1/1/2002</p>
            </div>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="">State</p>
                <p className="text-[var(--dark-blue)]">In Process</p>
            </div>
            <div className="w-[100%] border-b border-black py-[.3em] flex items-center justify-between">
                <p className="text-center px-[.2em] text-[var(--dark-blue)]">And as I begin to live. And I love you, I miss you. I love you, and you are the light of my eyes. And you are the light of my eyes …</p>
            </div>
            <div className="w-[100%]  py-[.3em] flex items-center justify-between">
                <WidGreenBtn label="view more" className="my-[0]" ></WidGreenBtn>
            </div>
        </div>
    );
}