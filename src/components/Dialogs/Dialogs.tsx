import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

let DialogsData = [
  { id: '1', name: 'Anton' },
  { id: '3', name: 'Andrei' },
  { id: '3', name: 'Sergei' },
  { id: '4', name: 'Petr' },
  { id: '5', name: 'Ivan' },
  { id: '6', name: 'Dima' },
];

let MessagesData = [
  { id: '1', message: 'Hi' },
  { id: '3', message: 'Hello!' },
  { id: '3', message: 'Yo' },
  { id: '4', message: 'Excuse me' },
];

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>
        <DialogItem id={DialogsData[0].id} name={DialogsData[0].name} />
        <DialogItem id={DialogsData[1].id} name={DialogsData[1].name} />
        <DialogItem id={DialogsData[2].id} name={DialogsData[2].name} />
        <DialogItem id={DialogsData[3].id} name={DialogsData[3].name} />
        <DialogItem id={DialogsData[4].id} name={DialogsData[4].name} />
        <DialogItem id={DialogsData[5].id} name={DialogsData[5].name} />
      </div>
      <div className={cls.messages}>
        <MessagesItem message={MessagesData[0].message} />
        <MessagesItem message={MessagesData[1].message} />
        <MessagesItem message={MessagesData[2].message} />
        <MessagesItem message={MessagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
