const InputComponent = ({ onChange1,value }) => {
  return (
    <>
      <h1 className="todoHeading">To Do!</h1>
      <div id="inputContainer">
        <input
          type="text"
          placeholder="enter you todo"
          value={value}
          onChange={onChange1}
        ></input>
      </div>
    </>
  );
};
export default InputComponent;
