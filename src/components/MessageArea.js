import React from "react";
import PropTypes from "prop-types";
import "./styles/MessageArea.css";

function MessageArea({ message, type }) {
  return (
    <div className={`MessageArea ${type}`}>
      <p className="MessageArea-text">{message}</p>
    </div>
  );
}

MessageArea.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
};

export default MessageArea;
