import React, { useEffect, useState } from 'react'

function Count() {
    const [count, setCount]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(prevCount=>prevCount+1);
        },1000);
        console.log("asdasdasas");
    },[])
  return (
    <div>
        <p>Count: {count}</p>
    </div>
  )
}

export default Count