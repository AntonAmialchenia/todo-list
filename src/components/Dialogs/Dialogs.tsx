import React from 'react';
import cls from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs__items}>
        <div className={cls.dialogs__item + ' ' + cls.active}>Anton</div>
        <div className={cls.dialogs__item}>Andrei</div>
        <div className={cls.dialogs__item}>Sergei</div>
        <div className={cls.dialogs__item}>Petr</div>
        <div className={cls.dialogs__item}>Ivan</div>
        <div className={cls.dialogs__item}>Dima</div>
      </div>
      <div className={cls.messages}>
        <div className={cls.messages__item}>Hi</div>
        <div className={cls.messages__item}>Hello!</div>
        <div className={cls.messages__item}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
