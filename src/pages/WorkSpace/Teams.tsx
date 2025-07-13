import TeamCard from "../../components/Card/TeamCard";

export default function Teams (){
    const arr = [];
    for(let i = 0; i < 1 ; ++i)arr.push(<TeamCard key={i} />);

    return (
    <>
        <h1>Teams</h1>
        <div className="w-[100%] max-h-[calc(100%-2.5em)] justify-items-center  grid grid-cols-[repeat(auto-fill,minmax(16em,1fr))] gap-4 p-4 overflow-y-scroll"  >
            { arr } 
        </div>
    </>
    );
}