import React from 'react'
import OR from './OR';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

function ActionBtn() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-6'>
        <button className='border border-gray-400 rounded-lg py-2 text-xl flex items-center justify-center gap-2 font-semibold w-full'>
            <FcGoogle/>
            <p className='text-lg'>Sign in with Google</p>
        </button>
        <button className='border border-gray-400 rounded-lg py-2 text-xl flex items-center justify-center gap-2 font-semibold w-full'>
            <FaXTwitter/>
            <p className='text-lg'>Sign in with X (Twitter)</p>
        </button>
        <OR/>
    </div>
  )
}

export default ActionBtn