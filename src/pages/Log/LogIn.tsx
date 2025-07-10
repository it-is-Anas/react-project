import { useState } from 'react';
import LogInImg from '../../assets/SystemeSVG/LogIn.svg';
import IconBtn from '../../components/Buttons/IconBtn';
import WidBlueBtn from '../../components/Buttons/WidBlueBtn';
import CheckBox from '../../components/Checkbox/CheckBox';
import InputFiled from '../../components/Inputs/InputFiled';
import LogLink from '../../components/Links/LogLink';
export default function LogIn(){
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [rememberMe , setRememberMe] = useState<boolean>(false);

    const print = ()=>console.log(email,password,rememberMe);


    return (
    <> 
        <div className="w-[100%] h-[100%] max-[768px]:row-[1/3] flex flex-col justify-center items-center">
            <p className="text-[1.2em] text-[var(--light-blue)] font-[600] my-[.5em]">Create new Account to be part of task it</p>
            <p className="text-[.9em] text-[var(--light-green)] font-[400] opacity-70">Create new Account to be part of task it</p>
            <IconBtn label='Log in with google' />
            <div className="w-[19em] h-[2em] bg-[var(--white)] flex justify-center items-center relative">
                <div className="w-[100%] h-[.01em] bg-[black] absolute"></div>
                <div className="absolute p-[.5em] bg-[inherit]">or</div>
            </div>
            <InputFiled label='email' placeHolader='Younes@example.com' value={email} onChange={setEmail} />
            <InputFiled label='password' placeHolader='********' type='password' value={password} onChange={setPassword}  />
            <CheckBox label='Remeber me' value={rememberMe} onChange={setRememberMe} />
            <WidBlueBtn onClick={print} label='Log in' />
            <LogLink label={'Don\'t have account?'} to='/log/sign-up' />
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center max-[768px]:hidden">
            <img src={LogInImg} alt="" className="w-[18em] h-[18em] " />
        </div>
    </>
    );
}