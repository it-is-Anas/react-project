import Icon from '../../assets/SystemeVector/l2.png';

interface props{
    icon: string,
    label: string,
    desc: string,
};

export default function LandingPageFeature({icon= Icon,label= '',desc= ''}: props){
    return(
        <div className="w-[13em] h-[13em] bg-[var(--white)] rounded-[10px] flex flex-col justify-around items-start p-[.5em] m-[.3em] text-[18px]">
            <img src={icon} alt="" className="w-[2em]" />
            <p className="text-[0.9em] font-bold text-[var(--black)]"> { label }</p>
            <p className="text-[0.7em] font-400 opacity-70 text-[var(--black)]">
                { desc }
            </p>
        </div>
    );
}