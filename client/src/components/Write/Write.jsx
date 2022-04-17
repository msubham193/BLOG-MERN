import React from "react";
import "./Write.css";
const Write = () => {
  return (
    <div className="write">
      <img  className="writeImg" src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />
      <form className="writeForm">
        <div className="writeFormGrp">
          <label htmlFor="fileInput">
            <i className=" writeIcon  fa fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            id="writeInput"
            placeholder="Enter Title here..."
            autoFocus="true"
          />
        </div>
        <div className="writeFormGrp">
          <textarea
            placeholder="tell your story..."
            name=""
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">
            Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
