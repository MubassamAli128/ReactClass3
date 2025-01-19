import React from 'react'
import Title from './Title'
import Input from './Input'
import Button from './Button'

function ForgetPassword(props) {
    console.log(props.newpassword,props.confirmPassword);

    const handleForget = (event) => {
        if(event.target.id=="CancelForget"){
            window.location.reload();
            localStorage.setItem('currentPage',"LoginPage")
        }else if(event.target.id=="ChangePass"){
            if(props.newpassword&&props.confirmPassword!==""){
                if(props.newpassword==props.confirmPassword){
                    localStorage.setItem('Password',props.confirmPassword)
                    props.onClick("Password updated!", "success");
                    window.location.reload();
                    localStorage.setItem('currentPage',"LoginPage")
                }else{
                    props.onClick("Confirm your password", "error");
                }
            }
            else{
                props.onClick("Fill both inputs", "error");
            }
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
    const colorClass1 = getColorClass(props.newpassword.length);
    const colorClass2 = getColorClass(props.confirmPassword.length);

  return (
    <div className='w-full md:w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4 flex flex-col items-center gap-5'>
        <div className='w-full'>
            <Title text="Change Your Password"/>
            <p className='text-center text-gray-400'>Your new password must be different.</p>
        </div>
        <div className='w-full'>
            <Input changeinput={props.changeinput} inputValue={props.newpassword} name="NewPass" title="New password" type="password" placeholder="Must be 8 characters"/>
            <div className='flex items-center justify-between gap-2 mt-2'>
                <div id='new1' className={` rounded-full h-2 w-full ${props.newpassword.length >= 3 ? colorClass1 : 'bg-gray-300'}`}></div>
                <div id='new2' className={` rounded-full h-2 w-full ${props.newpassword.length >= 5 ? colorClass1 : 'bg-gray-300'}`}></div>
                <div id='new3' className={` rounded-full h-2 w-full ${props.newpassword.length >= 8 ? colorClass1 : 'bg-gray-300'}`}></div>
                <div id='new4' className={` rounded-full h-2 w-full ${props.newpassword.length >= 10 ? colorClass1 : 'bg-gray-300'}`}></div>
            </div>
            <Input changeinput={props.changeinput} inputValue={props.confirmPassword} name="ConfirmPass" title="Confirm new password" type="password" placeholder="Please confirm password"/>
            <div className='flex items-center justify-between gap-2 mt-2'>
                <div id='confirm1' className={`rounded-full h-2 w-full ${props.confirmPassword.length >= 3 ? colorClass2 : 'bg-gray-300'}`}></div>
                <div id='confirm2' className={`rounded-full h-2 w-full ${props.confirmPassword.length >= 5 ? colorClass2 : 'bg-gray-300'}`}></div>
                <div id='confirm3' className={`rounded-full h-2 w-full ${props.confirmPassword.length >= 8 ? colorClass2 : 'bg-gray-300'}`}></div>
                <div id='confirm4' className={`rounded-full h-2 w-full ${props.confirmPassword.length >= 10 ? colorClass2 : 'bg-gray-300'}`}></div>
            </div>
        </div>
        <hr className='border border-gray-300 w-full'/>
        <div className='flex items-center justify-between w-full'>
            <Button id="CancelForget" text="Cancel" color="text-black" bgColor="bg-[#white] font-semibold" border="border-gray-400" onClick={handleForget}/>
            <Button id="ChangePass" text="Change password" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleForget} />
        </div>
    </div>
  )
}

export default ForgetPassword