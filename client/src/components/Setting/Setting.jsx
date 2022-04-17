import React from "react";
import "./Setting.css";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingForm">
          <label> Profile Picture</label>
          <div className="settingPP">
            <img src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <label htmlFor="fileInput">
              <i className="  settingPPIcon  fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display:'none'}} />
          </div>
          <label >User Name</label>
          <input type="text" placeholder="Enter your username" />
          <label >Email</label>
          <input type="text" placeholder="Enter your email" />
          <label >Password</label>
            <input type="password" placeholder="Enter your password" />
            <button className='settingSubmit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
