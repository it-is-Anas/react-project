interface props {
    cls?: string,
};
export default function HeaderLogo({cls=''}: props){
    return (
        <h1 className={"text-[1.5em] font-[700] text-[var(--light-blue)] " + cls} >Task Nest</h1>
    );
}