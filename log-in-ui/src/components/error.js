import React from "react";
import "../styling/global.scss";

const error = () => {
  return (
    <div className="error">
      <div className="error-message">
        <h3>Error</h3>
        <p>Something went wrong</p>
      </div>
    </div>
  );
};

export default error