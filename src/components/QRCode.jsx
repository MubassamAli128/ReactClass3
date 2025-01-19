import React from 'react'
import Title from './Title'
import OR from './OR'
import Button from './Button'
import { MdOutlineCopyAll } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import QRImage from "../assets/"

function QRCode(props) {

    const handleQRCode=(event)=>{

    }


  return (
    <div className='w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
        <Title text="2FA setup"/>
        <p className='text-center text-gray-400'>Scan the image below with your 2FA authenticator.</p>
        <div>
            <img src="./" alt="" />
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