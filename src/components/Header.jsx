import React from "react";
function Header() {
  return (
    <>
      <header className="flex gap-2 items-center justify-center">
        <img src="\src\assets\todo_logo.png" className="h-13" alt="" />
        <h1 className="text-3xl md:text-4xl my-2.5 font-bold">My To-Do List</h1>
      </header>
    </>
  );
}

export default Header;
