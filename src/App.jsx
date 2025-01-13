import React from 'react'
import TotalAmount from "./components/TotalAmount"
import Dates from './components/Dates'
import './index.css'
function App() {

  return (
    <>
      <div className='rounded-2xl bg-gray-200 p-4 flex flex-col gap-3'>
        <TotalAmount/>
        <hr className='w-full border-gray-500'/>
        <div className='flex items-center justify-between'>
          <Dates/>
        </div>
      </div>
    </>
  )
}

export default App
