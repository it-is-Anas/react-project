interface props {
    label: string,
    onClick?: () => void,
};


export default function WidBlueBtn({label , onClick}:props){
    return (
        <button onClick={onClick} className="bg-[var(--light-blue)] text-[var(--gray)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] mt-[0em] mb-[1em] w-[20em] flex justify-center items-center " >
            { label }
        </button>
    );
}