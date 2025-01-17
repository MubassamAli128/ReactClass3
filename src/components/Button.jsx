import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className={`flex items-center justify-center gap-2 ${props.bgColor} border ${props.border} px-2 py-1 rounded-lg`}>
        {props.icon}
        <p className={`${props.color}`}>{props.text}</p>
    </button>
  )
}

export default Button