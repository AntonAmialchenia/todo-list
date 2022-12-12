import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cls.content}>
      <div className={cls.content__image}>
        <img
          src="https://greenviewchurch.co.uk/wp-content/uploads/2019/05/Busyness-title-image-1600x400.png"
          alt="content"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
