interface props {
    className?: string,
};
export default function HeaderLogo({className=''}: props){
    return (
        <h1 className={"text-[1.5em] font-[700] text-[var(--light-blue)] " + className} >Task Nest</h1>
    );
}