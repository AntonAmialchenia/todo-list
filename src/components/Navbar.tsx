import React from "react";
import cls from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>
        <a >Profile</a>
      </div>
      <div className={cls.item}>
        <a >Messages</a>
      </div>
      <div className={cls.item}>
        <a>Mews</a>
      </div>
      <div className={cls.item}>
        <a>Music</a>
      </div>
      <div className={cls.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;