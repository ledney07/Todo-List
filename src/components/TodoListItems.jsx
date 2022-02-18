import React,{useState} from "react"
import "../App.css"


const TodoListItems = ({todo, id, checkComplete, handleEditTodos}) => {
  
const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () =>{
    setOnEdit(true)
  }
  
  const handleSave =id =>{
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue, id)
    }else{
      setEditValue(todo.name)
    }
  }
  
  if(onEdit){
    return (
    <li key={id}>
        <input 
          type="text" 
          className="todo__input-act" 
          id='editValue' 
          value={editValue} 
          name="editValue" 
          placeholder="Edit "
          onChange={(e) => setEditValue(e.target.value.toLowerCase())}
          />
         <button onClick={() => handleSave(id)}>Save</button>
    </li>
  )
  }else {
    return (
    <li key={id}>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input type="checkbox" id={id} checked={todo.complete}
              onChange={() => checkComplete(id)}/>
          {todo.name}
        </label>
         <button disabled={todo.complete} onClick={handleOnEdit}>edit</button>
    </li>
  )
  }
}


export default TodoListItems
 