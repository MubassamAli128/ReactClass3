import React from 'react'
import Title from "./Title"
import ActionBtn from './ActionBtn'
import LoginForm from './LoginForm'
import Button from "./Button"
import OR from './OR'
import { MdOutlineLockPerson } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

function LoginPage(props) {


  const handleLogin = () => {
    props.onClick("Operation Successful!", "success");
  };


  return (
    <div className='w-[500px] bg-[#f9f8fe] h-[500px] rounded-2xl py-10 px-4'>
        <Title text="Sign in"/>
        <ActionBtn/>
        <LoginForm/>
        <div className='flex items-center justify-between mt-5'>
          <Button icon={<MdOutlineLockPerson/>} text="Forget Password?" bgColor="bg-transparent font-semibold" border="border-gray-400"/>
          <Button text="Sign In" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleLogin} />
        </div>
        <OR/>
        <div className='text-center font-semibold'>
          have no account? <a href="" className='text-[#6131f0] hover:underline'>register</a>
        </div>
    </div>
  )
}

export default LoginPage