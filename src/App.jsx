import React, { useEffect, useState } from 'react'
import './index.css'
import LoginPage from "./components/LoginPage"

function App() {

  return (
    <>
      <div className='w-full h-screen bg-[#e7e7e7] flex items-center justify-center'>
      <LoginPage/>
      </div>
    </>
  )
}

export default App
