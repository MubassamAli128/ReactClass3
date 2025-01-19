import React from 'react'
import Title from './Title'
import OR from './OR'
import Button from './Button'
import { MdOutlineCopyAll } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Image from "../assets/QR.png"
import "./style.css"

function QRCode(props) {

    const handleQRCode=(event)=>{
        if(event.target.id=="Copy"){
            navigator.clipboard.writeText("https://mubassamali128.github.io/My_Portfolio/");
            props.onClick("Copy Done!","success")
        }
    }


  return (
    <div className='w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="2FA setup"/>
        <p className='text-center text-gray-400'>Scan the image below with your 2FA authenticator.</p>
        <div className='relative w-full flex flex-col items-center justify-center mt-2 overflow-hidden h-[180px]'>
            <div className=' p-1 relative'>
                <div className='absolute w-8 h-8 border-2 border-t-[#7b35fb] border-l-[#7b35fb] border-b-transparent border-r-transparent top-0 left-0'></div>
                <div className='absolute w-8 h-8 border-2 border-t-[#7b35fb] border-r-[#7b35fb] border-b-transparent border-l-transparent top-0 right-0'></div>
                <div className='absolute w-8 h-8 border-2 border-l-[#7b35fb] border-b-[#7b35fb] border-r-transparent border-t-transparent bottom-0 left-0'></div>
                <div className='absolute w-8 h-8 border-2 border-r-[#7b35fb] border-b-[#7b35fb] border-l-transparent border-t-transparent bottom-0 right-0'></div>
                <img src={Image} className='w-[150px]' alt="" />
            </div>
            <div className='animation absolute -bottom-1 border-2 border-transparent border-r-transparent border-l-transparent border-t-[#7b35fb] w-[50%] flex justify-center'>
                <div className='bg-gradient-to-b from-[#7b35fb] to-transparent p-4 w-[90%] h-full'></div>
            </div>
        </div>
        <OR/>
        <p className='text-center text-gray-400'>Manually enter the code below.</p>
        <div className='flex items-center gap-3 justify-between mt-5'>
            <Button id="Code" text="LKS7-28HS-J910-HAXX-72LA" bgColor="bg-[#f4f3ff] font-semibold text-[#7e51d0]" border="border-[#7e51d0]" onClick={handleQRCode} changeinput={props.changeinput} inputValue={props.inputValue}/>
            <Button id="Copy" icon={<MdOutlineCopyAll/>} text="Copy" color="text-gray-700" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleQRCode} />
        </div>
        <hr className='border border-gray-300 mt-4'/>
        <div className="flex items-center justify-between mt-5 w-full">
            <Button id="NeedHelp" icon={<IoMdHelpCircleOutline />} text="Need help?" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleQRCode} inputValue={props.inputValue} />
            <Button id="Continue" text="Continue" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleQRCode} />
        </div>

    </div>
  )
}

export default QRCode