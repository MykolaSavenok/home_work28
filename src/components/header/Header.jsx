import React from 'react';
import MenuItem from './MenuItem.jsx';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <MenuItem title="Головна" />
      <MenuItem title="Контакти" />
      <MenuItem title="Про нас" />
      <MenuItem title="Інше" />
    </header>
  );
};

export default Header;