import React, { useState } from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

export type dialogsProps = {
  dialogs: {
    items: Array<{
      name: string;
      id: string;
    }>;
    messages: Array<{
      message: string;
    }>;
  };
};

const Dialogs = (props: dialogsProps) => {
  let dialogsElement = props.dialogs.items.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));
  let messagesElement = props.dialogs.messages.map((m) => (
    <MessagesItem message={m.message} />
  ));

  const [text, setText] = useState('');

  let addPost = () => {
    console.log(text);
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>{dialogsElement}</div>
      <div className={cls.messages}>{messagesElement}</div>
      <div>
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
