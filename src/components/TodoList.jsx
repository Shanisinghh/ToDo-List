import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos ,togleComplete,deleteTodo,editTodo}) {
  
  return (
    <>
    <ul className='scrollbar overflow-y-scroll  scroll-smooth'>
      {todos.map((todo) =>(
        <TodoItem todo ={todo}
         togleComplete = {togleComplete}
         deleteTodo = {deleteTodo}
         editTodo = {editTodo}
        />
      ))}
    </ul>
    
    </>
  )
}

export default TodoList