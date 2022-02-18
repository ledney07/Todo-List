
import React,{useState, useContext, useRef, useEffect} from "react";
import {DataContext} from "./DataProvider"
import "../App.css"

const FormInput = () => {
  const [todos, setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState('')
  const todoInput = useRef()
  
  const addTodo = (e) =>{
    e.preventDefault()
    setTodos([...todos, {name: todoName, completed: false}])
    setTodoName('')
    todoInput.current.focus()
  }

  useEffect(() =>{
    todoInput.current.focus()
  },[])
  
  return(
    <>
      <form className="todo__form" autoComplete="off" onSubmit={addTodo}>
        <input className="todo__input" 
          type="text"   
          placeholder="Enter to do" 
          required 
          value={todoName}
          ref={todoInput}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}/>
        <button className="todo__btn">Create</button>
      </form>
    </>
  )
}

export default FormInput