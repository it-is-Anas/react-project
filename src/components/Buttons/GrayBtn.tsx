interface props { 
    label: string,
    click?: (e?: Event)=>void,
};

export default function GrayBtn({label=''}:props){
    return (
        <button className="bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em]" >
            { label }
        </button>
    );
}