
interface props {
    label?: string,    
    placeHolader?: string,    
    value?: string, 
    onChange?: (value: string) => void;
    className?: string,
    inputClassName?: string,
    labelClassName?:string,
};

export default function TextFiled({label='',placeHolader=''  , value='' , onChange,className='',inputClassName='',labelClassName=''}: props){
    return (
        <div className={"flex flex-col items-start "+className}>
            <p className={"text-[.8em] font-[500] my-[1em]  "+labelClassName}>{label}</p>
            <textarea name=""  placeholder={placeHolader} value={value} onChange={(e) => onChange?.(e.target.value)} className={"border-none px-[10px] py-[5px] rounded-[2px] text-[0.9em] outline-none block bg-[var(--gray)] h-[5em] w-[21em] "+inputClassName} id=""></textarea>
        </div>
    );
}