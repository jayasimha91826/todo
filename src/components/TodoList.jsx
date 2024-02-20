import React, { useState } from "react";

const TodoList = ({ todoList }) => {
  let updatedArray;
  const [mainList,setMainList]=useState([])
  const [todo, setTodo] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  //const [checkList,setCheckList]=useState([])
 // const [unCheckList,setUnCheckList]=useState([])
  let newCheckedItems = [...checkedItems];

  function handleInput() {
    setMainList((prevValue) => [...prevValue, todoList]);
    setTodo((prevValue) => [...prevValue, todoList]);
    //setTodoList("");
  }

  function handleDelete(index) {
    updatedArray = [...todo.slice(0, index), ...todo.slice(index + 1)];
    setTodo(updatedArray);
    updatedArray = [...mainList.slice(0, index), ...mainList.slice(index + 1)];
    setMainList(updatedArray);
    //handleCheck(index-1)
    //console.log(main);
    newCheckedItems.splice(index, 1); // Remove the item at the deleted index
    setCheckedItems(newCheckedItems);
  }

  function handleCheck(index) {
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  }
  function handleCheckedItems(){
    const filteredIndices =checkedItems.map((item, index) => item ? index : -1).filter(index => index !== -1)
    //console.log(filteredIndices);
    //console.log(...todo);
    const checkItems=filteredIndices.map(i=>todo[i]);
    setMainList(checkItems)
    //(checkList)
   //console.log(mainList);
  }

  function handleUnCheckedItems(){
    const filteredIndices =checkedItems.map((item, index) => !item ? index : -1).filter(index => index !== -1)
    //console.log(filteredIndices);
    //console.log(...todo);
    const checkItems=filteredIndices.map(i=>todo[i]);
    setMainList(checkItems)
    //setMainList(unCheckList)
    //console.log(unCheckList);
  }

  function handleAllItems(){
    setMainList(todo)
  }


  return (
    <>
      <div className="buttonContainer">
        <button className="addmebutton" onClick={handleInput}>
          addme
        </button>
      </div>
      {mainList.length > 0 && ( // Move the condition here
        <div className="listContainer">
          <ul>
            {mainList.map((item, index) => (
              <li
                key={index}
                className={checkedItems[index] ? "checked" : undefined}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheck(index)}
                />
                {item}
                <div>
                  <img
                    onClick={() => handleDelete(index)}
                    className="WrongImg"
                    src={"cross.png"}
                    alt="X"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="buttonContainer">
        <button className="addmebutton" onClick={handleAllItems}>
          AllItems
        </button>
        <button className="addmebutton" onClick={handleCheckedItems}>
          Completed
        </button>
        <button className="addmebutton" onClick={handleUnCheckedItems}>
          Active
        </button>
        </div>
    </>
  );
};

export default TodoList;
