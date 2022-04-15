import React from "react";
import "./Singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlepostImg"
        />
        <h1 className="singlepostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlepostEdit">
            <i className="fas fa-edit singlepostIcon"></i>
            <i className="fas fa-trash-alt singlepostIcon "></i>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Singlepost;
