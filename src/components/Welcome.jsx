import React, {useState} from 'react';
import Title from './Title';
import Button from './Button';
import Image from "../assets/WelcomeImage.png";
import "./style.css";


function Welcome(props) {

    let Fname=localStorage.getItem('FirstName')
    let Lname=localStorage.getItem('LastName')
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleWelcome=(event)=>{
        if(event.target.id=="next"){
            localStorage.setItem('currentPage',"TeamPage")
            window.location.reload();
        }
    }

    const handleMouseMove = (event) => {
        const containerRect = event.currentTarget.getBoundingClientRect();
        setCursorPosition({
            x: event.clientX - containerRect.left + 20,
            y: event.clientY - containerRect.top - 20,
        });
    };



  return (
    <div className='w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="Welcome to Untitled!"/>
        <p className='text-center text-gray-400'>Here are some quick tips to get started.</p>
        <div className='flex items-center justify-center mt-2 relative overflow-hidden' onMouseMove={handleMouseMove}>
            <img src={Image} className='my_cursor rounded-xl w-full' alt="" />
            <div className="absolute text-sm bg-gray-800 text-white p-1 rounded pointer-events-none" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`,}}>{Fname+" "+Lname}</div>
        </div>
        <hr className='border border-gray-300 mt-3'/>
        <div className="flex items-center justify-between mt-5 w-full">
            <Button id="skip" text="skip intro" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleWelcome} inputValue={props.inputValue} />
            <Button id="next" text="Continue" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleWelcome} />
        </div>
    </div>
  )
}

export default Welcome