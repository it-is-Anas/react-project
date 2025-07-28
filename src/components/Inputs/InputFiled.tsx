
interface props {
    label?: string,    
    placeHolader?: string,    
    type?: string,
    value?: string,
    onChange?: (value: string) => void;
    className?: string,
    inputClassName?: string, 
    labelClassName?:string,
};

export default function InputFiled({label='',placeHolader='',type='text'  , value='' , onChange,className='',inputClassName='',labelClassName=''}: props){
    return (
        <div className={"flex flex-col items-start "+className}>
            <p className={"text-[.8em] font-[500] my-[1em] "+labelClassName}> { label } </p>
            <input type={ type } placeholder={ placeHolader } value={value} onChange={(e) => onChange?.(e.target.value)} className={"border-none px-[10px] py-[.7em] rounded-[7px] text-[0.9em] outline-none block bg-[var(--gray)] w-[21em] "+inputClassName} />
        </div>
    );
} 