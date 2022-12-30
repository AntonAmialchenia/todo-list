import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './components/Data/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface Data  {
  
    dialogs: {
      items: Array<{
        name: string;
        id: string;
      }>;
      messages: Array<{
        message: string;
      }>;
    };
    myposts: {
      posts: Array<{
        message: string;
        likesCount: number;
        id: string;
      }>;
    };
  
  
};

export let rerenderEntireTree = (Data: Data) => {
  root.render(
    <BrowserRouter>
      <App  data={Data} addPost={addPost} />
    </BrowserRouter>
  );
};