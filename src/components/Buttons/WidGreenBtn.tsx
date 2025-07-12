
interface props { 
    label: string,
    click?: ()=>void,
    className?: string,
};

export default function WidGreenBtn({label='',className='',click=()=>console.log('default action')}:props){
    return (
        <button  onClick={click} className={"bg-[var(--light-green)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em] "+className} >
            { label }
        </button>
    );
}