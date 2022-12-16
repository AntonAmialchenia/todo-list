import React from "react";
import cls from "./Post.module.css";

interface PostProps {
  content: string
  like: number
}

const Post = (props:PostProps) => {
  return (
    <>
      <div className={cls.post__image}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
          alt=""
        />
      </div>
      <div className={`${cls.item} ${cls.active}`}>{props.content}</div>
      <span>like {props.like}</span>
    </>
  );
};

export default Post;
