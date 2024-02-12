import "./App.css";
import "./todoStyles.css";
import InputComponent from "./components/inputComponent";
import TodoList from "./components/listoftodo";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoList,setTodoList]=useState("");
  //const[count,setCount]=useState(0);
  function handleTodo(event) {
    setTodoList(event.target.value);
  }
  //console.log("useeffect" + todo);
  //useEffect(() => {
  //console.log("useeffect"+todo);
  //});
  function handleInput(){
    setTodo((prevValue) => [...prevValue, todoList]);
    setTodoList('')
  }

  return (
    <div className="mainContainer">
      <InputComponent onChange1={handleTodo} value={todoList} />
      <div className="buttonContainer"><button className="addmebutton" onClick={handleInput} >addme</button></div>
      <TodoList data={todo} />
    </div>
  );
}

export default App;
