interface props {
    className?: string,
    label?:string
};
export default function HeaderLogo({className='',label='Task Nest'}: props){
    return (
        <h1 className={"text-[1.5em] font-[700] text-[var(--light-blue)] " + className} >{ label }</h1>
    );
}