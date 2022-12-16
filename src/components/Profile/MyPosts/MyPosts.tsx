import React from "react";
// import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div>
        <p>My posts</p>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post content='Hello!' like={5} />
        <Post content='Poka' like ={4} />
        
      </div>
    </>
  );
};

export default MyPosts;
