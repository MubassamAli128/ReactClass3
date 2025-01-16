import React from 'react'

function Dates({ onStartDateChange, onEndDateChange }) {
  return (
    <div className='flex items-center justify-between gap-2'>
        <input type="date" name="" id="startDate" onChange={(e) => onStartDateChange(e.target.value)} className='bg-gray-300 py-1 px-2 rounded-full'/>
        -
        <input type="date" name="" id="endDate" onChange={(e) => onEndDateChange(e.target.value)} className='bg-gray-300 py-1 px-2 rounded-full'/>
    </div>
  )
}

export default Dates