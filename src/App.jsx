import React, { useEffect, useState } from 'react'
import './index.css'
import Popup from './components/Popup'
import LoginPage from "./components/LoginPage"

function App() {

  const [popup, setPopup] = useState(null);
  const showPopup = (message, type) => {
    setPopup({ message, type });
  };


  return (
    <>
      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}
      <div className='w-full h-screen bg-[#e7e7e7] flex items-center justify-center'>
        <LoginPage onClick={showPopup}/>
      </div>
    </>
  )
}

export default App
