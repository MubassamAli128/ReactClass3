import React from 'react'

function TotalAmount(props) {


  return (
    <div className='flex items-center gap-4'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl text-green-400 font-bold'>{`$${props.credit}`}</h1>
            <p className='text-gray-500 text-xs'>Circulation on credit</p>
        </div>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl text-red-400 font-bold'>{`$${props.debit}`}</h1>
            <p className='text-gray-500 text-xs'>Circulation on debit</p>
        </div>
    </div>
  )
}

export default TotalAmount