import ProjectCard from "../../components/Card/ProjectCard";

export default function Projects (){
    
    const arr = [];
    for(let i = 0; i < 1 ; ++i)arr.push(<ProjectCard key={i} />);
    return (
        <div className="w-[100%] h-[100%] ">
            <p className="font-[600] text-[var(--drak-blue)] py-[.5em] px-[1.5em]">Your Pojects</p>
            <div className="w-[100%] max-h-[calc(100%-2.5em)] justify-items-center  grid grid-cols-[repeat(auto-fill,minmax(16em,1fr))] gap-4 p-4 overflow-y-scroll"  >
                { arr } 
            </div>
        </div>
    );
}