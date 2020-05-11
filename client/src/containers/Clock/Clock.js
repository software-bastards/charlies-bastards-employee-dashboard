
import React, {useState,useEffect} from 'react'

import "../../style/clock.scss"
export default function Clock (){
const [time, setTime] = useState(new Date())

const currentTime =()=>{
    setTime(
        new Date()
    )
}

 useEffect(()=>{
    const timer = setTimeout(() => {
        currentTime()
      }, 1000);
      return () => clearTimeout(timer);})

return(
    <div className="clock-component">
        <h1 >{time.toLocaleTimeString()}</h1>
    </div>
)
}