import { Link } from 'react-router-dom';

interface Props { 
    label: string;
    click?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    link?: string;
};

export default function GrayBtn({ label = '', link = '', click }: Props) {
    const buttonClasses = "bg-[var(--gray)] text-[var(--light-blue)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em]";

    if (link) {
        return (
            <Link to={link} className={buttonClasses}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={click} className={buttonClasses}>
            {label}
        </button>
    );
}