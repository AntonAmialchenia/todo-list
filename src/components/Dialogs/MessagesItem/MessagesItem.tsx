import React from 'react';
import cls from './MessagesItem.module.css';

interface MessagesItem {
  text: string;
}

const MessagesItem = (props: MessagesItem) => {
  return <div className={cls.messages__item}>{props.text}</div>;
};

export default MessagesItem;
