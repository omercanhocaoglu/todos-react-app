import React from 'react'

import { useEffect, useState } from 'react';





function Clock() {
  
const [useTime, setUseTime] = useState();

useEffect( () => {
    setInterval( () => {
        const date = new Date().toLocaleTimeString();

        setUseTime(date)
    },1000 )
} );
  
const calender = new Date().toDateString(); 
  
  
    return (
    <div> 
    <p> {useTime} {calender} </p>
    
    
    </div>

    
    )
};

export default Clock;