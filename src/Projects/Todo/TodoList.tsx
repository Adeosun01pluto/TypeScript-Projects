import React from 'react'
import "./todo.css"

import TodoItem from './TodoItem';
interface TodoListProps {
    tasks: string[];
    onDelete : (index: number) => void 
}

function TodoList ({tasks, onDelete} : TodoListProps) {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
    )
}

export default TodoList