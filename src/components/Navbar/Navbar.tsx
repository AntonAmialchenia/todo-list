import React from 'react';
import cls from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// const setActive = ({isActive}) => isActive ? {cls.link + ' ' + cls.avtive} : cls.link

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? cls.link + ' ' + cls.active : cls.link
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/dialogs" className={({ isActive }) =>
            isActive ? cls.link + ' ' + cls.active : cls.link
          }>
          Messages
        </NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="" className={({ isActive }) =>
            isActive ? cls.link + ' ' + cls.active : cls.link
          }>
          News
        </NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="" className={({ isActive }) =>
            isActive ? cls.link + ' ' + cls.active : cls.link
          }>
          Music
        </NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="" className={({ isActive }) =>
            isActive ? cls.link + ' ' + cls.active : cls.link
          }>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
