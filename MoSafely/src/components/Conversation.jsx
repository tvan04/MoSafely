import React from "react";
import Message from "./Message";
import help from "../assets/help.png";

const Conversation = ({ messages }) => {
  return (
    <div>
      <div className="conversation-header">
        <h3>User 1</h3>
      </div>
      <div className="help-logo">
        <button>
          <img src={help} alt="help" />
        </button>
      </div>
      {messages.map((msg, index) => (
        <Message
          key={index}
          name={msg.sender}
          message={msg.content}
          type={msg.type}
          flag={msg.flag}
        />
      ))}
    </div>
  );
};

export default Conversation;
