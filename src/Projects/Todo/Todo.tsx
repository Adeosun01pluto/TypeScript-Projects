import React, { useState } from 'react'
import TodoList from './TodoList'
import "./todo.css"

function Todo() {
    const [tasks, setTasks] = useState<string[]>([])
    const handleDeleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    const handleAddTask = (newTask: string) => {
        setTasks([...tasks, newTask]);
      };
  return (
    <div className='todo-container'>
        <h1>To-Do List App</h1>
        <TodoList tasks={tasks} onDelete={handleDeleteTask}/>
        <input type="text"
        className='todo-input'
        placeholder='Enter a new Task'
        onKeyDown={(e)=>{
            if(e.key ===  "Enter"){
                handleAddTask(e.currentTarget.value)
                e.currentTarget.value = ""
            }
        }}
        />
    </div>
  )
}

export default Todo