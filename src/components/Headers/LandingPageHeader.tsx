import BlueBtn from "../Buttons/BlueBtn";
import GrayBtn from "../Buttons/GrayBtn";
import HeaderLogo from "../Logo/HeaderLogo";

export default function LandingPageHeader(){
    return(
        <header className="w-[100dvw] h-[4em]">
            <div className="mx-auto w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full h-[100%] flex items-center justify-between  ">
                <HeaderLogo />
                <div className="">
                    <GrayBtn label="Sign Up" />
                    <BlueBtn label="Log In" />
                </div>
            </div>
        </header>
    );
}