import React from "react";
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <img
        
        src="https://www.adobe.com/express/create/logo/media_1e1e8e617773d822b0477c5993a127835664eb0fe.jpeg?width=400&format=jpeg&optimize=medium"
        alt="Logo"
      />
    </header>
  );
};

export default Header;
