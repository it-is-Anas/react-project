
interface props { 
    label: string,
    click?: (e?: Event)=>void,
};

export default function GreenBtn({label='',click=(e)=>{e.preventDefault();console.log('default btn action')}}:props){
    return (
        <button onClick={click} className="bg-[var(--light-green)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[19em]" >
            { label }
        </button>
    );
}