import { Outlet } from "react-router-dom";
import HeaderLogo from "../components/Logo/HeaderLogo";

export default function LogLayout(){
    return (
        <div className="w-[100dvw] h-[100dvh] ">
            <div className="mx-auto w-[990px] max-[1000px]:w-[768px] max-[768px]:w-[550px] max-[550px]:w-full h-[100%] grid grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:grid-rows-2 relative">
                <HeaderLogo cls="absolute" />
                <Outlet />
            </div> 
        </div>
    );
}