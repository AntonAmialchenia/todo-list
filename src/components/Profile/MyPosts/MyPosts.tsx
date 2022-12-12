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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default MyPosts;
