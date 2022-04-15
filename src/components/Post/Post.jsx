import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="Post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id
        sapiente consectetur enim quos ratione illum in consequuntur? Maiores
        eveniet odit, doloribus dicta tempore qui ab vel impedit nam autem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id
        sapiente consectetur enim quos ratione illum in consequuntur? Maiores
        eveniet odit, doloribus dicta tempore qui ab vel impedit nam autem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id
        sapiente consectetur enim quos ratione illum in consequuntur? Maiores
        eveniet odit, doloribus dicta tempore qui ab vel impedit nam autem!
      </p>
    </div>
  );
};

export default Post;
