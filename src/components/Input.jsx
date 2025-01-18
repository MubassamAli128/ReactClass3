import React from 'react'
function Input(props) {

  return (
    <>
    <div>
        <p className='font-semibold'>{props.title}*</p>
        <input type={props.type} value={props.inputValue} name={props.name} onChange={props.changeinput} id={props.name} className='border border-gray-400 rounded-xl w-full h-10 px-5 placeholder:text-gray-400' placeholder={props.placeholder} required/>
    </div>
    </>
  )
}

export default Input