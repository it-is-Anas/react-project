
interface props { 
    label: string,
    click?: (e?: Event)=>void,
};

export default function WidGreenBtn({label=''}:props){
    return (
        <button  className="bg-[var(--light-green)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em]" >
            { label }
        </button>
    );
}