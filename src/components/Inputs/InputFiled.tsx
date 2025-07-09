export default function InputFiled(){
    return (
        <div className="flex flex-col items-start">
            <p className="text-[0.7em] font-normal my-[1em] ">label</p>
            <input type="text" placeholder="place" className="border-none px-[10px] py-[5px] rounded-[2px] text-[0.9em] outline-none block bg-[var(--gray)] w-[20em]" />
        </div>
    );
}