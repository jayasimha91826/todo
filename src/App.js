import "./App.css";
import "./todoStyles.css";
import InputComponent from "./components/inputComponent";
import TodoList from "./components/TodoList";
import {  useState } from "react";

function App() {
 // const updatedArray = useRef([]);

 const [todoList, setTodoList] = useState("");

 
 function handleTodo(event) {
   setTodoList(event.target.value);
 }

  return (
    <div className="mainContainer">
      <InputComponent onChange1={handleTodo} value={todoList} />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
