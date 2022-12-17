import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './DialogItem.module.css';

interface DialogProps {
  name: string;
  id: string;
}

const DialogItem = (props: DialogProps) => {
  return (
    <div className={cls.dialogs__item + ' ' + cls.active}>
      <NavLink
        className={({ isActive }) =>
          isActive ? cls.link + ' ' + cls.active : cls.link
        }
        to={'/dialogs' + props.id}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
