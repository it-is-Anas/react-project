interface props {
    label?: string,    
    options: string[]|{label:string,id:number}[],
    value?: string|number,
    onChange?: (value: (string|number)) => void;
    className?: string,
    inputClassName?: string,
    labelClassName?:string,
}; 

export default function SelectorFiled({label='',className='',value='',onChange,options=[],inputClassName='',labelClassName=''}:props){
    if(typeof (options[0]) === 'object')
        return (
            <div className={"w-[100%]  my-[1em] flex flex-col justify-center items-center "+className}>
                <label htmlFor="sel" className={"text-[.8em] font-[500] my-[1em] "+labelClassName}>{ label }</label>
                <select name="" value={value||''} onChange={(e) => onChange?.(e.target.value)} id="sel" className={"w-[80%] h-[2.3em] rounded-[4px] border-none outline-none "+inputClassName} >
                        <option value="">{ options.length ?  'chose answer ':'Empty' }</option>
                        {
                            options.map((ele,index)=><option key={ele.id + index} value={ele.id} >{ ele.label }</option>)
                        }
                </select>
            </div>
        );
    return (
        <div className={"w-[100%]  my-[1em] flex flex-col justify-center items-center "+className}>
            <label htmlFor="sel" className={"text-[.8em] font-[500] my-[1em] "+labelClassName}>{ label }</label>
            <select name="" value={value||''} onChange={(e) => onChange?.(e.target.value)} id="sel" className={"w-[80%] h-[2.3em] rounded-[4px] border-none outline-none "+inputClassName} >
                    {
                        options.map((ele,index)=><option key={ele + index} value={ele} >{ ele }</option>)
                    }
                    <option value="">{ options.length ?  'chose answer ':'Empty' }</option>
            </select>
        </div>
    );
}