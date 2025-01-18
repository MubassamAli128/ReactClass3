import React, { useState, useRef } from "react";
import Title from "./Title"
import Button from "./Button"
import { IoMdHelpCircleOutline } from "react-icons/io";

const VerificationCode = (props) => {


    const handleVerifi=()=>{

    }



    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        if (value && index < 5) {
        inputsRef.current[index + 1].focus();
        }
    }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text").slice(0, 6);
        if (/^\d{6}$/.test(pastedData)) {
            const newCode = pastedData.split("");
            setCode(newCode);
            inputsRef.current[5].focus();
        }
        e.preventDefault();
    };

    const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
        inputsRef.current[index - 1].focus();
    }
    };

    return (
        <div className='w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4 flex justify-center items-center flex-col'>
            <Title text="Enter verification code"/>
            <p className='text-center text-gray-400'>Create a free profile in less than 5 minutes.</p>
            <div className="flex gap-2 mt-3">
                {code.map((digit, index) => (
                    <input key={index} type="text" maxLength="1" value={digit} ref={(el) => (inputsRef.current[index] = el)} onChange={(e) => handleInputChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} onPaste={handlePaste} className="w-16 h-16 border-2 font-semibold border-[#703bd0] rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                ))}
            </div>
            <hr className="border border-gray-200 w-full mt-5"/>
            <div className='flex items-center justify-between mt-5 w-full'>
                <Button id="NeedHelp" icon={<IoMdHelpCircleOutline/>} text="Need help?" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={handleVerifi} changeinput={props.changeinput} inputValue={props.inputValue}/>
                <Button id="2FA" text="Enable 2FA" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={handleVerifi} />
            </div>
        </div>
    );
};

export default VerificationCode;
