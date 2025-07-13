import HeaderLogo from "../Logo/HeaderLogo";

interface props {
    label?: string
    className?: string
};

export default function InboxHeader({label='',className=''}:props){
    return (
        <header className="w-[100%] h-[4em]   flex items-end justify-center" >
            <HeaderLogo label={label}  className={"ml-[.4em] mr-[auto] "+className} />
        </header>
    );
}