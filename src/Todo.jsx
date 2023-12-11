import React, { useState } from 'react'
import './Todo.css'
import B from './images/bin.png'

const Todo = () => {
    const [input, setInput] = useState([{
      id: 1,
      uservalue: "I want to read",
    }])

    const [userInput, setUserInput] = useState()

    const getUserInputValue = (e)=>{
      const newUserInputValue = e.target.value
      setUserInput(newUserInputValue)
      // console.log(newUserInputValue)
    }

    const AddUp =()=>{
      const newList ={
        id: input.length,
        uservalue: userInput,
        BG: "red"
      }
      setInput([...input, newList])
    }

    const Del =(id)=>{
      const removeList = input.filter((el)=> el.id != id)
      setInput(removeList)
      // console.log(id)
    }


  return (
    <div></div>
    // <div className='mainWrap'>
    //   <div className="inputsCon">

    //     <div className="up">
    //         <input type="text" placeholder='' onChange={getUserInputValue}/>
    //         <button onClick={AddUp}>Add</button>
            
    //     </div>

    //     <div className="down">

    //         {
    //           input.map((props)=>(
    //             <div className="downCon" key={props.id} style={{backgroundColor: props.BG}}> 
    //                 <p>{props.uservalue}</p>
    //               <div className="rmv">
    //                 <img src={B}  alt="" onClick={()=> Del(props.id)}/>
    //               </div>
    //             </div>
    //           ))
    //         }

    //     </div>

    //   </div>
    // </div>
  )
}

export default Todo
