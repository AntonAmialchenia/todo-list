import React from "react";
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
      <div>
        My posts
        <div>Mew post</div>
      </div>
      <div>
        <div className={`${cls.item} ${cls.active}`}>post 1</div>
        <div className={cls.item}>post 2</div>
        <div className={cls.item}>post 3</div>
        <div className={cls.item}>post 4</div>
      </div>
    </div>
  );
};

export default Profile;
