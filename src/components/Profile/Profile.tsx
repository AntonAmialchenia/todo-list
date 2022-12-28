import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../Data/data';

type postsProfile = {
  myposts: {
    posts: Array<{
      message: string;
      likesCount: number;
      id: string;
    }>;
  };
  addPost: (e:string) => void
};

const Profile = (props: postsProfile) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts addPost={addPost} messages={props.myposts.posts} />
    </div>
  );
};

export default Profile;
