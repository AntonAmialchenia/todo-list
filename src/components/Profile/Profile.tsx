import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type postsProfile = {
  myposts: {
    posts: Array<{
      message: string;
      likesCount: number;
      id: string;
    }>;
  };
};

const Profile = (props: postsProfile) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts messages={props.myposts.posts} />
    </div>
  );
};

export default Profile;
