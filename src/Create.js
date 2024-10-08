import React, { useState } from "react";

const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form action="">
      <input onChange={inputHandler} type="text" value={input} />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Create;
