import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "../../components";
import classes from './Navbar.module.scss'; // Импортируем модульные стили

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  // Функция для управления блюром
  const handleToggleBlur = (isOpen) => {
    setIsBlurred(isOpen);
  };

  return (
    <div className={`${classes.navbar} ${isBlurred ? classes.blurred : ''}`}>
      <Header onToggleBlur={handleToggleBlur} />
      <main className={classes['main-content']}>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
