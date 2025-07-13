interface props {
    label?: string,    
    options: string[],
    value?: string,
    onChange?: (value: string) => void;
    className?: string,
    inputClassName?: string,
    labelClassName?:string,
};

export default function SelectorFiled({label='',className='',value='',onChange,options=[],inputClassName='',labelClassName=''}:props){
    return (
        <div className={"w-[100%]  my-[1em] flex flex-col justify-center items-center "+className}>
            <label htmlFor="sel" className={"text-[.8em] font-[500] my-[1em] "+labelClassName}>{ label }</label>
            <select name="" value={value} onChange={(e) => onChange?.(e.target.value)} id="sel" className={"w-[80%] h-[2.3em] rounded-[4px] border-none outline-none "+inputClassName} >
                    {
                        options.map((ele,index)=><option key={ele + index} value={ele} >{ ele }</option>)
                    }
                    
            </select>
        </div>
    );
}