import React from 'react'

function Input(props) {
  return (
    <>
    <div>
        <p htmlFor="" className='font-semibold'>{props.title}*</p>
        <input type={props.type} name="" id="" className='border border-gray-400 rounded-xl w-full h-10 pl-5 placeholder:text-gray-400' placeholder={props.placeholder} />
    </div>
    </>
  )
}

export default Input