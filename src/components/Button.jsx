import React from 'react'

function Button(props) {
  // console.log(props.id);
  return (
    <button id={props.id} onClick={props.onClick} className={`flex items-center justify-center gap-2 ${props.bgColor} border ${props.border} px-2 py-1 rounded-lg ${props.color}`}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button