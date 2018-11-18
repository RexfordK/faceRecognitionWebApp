import React from "react";
import "./faceRecognition.css";

const Navigation = ({ imageURL }) => {
  return (
    <div className="center section">
      <img src={imageURL} alt="" />
    </div>
  );
};

export default Navigation;
