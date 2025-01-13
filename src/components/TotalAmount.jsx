import React from 'react'

function TotalAmount() {
  return (
    <div className='flex items-center gap-4'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl text-green-400 font-bold'>{`$12,300.00`}</h1>
            <p className='text-gray-500 text-xs'>Circulation on credit</p>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl text-red-400 font-bold'>{`$6,160.00`}</h1>
            <p className='text-gray-500 text-xs'>Circulation on debit</p>
        </div>
    </div>
  )
}

export default TotalAmount