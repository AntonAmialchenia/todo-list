import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

import Data from '../Data/data'



const Dialogs = () => {
let dialogsElement = Data.dialogs.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
let messagesElement = Data.dialogs.messages.map((m) => <MessagesItem message={m.message} />);

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>{dialogsElement}</div>
      <div className={cls.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
