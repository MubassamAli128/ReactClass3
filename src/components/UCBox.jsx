import React,{ useState,useEffect } from "react";
import Ucimg from "../assets/Ucimg"

function UCBox(){
    const [count, setCount]=useState(()=>{
        const ucStorage=parseInt(localStorage.getItem('usStorage'));
        return ucStorage? ucStorage:0;
    });

    useEffect(()=>{
        localStorage.setItem("ucStorage",count)
    })

    return(
        <div className={'p-4 flex gap-2 items-center select-none'}>
            <img src="" width={30} alt="" />
            {count}
            <UCBoxButton onClick={()=>setCount(count+1)} text="+"></UCBoxButton>
        </div>
    )
}
