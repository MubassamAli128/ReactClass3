import React, { useEffect } from "react";

const Popup = ({ message, type, onClose }) => {
    useEffect(() => {
    const timer = setTimeout(() => {
        onClose();
    }, 3000);
    return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
    <div
        className={`fixed top-0 left-0 right-0 ${bgColor} text-white text-center p-4 z-50`}
    >
        {message}
    </div>
    );
};

export default Popup;
