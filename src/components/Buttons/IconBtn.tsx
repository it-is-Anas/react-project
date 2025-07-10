import googleIcon from '../../assets/SystemeVector/googleIcon.png';
export default function IconBtn({label}: {label: string}){
    return (
        <button className="bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em] flex justify-center items-center " >
            <img src={googleIcon} alt="" className="w-[2em] mx-[.4em]" />
            { label }
        </button>
    );
}