import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={cls.content}>
      <div className={cls.content__image}>
        <img
          src="https://greenviewchurch.co.uk/wp-content/uploads/2019/05/Busyness-title-image-1600x400.png"
          alt="content"
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
