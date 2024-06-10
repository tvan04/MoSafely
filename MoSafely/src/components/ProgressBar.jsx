import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value, total }) => {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  const containerStyle = {
    position: "relative",
    width: "85%",
    backgroundColor: "#e0e0df",
    borderRadius: "10px",
    overflow: "hidden",
    height: "20px",
  };

  const progressStyle = {
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: "#5557db",
    transition: "width 0.5s ease-in-out",
  };

  const textStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "grey",
    fontWeight: "bold",
    top: "0",
    left: "0",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="progress-bar-container" style={containerStyle}>
      <div className="progress-bar" style={progressStyle}></div>
      <div className="progress-text" style={textStyle}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;
