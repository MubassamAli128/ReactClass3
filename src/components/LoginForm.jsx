import React from 'react'
import Input from './Input'

function LoginForm(props) {
  return (
    <div>
        <form action="" className='flex flex-col justify-center w-full gap-4'>
            <Input changeinput={props.changeinput} inputValue={props.email} name="LoginEmail" title="Email" type="email" placeholder="Email address"/>
            <Input changeinput={props.changeinput} inputValue={props.password} name="LoginPass" title="Password" type="password" placeholder="Password"/>
        </form>
    </div>
  )
}

export default LoginForm