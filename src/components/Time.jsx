import React, { useEffect, useState } from 'react'

function Time() {
  const [time, setTime]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);
    console.log("Time getting change");

    return ()=>clearInterval(interval)
  },[time])
  return (
    <div>
      <p>Time : {time}</p>
      </div>
  )
}

export default Time