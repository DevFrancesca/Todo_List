import React, { useReducer } from 'react'
import './Todo3.css'
import B from './images/bin.png'
import E from './images/editIcon.png'


const intialState = {
  list : [],
  check : false,
  inputData : ""

}
const Reducer = (state,action)=>{
  if(action.type === "Add"){
    const Addtasks = {
      id : state.list.length,
      check: false,
      text: state.inputData
    }
    return{...state, list: [...state.list,Addtasks],inputData : ''}
  }

  if(action.type === "SaveEdit"){
    const updatedList = state.list.map((item) =>
    item.id === state.EditId
      ? { ...item, text: state.inputData }
      : item
  );

  return {
    ...state,
    list: updatedList,
    inputData: '',
    EditId: null,
    isEditing: false,
  };
  }

  if(action.type === "Delete"){
    const Delete = [...state.list.filter((el)=> el.id !== action.payload)]
    return{...state, list : Delete}
  }
  


  if (action.type === "Edit") {
    const editedItem = {
      ...state.list.find((el) => el.id === action.payload),
    };
    return {
      ...state,
      inputData: editedItem.text,
      EditId: editedItem.id,
      isEditing: true,
    };
  }



  if(action.type === "Checks"){
    const styleItem = state.list.map((checkbox)=>
      checkbox.id === action.payload ? {...checkbox,
        check: !checkbox.check,
        complete: checkbox.check ? "none" : "line-through",
        completed: checkbox.check ? "pink" : "turquoise",} : checkbox
    )
    return{
      ...state, 
      list: styleItem,
    }
  }

  

  if (action.type === "ONCHANGE") {
    const inputsval = action.payload.target.value;
    return {
      ...state,
      inputData: inputsval,
    };
  }
  return state;


  


}

const Todo3 = () => {
  const [state, dispatch] = useReducer(Reducer, intialState)

  const HandleChange = (e)=>{
    dispatch({type: "ONCHANGE", payload: e})
  }
  
  
  const AddTask = ()=>{
  if(state.isEditing){
    dispatch({type : "SaveEdit"})
  }else{
    dispatch({type : "Add" })
  }
   
  }
  
  const DeleteTasks = (id)=>{
    dispatch({type : "Delete", payload:id})
  }
  
  const EditTasks = (id)=>{
    dispatch({type : 'Edit', payload: id})
  }
  
   console.log(state)
  
  const HandleCheckBox = (id)=>{
    dispatch({type: "Checks", payload: id })
  }
  
  return (
    <div className='mainWrap'>
    <div className="inputsCon">

      <div className="up">
          <input type="text" placeholder='Type here' value={state.inputData}  onChange={HandleChange}/>
          <button onClick={AddTask}>{state.isEditing ? "SAVE" : "Add"}</button>  
      </div>

      <div className="down">
      {state.list.map((props) =>(
        <div className="downCon" key={props.id} style={{textDecoration: props.complete,background:props.completed}}> 
        <input type="checkbox" name=''checked={props.check} onChange={()=> HandleCheckBox(props.id)}/>
        {state.isEditing && state.editedItem === props.id ? ( <input type='text' value={state.inputData} onChange={HandleChange} /> )
         :
         ( <p>{props.text}</p>)
        }
           <div className="rmv">
              <img src={E} alt="" onClick={()=>EditTasks(props.id)}/>
              <img src={B}  alt="" onClick={()=> DeleteTasks(props.id)}/>
           </div>
        </div>
      ))}
      </div>

    </div>
  </div>
  )
}

export default Todo3
