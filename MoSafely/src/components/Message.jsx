import React from "react";
import PropTypes from "prop-types";

const Message = ({ name, message, type, flag }) => {
  const isSent = type === "send";
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: isSent ? "flex-end" : "flex-start",
    marginBottom: "10px",
  };
  const messageStyle = {
        border: `2px solid ${flag ? 'red' : '#5557db'}`,
        borderRadius: '10px',
        padding: '10px',
        maxWidth: '60%',
        wordWrap: 'break-word',
        backgroundColor: flag ? 'white' : '#f9f9f9'
    };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "5px", fontWeight: "bold" }}>{name}</div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["send", "receive"]).isRequired,
  flag: PropTypes.bool.isRequired,
};

export default Message;