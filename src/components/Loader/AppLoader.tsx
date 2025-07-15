import type { RootState } from "../../Store/main";
import { useSelector } from "react-redux";



export default function AppLoader(){
    const opened = useSelector((state:RootState)=> state.system.loader);
    if(opened){
        return (
            <div className="out-loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]  flex justify-center items-center">
                <div className="loader"></div>
            </div>
        );
    }
    return null;
}

