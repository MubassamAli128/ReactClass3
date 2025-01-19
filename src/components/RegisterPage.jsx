import React from 'react'
import Title from './Title'
import ActionBtn from './ActionBtn'
import Button from './Button';
import Input from './Input';
import { MdOutlineLockPerson } from "react-icons/md";


function RegisterPage(props) {


    const handleRegister=(event)=>{
        if(event.target.id=="SignupBtn"){
            if(props.inputValue.FirstName!==""){
                if(props.inputValue.LastName!==""){
                    if(props.inputValue.Email.includes("@gmail.com")&&props.inputValue.Email!==""){
                        if(props.inputValue.Password!==""){
                            localStorage.setItem("FirstName",props.inputValue.FirstName)
                            localStorage.setItem("LastName",props.inputValue.LastName)
                            localStorage.setItem("Email",props.inputValue.Email)
                            localStorage.setItem("Password",props.inputValue.Password)
                            localStorage.setItem('currentPage',"VerifiPage")
                            props.onClick("Registration Completed!", "success");
                            window.location.reload();
                        }else{
                            props.onClick("Please write Password!", "error");
                        }
                    }else{
                        props.onClick("Please write Email!", "error");
                    }
                }else{
                    props.onClick("Please write LastName!", "error");
                }
            }else{
                props.onClick("Please write FirstName!", "error");
            }
        }else if(event.target.id=="ForgetPass"){
            localStorage.setItem('currentPage',"ForgetPage")
            window.location.reload();
        }
    }




    const getColorClass = (passwordLength) => {
        let color = 'bg-gray-300';
        if (passwordLength >= 3 && passwordLength < 5) {
            color = 'bg-yellow-500';
        }
        if (passwordLength >= 5 && passwordLength < 8) {
            color = 'bg-green-500';
        }
        if (passwordLength >= 8) {
            color = 'bg-blue-500';
        }
        if (passwordLength >= 10) {
            color = 'bg-red-500';
        }
        return color;
    };
    const colorClass = getColorClass(props.inputValue.Password.length);



  return (
    <div className='w-full md:w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="Create a profile"/>
        <p className='text-center text-gray-400'>Create a free profile in less than 5 minutes.</p>
        <ActionBtn/>
        <div className='flex items-center justify-between gap-3 w-full'>
            <Input changeinput={props.changeinput} inputValue={props.inputValue.FirstName} name="FirstName" title="First Name" type="text" placeholder="First Name"/>
            <Input changeinput={props.changeinput} inputValue={props.inputValue.LastName} name="LastName" title="Last Name" type="text" placeholder="Last Name"/>
        </div>
        <Input changeinput={props.changeinput} inputValue={props.inputValue.Email} name="Email" title="Email" type="email" placeholder="Email"/>
        <Input changeinput={props.changeinput} inputValue={props.inputValue.Password} name="Password" title="Password" type="password" placeholder="Password"/>
        <div className='flex items-center justify-between gap-2 mt-2'>
                <div id='confirm1' className={`rounded-full h-2 w-full ${props.inputValue.Password.length >= 3 ? colorClass : 'bg-gray-300'}`}></div>
                <div id='confirm2' className={`rounded-full h-2 w-full ${props.inputValue.Password.length >= 5 ? colorClass : 'bg-gray-300'}`}></div>
                <div id='confirm3' className={`rounded-full h-2 w-full ${props.inputValue.Password.length >= 8 ? colorClass : 'bg-gray-300'}`}></div>
                <div id='confirm4' className={`rounded-full h-2 w-full ${props.inputValue.Password.length >= 10 ? colorClass : 'bg-gray-300'}`}></div>
        </div>
        <hr className='border border-gray-300 mt-4'/>
        <div className='flex items-center justify-between mt-5'>
          <Button id="ForgetPass" icon={<MdOutlineLockPerson/>} text="Forget Password?" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleRegister} changeinput={props.changeinput} inputValue={props.inputValue}/>
          <Button id="SignupBtn" text="Create profile" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleRegister} />
        </div>
    </div>
  )
}

export default RegisterPage
