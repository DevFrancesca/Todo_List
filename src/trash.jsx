import React, { useState } from 'react'
import "./UseState.css"

const UseState = () => {

    const [data, setData] = useState([
        {
            id: 1,
            username: "eze",
            UserText: "i love code",
            UserDate: new Date().toDateString(),
        
        },
        {
            id: 2,
            username: "Francesca",
            UserText: "Good Girl",
            UserDate: new Date().toDateString(),
        
        },
        {
            id: 3,
            username: "Victor",
            UserText: "i love code",
            UserDate: new Date().toDateString(),
        
        },
        {
            id: 4,
            username: "Christiana",
            UserText: "The girl is Good!",
            UserDate: new Date().toDateString(),
        
        },
        {
            id: 5,
            username: "Grace",
            UserText: "God is Good!",
            UserDate: new Date().toDateString(),
        
        },
    ])

    const[userInputUserName, setUserInputUserName] = useState()
    const [userInputText, setUserInputText] = useState()

    const getUserInputValue = (e) =>{
        const newUserInputValue = e.target.value
        setUserInputUserName(newUserInputValue)
    }
    const getUserTextInputValue = (e) =>{
        const newUserTextInputValue = e.target.value
        setUserInputText(newUserTextInputValue)
    }


    const AddText = () => {
        const items = {
            id: data.length,
            username: userInputUserName,
            UserText: userInputText,
            UserDate: new Date().toDateString(),
        }

        setData([...data, items])     

    }

    const Delete = (id) => {
        const removeItem = data.filter((el) => el.id != id)
        setData(removeItem)
        console.log(id)
    }


  return (
    <div className='MainBody'>
        <div className='WrapperHeader'>
            <input type="text" name="" id="" placeholder='UserName' onChange={getUserInputValue}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='User Text' onChange={getUserTextInputValue}></textarea>
            <button onClick={AddText}>Add Text</button>
        </div>

        <div className='WrapperBody'>
            <div className='CardWrapperBody'>
                {
                    data.map((props)=>(
                        <div className='UserCard' key={props.id}>
                        <div className='HeaderCard'>  
                            <h3>{props.username}</h3>
                            <div className='Delete' onClick={()=>Delete(props.id)}>x</div>
                        </div>
        
                        <div className='UserText'>
                           {props.UserText}
                        </div>
                        <span style={{color: "white", display: "flex", justifyContent: "flex-end", paddingRight: "10px"}}>{props.UserDate}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default UseState
