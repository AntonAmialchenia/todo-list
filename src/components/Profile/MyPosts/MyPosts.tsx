import React from 'react';
import Data from '../../Data/data';
import Post from './Post/Post';

const MyPosts = () => {
 

  let postElement = Data.myposts.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  return (
    <>
      <div>
        <p>My posts</p>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>{postElement}</div>
    </>
  );
};

export default MyPosts;
