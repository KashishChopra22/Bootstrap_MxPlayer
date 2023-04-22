import React, { useState } from 'react';
import MainStdCard from './components/MainStdCard';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
export default function App() {

  const [todo, setTodo]= useState(['item1', 'item2'])
  const [Editing, isEditing] = useState(false);

  return (
    <>
      {/* <MainStdCard /> */}
      <TodoInput todo={todo} setTodo={setTodo} />
<TodoList todo={todo} setTodo={setTodo} isEditing={isEditing} Editing={Editing} />
    </>
  );
}
