import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


// const clickHandle=()=>{

//     console.log("My favourite color is Green")

// } 

const Change = () => {
    const [Colour, setColour] = useState("Red");
    const clickHandle=()=>{
        setColour("Green");
    }
  return (
    <div><h1 className='bg-warning text-white'>UseState Hook in React</h1>
    <h1>My favourite color is{Colour}</h1>
    <Button variant="primary" onClick={clickHandle}>Change color</Button><br/>
    </div>
  )
}

export default Change