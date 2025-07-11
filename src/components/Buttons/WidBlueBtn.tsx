interface props {
    label: string,
    onClick?: () => void,
    className?: string,
};


export default function WidBlueBtn({label ,className='' , onClick}:props){
    return (
        <button onClick={onClick} className={"bg-[var(--light-blue)] text-[var(--gray)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] mt-[2em] mb-[1em] w-[20em] flex justify-center items-center "+ className} >
            { label }
        </button>
    );
}