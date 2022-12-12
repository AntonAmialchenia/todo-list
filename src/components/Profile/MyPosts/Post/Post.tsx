import React from "react";
import cls from "./Post.module.css";

const Post = () => {
  return (
    <>
      <div className={cls.post__image}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
          alt=""
        />
      </div>
      <div className={`${cls.item} ${cls.active}`}>post 1</div>
    </>
  );
};

export default Post;
