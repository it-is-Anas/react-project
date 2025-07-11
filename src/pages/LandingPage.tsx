import BlueBtn from "../components/Buttons/BlueBtn";
import GrayBtn from "../components/Buttons/GrayBtn";
import LandingPageHeader from "../components/Headers/LandingPageHeader";

import l1Img from '../assets/SystemeVector/l1.png';
import LandingPageFeature from "../components/Card/LandingPageFeature";

import icon1 from '../assets/SystemeVector/l2.png';
import icon2 from '../assets/SystemeVector/l3.png';
import icon3 from '../assets/SystemeVector/l4.png';


import serviceImg1 from '../assets/SystemeVector/l5.png';
import serviceImg2 from '../assets/SystemeVector/l6.png';
import serviceImg3 from '../assets/SystemeVector/l7.png';

import contactMeImg from '../assets/SystemeVector/l8.png';

import LandingPageHeadLine from "../components/HeadLines/LandingPageHeadLine";
import LandingPageService from "../components/Card/LandingPageService";
import InputFiled from "../components/Inputs/InputFiled";
import TextFiled from "../components/Inputs/TextField";
import WidGreenBtn from "../components/Buttons/WidGreenBtn";


export default function LandingPage(){
    return (
        <div className="w-[100dvw] min-h-[100dvh] text-[1em] max-[1000px]:text-[.9em] max-[768px]:text-[.8em] max-[550px]:text-[.7em] overflow-x-hidden " >
            <LandingPageHeader />
            <div className="mx-auto  w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full  min-h-[calc(100vh-4em)] grid grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:grid-rows-2">
                <div className="w-[100%] h-[100%] flex flex-col justify-center items-center max-[768px]:row-[2/3] max-[768px]:text-center  ">
                    <p className="text-[2.4em] font-semibold text-[var(--light-blue)] m-[.521em]">
                        Organize your Projects 
                        Finish your tasks
                        Share and divide the missions 
                    </p>
                    <p className="text-[1em] font-normal text-[var(--dark-blue)] opacity-70 m-[1em]">
                        Lipsum generator: Lorem Ipsum - All the facts Lipsum generator: Lorem Ipsum - All the facts Lipsum generator: Lorem Ipsum - All the facts
                    </p>
                    <div className="ml-[auto] mr-[1em] max-[768px]:mx-[auto] ">
                        <GrayBtn label="Sign Up" />
                        <BlueBtn label="Log In" />
                    </div>
                </div>
                <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  ">
                    <img src={l1Img} alt="" className="w-[20em]" />
                </div>
            </div>
            <div className="mx-auto w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full   bg-[var(--gray)]  rounded-[10px] p-[1em] ">
                <p className="p-[10px] font-semibold text-[var(--light-blue)] text-[1.3em]">Create new Account to be part</p>
                <p className="px-[10px] text-[var(--dark-blue)] font-bold text-[1.6em]">Create an account and take advantage of the free offer</p>
                <div className="w-full h-[70%]  flex justify-around items-flex my-[1em] max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-[1em] max-[768px]:h-[100vh]">
                    <LandingPageFeature 
                        icon={icon1} 
                        label=' Security & Customization' 
                        desc='User Roles & Permissions
                            Dark Mode / Themes
                            Two-Factor Authentication
                            Data Backup & Export Options' />
                    <LandingPageFeature 
                        icon={icon2} 
                        label='  Integration & Syncing' 
                        desc='User Roles & Permissions
                            Dark Mode / Themes
                            Two-Factor Authentication
                            Data Backup & Export Options' />
                    <LandingPageFeature 
                        icon={icon3} 
                        label=' Collaboration Tools' 
                        desc='User Roles & Permissions
                            Dark Mode / Themes
                            Two-Factor Authentication
                            Data Backup & Export Options' />
                </div>
            </div>
            <div className="mx-auto  w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full py-[5em]  max-[768px]:px-[1em] ">
                <LandingPageHeadLine headLine="Why All prefere us" subHeadLine="Why Us" />
                <div className="w-[100%]  flex justify-center items-start flex-col leading-[2]">
                    <p className="text-[1.3em] font-[500] text-[var(--light-blue)]">Built for Doers, Dreamers, and Teams</p>
                    <p className="text-[1.1em] font-[400] text-[var(--dark-blue)]">
                        We’re more than just a to-do list — we're your productivity partner. Whether you’re managing personal goals or leading a team, our platform helps you stay focused, organized, and in control.
                        <br />
                        🚀 Lightning-fast and easy to use
                        <br />
                        🤝 Designed for solo users and teams
                        <br />
                        🔄 Seamless integrations with your favorite tools
                        <br />
                        📱 Always in sync — across desktop and mobile
                    </p>
                </div>
            </div>
            <div className="mx-auto  w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full max-[768px]:px-[1em] ">
                <LandingPageHeadLine headLine="What Task it offer" subHeadLine="Services" />
                <div className="flex justify-around items-center max-[768px]:flex-col">
                    <LandingPageService img={serviceImg1} label="Security" />
                    <LandingPageService img={serviceImg3} label="Easy & free to use" />
                    <LandingPageService img={serviceImg2} label="Solve with team" />
                </div>
            </div>
            <div className="mx-auto  w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full max-[768px]:px-[1em] ">
                <LandingPageHeadLine headLine="Let's talk to us" subHeadLine="Contact us" />
                
                <div className="w-[100%]  grid grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:grid-rows-2">
                    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center max-[768px]:hidden ">
                        <img src={contactMeImg} alt="" className="w-[50%]" />
                    </div>
                    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  max-[768px]:text-center  max-[768px]:row-[1/3] ">
                        <p className=" w-[15em] text-[1.2em] font-[500]">Send a message :</p>
                        <InputFiled label="name" placeHolader="Youseff" />
                        <InputFiled label="email" placeHolader="Youseff@example.com" />
                        <TextFiled />
                        <WidGreenBtn label="Send" />
                    </div>
                    
                </div>
            </div>
            <footer className="w-[100dvw] h-[3em] flex items-center  justify-center bg-[var(--light-blue)] text-[var(--white)] font-[600]" >
                all is reserved to AL-HOURANI company
            </footer>
        </div>
    );
}