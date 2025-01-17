import React from 'react'
import Input from './Input'

function LoginForm() {
  return (
    <div>
        <form action="" className='flex flex-col justify-center w-full gap-4'>
            <Input title="Email" type="email" placeholder="Email address"/>
            <Input title="Password" type="password" placeholder="Email address"/>
        </form>
    </div>
  )
}

export default LoginForm