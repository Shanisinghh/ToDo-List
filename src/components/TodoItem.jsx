import React from "react";

function TodoItem({ todo,togleComplete,deleteTodo,editTodo }) {
  console.log(todo);
  return (
    <>
      <li className={`flex shadow-2xl todoborder justify-center items-center  py-[5px] rounded-md pl-1.5 gap-1.5 my-3.5 text-xl ${todo.completed ? "bg-[#b6d8a7]": "bg-[rgba(218,218,218,0.7)]"} `}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=>togleComplete(todo.id)}
          className=" cursor-pointer"
        />
        <p className={`md:w-[83%] w-[75%]  ${todo.completed ? "line-through": ""} `}>{todo.text}</p>
        <button onClick={()=>{editTodo(todo.text,todo.id)}} className=" cursor-pointer rounded-md hover:bg-[#ffffff] p-1">✏️</button>
        <button onClick={()=>{deleteTodo(todo.id)}} className=" p-1 rounded-md cursor-pointer hover:bg-[#ffffff] ">❌</button>
      </li>
    </>
  );
}

export default TodoItem;
