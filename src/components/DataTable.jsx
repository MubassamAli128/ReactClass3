import React from "react";
import data from "../data.json";
import { CiWallet } from "react-icons/ci";

const DataTable = () => {
    let statueColor="";

    return (
    <>
        {data.map((row, index) => (
        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-300" : "bg-white"} rounded-full`}>
            <td><input type="checkbox" /></td>
            <td>
                <p>{row.date}</p>
                <p>{row.time}</p>
            </td>
            <td className="flex items-center justify-center">
                <div className="flex items-center justify-start w-[50%] gap-2 ">
                    <div className="bg-[#f3f4f7] w-[30px] h-[30px] flex items-center justify-center rounded-lg">
                        <CiWallet className="text-[#5874a8]"/>
                    </div>
                    <div>
                        <p>{row.description}</p>
                        <p>Hello</p>
                    </div>
                </div>
            </td>
            <td className={`${row.amount > 0 ? "text-green-500" : "text-black"}`}>
                {row.amount.toFixed(2)}
            </td>
            <td className={`border-gray-500 flex gap-2 border rounded-full items-center justify-center`}>
                <div className={`${row.status=="paid"?"bg-green-500":"bg-blue-500"} rounded-full p-1`}></div>
                <p className={`${row.status=="paid"?"text-green-500":"text-blue-500"}`}>{row.status}</p>
            </td>
        </tr>
        ))}
    </>
  );
};

export default DataTable;
