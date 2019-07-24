import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className='App'>
      <TodoForm />
      <TodoList />
      <UsersList />
    </div>
  );
}

export default App;
