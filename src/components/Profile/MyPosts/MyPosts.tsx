import { title } from 'process';
import React, { useState } from 'react';
import { isNullishCoalesce } from 'typescript';
import Post from './Post/Post';

type postsProps = {
  messages: Array<{
    message: string;
    likesCount: number;
    id: string;
  }>;
  addPost: (e:string) => void
};

const MyPosts = (props: postsProps) => {
  let postElement = props.messages.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likesCount} />
  ));



  const [text, setText] = useState('');

  let addPost = () => {
    debugger
    props.addPost(text)
  };
  return (
    <>
      <div>
        <p>My posts</p>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postElement}</div>
    </>
  );
};

export default MyPosts;
