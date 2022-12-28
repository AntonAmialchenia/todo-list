import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

type AppProps = {
  data: {
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
};

function App(props: AppProps) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs dialogs={props.data.dialogs} />}
          />
          <Route
            path="/profile"
            element={<Profile myposts={props.data.myposts} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
