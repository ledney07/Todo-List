import React, {useContext} from "react";
import TodoListItems from "./TodoListItems"
import {DataContext} from "./DataProvider"
import "../App.css"
import { v4 as uuidv4 } from 'uuid';



const TodoList = () => {
const [todos, setTodos] = useContext(DataContext)
const id = uuidv4()
  console.log(id)
  
  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) =>{
      if(index === id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }

  
  const handleEditTodos = (editValue, id) =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index) =>{
      if(index === id){
        todo.name = editValue
      }
    })
    setTodos(newTodos)
  }
  
  return (
    <div className="todo__section-one">
        <ul>
          {
            todos.map((todo, id) =>(
              <TodoListItems 
                todo={todo} 
                id={id} 
                checkComplete={switchComplete}
                handleEditTodos={handleEditTodos}/>
            ))
          }
        </ul>
      </div>
  )
}

export default TodoList