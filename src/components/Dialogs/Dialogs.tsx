import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>
        <DialogItem id='/1' name="Anton" />
        <DialogItem id='/2' name="Andrei" />
        <DialogItem id='/3' name="Sergei" />
        <DialogItem id='/4' name="Petr" />
        <DialogItem id='/5' name="Ivan" />
        <DialogItem id='/6' name="Dima" />
      </div>
      <div className={cls.messages}>
        <MessagesItem text="Hi" />
        <MessagesItem text="Hello!" />
        <MessagesItem text="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
