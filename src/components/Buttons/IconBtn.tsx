import { NavLink } from 'react-router-dom';
import googleIcon from '../../assets/SystemeVector/googleIcon.png';

interface props  {
    label: string ,
    icon?: string , 
    className?: string,
    imgClassName?: string,
    isLink?: boolean,
    to?:string,
};

export default function IconBtn({label,icon=googleIcon,className='',imgClassName='',isLink= false,to='/'}: props){
    if(isLink)
        return (
            <NavLink to={to}  className={({ isActive }) => isActive ? "bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em] flex justify-center items-center "+className+" "+"!bg-[var(--light-blue)] !text-[var(--white)]" : "bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em] flex justify-center items-center "+className}  >
                <img src={icon} alt="" className={"w-[2em] mx-[.4em] " +imgClassName} />
                { label }
            </NavLink>
        );
    return (
        <button className={"bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[7px] font-medium text-[0.95em] mx-[0.2em] my-[1em] w-[20em] flex justify-center items-center "+className} >
            <img src={icon} alt="" className={"w-[2em] mx-[.4em] " +imgClassName} />
            { label }
        </button>
    );
}