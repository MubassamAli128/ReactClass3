import React, { useState, useEffect, useRef } from "react";
import Title from "./Title";
import Button from "./Button";
import { IoMdHelpCircleOutline } from "react-icons/io";

const VerificationCode = (props) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [currentInput, setCurrentInput] = useState(0);
    const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                setCurrentInput(index + 1);
            }
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text").slice(0, 6);
        console.log(pastedData);
        if (/^\d{6}$/.test(pastedData)) {
            setCode(pastedData.split(""));
            setCurrentInput(5);
        }
        e.preventDefault();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            setCurrentInput(index - 1);
        }
    };

    useEffect(() => {
        if (inputRefs.current.length > 0) {
            inputRefs.current[currentInput].focus();
        }
    }, [currentInput, inputRefs]);

  return (
    <div className="w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4 flex justify-center items-center flex-col">
        <Title text="Enter verification code" />
        <p className="text-center text-gray-400">Create a free profile in less than 5 minutes.</p>
        <div className="flex gap-2 mt-3">
            {code.map((digit, index) => (
                <input key={index} ref={(el) => (inputRefs.current[index] = el)} type="text" maxLength="1" value={digit} onChange={(e) => handleInputChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} onPaste={handlePaste} className="w-16 h-16 border-2 font-semibold border-[#703bd0] rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            ))}
        </div>
        <hr className="border border-gray-200 w-full mt-5" />
        <div className="flex items-center justify-between mt-5 w-full">
            <Button id="NeedHelp" icon={<IoMdHelpCircleOutline />} text="Need help?" bgColor="bg-transparent font-semibold" border="border-gray-400" onClick={props.changeinput} inputValue={props.inputValue} />
            <Button id="2FA" text="Enable 2FA" color="text-white" bgColor="bg-[#8359fd] font-semibold" border="border-gray-400" onClick={""} />
        </div>
    </div>
  );
};

export default VerificationCode;