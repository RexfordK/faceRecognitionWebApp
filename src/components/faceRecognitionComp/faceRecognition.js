import React from "react";
import "./faceRecognition.css";

const Navigation = ({ imageURL, box }) => {
  return (
    <div className="center">
      <div className="absolute mt2 section">
        <img id="inputImage" width="500px" heigh="auto" src={imageURL} alt="" />
        <div
          className="bounding-box"
          style={{
            top: box.leftCol,
            right: box.topRow,
            bottom: box.rightCol,
            left: box.bottomRow
          }}
        />
      </div>
    </div>
  );
};

export default Navigation;
