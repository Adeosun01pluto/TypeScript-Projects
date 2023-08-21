import React from 'react'
import "./todo.css"
interface TodoItemProps {
    task: string
    onDelete: () => void
}

function TodoItem({task, onDelete} : TodoItemProps) {
  return (
    <div className='todo-item'>
        <div >
            <span className='task-text'>{task}</span>
        </div>
        <button className='delete-button' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TodoItem