import React, {useContext, useState} from "react";
import {DataContext} from "./DataProvider"
import "../App.css"

function Footer(){
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)
  
  const newTodoComplete = () =>{
    return todos.filter(todo => todo.complete === false)
  }
  
  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo => todo.complete = !checkAll)
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    setTodos( newTodoComplete)
    setCheckAll(false)
  }
  
  return(
    <>
      {
        todos.length === 0 ? <h3> Great! you done with your list</h3>
        : 
    <div className="todo__section-two">
      <label htmlFor='all'>
       <input 
         type="checkbox" 
         name="all" 
         className="todo__input"
         onChange={handleCheckAll} 
         checked={checkAll}/>
        All
      </label>
      <p>You have {newTodoComplete().length} to do</p>
      <button  onClick={deleteTodo}>Delete</button>
    </div>
      }
    </>
  )
}

export default Footer