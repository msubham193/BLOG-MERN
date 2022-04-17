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
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author: <b>Subham </b>
          </span>
          <span className="singlepostDate ">1 hour ago</span>
        </div>
        <p className='singlepostDesc'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          consequuntur molestias et! Animi qui, nulla earum doloremque facilis
          quae! Asperiores, cupiditate. Asperiores laborum necessitatibus autem
          perferendis quis, dicta possimus. Quas eius tenetur deserunt libero
          dolor expedita. Nostrum voluptatum quia consequatur.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
