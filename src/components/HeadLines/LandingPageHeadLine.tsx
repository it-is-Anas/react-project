interface props{
    headLine: string,
    subHeadLine: string,
};
export default function LandingPageHeadLine({headLine='',subHeadLine=''}: props){
    return(
        <div className="w-full h-[5em] relative flex justify-center items-center ">
            <p className="absolute top-[5px] font-normal text-[.9em] text-[var(--light-green)]">{ subHeadLine }</p>
            <p className="absolute text-[1.4em] text-[var(--dark-blue)] font-bold">{ headLine }</p>
        </div>
    );
}