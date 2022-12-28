import React, {useState} from 'react';
import cls from './MessagesItem.module.css';

interface MessagesItem {
  message: string;
}


const MessagesItem = (props: MessagesItem) => {

  

  return (
    <>
      <div className={cls.messages__item}>{props.message}</div>;
      
    </>
  );
};

export default MessagesItem;
