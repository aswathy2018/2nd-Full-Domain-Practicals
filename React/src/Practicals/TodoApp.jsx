import React, { useState } from 'react'

const TodoApp = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(null)

    function handleSubmit(){
        if(task.trim() === ""){
            return
        }

        if(editId!==null){
            const updateTodo = todos.map((todo) =>{
                if(todo.id==editId){
                    return {...todo, task: task}
                }
                return todo
            })
            setTodos(updateTodo)
            setEditId(null)
        }else{
            const newTodo = {
                id: Date.now(),
                task: task
            }

            setTodos([...todos, newTodo])
        }
        setTask("")
    }

    function handleDelete(id){
        const filterTodos = todos.filter((todo)=>todo.id!==id)
        setTodos(filterTodos)
    }

    function handleEdit(todo){
        setTask(todo.task)
        setEditId(todo.id)
    }

  return (
    <div>
        <h2>Todo App</h2>

        <input type="text" placeholder='Enter Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleSubmit}>{editId!==null?"Update":"Add"}</button>

        {todos.map((todo)=>(
            <div key = {todo.id}>
                <span>{todo.task}</span>
                <button onClick={()=>handleEdit(todo)}>Edit</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default TodoApp