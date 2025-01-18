import React, { useEffect, useState } from 'react'
import './index.css'
import Popup from './components/Popup'
import LoginPage from "./components/LoginPage"
import ForgetPassword from './components/ForgetPassword'
import RegisterPage from './components/RegisterPage'
import VerificationCode from "./components/Verification"


function App() {
  const [newpassword, setnewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [input, setInput]=useState({
    FirstName:"",
    LastName:"",
    Email:"",
    Password:"",
    LoginEmail:"",
    LoginPass:"",
    NewPass:"",
    ConfirmPass:""
  });

  const changeinput=(event)=>{
    const {name, value}=event.target
    if (name === "NewPass") {
      setnewPassword(value);
    } else if (name === "ConfirmPass") {
      setConfirmPassword(value);
    }
    setInput({...input,[name]:value})
  }


  useEffect(()=>{
    console.log(input);
  },[input])



  const [popup, setPopup] = useState(null);
  const showPopup = (message, type) => {
    setPopup({ message, type });
  };


  let currentPage=()=>{
    if(localStorage.getItem("currentPage")=="LoginPage"){
      return <LoginPage onClick={showPopup} changeinput={changeinput} inputValue={input}/>
    }else if(localStorage.getItem('currentPage')=="ForgetPage"){
      return <ForgetPassword onClick={showPopup} changeinput={changeinput} inputValue={input} newpassword={newpassword} confirmPassword={confirmPassword}/>
    }else if(localStorage.getItem('currentPage')=="RegisterPage"){
      return <RegisterPage onClick={showPopup} changeinput={changeinput} inputValue={input}/>
    }else if(localStorage.getItem("currentPage")=="VerifiPage"){
      return <VerificationCode onClick={showPopup} changeinput={changeinput} inputValue={input}/>
    }else{
      return <LoginPage onClick={showPopup} changeinput={changeinput} inputValue={input}/>
    }
  }


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
        {currentPage()}
      </div>
    </>
  )
}

export default App
