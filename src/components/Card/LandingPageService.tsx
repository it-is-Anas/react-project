
interface props {
    img: string,
    label: string,
};

export default function LandingPageService({img,label}:props){
    return (
        <div className="w-[12em] h-[15em] bg-[var(--gray)] rounded-[10px] m-[1em]">
            <img src={img} alt="" className="w-[100%]" />
            <p className="text-[1.3em] font-semibold  text-center text-[var(--light-blue)] tracking-[0.4px]">{ label}</p>
        </div>
    );
}