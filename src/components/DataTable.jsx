import React from "react";
import data from "../data.json";
import { CiWallet } from "react-icons/ci";
import { RiArrowLeftUpLine,RiArrowRightDownLine } from "react-icons/ri";
import { FiArrowDownRight } from "react-icons/fi";

const DataTable = () => {
    return (
    <>
        {data.map((row, index) => (
        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-300" : "bg-white"} h-[60px]`}>
            <td><input type="checkbox" /></td>
            <td>
                <p className="font-semibold">{row.date}</p>
                <p className="text-gray-500">{row.time}</p>
            </td>
            <td className="flex items-center justify-center">
                <div className="flex items-center justify-start w-[50%] gap-2 mt-1">
                    <div className="relative bg-[#dddedf] w-[30px] h-[30px] flex items-center justify-center rounded-lg">
                        <CiWallet className="text-[#5874a8]"/>
                        {row.amount > 0 ? <RiArrowLeftUpLine className="absolute w-3 h-3 bottom-0 right-0 bg-green-500 rounded-full text-white"/> : <RiArrowRightDownLine className="absolute w-3 h-3 bottom-0 right-0 bg-gray-400 rounded-full text-white"/>}
                    </div>
                    <div className="text-start">
                        <p className="font-semibold">{row.title}</p>
                        <p className="text-gray-500">{row.description}</p>
                    </div>
                </div>
            </td>
            <td className={`${row.amount > 0 ? "text-green-500" : "text-black"}`}>
                {row.amount.toFixed(2)}
            </td>
            <td className={`border-gray-500 flex gap-2 border rounded-full items-center justify-center w-[200px] `}>
                <div className={`${row.status=="paid"?"bg-green-500":"bg-blue-500"} rounded-full p-1`}></div>
                <p className={`${row.status=="paid"?"text-green-500":"text-blue-500"}`}>{row.status}</p>
            </td>
        </tr>
        ))}
    </>
  );
};

export default DataTable;
