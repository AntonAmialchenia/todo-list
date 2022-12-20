import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {
  let PostsData = [
    { id: '1', message: 'Hello!', likesCount: 5 },
    { id: '3', message: 'Hello!', likesCount: 4 },
  ];

  return (
    <>
      <div>
        <p>My posts</p>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message={PostsData[0].message} likes={PostsData[0].likesCount} />
        <Post message={PostsData[1].message} likes={PostsData[1].likesCount} />
      </div>
    </>
  );
};

export default MyPosts;
