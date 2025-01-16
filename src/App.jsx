import React, { useEffect, useState } from 'react'
import TotalAmount from "./components/TotalAmount"
import Dates from './components/Dates'
import { FaSearch } from "react-icons/fa";
import DataTable from "./components/DataTable"
import data from "./data.json";
import './index.css'

function App() {



  const [input,setInput]=useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const onChange=(event)=>{
    const value = event.target.value;
    setInput(value);
  }


  let credit=0;
  let debit=0;
  filteredData.map((row)=>{
    let Amount=parseInt(row.amount)
    Amount>=0?credit=Amount+credit:debit=debit+Amount;
  })


  useEffect(()=>{
    if (startDate && endDate) {
      const filtered = filteredData.filter((item) => {
        const itemDate = new Date(item.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return itemDate >= start && itemDate <= end;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(filteredData);
    }
  },[startDate, endDate])

  useEffect(()=>{
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase()) || item.status.toLowerCase().includes(input.toLowerCase())|| item.amount.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  },[input]);



  return (
    <>
      <div className='rounded-2xl bg-gray-200 p-4 flex flex-col gap-3'>
        <TotalAmount credit={credit} debit={debit} />
        <hr className='w-full border-gray-500'/>
        <div className='flex items-center justify-between'>
          <Dates onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
          <div className='flex items-center justify-between bg-white py-1 px-2 rounded-full border border-gray-300'>
            <FaSearch/>
            <input onChange={onChange} value={input} type="text" name="" id="" placeholder='Search' className='bg-transparent pl-2 outline-none' />
          </div>
          <button className='bg-gray-300 rounded-full px-7 py-1'>Export</button>
        </div>
        <table className='w-full text-center border-separate border-spacing-0'>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>
                <h2>Date</h2>
              </th>
              <th>
                <h2>Counterparty and description</h2>
              </th>
              <th>
                <h2>Amount ($)</h2>
              </th>
              <th>
                <h2>Status</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <DataTable json={data} filteredData={filteredData}/>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
