import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Counter = () =>{
    const [Count, setCount] = useState(0);
    const clickHandle=()=>{
        setCount(Count+1);
    }
    const clickDecrement=()=>{
        if(Count==0){
            return
        }
        setCount(Count-1);
    }
  return (
    <div><h1>Counter is {Count} </h1>
    <Button variant="success" onClick={clickHandle}>+</Button><br/>
    <Button variant="danger" style={{marginTop:'-64px',marginLeft:'90px'}} onClick={clickDecrement}>-</Button><br/>
    </div>
  )
}

export default Counter