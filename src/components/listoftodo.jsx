//import { useRef } from "react";

import { useState } from "react";

const TodoList = ({ data }) => {
  const [list, setList] = useState(data);
  function handleDelete(indexItem) {
    const updatedArray = list.filter((item, index) => index !== indexItem);
    setList([...updatedArray]);
    console.log(list, indexItem);
  }
  return (
    <div className="listContainer">
      {list.length > 0 ? (
        <ul className="ulListContainer">
          {list.map((item, index) => (
            <li className="ListItem" key={index}>
              <label>
                <input type="checkbox"></input>
                {item}
                <div className="divv">
                  <img
                    onClick={() => handleDelete(index)}
                    className="WrongImg"
                    src="/cross.png"
                    alt="wrong"
                  />
                </div>
              </label>
            </li>
          ))}
        </ul>
      ) : undefined}
    </div>
  );
};

export default TodoList;
