import React from 'react'
import TotalAmount from "./components/TotalAmount"
import Dates from './components/Dates'
import { FaSearch } from "react-icons/fa";
import DataTable from "./components/DataTable"
import './index.css'
function App() {

  return (
    <>
      <div className='rounded-2xl bg-gray-200 p-4 flex flex-col gap-3'>
        <TotalAmount/>
        <hr className='w-full border-gray-500'/>
        <div className='flex items-center justify-between'>
          <Dates/>
          <div className='flex items-center justify-between bg-white py-1 px-2 rounded-full border border-gray-300'>
            <FaSearch/>
            <input type="text" name="" id="" placeholder='Search' className='bg-transparent pl-2 outline-none' />
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
            <DataTable/>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
