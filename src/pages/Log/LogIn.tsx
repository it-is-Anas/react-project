import { useRef, useState } from 'react';
import LogInImg from '../../assets/SystemeSVG/LogIn.svg';
import IconBtn from '../../components/Buttons/IconBtn';
import WidBlueBtn from '../../components/Buttons/WidBlueBtn';
import InputFiled from '../../components/Inputs/InputFiled';
import LogLink from '../../components/Links/LogLink';
import AppLoader from '../../components/Loader/AppLoader';
import AppMessage from '../../components/AppMessage/AppMessage';
import axios from 'axios';


import { useDispatch } from 'react-redux';
import { updateData } from '../../Store/Slices/Auth';
import { useNavigate } from 'react-router-dom';


export default function LogIn(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email,setEmail] = useState<string>('nnew@shopy.com');
    const [password,setPassword] = useState<string>('12345678');
    

    const loaderLogic = useRef<([() => void, () => void])>(null);

    const pullLoaderLogic = (logic: [() => void, () => void])=>{
        loaderLogic.current = logic;
    };
    const openLoader = ()=>{
        if(loaderLogic.current){
            loaderLogic.current[0]();
        }
    };
    const closeLoader = ()=>{
        if(loaderLogic.current){
            loaderLogic.current[1]();
        }
    };
    
    const messageLogic = useRef<((message: string)=> void)>(null);

    const pullMessageLogic = (setMessage: (message: string)=>void )=>{
        messageLogic.current = setMessage;
    };
    const message = (message:string)=>{
        if(messageLogic.current){
            messageLogic.current(message);
        }
    };
    



    const validate = ()=>{
        if(!email.length && !password.length){
            return 'Fileds are required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return 'Email not valied';
        }
        const passwordRegex = /^[A-Za-z0-9]+$/;
        if(!passwordRegex.test(password)){
            return 'Password should have only letters and numbers';
        }
        return true;
    };


    

    const logIn = async ()=>{
        const validated = validate();
        if(typeof(validated) === 'string'){
            message(validated)
            return ;
        }
        openLoader();
        try{
            const response = await axios.post('http://localhost:3000/user/log-in',{
                email,
                password,
            });
            
            if(response.status === 201){
                message(response.data.message);
                dispatch(updateData({token: response.data.token,user: response.data.user}));
                navigate('/work-space');
            }
            closeLoader();
        }catch(err: unknown){            
            closeLoader();
            if(err.status === 422){
                message('Email and Password not match !');
            }else if(err.status === 400){
                message(err.response.data.message[0]);
            }else{
                message('Somthing went wrong !');
            }
        };
    }

    return (
    <> 
        <div className="w-[100%] h-[100%] max-[768px]:row-[1/3] flex flex-col justify-center items-center pb-[1em]">
            <p className="text-[1.2em] text-[var(--light-blue)] font-[600] my-[.5em]">Create new Account to be part of task it</p>
            <p className="text-[.9em] text-[var(--light-green)] font-[400] opacity-70">Create new Account to be part of task it</p>
            <IconBtn label='Log in with google' />
            <div className="w-[19em] h-[2em] bg-[var(--white)] flex justify-center items-center relative">
                <div className="w-[100%] h-[.01em] bg-[black] absolute"></div>
                <div className="absolute p-[.5em] bg-[inherit]">or</div>
            </div>
            <InputFiled label='email' placeHolader='Younes@example.com' value={email} onChange={setEmail} />
            <InputFiled label='password' placeHolader='********' type='password' value={password} onChange={setPassword}  />
            <WidBlueBtn onClick={logIn} label='Log in' />
            <LogLink label={'Don\'t have account?'} to='/log/sign-up' />
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center max-[768px]:hidden">
            <img src={LogInImg} alt="" className="w-[22em] h-[22em] " />
        </div>
        <AppLoader pushLogic={pullLoaderLogic} />
        <AppMessage pushLogic={pullMessageLogic} />
    </>
    );
}