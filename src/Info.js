import React, { useState } from "react";
import "./styles/style.css";
const Info = ({ messages, setMessages }) => {
  return (
    <div className="info">
      {messages.map((messages, index) => {
        return <p key={index}>學習內容是：{messages}</p>;
      })}
    </div>
  );
};

export default Info;
