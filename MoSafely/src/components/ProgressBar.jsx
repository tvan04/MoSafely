import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value, total }) => {
  const percentage = (value / total) * 100;
  const progressStyle = {
    width: `${percentage}%`,
    height: "20px",
    backgroundColor: "#5557db",
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressStyle}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;