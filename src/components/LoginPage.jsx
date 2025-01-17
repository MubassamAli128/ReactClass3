import React from 'react'
import Title from "./Title"
import ActionBtn from './ActionBtn'
import LoginForm from './LoginForm'

function LoginPage() {
  return (
    <div className='w-[500px] bg-[#f9f8fe] h-[500px] rounded-2xl py-10 px-4'>
        <Title text="Sign in"/>
        <ActionBtn/>
        <LoginForm/>
    </div>
  )
}

export default LoginPage