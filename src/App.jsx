import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (newTask.trim() === "") return alert("Please Enter A Task");
    const newTodo = {
      id: new Date(),
      text: newTask,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setNewTask("");

    //  console.log(todos)
  }

  function editTodo(text, id) {
    console.log(text);
    setNewTask(text);
    deleteTodo(id);
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }
  function togleComplete(id) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    < >
      <div className="flex justify-center   ">
        <div className="flex flex-col myborder bg-[#f5ebeb]  md:p-5 p-3 mt-10 md:mt-6 md:w-[55%] w-[95%] md:max-h-[555px] max-h-[655px] rounded-xl">
          <Header />
          <div className="mt-5 mb-4  ">
            <input
              type="text"
              value={newTask}
              className="outline-none todoborder w-[80%]  px-3 h-[45px] text-xl font-semibold rounded-l-md bg-white"
              placeholder="Add New Task"
              onChange={(e) => setNewTask(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && addTodo()}
            />
            <button
              onClick={addTodo}
              className="outline-none w-[20%] todoborder px-3 h-[46px] hover:bg-green-800 text-gray-200 text-xl font-semibold rounded-r-md bg-green-700"
            >
              Add
            </button>
          </div>
          <TodoList
            todos={todos}
            togleComplete={togleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
      <footer class="text-center  absolute bottom-0 mt-1.5 w-[100vw] items-center flex h-9 justify-center bg-black text-white md:text-md text-xs">
        <p class=" ">
          {" "}
          © Copyright All rights reserved. Developed by Shani Babu
        </p>
      </footer>
    </>
  );
}

export default App;
