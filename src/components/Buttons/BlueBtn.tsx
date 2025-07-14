
interface props { 
    label: string,
    click?: ()=>void,
    className?:string,
    
};

export default function BlueBtn({label='',className='',click=()=>console.log('default aciton')}:props){
    return (
        <button onClick={click} className={"bg-[var(--light-blue)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em] "+className} >
            { label }
        </button>
    );
}