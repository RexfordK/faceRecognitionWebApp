import React from "react";
import "./imageLinkForm.css";

const ImageLink = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div className="container">
      <div className="ma4 mt0">
        <p className="f3">
          {"This Magic Brain will detect faces in your pictures. Give it a try"}
        </p>
      </div>
      <div className="center image-con pa4 br3 shadow-3">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onBtnSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLink;
