import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: '1', message: 'Hello!', likesCount: 5 },
    { id: '3', message: 'Hello!', likesCount: 4 },
  ];

  let postElement = posts.map((p) => (
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
