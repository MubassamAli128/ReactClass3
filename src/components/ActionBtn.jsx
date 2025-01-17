import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

function ActionBtn() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-6'>
        <button className='border border-gray-400 rounded-lg py-2 text-xl flex items-center justify-center gap-2 font-semibold w-full'>
            <FcGoogle/>
            <p>Sign in with Google</p>
        </button>
        <button className='border border-gray-400 rounded-lg py-2 text-xl flex items-center justify-center gap-2 font-semibold w-full'>
            <FaXTwitter/>
            <p>Sign in with X (Twitter)</p>
        </button>
        <div className='text-gray-400 items-center font-semibold gap-3 flex justify-between w-full'>
            <hr className=' w-full'/>
            <p>OR</p>
            <hr className=' w-full'/>
        </div>
    </div>
  )
}

export default ActionBtn