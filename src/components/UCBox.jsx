import React,{ useState,useEffect } from "react";
import UCimg from "../assets/UCimg.jpeg"
import UCBoxButton from "../components/UCBoxButton"

let UCBox=()=>{
    const [count, setCount]=useState(()=>{
        const ucStorage=parseInt(localStorage.getItem('usStorage'));
        return ucStorage? ucStorage:0;
    });

    useEffect(()=>{
        localStorage.setItem("ucStorage",count)
    })

    return(
        <div className={'p-4 flex bg-red-500 gap-2 items-center select-none'}>
            <img src={UCimg} width={30} alt="" />
            {count}
            <UCBoxButton onClick={()=>setCount(count+1)} text="+"></UCBoxButton>
        </div>
    )
}

export default UCBox