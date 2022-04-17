import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebaritem">
          <span className="sidebarTitle">About Me</span>
          <img src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, atque.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Movie</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarSocial">
            <i className="fa-brands fa-facebook sidebarIcon"></i>
            <i className="fa-brands fa-twitter sidebarIcon"></i>
            <i className="fa-brands fa-instagram-square sidebarIcon"></i>
            <i className="fa-brands fa-github sidebarIcon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
