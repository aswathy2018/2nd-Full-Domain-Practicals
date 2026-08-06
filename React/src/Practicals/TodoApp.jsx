import React from 'react'
import { useState } from 'react'

const TodoApp = () => {
    let [task, setTask] = useState("")
    let [todos, setTodo] = useState([])
    let [editTodo, setEditTodo] = useState(null)

    function handleAdd(){
        if(editTodo!==null){
            const updated = [...todos]
            updated[editTodo] = task
            setTodo(updated)
            setEditTodo(null)
        }else{
            setTodo([...todos, task])
        }
        setTask("")
    }

    function handleDelete(index){
        const update = todos.filter((_, i)=>i!==index)
        setTodo(update)
    }

    function handleEdit(index){
        setTask(todos[index])
        setEditTodo(index)
    }
  return (
    <div>
        <h2>Todo App</h2>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>

        <button onClick={handleAdd}>
            {editTodo!==null?"Update" : "Add"}
        </button>

        {todos.map((todo, index)=>(
            <div key={index}>
                {todo}
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default TodoApp