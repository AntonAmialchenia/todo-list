import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

let dialogs = [
  { id: '1', name: 'Anton' },
  { id: '3', name: 'Andrei' },
  { id: '3', name: 'Sergei' },
  { id: '4', name: 'Petr' },
  { id: '5', name: 'Ivan' },
  { id: '6', name: 'Dima' },
];

let messages = [
  { id: '1', message: 'Hi' },
  { id: '3', message: 'Hello!' },
  { id: '3', message: 'Yo' },
  { id: '4', message: 'Excuse me' },
];

let dialogsElement = dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
let messagesElement = messages.map((m) => <MessagesItem message={m.message} />);

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>{dialogsElement}</div>
      <div className={cls.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
