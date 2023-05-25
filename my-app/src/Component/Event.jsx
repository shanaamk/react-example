import React from 'react'
import { Button } from 'react-bootstrap';


const Event = () => {

 const clickHandle=()=>{

        console.log("You Clicked the button")

 } 
 const clickDouble=(name)=>{

    alert("Hello"+name)

} 
const inputField=()=>{

    alert("Hello Your entering the text field")

} 
const pressKey=()=>{

    alert("Hello you press the key")

} 
const onOver=()=>{

    alert("Hello you mouse over on the button")

} 


  return (
    <div>
        <h1 className='bg-success text-white'>Learn React Events</h1>
        <Button variant="primary" onClick={clickHandle}>Click me</Button><br/>
        <h2 onDoubleClick={()=>clickDouble("sanitha")}>Double Click</h2>
        <input type='text' onChange={inputField}/><br/><br/>
        <input type='text' onKeyDown={pressKey}/><br/><br/>
        <Button variant="primary" onMouseOver={onOver}>MouseOverMe</Button><br/>
    </div>
  )
}

export default Event