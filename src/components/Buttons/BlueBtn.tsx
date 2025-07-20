import { Link } from 'react-router-dom';

interface Props { 
    label: string;
    click?: () => void;
    className?: string;
    link?: string;
};

export default function BlueBtn({
    label = '',
    className = '',
    link = '',
    click = () => console.log('default action')
}: Props) {
    const baseClasses = "bg-[var(--light-blue)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em]";
    
    if (link) {
        return (
            <Link 
                to={link} 
                className={`${baseClasses} ${className}`.trim()} 
            >
                {label}
            </Link>
        );
    }
    
    return (
        <button 
            onClick={click} 
            className={`${baseClasses} ${className}`.trim()} 
        >
            {label}
        </button>
    );
}