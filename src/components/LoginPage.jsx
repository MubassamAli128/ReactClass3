import React, {useEffect, useState} from 'react'
import Title from "./Title"
import ActionBtn from './ActionBtn'
import LoginForm from './LoginForm'
import Button from "./Button"
import OR from './OR'
import { MdOutlineLockPerson } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

function LoginPage(props) {


  const handleLogin = (event) => {
    if(event.target.id=="SigninBtn"){
      if(props.inputValue.LoginEmail==localStorage.getItem("Email")){
        if(props.inputValue.LoginPass==localStorage.getItem("Password")){
          props.onClick("Welcome Back!", "success");
          // window.location.reload();
        }else{
          props.onClick("Worng Password", "error");
        }
      }else{
        props.onClick("Worng Email", "error");
      }
    }else if(event.target.id=="ForgetPass"){
      window.location.reload();
      localStorage.setItem('currentPage',"ForgetPage")
    }
  };


  return (
    <div className='w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="Sign in"/>
        <ActionBtn/>
        <LoginForm changeinput={props.changeinput} inputValue={props.inputValue}/>
        <div className='flex items-center justify-between mt-5'>
          <Button id="ForgetPass" icon={<MdOutlineLockPerson/>} text="Forget Password?" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleLogin} changeinput={props.changeinput} inputValue={props.inputValue}/>
          <Button id="SigninBtn" text="Sign In" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleLogin} />
        </div>
        <OR/>
        <div className='text-center font-semibold'>
          have no account? <a href="" className='text-[#6131f0] hover:underline'>register</a>
        </div>
    </div>
  )
}

export default LoginPage