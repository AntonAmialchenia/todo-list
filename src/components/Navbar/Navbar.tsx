import React from "react";
import cls from "./Navbar.module.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>
        <Link to='/profile' className={cls.link}>Profile</Link>
        {/* <a className={cls.link} href="/profile">Profile</a> */}
      </div>
      <div className={cls.item}>
      <Link to='/dialogs' className={cls.link}>Messages</Link>
        {/* <a className={cls.link} href="/dialogs">Messages</a> */}
      </div>
      <div className={cls.item}>
        <a className={cls.link}>Mews</a>
      </div>
      <div className={cls.item}>
        <a className={cls.link}>Music</a>
      </div>
      <div className={cls.item}>
        <a className={cls.link}>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
