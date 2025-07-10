import { Link } from "react-router-dom";

interface props{
    label: string,
    to: string,
};

export default function LogLink({label='',to=''}:props){
    return (
        <Link className="font-[400] text-[.8em] text-[var(--dark-blue)] my-[.6em]" to={ to }  >{ label } </Link>
    );
}